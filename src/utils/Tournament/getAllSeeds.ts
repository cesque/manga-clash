import type { TournamentRound } from '../../types/Tournament'

export default function getAllSeeds(round: TournamentRound): TournamentRound[] {
    if (round.type == 'seed') return [round]

    return [
        ...getAllSeeds(round.a),
        ...getAllSeeds(round.b),
    ]
}