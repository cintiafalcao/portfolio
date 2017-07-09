import React from 'react'

import { Image, Project, Title, Text } from '../Case.js'
import cover from '../images/advdiego/cover.jpg'
import img_1 from '../images/advdiego/f1.jpg'
import img_2 from '../images/advdiego/f2.jpg'

export default props =>
  <Project>
    <Title>Diego Reis</Title>
    <Image src={cover} alt='Diego Reis' />
    <Title>Logo</Title>
    <Text>The idea was to get away from the classic icons related to law offices such as the balance, however the arches are a subtle reference to the Greek columns and keep it as clean as possible.</Text>
    <Title>Business card / paper</Title>
    <Text>The other printed pieces follow the concept of the logo.</Text>
    <Image src={img_1} alt='Business Card' />
    <Title>Folder</Title>
    <Image src={img_2} alt='Folder' />
  </Project>
