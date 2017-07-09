import React from 'react'

import { Image, Project, Title, Text, ImageGroup } from '../Case.js'
import cover from '../images/vamosdesenhar/cover.jpg'
import img_1 from '../images/vamosdesenhar/f1.jpg'
import img_2 from '../images/vamosdesenhar/f2.jpg'
import img_3 from '../images/vamosdesenhar/f3.jpg'
import video_cover1 from '../images/vamosdesenhar/video_cover1.jpg'
import video_cover2 from '../images/vamosdesenhar/video_cover2.jpg'
import video_cover3 from '../images/vamosdesenhar/video_cover3.jpg'
import video_cover4 from '../images/vamosdesenhar/video_cover4.jpg'

import porco_1 from '../images/vamosdesenhar/video/porco_01.mp4'
import porco_2 from '../images/vamosdesenhar/video/porco_02.mp4'
import porco_3 from '../images/vamosdesenhar/video/porco_03.mp4'
import porco_4 from '../images/vamosdesenhar/video/porco_04.mp4'

import elefante_1 from '../images/vamosdesenhar/video/elefante_01.mp4'
import elefante_2 from '../images/vamosdesenhar/video/elefante_02.mp4'
import elefante_3 from '../images/vamosdesenhar/video/elefante_03.mp4'
import elefante_4 from '../images/vamosdesenhar/video/elefante_04.mp4'

import polvo_1 from '../images/vamosdesenhar/video/polvo_01.mp4'
import polvo_2 from '../images/vamosdesenhar/video/polvo_02.mp4'
import polvo_3 from '../images/vamosdesenhar/video/polvo_03.mp4'
import polvo_4 from '../images/vamosdesenhar/video/polvo_04.mp4'

import desconfiado_1 from '../images/vamosdesenhar/video/desconfiado_01.mp4'
import desconfiado_2 from '../images/vamosdesenhar/video/desconfiado_02.mp4'
import desconfiado_3 from '../images/vamosdesenhar/video/desconfiado_03.mp4'
import desconfiado_4 from '../images/vamosdesenhar/video/desconfiado_04.mp4'

export default props =>
  <Project>
    <Title>Vamos Desenhar</Title>
    <Image src={cover} alt='Vamos Desenhar' />
    <Text>'Vamos Desenhar' is an mobile application designed to teach children to draw. With stylized figures animeted step by step to show how to draw. For each figure four animations were made.</Text>
    <ImageGroup>
        <div>
        <video width="480" height="480" controls poster={video_cover1}>
            <source
            src={porco_1}
            type="video/mp4"/>
        </video>
         </div>
         <div>
        <video width="480" height="480" controls poster={video_cover1}>
            <source
            src={porco_2}
            type="video/mp4"/>
        </video>
        </div>
    </ImageGroup>
    <ImageGroup>
        <div>
        <video width="480" height="480" controls poster={video_cover1}>
            <source
            src={porco_3}
            type="video/mp4"/>
        </video>
         </div>
         <div>
        <video width="480" height="480" controls poster={video_cover1}>
            <source
            src={porco_4}
            type="video/mp4"/>
        </video>
         </div>
    </ImageGroup>
    <Title>Jungle animals</Title>
    <Image src={img_1} alt='Jungle animals' />
    <ImageGroup>
        <div>
        <video width="480" height="480" controls poster={video_cover2}>
            <source
            src={elefante_1}
            type="video/mp4"/>
        </video>
         </div>
         <div>
        <video width="480" height="480" controls poster={video_cover2}>
            <source
            src={elefante_2}
            type="video/mp4"/>
        </video>
        </div>
    </ImageGroup>
    <ImageGroup>
        <div>
        <video width="480" height="480" controls poster={video_cover2}>
            <source
            src={elefante_3}
            type="video/mp4"/>
        </video>
         </div>
         <div>
        <video width="480" height="480" controls poster={video_cover2}>
            <source
            src={elefante_4}
            type="video/mp4"/>
        </video>
         </div>
    </ImageGroup>
    <Title>Sea animals</Title>
    <Image src={img_2} alt='Sea animals' />
    <ImageGroup>
        <div>
        <video width="480" height="480" controls poster={video_cover3}>
            <source
            src={polvo_1}
            type="video/mp4"/>
        </video>
         </div>
         <div>
        <video width="480" height="480" controls poster={video_cover3}>
            <source
            src={polvo_2}
            type="video/mp4"/>
        </video>
        </div>
    </ImageGroup>
    <ImageGroup>
        <div>
        <video width="480" height="480" controls poster={video_cover3}>
            <source
            src={polvo_3}
            type="video/mp4"/>
        </video>
         </div>
         <div>
        <video width="480" height="480" controls poster={video_cover3}>
            <source
            src={polvo_4}
            type="video/mp4"/>
        </video>
         </div>
    </ImageGroup>
    <Title>Faces</Title>
    <Image src={img_3} alt='Qranio Interna' />
    <ImageGroup>
        <div>
        <video width="480" height="480" controls poster={video_cover4}>
            <source
            src={desconfiado_1}
            type="video/mp4"/>
        </video>
         </div>
         <div>
        <video width="480" height="480" controls poster={video_cover4}>
            <source
            src={desconfiado_2}
            type="video/mp4"/>
        </video>
        </div>
    </ImageGroup>
    <ImageGroup>
        <div>
        <video width="480" height="480" controls poster={video_cover4}>
            <source
            src={desconfiado_3}
            type="video/mp4"/>
        </video>
        </div>
        <div>
        <video width="480" height="480" controls poster={video_cover4}>
            <source
            src={desconfiado_4}
            type="video/mp4"/>
        </video>
         </div>
    </ImageGroup>
  </Project>
