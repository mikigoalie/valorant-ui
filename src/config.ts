import { RANKS } from "./Comps/Ranks";
const getRandomRank = () => {
    const ranksArray = Object.keys(RANKS);
    const randomIndex = Math.floor(Math.random() * ranksArray.length);
    return ranksArray[randomIndex];
};
//              party: Math.floor(Math.random() * 5),
const titles = ['uWu', 'Old Dog', 'Nibber', 'Swift', 'Stellar', 'Coach', 'Toxic', 'Harbinger', 'Fishy', 'Gatecrasher', 'Catfish', 'Cringe']

export default {
    FEATURED_SKINS: {
        BUNDLE_IMAGE: "https://media.discordapp.net/attachments/1158956736183533598/1158956736401653810/image.png",
        BUNDLE_NAME: "Neo Frontier Collection",
        BUNDLE_PRICE: 13500
    },
    ACCOUNTS: {
        SELF: {
            name: 'L9 Mikigoalie',
            tag: 'LOW9',
            title: titles[titles.length],
            level: 125,
            state: "Online",
            image: '../../public/PlayerCards/Playercard_JettvsJett_S.png',
            rank: "immortal3"
        },
        OTHER: [
            {
                name: "Reaqus",
                tag: 'lll',
                title: titles[Math.floor(Math.random() * titles.length)],
                level: Math.floor(Math.random() * 1001),
                state: 'Offline',
                image: '../../public/PlayerCards/Playercard_VitruvianWingman_S.png',
                rank: getRandomRank(),
            },
            {
                name: "fleurs",
                tag: 'evil',
                title: titles[Math.floor(Math.random() * titles.length)],
                level: Math.floor(Math.random() * 1001),
                state: 'Offline',
                image: '../../public/PlayerCards/Playercard_JettvsJett_S.png',
                rank: getRandomRank(),
            },
            {
                name: "Aryanna",
                tag: 'QUEEN',
                title: titles[Math.floor(Math.random() * titles.length)],
                level: Math.floor(Math.random() * 1001),
                state: 'Offline',
                image: '../../public/PlayerCards/Playercard_GiveBack_S.png',
                rank: getRandomRank(),
            },
            {
                name: "MOMMY",
                tag: 'cutyp',
                title: titles[Math.floor(Math.random() * titles.length)],
                level: Math.floor(Math.random() * 1001),
                state: 'Offline',
                image: '../../public/PlayerCards/Playercard_AmusementParkGold_S.png',
                rank: getRandomRank(),
            },

            {
                name: "PRINCESS Olivia",
                tag: 'Luv',
                title: titles[Math.floor(Math.random() * titles.length)],
                level: Math.floor(Math.random() * 1001),
                state: 'Offline',
                image: '../../public/PlayerCards/Playercard_BattleSage_S.png',
                rank: getRandomRank(),
            },

            {
                name: "TQ Soloff",
                tag: 'RETARD',
                title: titles[Math.floor(Math.random() * titles.length)],
                level: 9999,
                state: 'Offline',
                image: '../../public/PlayerCards/Playercard_EP1KeyArt_S.png',
                rank: 'iron1',
            },

            {
                name: "Killua",
                tag: 'hehh',
                title: titles[Math.floor(Math.random() * titles.length)],
                level: Math.floor(Math.random() * 1001),
                state: 'Offline',
                image: '../../public/PlayerCards/Playercard_AmusementParkGold_S.png',
                rank: getRandomRank(),
            },

        ]
    }
}