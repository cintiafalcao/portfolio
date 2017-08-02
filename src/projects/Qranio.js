import React from 'react'

import { Image, Project, Title, Text, Link } from '../Case.js'
import cover from '../images/qranio/cover.jpg'
import icon from '../images/qranio/icon_set.png'
import paleta from '../images/qranio/paleta.png'
import welcome from '../images/qranio/laila.jpg'
import play from '../images/qranio/play.jpg'
import premium from '../images/qranio/premium.jpg'
import img_1 from '../images/qranio/f1.jpg'
import img_2 from '../images/qranio/f2.jpg'
import img_3 from '../images/qranio/f3.jpg'
import img_4 from '../images/qranio/f4.jpg'
import img_5 from '../images/qranio/f5.jpg'

export default props =>
  <Project>
    <Title>Qranio</Title>
    <Image src={cover} alt='Qranio' />
    <Text>Qranio is an online platform with the mission to make learning fun by stimulating users to learn at any moment with total mobility through games based on qualified, educational content while earning prizes with their intelligence.</Text>

<Text>Qranio is a free, quiz based game where our user’s gain – beyond knowledge – real world prizes and Incentives. Users have the opportunity to play, learn in a fun way, gain iQ$ (virtual currency) and exchange their iQ$ for real prizes (based on availability).
Practice your skills individually in a variety of categories based on your interests and for each correct answer you will be rewarded with iQ$! Not sure about the answer? Don’t worry, you still have a chance… Earn Neuros (virtual aid currency) each day you log in and use them to help you throughout the game.
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
    <Title>Qranio Premium</Title>
    <Image src={premium} alt='Prizes' />
    <Text>Monthly Neuros allowance - Monthly redeem limit - Exclusive prizes - No advertising - Exclusive categories</Text>
    <Title>Play</Title>
    <Image src={play} alt='play' />
    <Title>Prizes</Title>
    <Image src={img_5} alt='Prizes' />
    <Text>Users can redeem prizes anytime! Visit virtual store; choose your favorite product or service. Verify the stock availability and your redemption limit per month. Check if you have enough iQ$ to redeem the prize. The more you play, the richer you become! Play more to redeem more prizes!</Text>
    
  </Project>
