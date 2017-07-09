import React from 'react'

import { Image, ImageGroup, Project, Title, Text, Link } from '../Case.js'
import cover from '../images/saramandaia/cover.jpg'
import img_1 from '../images/saramandaia/f1.jpg'
import img_2 from '../images/saramandaia/f2.jpg'
import img_3 from '../images/saramandaia/f3.jpg'
import img_4 from '../images/saramandaia/f4.jpg'
import img_5 from '../images/saramandaia/f5.jpg'
import img_6 from '../images/saramandaia/f6.jpg'
import img_7 from '../images/saramandaia/f7.jpg'

export default props =>
  <Project>
    <Title>Saramandaia</Title>
    <Image src={cover} alt='Saramandaia' />
    <Text>'O Fantástico Mundo de Saramandaia' it's a Brazilian TV series. The app was specially designed for tablet but works on web and mobile. Take a look: <Link href='http://especiaiss3.gshow.globo.com/novelas/saramandaia/o-livro-de-saramandaia/'>//especiaiss3.gshow.globo.com/novelas/saramandaia/o-livro-de-saramandaia/</Link></Text>
    <Title>Backgrounds</Title>
    <Text>Several fantastic backgrounds have been created for each page of the book.</Text>
    
    <ImageGroup>
        <div><Image src={img_1} alt='Backgrounds' /></div>
        <div><Image src={img_2} alt='Qranio Interna' /></div>
    </ImageGroup>

    <ImageGroup>
        <div><Image src={img_3} alt='Backgrounds' /></div>
        <div><Image src={img_4} alt='Qranio Interna' /></div>
    </ImageGroup>

    <Title>Elements of animation</Title>
    <Image src={img_5} alt='Elements' />
    <Title>Pages</Title>
    <Text>Each page was about a character and had its characteristics and animated elements.</Text>
    <Image src={img_6} alt='Pages' />
    <Image src={img_7} alt='Pages' />
  </Project>
