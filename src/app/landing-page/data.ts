import { TileCard, SimpleMessage } from '../interfaces/';

let cardListData: TileCard[];



cardListData = [
    {cols: 2,
    rows: 1,
    color: 'blue',
    imgSrc: 'assets/images/tech.png',
    text: {
        heading: 'Technologies I love',
        body: 'JavaScript React Angular'
    }},
    {cols: 2,
        rows: 1,
        color: 'green',
        imgSrc: '',
        text: {
            heading: 'Agile',
            body: ''
        }},
        {cols: 2,
            rows: 1,
            color: 'red',
            text: {
                heading: '',
                body: ''
            }}

];


export { cardListData };
