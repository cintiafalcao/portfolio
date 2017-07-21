import React from 'react'

import { Image, Project, Title, Text, ImageGroup } from '../Case.js'
import cover from '../images/buzzfeat/cover.jpg'
import img_1 from '../images/buzzfeat/f1.jpg'
import img_2 from '../images/buzzfeat/f2.jpg'
import img_3 from '../images/buzzfeat/f3.jpg'
import img_4 from '../images/buzzfeat/f4.jpg'
import img_5 from '../images/buzzfeat/f5.jpg'
import img_6 from '../images/buzzfeat/f6.jpg'
import img_7 from '../images/buzzfeat/f7.jpg'
import img_8 from '../images/buzzfeat/f8.jpg'
import img_9 from '../images/buzzfeat/f9.jpg'
import img_10 from '../images/buzzfeat/f10.jpg'

export default props =>
  <Project>
    <Title>Buzzfeat</Title>
    <Image src={cover} alt='Buzzfeat' />
    <Text>Buzzfeed was a web platform for development that allowed users to create their own fully customized web sites and also offer a series of pre-customized templates</Text>
    <Title>Design templates</Title>
    <ImageGroup>
      <div><Image src={img_1} alt='Buzzfeat' /></div>
      <div><Image src={img_2} alt='Buzzfeat' /></div>
    </ImageGroup>
    <Title>Fashion templates</Title>
    <ImageGroup>
      <div><Image src={img_3} alt='Buzzfeat' /></div>
      <div><Image src={img_4} alt='Buzzfeat' /></div>
    </ImageGroup>

    <Image src={img_5} alt='Buzzfeat' />
    <Title>Fitness templates</Title>
    <ImageGroup>
      <div><Image src={img_6} alt='Buzzfeat' /></div>
      <div><Image src={img_7} alt='Buzzfeat' /></div>
    </ImageGroup>
    <Title>Library templates</Title>
    <ImageGroup>
      <div><Image src={img_8} alt='Buzzfeat' /></div>
      <div><Image src={img_9} alt='Buzzfeat' /></div>
    </ImageGroup>

   <Title>Store templates</Title>
    <Image src={img_10} alt='Buzzfeat' />

  </Project>
