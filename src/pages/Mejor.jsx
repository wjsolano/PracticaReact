import React from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export const Mejor = () => {
    return (
        <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
            {itemData.map((item) => (
                <ImageListItem key={item.img}>
                    <img
                        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.title}
                        loading="lazy"
                    />
                </ImageListItem>
            ))}
        </ImageList>
    )
}

const itemData = [
    {
        img: 'https://cnnespanol.cnn.com/wp-content/uploads/2021/08/messi-1.jpg?quality=100&strip=info',
        title: 'Breakfast',
        author: '@bkristastucchio',
    },
    {
        img: 'https://phantom-marca.unidadeditorial.es/e1e65aab8cbcb632d9c8359b2b6840f9/resize/1320/f/jpg/assets/multimedia/imagenes/2021/07/17/16265320344770.jpg',
        title: 'Burger',
        author: '@rollelflex_graphy726',
    },
    {
        img: 'https://cloudfront-us-east-1.images.arcpublishing.com/infobae/HT2IF345M46ZZ6GC7ZJCHWAH34.jpg',
        title: 'Camera',
        author: '@helloimnik',
    },
    {
        img: 'https://static01.nyt.com/images/2021/08/05/sports/05soccer-messi-ESP-1/05soccer-messi-mediumSquareAt3X.jpg',
        title: 'Coffee',
        author: '@nolanissac',
    },
    {
        img: 'https://assets-es.imgfoot.com/ucl-psg-lionel-messi-scores-ag-manchester-city.jpg',
        title: 'Hats',
        author: '@hjrc33',
    },
    {
        img: 'https://ichef.bbci.co.uk/news/640/cpsprodpb/E5BA/production/_119801885_75007003-8391-44bf-8f65-c7a5ef8ee259.jpg',
        title: 'Honey',
        author: '@arwinneil',
    },
    {
        img: 'https://media.revistagq.com/photos/62bd9e10c9953e8a26f73897/1:1/w_1600%2Cc_limit/leo%2520messi%2520camiseta%2520dior%2520comprar.jpg',
        title: 'Basketball',
        author: '@tjdragotta',
    },
    {
        img: 'https://arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/PKXIAKBU4JDGTIDDYEDXAPONLQ.jpg',
        title: 'Fern',
        author: '@katie_wasserman',
    },
    {
        img: 'https://imagenes.lainformacion.com/files/image_656_370/uploads/imagenes/2021/02/05/messi.jpeg',
        title: 'Mushrooms',
        author: '@silverdalex',
    },

];
