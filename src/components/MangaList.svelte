<script lang="ts">
    import mangas from '../data/mangas'
    import Heading from './Heading.svelte'
    import Manga from './Manga.svelte'
</script>

<Heading>Mangas</Heading>

<ul class="container">
    {#each mangas as manga}
        <li class={['row', { revealed: manga.isRevealed, eliminated: manga.isEliminated }]}>
            <Manga manga={manga} />
            {#if manga.isRevealed}
                <p class="name">{manga.name}</p>
            {:else}
                <p class="name hidden">???</p>
            {/if}
        </li>
    {/each}
</ul>

<style>
    .container {
        list-style: none;
        margin: 0;
        padding: 0;

        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: var(--spacing-small) var(--spacing-medium);

        width: 100%;
        max-width: 900px;
        margin: 0 auto;

        margin-bottom: 25dvh;
    }

    .row {
        margin: 0;
        padding: 0;

        display: flex;
        align-items: center;
        gap: var(--spacing-medium);
        padding: var(--spacing-small);
        border-radius: 15px;
        background: rgba(255, 255, 255, 0.1);
        background: linear-gradient(
            to top right,
            rgba(255, 255, 255, 0.1),
            rgba(255, 255, 255, 0.03)
        );
        color: white;

        &.revealed {
            background: rgba(0, 183, 255, 0.1);
            background: linear-gradient(
                to top right,
                rgba(0, 183, 255, 0.1),
                rgba(0, 183, 255, 0.3)
            );
        }

        &.eliminated {
            background: rgba(255, 0, 128, 0.1);
            background: linear-gradient(
                to top right,
                rgba(255, 0, 128, 0.3),
                rgba(255, 0, 128, 0.1)
            );
            color: var(--color-magenta);
        }
    }

    .name {
        flex-grow: 1;
        font-size: 1.5rem;
        text-align: center;
    }

    .hidden {
        opacity: 0.5;
        letter-spacing: 0.3ch;
        filter: blur(2px);
    }
</style>