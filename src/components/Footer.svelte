<div class="footer">
    <p>© 2025</p>
    <p>website by <a href="https//cesque.com">@cesque</a></p>
</div>

<style>
    .footer {
        margin-top: 75vh;
        padding: var(--spacing-medium);
        margin-left: auto;
        margin-right: auto;
        color: white;
        opacity: 0.3;

        display: flex;
        flex-direction: column;
        align-items: center;
        z-index: 2;
        position: relative;
        font-weight: 300;
        font-size: 0.8rem;

        transition: opacity 0.3s ease;

        &:hover {
            opacity: 1;
        }
    }

    p {
        margin: 0;
    }

    a {
        color: var(--color-cyan);
        text-shadow: 0 0 5px var(--color-cyan);
        text-decoration: none;
    }
</style>