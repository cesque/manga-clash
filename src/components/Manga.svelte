<script lang="ts">
    import type { Manga } from '../types/Manga'

    type Props = {
        manga: Manga,
    }

    const { manga }: Props = $props()
    const {
        name,
        image,
        silhouette,
        isRevealed,
        isEliminated,
    } = manga
</script>

<article class={{isRevealed, isEliminated}}>
    {#if isRevealed}
        <img class="cover" src="/manga/revealed/{image}" alt="a manga" />
    {:else}
        <img class="silhouette" src="/manga/silhouette/{silhouette}" alt="a manga" />
    {/if}
</article>

<style>
    article {
        aspect-ratio: 9 / 13;
        height: 100px;

        position: relative;

        border-radius: 10px;
        overflow: hidden;
        border: 2px solid var(--color-cyan);
        box-shadow: 0 0 10px 0 var(--color-cyan);

        background: var(--color-cyan);

        flex-shrink: 0;

        &:after {
            content: '';
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 200;
            background: var(--color-cyan);
            filter: brightness(0.5) saturate(1.5);
            mix-blend-mode: lighten;

            opacity: 1;
            transition: opacity 0.2s ease;
        }

        &.isEliminated {
            box-shadow: none;
            border: none;
        }
    }

    article.isRevealed:after {
        display: none;
    }

    img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;

        .isEliminated & {
            filter: grayscale(1) brightness(0.5);
        }
    }

    .silhouette {
        opacity: 1;
        transition: opacity 0.2s ease;
        mix-blend-mode: darken;
        filter: blur(2px);
    }

</style>