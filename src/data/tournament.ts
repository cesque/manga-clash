import type { TournamentRound } from '../types/Tournament'
import mangas from './mangas'

const tournament: TournamentRound = {
    type: 'match',
    a: {
        type: 'match',
        a: {
            type: 'match',
            a: {
                type: 'match',
                a: { type: 'seed', manga: mangas[0] },
                b: { type: 'seed', manga: mangas[1] },
                winner: 'b',
            },
            b: {
                type: 'match',
                a: { type: 'seed', manga: mangas[2] },
                b: { type: 'seed', manga: mangas[3] },
                winner: 'a',
            },
            winner: 'a',
        },
        b: {
            type: 'match',
            a: {
                type: 'match',
                a: { type: 'seed', manga: mangas[4] },
                b: { type: 'seed', manga: mangas[5] },
                winner: 'a',
            },
            b: {
                type: 'match',
                a: { type: 'seed', manga: mangas[6] },
                b: { type: 'seed', manga: mangas[7] },
                winner: 'a',
            },
        },
    },
    b: {
        type: 'match',
        a: {
            type: 'match',
            a: {
                type: 'match',
                a: { type: 'seed', manga: mangas[8] },
                b: { type: 'seed', manga: mangas[9] },
                winner: 'b',
            },
            b: {
                type: 'match',
                a: { type: 'seed', manga: mangas[10] },
                b: { type: 'seed', manga: mangas[11] },
                winner: 'b',
            },
        },
        b: {
            type: 'match',
            a: {
                type: 'match',
                a: { type: 'seed', manga: mangas[12] },
                b: { type: 'seed', manga: mangas[13] },
                winner: 'a',
            },
            b: {
                type: 'match',
                a: { type: 'seed', manga: mangas[14] },
                b: { type: 'seed', manga: mangas[15] },
                winner: 'a',
            },
        },
    },
}

export default tournament