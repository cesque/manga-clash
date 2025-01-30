<script lang="ts">
    import logo from '$lib/assets/pdA logomark.svg?raw'
</script>

<nav>
    <div class="extra-text">an event by</div>
    <div class="icon-container">{@html logo}</div>
    <h1>pretty darn <b>Awesome</b></h1>
</nav>

<style>
    nav {
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: var(--spacing-xsmall) var(--spacing-medium);
        gap: var(--spacing-small);
    }

    .icon-container {
        height: 40px;
    }

    h1 {
        margin: 0;
        font-weight: normal;
        font-size: 1.3rem;
        -webkit-text-box-trim: trim-both;
        line-height: 1;
        translate: 0 -3px;

        b {
            color: var(--color-cyan);
        }
    }

    .extra-text {
        font-size: 1.3rem;
        line-height: 1;
        translate: 0 -3px;
        color: var(--color-cyan);
        opacity: 0.5;
    }
</style>