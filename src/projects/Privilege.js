import React from 'react'

import { Image, Project, Title, Text } from '../Case.js'
import cover from '../images/privilege/cover.jpg'
import img_1 from '../images/privilege/f1.jpg'

export default props =>
  <Project>
    <Title>Privilège</Title>
    <Image src={cover} alt='Privilège' />
    <Text>'Á procura da batida perfeita' was an application created by the Nightclub house, Privilège. You created tracks of music using the tools available in the app, recorded and sent. The name is derived from a song title of Brazilian singer-songwriter Marcelo D2</Text>
    <Title>Á procura da batida perfeita</Title>
    <Text>Clicking on the instruments the reciprocal sounds were started or interrupted, after recording the tracks their participated in a selection, it was possible to leave your tracks available in the gallery of the site for everyone.</Text>
    <Image src={img_1} alt='Privilège' />
  </Project>
