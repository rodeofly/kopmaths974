import React, {
  Children,
  createContext,
  isValidElement,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState
} from "react";

const RouterContext = createContext(null);

function getCurrentPathname() {
  if (typeof window === "undefined" || !window.location) {
    return "/";
  }
  return window.location.pathname || "/";
}

function normalizePath(path) {
  if (!path) return "/";
  const prefixed = path.startsWith("/") ? path : `/${path}`;
  const cleaned = prefixed.replace(/\/+$/, "");
  return cleaned || "/";
}

function matchPath(pattern, pathname, end = true) {
  const normalizedPattern = normalizePath(pattern);
  const normalizedPathname = normalizePath(pathname);

  if (end) {
    return normalizedPattern === normalizedPathname;
  }

  if (normalizedPathname === normalizedPattern) {
    return true;
  }

  return normalizedPathname.startsWith(
    normalizedPattern.endsWith("/") ? normalizedPattern : `${normalizedPattern}/`
  );
}

function useRouterContext() {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error("Router components must be rendered within a <BrowserRouter>.");
  }
  return context;
}

export function BrowserRouter({ children }) {
  const [pathname, setPathname] = useState(getCurrentPathname);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handlePopState = () => {
      setPathname(getCurrentPathname());
    };

    window.addEventListener("popstate", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  const navigate = useCallback((to, options = {}) => {
    if (typeof window === "undefined") return;

    const target = normalizePath(to);
    const method = options.replace ? "replaceState" : "pushState";
    window.history[method]({}, "", target);
    setPathname(target);
  }, []);

  const value = useMemo(
    () => ({
      pathname,
      navigate
    }),
    [pathname, navigate]
  );

  return React.createElement(RouterContext.Provider, { value }, children);
}

export function Routes({ children }) {
  const { pathname } = useRouterContext();
  const routes = Children.toArray(children);

  for (const route of routes) {
    if (!isValidElement(route)) continue;
    const { path, element, end = true } = route.props || {};
    if (!path) continue;
    if (matchPath(path, pathname, end)) {
      return element ?? null;
    }
  }

  return null;
}

export function Route() {
  return null;
}

export function NavLink({
  to,
  end = false,
  className,
  children,
  onClick,
  ...rest
}) {
  const { pathname, navigate } = useRouterContext();
  const target = normalizePath(to);
  const isActive = matchPath(target, pathname, end);
  const info = useMemo(
    () => ({
      isActive,
      isPending: false
    }),
    [isActive]
  );

  const resolvedClassName = typeof className === "function" ? className(info) : className;
  const classNames = [resolvedClassName, isActive ? "active" : ""].filter(Boolean).join(" ");
  const content = typeof children === "function" ? children(info) : children;

  const handleClick = (event) => {
    if (onClick) {
      onClick(event);
    }
    if (event.defaultPrevented) return;
    event.preventDefault();
    navigate(target);
  };

  return React.createElement(
    "a",
    {
      ...rest,
      href: target,
      className: classNames || undefined,
      "aria-current": isActive ? "page" : undefined,
      onClick: handleClick
    },
    content
  );
}

export function useLocation() {
  const { pathname } = useRouterContext();
  return useMemo(() => ({ pathname }), [pathname]);
}

export function useNavigate() {
  const { navigate } = useRouterContext();
  return navigate;
}

export default {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  useLocation,
  useNavigate
};
