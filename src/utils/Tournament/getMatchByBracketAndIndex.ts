import type { TournamentMatch, TournamentRound } from '../../types/Tournament';
import getAllRoundsWithDepth from './getAllRoundsWithDepth';

export default function getMatchByBracketAndIndex(tournament: TournamentRound, bracket: number, index: number) {
    if (tournament.type == 'seed') throw new Error(`Could not get match from a tournament seed round`)

    const rounds = getAllRoundsWithDepth(tournament)

    const depths = rounds.map(round => round.depth)
    const max = Math.max(...depths)

    const maxMatchDepth = max - 1

    const depth = maxMatchDepth - bracket

    const allRoundsAtDepth = rounds.filter(round => round.depth == depth)

    const match = allRoundsAtDepth[index]
    
    if (match.type == 'seed') throw new Error(`Could not get match from a tournament seed round (2)`)

    const matchWithoutDepth: TournamentMatch = {
        type: match.type,
        a: match.a,
        b: match.b,
        winner: match.winner,
    } 

    return matchWithoutDepth
}


