import Incense from '../../assets/icon/incense.png';
import PreOrderTag from '../../assets/icon/pre-order-tag.png';
import LeafyPot from '../../assets/icon/leafy-pot.png';

export const AxsData = [
    {
        key: 'staking',
        icon: Incense,
        label: 'Staking',
        content: `
            Through staking, players can lock up their AXS tokens to receive 
            newly issued AXS tokens as rewards for their long term alignment.
        `
    },
    {
        key: 'payment',
        icon: PreOrderTag,
        label: 'Payment',
        content: `
            AXS is accepted as currency within the Axie NFT marketplace. 
            AXS may also be used to determine eligibility for participation 
            in certain sales/auctions conducted by the Axie team.
        `
    },
    {
        key: 'governance',
        icon: LeafyPot,
        label: 'Governance',
        content: `
            The Community Treasury receives fees generated from activities 
            such as trading on the Axie marketplace and breeding new Axies. 
            This treasury will be governed by AXS stakers once the network 
            has become sufficiently decentralized.
        `
    },
];