import { RANKS } from "./Comps/Ranks";
const getRandomRank = () => {
    const ranksArray = Object.keys(RANKS);
    const randomIndex = Math.floor(Math.random() * ranksArray.length);
    return ranksArray[randomIndex];
};

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
            state: "Online",
            image: '../../public/PlayerCards/Playercard_JettvsJett_S.png',
            rank: "immortal3"
        },
        OTHER: [
            {
                name: "headshottricker",
                tag: 'TAG1',
                title: titles[Math.floor(Math.random() * titles.length)],
                state: 'Busy',
                image: '../../public/PlayerCards/Playercard_AmusementParkGold_S.png',
                rank: getRandomRank(),
                party: 5
            },
            {
                name: 'Player 2',
                tag: 'TAG2',
                title: titles[Math.floor(Math.random() * titles.length)],
                state: 'Online',
                image: '../../public/PlayerCards/Playercard_AmusementPark_S.png',
                rank: getRandomRank(),
                party: 5
            },
            {
                name: 'Player 3',
                tag: 'TAG3',
                title: titles[Math.floor(Math.random() * titles.length)],
                state: 'Offline',
                image: '../../public/PlayerCards/Playercard_GiveBack_S.png',
                rank: getRandomRank()
            },
        ]
    }
}