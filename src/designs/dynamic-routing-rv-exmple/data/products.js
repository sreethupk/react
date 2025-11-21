import shoe from '../image/shoe.jpg'
import shoe1 from '../image/shoe1.jpg'
import shoe2 from '../image/shoe2.jpg'
import shoe3 from '../image/shoe3.jpg'

import heel from '../image/heel.jpg'
import heel1 from '../image/heel1.jpg'
import heel2 from '../image/heel2.jpg'
import heel3 from '../image/heel3.jpg'



export const products = [
    {
        id:1,
        image:shoe,
        title:"Men's shoe DN 23x, New products",
        Category:"LIFESTYLE",
        price:9830,
        oldPrice:5999,
        rating:4,
        offer:25,
        description: "This is a high quality men's shoe perfect for every day use",
        gallery: [shoe1,shoe2,shoe3]
    },
    {
        id:2,
        image:heel,
        title:"women's Heel DM 23x, New product",
        Category:"LIFESTYLE",
        price:3999,
        oldPrice:2999,
        rating:4,
        offer:25,
        description: "Stylish women's shoe designed for comfort and durability",
        gallery: [heel1,heel2,heel3]
    }
]