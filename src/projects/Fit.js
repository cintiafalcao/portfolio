import React from 'react'

import { Image, Project, Title, Text } from '../Case.js'
import cover from '../images/fit/cover.jpg'
import img_1 from '../images/fit/f1.jpg'
import img_2 from '../images/fit/f2.jpg'
import img_3 from '../images/fit/f3.jpg'
import img_4 from '../images/fit/f4.jpg'
import img_5 from '../images/fit/f5.jpg'

export default props =>
  <Project>
    <Title>Fit</Title>
    <Image src={cover} alt='Qranio Interna' />
    <Text>Maecenas condimentum, risus non pellentesque semper, risus felis porta magna, convallis ultrices massa lacus vel nulla. Integer consequat quam luctus tellus auctor, molestie lobortis justo lobortis. Phasellus vel facilisis metus. Integer non velit purus. Ut in aliquam sem. Ut egestas orci a dui porttitor varius. Nulla varius ex eget leo efficitur laoreet. Sed nec nisl vel tortor suscipit venenatis at eget eros. Etiam urna neque, pretium at sapien sed, dignissim porta neque. Morbi et lacus facilisis, laoreet sem non, elementum quam. Ut porttitor mollis lacus at imperdiet. Sed vitae convallis purus. Maecenas dictum odio eget efficitur bibendum. Suspendisse vestibulum dolor in finibus consequat.</Text>
    <Title>Choose palette</Title>
    <Text>Maecenas condimentum, risus non pellentesque semper, risus felis porta magna, convallis ultrices massa lacus vel nulla. Integer consequat quam luctus tellus auctor, molestie lobortis justo lobortis. Phasellus vel facilisis metus. Integer non velit purus. Ut in aliquam sem. Ut egestas orci a dui porttitor varius. Nulla varius ex eget leo efficitur laoreet. Sed nec nisl vel tortor suscipit venenatis at eget eros. Etiam urna neque, pretium at sapien sed, dignissim porta neque. Morbi et lacus facilisis, laoreet sem non, elementum quam. Ut porttitor mollis lacus at imperdiet. Sed vitae convallis purus. Maecenas dictum odio eget efficitur bibendum. Suspendisse vestibulum dolor in finibus consequat.</Text>
    <Image src={img_1} alt='Qranio Interna' />
    <Title>Design icons</Title>
    <Image src={img_2} alt='Qranio Interna' />
    <Title>Design icons</Title>
    <Image src={img_3} alt='Qranio Interna' />
    <Title>Design icons</Title>
    <Image src={img_4} alt='Qranio Interna' />
    <Title>Design icons</Title>
    <Image src={img_5} alt='Qranio Interna' />
  </Project>
