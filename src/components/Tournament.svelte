<script lang='ts'>
    import type { TournamentRound as TournamentRoundType } from '../types/Tournament'
    import getAllSeeds from '../utils/Tournament/getAllSeeds'
    import getRoundsByColumn from '../utils/Tournament/getRoundsByColumn'
    import Heading from './Heading.svelte'
    import TournamentRound from './TournamentRound.svelte'

    interface Props { 
        tournament: TournamentRoundType,
    }

    const { tournament }: Props = $props()

    const seeds = getAllSeeds(tournament)
    const columns = getRoundsByColumn(tournament)
    const totalRows = seeds.length - 1

    const amountOfRounds = Math.log2(seeds.length) + 1
    const amountOfColumns = amountOfRounds * 2 - 1
    const centreColumn = (amountOfColumns - 1) / 2

    function getDepthOfColumn(column: number) {
        const depth = Math.abs(column - centreColumn)

        return Math.max(0, depth - 1)
    }

    type Range = { from: number, to: number }
    type LineItem = { type: string, row: number }

    function getLineCharacter(range: Range, row: number, column: number): LineItem {
        const topCharacter = column > centreColumn ? 'rd' : 'ld'
        const bottomCharacter = column > centreColumn ? 'ru' : 'lu'

        if (row == range.from) return { row, type: topCharacter }
        if (row == range.to) return { row, type: bottomCharacter }

        const difference = (range.to - range.from) / 2
        const centre = range.from + difference

        if (row == centre) return { row, type: column > centreColumn ? 'lud' : 'rud' }
        return { row, type: 'ud' }
    }

    const columnsWithDepthInformation = columns.map((column, columnIndex) => {
        const depth = getDepthOfColumn(columnIndex)
        const inverseDepth = Math.log2(seeds.length) - depth

        const delta = 2 ** inverseDepth
        const offset = 2 ** (inverseDepth - 1) - 1

        return column.map((round, rowIndex) => {
            return {
                round,
                row: offset + (delta * rowIndex),
                isUltimateWinner: columnIndex == centreColumn,
            }
        })
    })

    const tubes = columnsWithDepthInformation.map((column, columnIndex) => {
        const pairs: Range[] = []

        for (let i = 0; i < column.length; i += 2) {
            const a = column[i]
            const b = column[i+1]

            pairs.push({
                from: a.row,
                to: b?.row ?? a.row,
            })
        }

        const items: LineItem[] = []

        for (const pair of pairs) {
            if(pair.from == pair.to) {
                items.push({
                    type: 'lr',
                    row: pair.from,
                })
            } else {
                for (let i = pair.from; i <= pair.to; i++) {
                    items.push(getLineCharacter(pair, i, columnIndex))
                }
            }

        }

        return items
    })

    tubes.splice(centreColumn, 1)
</script>

<Heading>Tournament bracket</Heading>

<div class='tournament' style="--columns: {(amountOfColumns * 2) - 1}; --rows: {totalRows}">
    {#each columnsWithDepthInformation as column, i}
        {#each column as round}
            <div class="round" style:grid-column="{(i * 2) + 1} / span 1" style:grid-row="{round.row + 1} / span 1">
                <TournamentRound round={round.round} isUltimateWinner={round.isUltimateWinner} />
            </div>
        {/each}
    {/each}

    {#each tubes as items, i}
        {#each items as item}
            <div class="line-item" style:grid-column="{(i * 2) + 2} / span 1" style:grid-row="{item.row + 1} / span 1" style:--column={i}>
                <div class={['line', item.type]}></div>
            </div>
        {/each}
    {/each}
</div>

<style>
    .tournament {
        padding: var(--spacing-large);
        display: grid;
        grid-template-rows: repeat(var(--rows), 1fr);
        grid-template-columns: repeat(var(--columns), 1fr);

        background: radial-gradient(ellipse closest-side, rgba(0, 191, 255, 0.1), transparent);
        background-size: 100% 100%;
    }

    .round {
        color: white;
        text-align: center;
    }

    .line-item {
        color: white;
        text-align: center;
        font-size: 2rem;
        position: relative;
        animation: pulse 1.5s alternate infinite;
        animation-delay: calc(var(--column) * 200ms);
    }

    .line {
        position: absolute;

        --color: var(--color-cyan);
        /* --filter: blur(2px); */
    }

    .ud {
        left: 0;
        top: 0;
        height: 100%;
        width: 50%;
        border-right: 2px solid var(--color);
        filter: var(--filter);
    }

    .lr {
        left: 0;
        top: 0;
        width: 100%;
        height: 50%;
        border-bottom: 2px solid var(--color);
        filter: var(--filter);
    }

    .lu {
        top: 0;
        left: 0;
        width: 50%;
        height: 50%;
        border-bottom: 2px solid var(--color);
        border-right: 2px solid var(--color);
        border-bottom-right-radius: 10px;
        filter: var(--filter);
    }

    .ru {
        top: 0;
        left: calc(50% - 1.5px);
        right: 0;
        height: 50%;
        border-bottom: 2px solid var(--color);
        border-left: 2px solid var(--color);
        border-bottom-left-radius: 10px;
        filter: var(--filter);
    }

    .ld {
        top: 50%;
        left: 0;
        width: 50%;
        height: 50%;
        border-top: 2px solid var(--color);
        border-right: 2px solid var(--color);
        border-top-right-radius: 10px;
        filter: var(--filter);
    }

    .rd {
        top: 50%;
        left: calc(50% - 1.5px);
        right: 0;
        height: 50%;
        border-top: 2px solid var(--color);
        border-left: 2px solid var(--color);
        border-top-left-radius: 10px;
        filter: var(--filter);
    }

    .rud {
        position: static;

        &:before {
            content: '';
            display: block;
            position: absolute;
            top: 0;
            right: 0;
            width: 50%;
            height: 50%;
            border-bottom: 1px solid var(--color);
            border-left: 2px solid var(--color);
            border-bottom-left-radius: 10px;
            filter: var(--filter);
        }

        &:after {
            content: '';
            display: block;
            position: absolute;
            bottom: 0;
            right: 0;
            width: 50%;
            height: 50%;
            border-top: 1px solid var(--color);
            border-left: 2px solid var(--color);
            border-top-left-radius: 10px;
            filter: var(--filter);
        }
    }

    .lud {
        position: static;

        &:before {
            content: '';
            display: block;
            position: absolute;
            top: 0;
            right: 50%;
            width: 50%;
            height: 50%;
            border-bottom: 1px solid var(--color);
            border-right: 2px solid var(--color);
            border-bottom-right-radius: 10px;
            filter: var(--filter);
        }

        &:after {
            content: '';
            display: block;
            position: absolute;
            bottom: 0;
            right: 50%;
            width: 50%;
            height: 50%;
            border-top: 1px solid var(--color);
            border-right: 2px solid var(--color);
            border-top-right-radius: 10px;
            filter: var(--filter);
        }
    }

@keyframes pulse {
    0% {
        opacity: 0.5;
        filter: blur(3px);
    }
    100% {
        opacity: 1;
        filter: blur(1px);
    }
}
</style>