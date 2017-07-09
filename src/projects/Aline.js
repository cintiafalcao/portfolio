import React from 'react'

import { Image, Project, Title, Text } from '../Case.js'
import cover from '../images/aline/cover.jpg'
import img_1 from '../images/aline/f1.jpg'
import img_2 from '../images/aline/f2.jpg'
import img_3 from '../images/aline/f3.jpg'

export default props =>
  <Project>
    <Title>Aline Cruz</Title>
    <Image src={cover} alt='Aline Cruz' />
    <Text>Company of Architecture and Urbanism with experienced team, active for 10 years in the market. Interest in architectural projects of various scales and public, as well as differentiated performance in product design and brand activation.</Text>
    <Image src={img_1} alt='Home' />
    <Image src={img_2} alt='Projects' />
    <Image src={img_3} alt='Contact' />
  </Project>
