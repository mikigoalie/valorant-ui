import { RANKS } from "./Comps/Ranks";
const getRandomRank = () => {
    const ranksArray = Object.keys(RANKS);
    const randomIndex = Math.floor(Math.random() * ranksArray.length);
    return ranksArray[randomIndex];
};

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
            state: "Online",
            image: "https://i.pinimg.com/originals/b1/db/b2/b1dbb25bf0fabd6d0b77056529487539.jpg",
            rank: "radiant"
        },
        OTHER: [
            {
                name: "headshottricker",
                tag: 'TAG1',
                state: 'Busy',
                image: "https://i.pinimg.com/originals/b1/db/b2/b1dbb25bf0fabd6d0b77056529487539.jpg",
                rank: getRandomRank(),
                party: 5
            },
            {
                name: 'Player 2',
                tag: 'TAG2',
                state: 'Online',
                image: "https://i.pinimg.com/originals/b1/db/b2/b1dbb25bf0fabd6d0b77056529487539.jpg",
                rank: getRandomRank(),
                party: 5
            },
            {
                name: 'Player 3',
                tag: 'TAG3',
                state: 'Offline',
                image: "https://i.pinimg.com/originals/b1/db/b2/b1dbb25bf0fabd6d0b77056529487539.jpg",
                rank: getRandomRank()
            },
        ]
    }
}