import React from 'react'

import { Image, Project, Title, Text, Link } from '../Case.js'
import cover from '../images/qranio/cover.jpg'
import icon from '../images/qranio/icon_set.png'
import paleta from '../images/qranio/paleta.png'
import welcome from '../images/qranio/laila.jpg'
import play from '../images/qranio/play.jpg'
import img_1 from '../images/qranio/f1.jpg'
import img_2 from '../images/qranio/f2.jpg'
import img_3 from '../images/qranio/f3.jpg'
import img_4 from '../images/qranio/f4.jpg'
import img_5 from '../images/qranio/f5.jpg'

export default props =>
  <Project>
    <Title>Qranio</Title>
    <Image src={cover} alt='Qranio' />
    <Text>Qranio is an online platform where people can check their knowledge and get prizes!

By signing up, users can choose a category and answer questions. For each correct answer they will receive a specific amount of iQ$ (virtual currency).
Take a look: <Link href='https://www.qranio.com/'>https://www.qranio.com/</Link></Text>

    <Title>Welcome screen</Title>
    <Image src={welcome} alt='welcome' />

    <Title>Icongraphy</Title>
    <Image src={icon} alt='icon' />
    <Title>Palette</Title>
    <Image src={paleta} alt='paleta' />

    <Title>Home</Title>
    <Image src={img_1} alt='Home' />
    <Title>Profile</Title>
    <Image src={img_2} alt='Profile' />
    <Text>The profile has yours statics with the most played categories yours best results. Just like your friends and redeem prizes.</Text>
    <Title>Categories</Title>
    <Image src={img_3} alt='Categories' />
    <Text>All multiple choice questions are displayed in different categories, such as geography, history, sports, literature, TV, movies, and automobiles. With the virtual currency iQ$, users can buy tickets, cosmetics, electronics, clothes, coupons, services, courses, etc.</Text>
    <Title>Play</Title>
    <Image src={play} alt='play' />
    <Title>Prizes</Title>
    <Image src={img_5} alt='Prizes' />
    <Text>Users can redeem prizes anytime! Visit virtual store; choose your favorite product or service. Verify the stock availability and your redemption limit per month. Check if you have enough iQ$ to redeem the prize. The more you play, the richer you become! Play more to redeem more prizes!</Text>
  </Project>
