import type { TournamentRound } from '../../types/Tournament'

export default function getAllRounds(round: TournamentRound): TournamentRound[] {
    if (round.type == 'seed') return [round]

    return [
        round,
        ...getAllRounds(round.a),
        ...getAllRounds(round.b),
    ]
}