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
            image: "https://i.pinimg.com/originals/b1/db/b2/b1dbb25bf0fabd6d0b77056529487539.jpg"
        },
        OTHER: [
            {
                name: "headshottricker",
                tag: 'TAG1',
                state: 'Online',
                image: "https://i.pinimg.com/originals/b1/db/b2/b1dbb25bf0fabd6d0b77056529487539.jpg",
                rank: getRandomRank()
            },
            {
                name: 'Player 2',
                tag: 'TAG2',
                state: 'Busy',
                image: "https://i.pinimg.com/originals/b1/db/b2/b1dbb25bf0fabd6d0b77056529487539.jpg",
                rank: getRandomRank()
            },
            {
                name: 'Player 3',
                tag: 'TAG3',
                state: 'In party',
                image: "https://i.pinimg.com/originals/b1/db/b2/b1dbb25bf0fabd6d0b77056529487539.jpg",
                rank: getRandomRank()
            },
            {
                name: 'Player 4',
                tag: 'TAG4',
                state: 'In party',
                image: "https://i.pinimg.com/originals/b1/db/b2/b1dbb25bf0fabd6d0b77056529487539.jpg",
                rank: getRandomRank()
            },
            {
                name: 'Player 5',
                tag: 'TAG5',
                state: 'In party',
                image: "https://i.pinimg.com/originals/b1/db/b2/b1dbb25bf0fabd6d0b77056529487539.jpg",
                rank: getRandomRank()
            },
            {
                name: 'Player 6',
                tag: 'TAG6',
                state: 'Online',
                image: "https://i.pinimg.com/originals/b1/db/b2/b1dbb25bf0fabd6d0b77056529487539.jpg",
                rank: getRandomRank()
            },
            {
                name: 'Player 7',
                tag: 'TAG7',
                state: 'Busy',
                image: "https://i.pinimg.com/originals/b1/db/b2/b1dbb25bf0fabd6d0b77056529487539.jpg",
                rank: getRandomRank()
            },
            {
                name: 'Player 8',
                tag: 'TAG8',
                state: 'Online',
                image: "https://i.pinimg.com/originals/b1/db/b2/b1dbb25bf0fabd6d0b77056529487539.jpg",
                rank: getRandomRank()
            },
            {
                name: 'Player 9',
                tag: 'TAG9',
                state: 'Online',
                image: "https://i.pinimg.com/originals/b1/db/b2/b1dbb25bf0fabd6d0b77056529487539.jpg",
                rank: getRandomRank()
            },
            {
                name: 'Player 10',
                tag: 'TAG10',
                state: 'Busy',
                image: "https://i.pinimg.com/originals/b1/db/b2/b1dbb25bf0fabd6d0b77056529487539.jpg",
                rank: getRandomRank()
            },
            {
                name: 'Player 11',
                tag: 'TAG11',
                state: 'Busy',
                image: "https://i.pinimg.com/originals/b1/db/b2/b1dbb25bf0fabd6d0b77056529487539.jpg",
                rank: getRandomRank()
            },
            {
                name: 'Player 12',
                tag: 'TAG12',
                state: 'Busy',
                image: "https://i.pinimg.com/originals/b1/db/b2/b1dbb25bf0fabd6d0b77056529487539.jpg",
                rank: getRandomRank()
            },
            {
                name: 'Player 13',
                tag: 'TAG13',
                state: 'Online',
                image: "https://i.pinimg.com/originals/b1/db/b2/b1dbb25bf0fabd6d0b77056529487539.jpg",
                rank: getRandomRank()
            },
            {
                name: 'Player 14',
                tag: 'TAG14',
                state: 'Online',
                image: "https://i.pinimg.com/originals/b1/db/b2/b1dbb25bf0fabd6d0b77056529487539.jpg",
                rank: getRandomRank()
            },
            {
                name: 'Player 15',
                tag: 'TAG15',
                state: 'Busy',
                image: "https://i.pinimg.com/originals/b1/db/b2/b1dbb25bf0fabd6d0b77056529487539.jpg",
                rank: getRandomRank()
            },
            {
                name: 'Player 16',
                tag: 'TAG16',
                state: 'Online',
                image: "https://i.pinimg.com/originals/b1/db/b2/b1dbb25bf0fabd6d0b77056529487539.jpg",
                rank: getRandomRank()
            },
        ]
    }
}