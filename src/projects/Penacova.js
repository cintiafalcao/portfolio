import React from 'react'

import { Image, Project, Title, Text } from '../Case.js'
import cover from '../images/penacova/cover.jpg'
import img_1 from '../images/penacova/f1.jpg'
import img_2 from '../images/penacova/f2.jpg'
import img_3 from '../images/penacova/f3.jpg'
import img_4 from '../images/penacova/f4.jpg'
import img_5 from '../images/penacova/f5.jpg'

export default props =>
  <Project>
    <Title>Pé na Cova</Title>
    <Image src={cover} alt='Pé na Cova' />
    <Text>'Pé na Cova was a web application created for the TV show with one purpose, being fun.
It was a step by step where you could customize your skull with clothes and accessories, once it was concluded it was possible to share this image in the main social networks.</Text>
    <Title>Welcome screen</Title>
    <Image src={img_1} alt='Welcome' />
    <Title>Choose accessories</Title>
    <Image src={img_2} alt='Accessories' />
    <Title>Choose clothes</Title>
    <Image src={img_3} alt='Clothes' />
    <Title>Choose Tatoo</Title>
    <Image src={img_4} alt='Tatoo' />
    <Title>share it</Title>
    <Image src={img_5} alt='Shareit' />
  </Project>
