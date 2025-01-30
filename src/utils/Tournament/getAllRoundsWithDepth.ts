import type { TournamentRound } from '../../types/Tournament'

type TournamentRoundWithDepth = TournamentRound & { depth: number }

export default function getAllRoundsWithDepth(round: TournamentRound) {
    return helper(round, 0)
}

function helper(round: TournamentRound, depth: number): TournamentRoundWithDepth[] {
    const roundWithDepth: TournamentRoundWithDepth = {
        ...round,
        depth,
    }

    if (round.type == 'seed') return [roundWithDepth]

    const aRounds = helper(round.a, depth + 1)
    const bRounds = helper(round.b, depth + 1)

    return [
        roundWithDepth,
        ...aRounds,
        ...bRounds,
    ]
}