import type { TournamentRound } from '../../types/Tournament'

export default function getMangaFromRound(match: TournamentRound | undefined) {
    if (!match) return undefined

    if (match.type == 'seed') return match.manga

    if (match.winner == 'a') {
        return getMangaFromRound(match.a)
    } else if (match.winner == 'b') {
        return getMangaFromRound(match.b)
    }

    return undefined
}