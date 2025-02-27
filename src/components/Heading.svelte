<h2><slot /></h2>

<style>
    h2 {
        margin-top: var(--spacing-large);
        margin-bottom: var(--spacing-large);
        text-align: center;
        padding: var(--spacing-large);
        font-size: 2rem;
        color: white;
        font-weight: normal;
        text-shadow: 0 0 10px var(--color-cyan);
        letter-spacing: 0.1ch;

        text-transform: uppercase;

        @media (min-width: 600px) {
            font-size: 3rem;
        }
    }
</style>