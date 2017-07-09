import React from 'react'

import { Image, Project, Title, Text, Link } from '../Case.js'
import cover from '../images/abcd/cover.jpg'
import img_1 from '../images/abcd/f1.jpg'
import img_2 from '../images/abcd/f2.jpg'
import img_3 from '../images/abcd/f3.jpg'
import img_4 from '../images/abcd/f4.jpg'

export default props =>
  <Project>
    <Title>ABDC</Title>
    <Image src={cover} alt='ABDC' />
    <Text>Brazilian Academy of Civil Law
Is a non-profit organization whose purpose is to research, promote and develop private law, bringing together both national and foreign scholars working with the conviction that the improvement of private law - the law of human daily life - will result in a society more just and supportive.</Text>
    <Title>Choose palette</Title>
    <Text>It was necessary to use the colors of the logo but in a way that did not get too colorful. Then the green was discarded and the main palette was blue and yellow.</Text>
    <Title>Screens</Title>
    <Text>Visit the website <Link href='http://www.abdireitocivil.com.br'>www.abdireitocivil.com.br</Link></Text>
    <Image src={img_1} alt='Home' />

    <Image src={img_2} alt='ABDC' />

    <Image src={img_3} alt='ABDC' />

    <Image src={img_4} alt='ABDC' />
  </Project>
