import { Button, Card } from '@mui/material';
import React from 'react';
import product1 from "../Assets/ACF - Air Circulation Fan.jpeg";
import product2 from "../Assets/Automation timer.jpeg";
import product3 from "../Assets/Garden hose 1.jpeg";
import product4  from"../Assets/Garden rake 1.jpeg";
import product5 from "../Assets/Grow light.jpeg";
import product6 from "../Assets/Insectnet.jpeg";
import product7 from "../Assets/Polyhouse Apron sheet.webp";
import product8 from "../Assets/GI profile with zig zag spring.webp"




export default function Products() {

    const productsData = [
        {
            "img":product1,
            "name": "products 1",
        },
        {
            "img": product2,
            "name": "products 2",
        },
        {
            "img": product3,
            "name": "products 3",
        },
        {
            "img": product4,
            "name": "products 4",
        },
        {
            "img": product5,
            "name": "products 5",
        },
        {
            "img": product6,
            "name": "products 6",
        },
        {
            "img": product7,
            "name": "products 7",
        },
        {
            "img": product8,
            "name": "products 8",
        }
    ]
    return (
        <div className='products-page'>
            <div className="products-head">
                <span className='service-head h2'>PRODUCTS</span>
            </div>
            <div className="products-container">
                {productsData.map((data) => (<ProductCard key={data.name} data={data} />))}
            </div>
        </div>
    )
}


function ProductCard({ data }) {
    return (
        <Card className='products-card'>
            <div className="pro-card-img">
                <img src={data.img} alt="" />
            </div>
            <div className="pro-card-head">
                <h3>{data.name}</h3>
            </div>
            <div className="pro-card-button">
                <Button variant='contained' sx={{ backgroundColor: "rgb(3, 166, 39)" }}>Order Now</Button>
            </div>
        </Card>
    )
}
