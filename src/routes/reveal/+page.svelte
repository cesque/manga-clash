<script lang="ts">
    import RevealManga from '../../components/reveal/RevealManga.svelte';
    import mangas from '../../data/mangas'

    const manga1 = mangas[6]
    const manga2 = mangas[7]

    let revealed = $state(false)
</script>

<div class="container" onclick={() => revealed = true}>
    <RevealManga manga={manga1} side="left" {revealed}/>
    <RevealManga manga={manga2} side="right" {revealed} />
</div>

<style>
    .container {
        display: flex;
        gap: var(--spacing-large);
        width: 100dvw;
        height: 100dvh;
        justify-content: center;
        align-items: center;

        perspective: 800px;

        &:after {
            position: absolute;
            content: '';
            display: block;
            left: 50%;
            height: 200px;
            width: 100%;
            max-width: 1000px;
            bottom: 0;
            translate: -50% 0;
            /* rotate: 45deg; */
            background: var(--color-cyan);
            opacity: 0.1;
            border-radius: 100vw;
            filter: blur(40px);
            z-index: -1;
        }
    }
</style>