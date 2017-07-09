import React from 'react'

import { Image, Project, Title, Text } from '../Case.js'
import cover from '../images/sola/cover.jpg'
import img_1 from '../images/sola/f1.jpg'
import img_2 from '../images/sola/f2.jpg'
import img_3 from '../images/sola/f3.jpg'

export default props =>
  <Project>
    <Title>Sola</Title>
    <Image src={cover} alt='Sola' />
    <Text>Sola Construtora is a company that has been in the market for more than 15 years in order to realize the dream of own house for several families.
The construction company acts in an integrated way in the residential real estate sector from the incorporation, construction to the commercialization of its properties.</Text>
    <Title>Home</Title>
    <Image src={img_1} alt='Sola' />
    <Title>Building</Title>
    <Image src={img_2} alt='Sola' />
    <Title>Services</Title>
    <Image src={img_3} alt='Sola' />
  </Project>
