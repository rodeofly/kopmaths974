import type {
  AnchorHTMLAttributes,
  ReactNode
} from "react";

type NavLinkRenderProps = {
  isActive: boolean;
  isPending: boolean;
};

type ClassNameValue =
  | string
  | undefined
  | null
  | ((props: NavLinkRenderProps) => string | undefined | null);

type ChildrenValue =
  | ReactNode
  | ((props: NavLinkRenderProps) => ReactNode);

export interface BrowserRouterProps {
  children?: ReactNode;
}

export function BrowserRouter(props: BrowserRouterProps): JSX.Element;

export interface RouteProps {
  path: string;
  element: ReactNode;
  end?: boolean;
}

export interface RoutesProps {
  children?: ReactNode;
}

export function Routes(props: RoutesProps): ReactNode | null;
export function Route(props: RouteProps): null;

export interface NavLinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "children" | "className"> {
  to: string;
  end?: boolean;
  className?: ClassNameValue;
  children?: ChildrenValue;
}

export function NavLink(props: NavLinkProps): JSX.Element;

export function useLocation(): { pathname: string };
export function useNavigate(): (to: string, options?: { replace?: boolean }) => void;
