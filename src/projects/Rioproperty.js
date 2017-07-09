import React from 'react'

import { Image, Project, Title, Text } from '../Case.js'
import cover from '../images/rioproperty/cover.jpg'
import img_1 from '../images/rioproperty/f1.jpg'
import img_2 from '../images/rioproperty/f2.jpg'
import img_3 from '../images/rioproperty/f3.jpg'
import img_4 from '../images/rioproperty/f4.jpg'

export default props =>
  <Project>
    <Title>Rio Property Services</Title>
    <Image src={cover} alt='Rio Property Services' />
    <Title>About us</Title>
    <Text>Is a specialist agency dealing with the unique demands of foreign buyers looking to buy properties to live in and/or rent out for investment purposes.</Text>
    <Image src={img_1} alt='About us' />
    <Title>Property finding</Title>
    <Image src={img_2} alt='Property finding' />
    <Title>Why invest in Rio</Title>
    <Image src={img_3} alt='Why invest in Rio' />
    <Title>Property Renovation</Title>
    <Image src={img_4} alt='Property Renovation' />
  </Project>
