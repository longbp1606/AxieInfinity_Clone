import Market1 from '../../../assets/figure/Market_1.png';
import Market2 from '../../../assets/figure/Market_2.png';
import Market3 from '../../../assets/figure/Market_3.png';
import Market4 from '../../../assets/figure/Market_4.png';
import Market5 from '../../../assets/figure/Market_5.png';
import Market6 from '../../../assets/figure/Market_6.png';
import Market7 from '../../../assets/figure/Market_7.png';
import Market8 from '../../../assets/figure/Market_8.png';
import Market9 from '../../../assets/figure/Market_9.png';
import Market10 from '../../../assets/figure/Market_10.png';
import Market11 from '../../../assets/figure/Market_11.png';
import Market12 from '../../../assets/figure/Market_12.png';

import PlayImage from './../../../assets/play-collect-own/play.jpg';
import CollectImage from './../../../assets/play-collect-own/collect.jpg';
import OwnImage from './../../../assets/play-collect-own/own.jpg';

import EggIcon from '../../../assets/play-collect-own/icons/egg.png';
import IdolIcon from '../../../assets/play-collect-own/icons/idol.png';
import CoinIcon from '../../../assets/play-collect-own/icons/coin.png';

export const CharactersData = [
    {
        key: '9851497',
        imageURL: Market1,
        price: 2.35,
    },
    {
        key: '11550064',
        imageURL: Market2,
        price: 2.43,
    },
    {
        key: '9854201',
        imageURL: Market3,
        price: 2.37,
    },
    {
        key: '8072716',
        imageURL: Market4,
        price: 2.43,
    },
    {
        key: '5269287',
        imageURL: Market5,
        price: 2.43,
    },
    {
        key: '11566222',
        imageURL: Market6,
        price: 2.75,
    },
    {
        key: '11617579',
        imageURL: Market7,
        price: 4.37,
    },
    {
        key: '11014443',
        imageURL: Market8,
        price: 2.46,
    },
    {
        key: '9923471',
        imageURL: Market9,
        price: 2.55,
    },
    {
        key: '139926',
        imageURL: Market10,
        price: 1334.92,
    },
    {
        key: '159555',
        imageURL: Market11,
        price: 173.54,
    },
    {
        key: '4136',
        imageURL: Market12,
        price: 12378.39,
    },
];

export const FlagContentData = [
    {
        id: 0,
        key: 'Play',
        image: PlayImage,
        content: `
            Axies are tickets to an infinite universe of games. 
            Axie owners get automatic access to new games and 
            experiences when they're released!
        `,
    },
    {
        id: 1,
        key: 'Collect',
        image: CollectImage,
        content: `
            Some Axies are rare with limited-edition body parts 
            that will never be released again. 
            Show off to your friends and family!
        `,
    },
    {
        id: 2,
        key: 'Own',
        image: OwnImage,
        content: `
            Your axie digital collectibles are yours. 
            You can use them across multiple games, 
            trade them, sell them, and even use them to obtain more unique tradable resources and collectibles.
        `,
    },
];

export const AnalysticData = [
    {
        key: 'play',
        icon: EggIcon,
        data: '12.061.715',
        label: 'Total Axies'
    },
    {
        key: 'collect',
        icon: IdolIcon,
        data: '2.021.614',
        label: 'Total Owners'
    },
    {
        key: 'own',
        icon: CoinIcon,
        data: '$3.6B',
        label: 'Total Sales'
    },
]