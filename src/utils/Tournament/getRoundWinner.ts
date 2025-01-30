import type { Manga } from '../../types/Manga'
import type { TournamentRound } from '../../types/Tournament'

export default function getRoundWinner(round: TournamentRound): Manga | undefined {
    if (round.type == 'seed') return round.manga

    if (!round.winner) return undefined

    if (round.winner == 'a') return getRoundWinner(round.a)
    if (round.winner == 'b') return getRoundWinner(round.b)
}