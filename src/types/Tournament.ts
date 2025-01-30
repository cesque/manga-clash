import type { Manga } from './Manga'

export type TournamentSeed = {
    type: 'seed',
    manga: Manga,
}

export type TournamentMatch = {
    type: 'match',

    a: TournamentRound,
    b: TournamentRound,
    winner?: 'a' | 'b',
}

export type TournamentRound = TournamentSeed | TournamentMatch
