<script lang="ts">
    import { onMount } from 'svelte';
    import type { Manga } from '../types/Manga'

    type Props = {
        a: Manga,
        b: Manga,
    }

    const { a, b }: Props = $props()

    let element: HTMLDivElement

    let isVisible = $state(false)

    onMount(() => {
        const options = {
            threshold: 1.0,
            once: true,
        }

        const observer = new IntersectionObserver((entries, observer) => {
            for (const entry of entries) {
                if (entry.isIntersecting) isVisible = true
            }
        }, options);

        observer.observe(element)

        return () => {
            observer.disconnect()
        }
    })
</script>

<div class={['clash-result', { isVisible }]} bind:this={element}>
    <div class={['manga', { isLoser: a.isEliminated, isWinner: !a.isEliminated }]}>
        <img class="cover" src="/manga/revealed/{a.image}" alt="a manga" />
    </div>
    <div class={['manga', { isLoser: b.isEliminated, isWinner: !b.isEliminated }]}>
        <img class="cover" src="/manga/revealed/{b.image}" alt="a manga" />
    </div>
</div>

<style>
    .clash-result {
        display: flex;
        justify-content: center;
        gap: var(--spacing-medium);
        margin-bottom: var(--spacing-xlarge);
        background: radial-gradient(100% 20px, transparent);

        perspective: 800px;

        &:after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 180%;
            height: 20px;
            background: radial-gradient(ellipse 100% 100%, var(--color-cyan), transparent 50%);
            background-size: 100% 100%;
            z-index: -1;
            opacity: 0.5;
            filter: blur(4px);

            @media (min-width: 600px) {
                width: 120%;
            }
        }

        @media (min-width: 600px) {
            gap: var(--spacing-large);
        }
    }

    .manga {
        aspect-ratio: 9 / 13;
        height: 200px;

        position: relative;

        border-radius: 10px;
        overflow: hidden;
        border: 2px solid var(--color-cyan);
        box-shadow: 0 0 10px 0 var(--color-cyan);

        background: var(--color-cyan);

        flex-shrink: 0;

        @media (min-width: 600px) {
            height: 300px;
        }
    }

    .manga:nth-child(1) {
        transform: rotateY(25deg);
    }

    .manga:nth-child(2) {
        transform: rotateY(-25deg);
    }

    .manga.isWinner {
        scale: 0.95;
        transition: scale 1s ease;

        &:after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
            mix-blend-mode: lighten;
            opacity: 0;
            background: linear-gradient(
                160deg,
                transparent 0%,
                transparent 13%,
                gold 15%,
                gold 18%,
                transparent 20%,
                transparent 24%,
                gold 26%,
                gold 32%,
                transparent 34%,
                transparent 36%,
                gold 38%,
                transparent 40%,
                transparent 58%,
                gold 60%,
                gold 70%,
                transparent 72%,
                transparent 75%,
                gold 77%,
                gold 78%,
                transparent 80%
            );
            transition: opacity 1s ease;

            .isVisible & {
                opacity: 0.2;
            }
        }

        .isVisible & {
            scale: 1.05;
        }
    }

    .manga.isLoser {
        box-shadow: none;
        border: none;
        filter: grayscale(0) brightness(1) contrast(1);
        scale: 0.85;
        transition: filter 1s ease, scale 1s ease;

        .isVisible & {
            filter: grayscale(0.8) brightness(0.5) contrast(0.8);
            scale: 0.8;
        }
    }

    img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }
</style>