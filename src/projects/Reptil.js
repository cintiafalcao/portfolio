import React from 'react'

import { Image, Project, Title, Text } from '../Case.js'
import cover from '../images/reptil/cover.jpg'
import img_1 from '../images/reptil/f1.jpg'
import img_2 from '../images/reptil/f2.jpg'
import img_3 from '../images/reptil/f3.jpg'

export default props =>
  <Project>
    <Title>Reptil</Title>
    <Image src={cover} alt='Reptil' />
    <Text>Réptil is a publisher that values art in its various expressions, prioritizes creative and innovative proposals, always joining textual quality and high graphic standard.

A publisher who looks back at Brazil and all its cultural wealth, seeking to record it in books that are capable of extending the borders of our heritage.</Text>
    <Title>Home</Title>
    <Image src={img_1} alt='Home' />
    <Title>Highlights</Title>
    <Image src={img_2} alt='Highlights' />
    <Title>Catalog</Title>
    <Image src={img_3} alt='Catalog' />
  </Project>
