import { type TournamentRound } from '../../types/Tournament'
import getAllSeeds from './getAllSeeds'

export default function getRoundsByColumn(round: TournamentRound): TournamentRound[][] {
    const totalSeeds = getAllSeeds(round).length
    const amountOfRounds = Math.log2(totalSeeds) + 1
    const amountOfColumns = amountOfRounds * 2 - 1

    const centreColumn = (amountOfColumns - 1) / 2

    const columns: TournamentRound[][] = [];

    for (let i = 0; i < amountOfColumns; i++) columns.push([])

    const queue: { round: TournamentRound; column: number }[] = [{ round, column: centreColumn }];

    while (queue.length > 0) {
        const { round, column } = queue.shift()!;

        columns[column].push(round);

        const aColumn = column <= centreColumn ? -1 : +1
        const bColumn = column >= centreColumn ? +1 : -1

        if (round.type === 'match') {
            // Add the sub-rounds to the queue for the next column
            queue.push({ round: round.a, column: column + aColumn });
            queue.push({ round: round.b, column: column + bColumn });
        }
    }

    return columns;
}
