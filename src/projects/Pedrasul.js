import React from 'react'

import { Image, Project, Title, Text } from '../Case.js'
import cover from '../images/pedrasul/cover.jpg'
import img_1 from '../images/pedrasul/f1.jpg'
import img_2 from '../images/pedrasul/f2.jpg'
import img_3 from '../images/pedrasul/f3.jpg'

export default props =>
  <Project>
    <Title>Pedra Sul</Title>
    <Image src={cover} alt='Pedra Sul' />
    <Text>Pedra Sul has been operating in the market since 1999, with the mission of transforming mineral resources into building materials with sustainability.</Text>
    <Title>Pedra Sul App</Title>
    <Text>Create a simple, easy-to-use application that brings convenience to customers when calculating their spending on building materials.</Text>
    <Image src={img_1} alt='Pedra Sul' />
    <Title>Screens</Title>
    <Image src={img_2} alt='Pedra Sul' />
 <Text></Text>
    <Image src={img_3} alt='Pedra Sul' />
  </Project>
