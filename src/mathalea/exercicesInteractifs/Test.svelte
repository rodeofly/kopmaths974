<script>
  import seedrandom from 'seedrandom'
  import { afterUpdate, onMount, tick } from 'svelte'
  import HeaderExerciceVueProf from '../components/shared/exercice/shared/headerExerciceVueProf/HeaderExerciceVueProf.svelte'
  import { countMathField } from '../components/shared/exercice/countMathField'
  import {
    mathaleaFormatExercice,
    mathaleaHandleExerciceSimple,
    mathaleaHandleParamOfOneExercice,
    mathaleaLoadExerciceFromUuid,
    mathaleaRenderDiv,
  } from '../lib/mathalea'
  import {
    exerciceInteractif,
    prepareExerciceCliqueFigure,
  } from '../lib/interactif/gestionInteractif'
  import { loadMathLive } from '../modules/loaders'

  const TEST_UUID = 'd5e44'

  export let indiceExercice
  export let indiceLastExercice

  let exercise = null
  let questions = []
  let consigne = ''
  let introduction = ''
  let interactifReady = false
  let isInteractif = false
  let isVisible = true
  let isLoaded = false
  let divExercice
  let divScore
  let buttonScore
  let numberOfAnswerFields = 0

  let headerExerciceProps = {
    title: '',
    id: TEST_UUID,
    indiceExercice,
    indiceLastExercice,
    isInteractif: false,
    settingsReady: false,
    interactifReady: false,
    randomReady: true,
    correctionReady: false,
    isHidable: false,
    isDeletable: false,
    isSortable: false,
  }

  onMount(async () => {
    exercise = await mathaleaLoadExerciceFromUuid(TEST_UUID)
    const params = { uuid: TEST_UUID }
    if (exercise?.interactifReady) {
      params.interactif = '1'
    }
    mathaleaHandleParamOfOneExercice(exercise, params)
    interactifReady = Boolean(exercise?.interactifReady)
    isInteractif = interactifReady
    headerExerciceProps.interactifReady = interactifReady
    headerExerciceProps.isInteractif = isInteractif
    await updateExercise(true)
    isLoaded = true
  })

  afterUpdate(async () => {
    if (exercise && divExercice) {
      mathaleaRenderDiv(divExercice)
      if (isInteractif) {
        await loadMathLive()
        if (exercise.interactifType === 'cliqueFigure') {
          prepareExerciceCliqueFigure(exercise)
        }
      }
    }
  })

  async function updateExercise(changeSeed = false) {
    if (!exercise) return
    exercise.numeroExercice = indiceExercice
    if (changeSeed && typeof exercise.applyNewSeed === 'function') {
      exercise.applyNewSeed()
    }
    if (exercise.seed === undefined && typeof exercise.applyNewSeed === 'function') {
      exercise.applyNewSeed()
    }
    exercise.interactif = isInteractif
    seedrandom(exercise.seed, { global: true })
    if (exercise.typeExercice === 'simple') {
      mathaleaHandleExerciceSimple(exercise, isInteractif)
    } else if (typeof exercise.nouvelleVersionWrapper === 'function') {
      exercise.nouvelleVersionWrapper(indiceExercice)
    } else if (typeof exercise.nouvelleVersion === 'function') {
      exercise.nouvelleVersion(indiceExercice)
    }
    questions = [...exercise.listeQuestions]
    consigne = exercise.consigne
    introduction = exercise.introduction
    numberOfAnswerFields = countMathField(exercise)
    headerExerciceProps = {
      ...headerExerciceProps,
      title: exercise.titre,
      id: exercise.id ?? TEST_UUID,
      indiceExercice,
      indiceLastExercice,
      isInteractif,
      interactifReady,
    }
    await tick()
    if (divScore) divScore.innerHTML = ''
  }

  async function handleNewData() {
    await updateExercise(true)
  }

  async function handleInteractif(event) {
    if (!interactifReady) return
    isInteractif = event.detail.isInteractif
    await updateExercise()
  }

  function verifExercice() {
    if (!exercise || !divScore || !buttonScore) return
    exerciceInteractif(exercise, divScore, buttonScore)
  }

  $: {
    headerExerciceProps = {
      ...headerExerciceProps,
      indiceExercice,
      indiceLastExercice,
    }
  }
</script>

{#if isLoaded && exercise}
  <HeaderExerciceVueProf
    {indiceExercice}
    {indiceLastExercice}
    {...headerExerciceProps}
    on:clickNewData={handleNewData}
    on:clickInteractif={handleInteractif}
  />

  {#if isVisible}
    <section class="mt-4 space-y-4" bind:this={divExercice}>
      {#if consigne}
        <p class="text-coopmaths-corpus dark:text-coopmathsdark-corpus">
          {@html mathaleaFormatExercice(consigne)}
        </p>
      {/if}
      {#if introduction}
        <p class="text-coopmaths-corpus dark:text-coopmathsdark-corpus">
          {@html mathaleaFormatExercice(introduction)}
        </p>
      {/if}
      <ul class="list-decimal list-inside space-y-3">
        {#each questions as question, index}
          <li id={`test-question-${index}`} class="text-coopmaths-corpus dark:text-coopmathsdark-corpus">
            {@html mathaleaFormatExercice(question)}
          </li>
        {/each}
      </ul>
      {#if isInteractif && interactifReady}
        <button
          class="inline-flex px-4 py-2 bg-coopmaths-action dark:bg-coopmathsdark-action text-coopmaths-canvas dark:text-coopmathsdark-canvas text-sm font-semibold rounded shadow"
          type="button"
          on:click={verifExercice}
          bind:this={buttonScore}
        >
          Vérifier {numberOfAnswerFields > 1 ? 'les réponses' : 'la réponse'}
        </button>
      {/if}
      <div bind:this={divScore}></div>
    </section>
  {/if}
{:else}
  <p class="mt-4">Chargement...</p>
{/if}
