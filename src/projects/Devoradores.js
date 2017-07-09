import React from 'react'

import { Image, Project, Title, Text } from '../Case.js'
import cover from '../images/devoradores/cover.jpg'
import img_1 from '../images/devoradores/f1.jpg'
import img_2 from '../images/devoradores/f2.jpg'
import img_3 from '../images/devoradores/f3.jpg'
import img_4 from '../images/devoradores/f4.jpg'
import img_5 from '../images/devoradores/f5.jpg'

export default props =>
  <Project>
    <Title>Devoradores de Livros</Title>
    <Image src={cover} alt='Devoradores de Livros' />
    <Text>Devoradores de Livros is a reading habit site that provides a quiz on children's literature books and virtually rewards children according to their performance.</Text>
    <Title>How it works</Title>
    <Text>After reading a book in the library the child looks for whether a quiz about this book is already available on the site.The Quiz is a questionnaire with multiple choice questions about the intent of the text.
After answering the quiz the child will be virtually rewarded and can customize and play with their own mascot.</Text>
    <Image src={img_1} alt='Devoradores de Livros' />
    <Title>Clothes</Title>
    <Image src={img_2} alt='Clothes' />
    <Title>Special cup accessories</Title>
    <Image src={img_3} alt='Cup accessories' />
    <Title>Accessories</Title>
    <Image src={img_4} alt='Accessories' />
    <Title>Customize the avatar</Title>
    <Image src={img_5} alt='Avatar' />
  </Project>
