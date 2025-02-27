<script lang="ts">
    import ClashResult from '../components/ClashResult.svelte';
    import Footer from '../components/Footer.svelte'
    import Header from '../components/Header.svelte'
    import Heading from '../components/Heading.svelte'
    import Hero from '../components/Hero.svelte'
    import MangaList from '../components/MangaList.svelte'
    import Tournament from '../components/Tournament.svelte'

    import tournament from '../data/tournament'
    import mangas from '../data/mangas'
</script>

<Hero />
<Header />
<Tournament tournament={tournament} />
<MangaList />

<Heading>Introduction</Heading>

<div class="description">
    <p>The stage is set, the lights are dimmed, and a hush falls over the crowd.</p>

    <p>    
        Through an <i>extensive</i> screening process, our team has whittled down the
        entire <i>manga artform</i> to a handful of the most esteemed, highly-regarded
        examples. This process is highly secret, but we can tell you one thing: it
        certainly <i>wasn't</i> just picking them at random.
        
    <p>
        No, we most <i>definitely</i> didn't pick all these manga almost completely at random,
        with absolutely no idea what they are about other than their cover art and
        a three-word genre description.
    </p>

    <p>You'll have to trust us on that one.</p>

    <p>
        Now, the next phase begins. Over the next few weeks, we'll battle these
        hand-picked manga against each other to discover the answer to the ultimate
        question: what is the <i>best</i> manga?<span class="asterisk">*</span>
    </p>

    <p class="footnote">* Out of the ones we've randomly picked.</p>
</div>

<Heading>Round 1</Heading>


<div class="description">
    <ClashResult a={mangas[0]} b={mangas[1]} />

    <p>
        A decisive battle! Our very first Manga Clash started strong, pitting
        the Renaissance art-romance <i>Arte</i> against the absurd business-comedy <i>Trillion Game</i>.
    </p>
    <p>
        <b>Arte</b>'s art was held in high esteem, but its failure to paint vivid enough portraits
        of its characters left some readers with the impression that it was merely... <em>"fine"</em>.
    </p>
    <p>
        However, <b>Trillion Game</b> cashed in on its absurd comedic writing, and ultimately
        avoided paying the price for its relatively poor visual style, as it won gold in the
        first ever <b>Manga Clash</b> vote and proceeded through to the second stage.
</div>

<Footer />

<style>
    .description {
        margin: 0 auto;
        margin-top: -50px;
        margin-bottom: var(--spacing-medium);
        width: 100%;
        max-width: 800px;
        padding: var(--spacing-large);

        background: linear-gradient(to bottom,
            var(--color-bg),
            transparent 100px
        ),
        linear-gradient(to top,
            var(--color-bg),
            transparent 100px
        ),
        linear-gradient(
            to right,
            transparent,
            rgba(0, 191, 255, 0.1),
            transparent
        );
    }

    p {
        width: 100%;
        max-width: 600px;
        margin-left: auto;
        margin-right: auto;
        font-size: 1.2rem;
        color: white;
        line-height: 1.3;
        font-weight: 300;
        color: #ccc;

        text-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
        /* text-align: center; */


        i {
            color: var(--color-cyan);
            text-shadow: 0 0 10px var(--color-cyan);
        }

        b {
            text-shadow: 0 0 5px rgba(255, 255, 255, 0.2);
        }

        @media (min-width: 600px) {
            font-size: 1.5rem;
        }
    }

    .asterisk {
        opacity: 0.7;
        margin-left: var(--spacing-xsmall);
    }

    .footnote {
        opacity: 0.7;
        font-size: 1rem;
        margin-top: var(--spacing-large);
    }
</style>