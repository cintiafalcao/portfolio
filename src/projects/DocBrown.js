import React from 'react'

import { Image, Project, Title, Text } from '../Case.js'
import cover from '../images/docbrown/cover.jpg'
import img_1 from '../images/docbrown/f1.jpg'
import img_2 from '../images/docbrown/f2.jpg'
import img_3 from '../images/docbrown/f3.jpg'
import img_4 from '../images/docbrown/f4.jpg'
import img_5 from '../images/docbrown/f5.jpg'
import img_6 from '../images/docbrown/f6.jpg'
import img_7 from '../images/docbrown/f7.jpg'
import img_8 from '../images/docbrown/f8.jpg'
import img_9 from '../images/docbrown/f9.jpg'
import img_10 from '../images/docbrown/f10.jpg'

export default props =>
  <Project>
    <Title>DocBrown</Title>
    <Image src={cover} alt='DocBrown' />
    <Text>DocBrown was created with the intention of offering inspiration, art and style for lovers of movies, anime, series and the entire Geek culture. It was many years of research and learning to develop our project in order to bring to you the best Docbrown product, with a careful selection of art, quality of material and stamping. DocBrown wants to see the true sheen of charm in our customers' eyes.</Text>
    <Text>It was learning from the past and watching the evolution of the future that the company was inspired by Steven Spielberg's masterpiece, Back to the Future, to develop our identity and brand. DocBrown will be constantly traveling in our DeLorean to bring news of the future and great icons of the present and past to imprint our arts for you.</Text>
    <Title>Packing</Title>
    <Image src={img_1} alt='Packing' />
    <Title>Logo for t-shirt</Title>
    <Image src={img_2} alt='Logo' />
    <Title>T-shirt's tag</Title>
    <Image src={img_3} alt='T-shirt' />
    <Title>Beverage coaster</Title>
    <Image src={img_4} alt='Beverage coaster' />
    <Title>Evolution</Title>
    <Image src={img_5} alt='Evolution' />
    <Title>Chocolate</Title>
    <Image src={img_6} alt='Chocolate' />
    <Title>Samurai</Title>
    <Image src={img_7} alt='Samurai' />
    <Title>Game of thrones</Title>
    <Image src={img_8} alt='Game of thrones' />
    <Title>Alice</Title>
    <Image src={img_9} alt='Alice' />
    <Title>Slackline</Title>
    <Image src={img_10} alt='Slackline' />
  </Project>
