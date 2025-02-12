<script lang="ts">
    import type { Manga } from "../../types/Manga";

    type Props = {
        manga: Manga,
        side: string,
        revealed: boolean,
    };

    const { manga, side, revealed }: Props = $props();
    const { name, image, silhouette, isRevealed, isEliminated } = manga;
</script>

<div class={['container', side, { revealed }]}>
    <div class="inner">
        <div class="image-container">
            <img class="cover" src="/manga/revealed/{image}" alt="a manga" />
            <div class="silhouette-base"></div>
            <img
                class="silhouette"
                src="/manga/silhouette/{silhouette}"
                alt="a manga"
            />

            <div class="noise">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="1000px" height="100%">

                    <filter id='n' x='0' y='0'>
                        <feTurbulence
                        type='fractalNoise'
                        baseFrequency='0.01'
                        stitchTiles='stitch'/>
                        <feColorMatrix type="saturate" values="0"/>
                        <feColorMatrix type="contast" values="10"/>
                    </filter>

                    <rect width="1000px" height="100%" fill='#fff'/>
                    <rect width="1000px" height="100%" filter="url(#n)" opacity='1'/>
                </svg>
            </div>
        </div>
        <h2>{name}</h2>
    </div>
</div>

<style>
    .container {
        --bg: #002e3f;
        position: relative;

        display: flex;
        flex-direction: column;
    }

    .left {
        transform: rotateY(10deg);
        --alternate: alternate;
        --rotate: 30deg;
    }

    .right {
        transform: rotateY(-10deg);
        --alternate: alternate-reverse;
        --rotate: -30deg;
    }

    .inner {
        animation: card-rotate 2s alternate infinite ease-in-out;
    }

    .image-container {
        overflow: hidden;
        position: relative;

        &:after {
            position: absolute;
            display: block;
            content: '';
            transform: translateZ(10px);
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            box-shadow: 0 0 30px 0 inset var(--color-magenta);
        }
    }

    .silhouette-base {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--color-cyan);
        display: block;
        backface-visibility: hidden;

        transform: translateZ(3px);
    }

    .cover {
        position: relative;
        transform: translateZ(2px);
        backface-visibility: hidden;
    }

    .silhouette {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0.5;
        /* z-index: 7; */
        transform: translateZ(7px);
        
        filter: blur(10px);
        mix-blend-mode: multiply;
        backface-visibility: hidden;
    }

    .noise {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        transform: translateZ(3px);
        overflow: hidden;
        mix-blend-mode: multiply;
        opacity: 0.5;

        svg {
            position: absolute;
            top: 0;
            left: 0;
            animation: move-noise 2s var(--alternate) infinite ease-in-out;
        }
    }

    @keyframes card-rotate {
        from { transform: rotateY(0deg); }
        to { transform: rotateY(var(--rotate)); }
    }

    @keyframes card-spin {
        from { transform: rotateY(-20deg); }
        to { transform: rotateY(1080deg); }
    }

    @keyframes motion-blur {
        0% { filter: blur(0); }
        25% { filter: blur(2px) brightness(3); }
        75% { filter: blur(2px) brightness(3); }
        100% { filter: blur(0); }
    }

    @keyframes move-noise {
        from { translate: -50% 0; }
        to { translate: 0 0; }
    }

    h2 {
        color: var(--color-cyan);
        text-align: center;
        font-size: 2rem;
        filter: blur(20px);
        text-shadow: 0 0 10px var(--color-cyan);
    }

    .container.revealed {
        animation: motion-blur 2s ease-in-out;

        .inner {
            animation: card-spin 2s ease-in-out;
        }

        .silhouette {
            transition: opacity 2.5s ease-in;
            opacity: 0;
        }

        .silhouette-base {
            transition: opacity 2.5s ease-in;
            opacity: 0;
        }

        .noise {
            transition: opacity 2.5s ease-in;
            opacity: 0.3;

            svg {
                animation: none;
            }
        }

        h2 {
            filter: blur(0);
            transition: filter 2s ease;
        }
    }
</style>