import React from 'react'

import { Image, Project, Title, Text } from '../Case.js'
import cover from '../images/fit/cover.jpg'
import img_1 from '../images/fit/f1.jpg'
import img_2 from '../images/fit/f2.jpg'
import img_3 from '../images/fit/f3.jpg'
import img_4 from '../images/fit/f4.jpg'
import img_5 from '../images/fit/f5.jpg'

export default props =>
  <Project>
    <Title>Fit</Title>
    <Image src={cover} alt='Fit' />
    <Text>FIT was inaugurated in 1986 with the proposal of offering a simple and chic clothes. The beauty is in the design that privileges clean forms valued by high quality fabrics.
To each collection, FIT invites plastic artists to think of original and exclusive prints. The desire is to produce a unique, comfortable and timeless piece. A contemporary way of being feminine.</Text>
    <Title>Collection</Title>
    <Image src={img_1} alt='Collection' />
    <Title>Products</Title>
    <Image src={img_2} alt='Products' />
    <Title>Store</Title>
    <Image src={img_4} alt='Store' />
    <Title>FIT Nina</Title>
    <Image src={img_5} alt='FIT Nina' />
  </Project>
