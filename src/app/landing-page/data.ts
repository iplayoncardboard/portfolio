import { TileCard, SimpleMessage } from '../interfaces/';

let cardListData: TileCard[];



cardListData = [
    {
    imgSrc: 'assets/images/tech.png',
    route: 'dev',
    routeExternal: false,
    text: {
        heading: 'Technologies I love',
        body: 'JavaScript React Angular'
    }},
    {
        imgSrc: 'assets/images/scrumLong.png',
        route: 'https://www.scrumalliance.org/community/profile/ehurst3',
        routeExternal: true,
        text: {
            heading: 'Scrum / Agile',
            body: 'Look at all those nifty badges! I have been a Certified Scrum Master since 2014 and have worn many hats in the agile workplace. I have acted Product Owner, Scrum Master, and developer in agile teams. This experience has made me a better developer by shifting my focus to user experience and measuring value through data collection.'
        }},
];


export { cardListData };
