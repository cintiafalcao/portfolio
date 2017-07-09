import React from 'react'

import { Image, Project, Title, Text } from '../Case.js'
import cover from '../images/lojadaseda/cover.jpg'
import img_1 from '../images/lojadaseda/f1.jpg'
import img_2 from '../images/lojadaseda/f2.jpg'
import img_3 from '../images/lojadaseda/f3.jpg'
import img_4 from '../images/lojadaseda/f4.jpg'

export default props =>
  <Project>
    <Title>Loja da Seda</Title>
    <Image src={cover} alt='Loja da Seda' />
    <Text>Loja da Seda is a shop specialized in fine fabrics</Text>
    <Title>Logo</Title>
    <Image src={img_1} alt='Logo' />
    <Title>Logo studies</Title>
    <Image src={img_2} alt='Studies' />
    <Title>Logo studies</Title>
    <Image src={img_3} alt='Studies' />
    <Title>Store</Title>
    <Image src={img_4} alt='Store' />
  </Project>
