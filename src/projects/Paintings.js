import React from 'react'

import { Image, Project, Title, Text, Legend } from '../Case.js'
import cover from '../images/paintings/cover.jpg'
import img_1 from '../images/paintings/f1.jpg'
import img_2 from '../images/paintings/f2.jpg'
import img_3 from '../images/paintings/f3.jpg'
import img_4 from '../images/paintings/f4.jpg'
import img_5 from '../images/paintings/f5.jpg'

export default props =>
  <Project>
    <Title>Paintings</Title>
    <Image src={cover} alt='Paintings' />
    <Text>These screens were made in the last year of college.</Text>

    <Image src={img_1} alt='Paintings' />
    <Legend>Oil pastel on paper 100cmx70cm</Legend>

    <Image src={img_2} alt='Paintings' />
    <Legend>Oil pastel on paper 100cmx70cm</Legend>

    <Image src={img_3} alt='Paintings' />
    <Legend>Oil pastel on paper 200cmx100cm</Legend>

    <Image src={img_4} alt='Paintings' />
    <Legend>Oil pastel on paper 250cmx100cm</Legend>

    <Image src={img_5} alt='Paintings' />
    <Legend>Oil pastel on paper 350cmx100cm</Legend>
  </Project>
