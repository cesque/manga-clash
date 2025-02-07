<header>
    <video src="/hero.mp4" autoplay muted loop></video>
</header>

<style>
    header {
        position: relative;

        display: flex;
        justify-content: center;
    }

    header:before {
        content: '';
        display: block;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 40px;
        background: linear-gradient(
            to top,
            var(--color-bg),
            transparent
        );
        z-index: 1;

        @media (min-width: 600px) {
            display: block;
            height: 200px;
        }
    }

    /* header:after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 40px;
        background: linear-gradient(
            to bottom,
            var(--color-bg),
            transparent
        );
        z-index: 1;

        @media (min-width: 600px) {
            height: 200px;
        }
    } */

    video {
        mix-blend-mode: lighten;
        width: 100%;
        max-width: 1600px;
    }
</style>