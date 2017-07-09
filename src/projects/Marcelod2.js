import React from 'react'

import { Image, Project, Title, Text } from '../Case.js'
import cover from '../images/marcelod2/cover.jpg'
import img_1 from '../images/marcelod2/f1.jpg'
import img_2 from '../images/marcelod2/f2.jpg'

export default props =>
  <Project>
    <Title>Marcelo D2</Title>
    <Image src={cover} alt='Marcelo D2' />
    <Text>Marcelo D2 is a Brazilian rapper. A former vocalist of the band Planet Hemp, he started his solo career in 1998 with the album Eu Tiro É Onda.</Text>
    <Title>Hip Hop promotion</Title>
    <Text>The website was created to promote the action 'Meu Samba é Assim' where people sent tracks of music of their own.</Text>
    <Image src={img_1} alt='Hip Hop promotion' />
    <Text>The front-end of the site was developed in flash and the back-end in PHP. Re-creating an atmosphere that was consistent with the artist was a great challenge.</Text>
    <Image src={img_2} alt='Marcelo D2' />
  </Project>
