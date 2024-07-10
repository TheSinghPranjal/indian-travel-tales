import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';

const CustomCarousel = () => {
    const items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            background: "https://travelbooking.mywpsite.org/wp-content/uploads/2023/09/h1_bg-1.jpg",
            // itemNamePosition: 
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            background: "https://wallpapers.com/images/hd/yamaha-yzf-4k-bike-4ex5oityodxw1tdv.jpg",
            itemNamePosition: "left"

        }
    ];

    const Item = (props) => (
        <Paper style={{ backgroundImage: `url(${props.item.background})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '400px', display: 'flex', flexDirection: 'column' }}>
            <h2 style={{ textAlign: `(${props.itemNamePosition})` }}>{props.item.name}</h2>
            <p>{props.item.description}</p>
            <Button className="CheckButton">Check it out!</Button>
        </Paper>
    );

    return (
        <>
            <Carousel >
                {items.map((item, i) => (
                    <Item key={item} item={item} />
                )
                )}
            </Carousel>
        </>
    );
}

export default CustomCarousel;