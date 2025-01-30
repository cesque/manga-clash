<script lang="ts">
    import type { TournamentRound } from '../types/Tournament'
    import Manga from './Manga.svelte';
    import type { Manga as MangaType } from '../types/Manga';
    import getRoundWinner from '../utils/Tournament/getRoundWinner'

    interface Props {
        round: TournamentRound,
        isUltimateWinner: boolean,
    }

    const { round, isUltimateWinner }: Props = $props()

    const winner: MangaType | undefined = getRoundWinner(round)
</script>

<div class={['round', { isUltimateWinner }]}>
    <div class="contents">
        {#if winner}
            <Manga manga={winner} />
        {:else}
            <div class="blank"></div>
        {/if}
    </div>
</div>

<style>
    .round {
        height: 60px;
        position: relative;
    }

    .contents {
        position: absolute;
        top: 50%;
        left: 50%;
        translate: -50% -50%;
        transition: scale 0.3s ease;

        .isUltimateWinner & {
            scale: 1.5;
        }

        &:hover {
            scale: 2;
            z-index: 1;
        }
    }
    
    .blank {
        aspect-ratio: 9 / 13;
        height: 100px;

        position: relative;

        border-radius: 10px;
        overflow: hidden;
        /* border: 2px solid rgb(0, 153, 255); */

        background: linear-gradient(to top right, rgb(29, 51, 66), rgb(31, 76, 106));
        box-shadow: 0 0 5px 0 var(--color-cyan) inset;
    }
</style>