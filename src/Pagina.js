import React from "react";
import collage from './photos/collage.png'
import { FaRegLightbulb } from 'react-icons/fa'
import { BiCog } from 'react-icons/bi'
import { GiArcheryTarget } from 'react-icons/gi'
import { BsCalendar2Plus } from 'react-icons/bs'
import { AiOutlineEyeInvisible } from 'react-icons/ai'
import { BiGitCompare } from 'react-icons/bi'
import { BsHandThumbsUp } from 'react-icons/bs'
import { MdOutlineHighQuality } from 'react-icons/md'
import foto from './photos/i2.jpg'
import foto2 from './photos/shapes_foto_3.png'
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    titulo: 'Menos doloroso',
    review: "A diferencia de un tratamiento de ortodoncia tradicional el cual puede causar dolor y laceraciones en los tejidos blandos de la boca. Los alineadores invisibles son suaves, cómodos y diseñados especialmente para cada paciente."
  },
  {
    titulo: 'Mas higiénico',
    review: "Un tratamiento de ortodoncia convencional con brackets y aditamentos adheridos a la superficie dental, impiden una higiene optima y retiene restos de alimentos y placa bacteriana. “Los alineadores invisibles son removibles” facilitando todo lo antes mencionado."
  },
  {
    titulo: 'Menos invasivo',
    review: "El tratamiento a través de alineadores es personalizado, rápido, fácil y seguro. No necesita de alambres ni pegamentos en la superficie dental."
  }]

const Pagina = () => {
  return (
    <>
      <div className="container header__cont header">
        <h5> Shapes-365</h5>
        <h2> Ortodoncia invisible</h2>
        <div className="foto_collage">
          <img src={collage}></img>
        </div>
      </div>

      <nav>
        <a href="#"><FaRegLightbulb /></a>
        <a href="#Como"><BiCog /></a>
        <a href="#Eres"><GiArcheryTarget /></a>
        <a href="#Cita"><BsCalendar2Plus /></a>
      </nav>

      <section id="que">
        <h5>Razones para elegir</h5>
        <h2>Shapes-365</h2>
        <div className='container que__container '>
          <div className='que__me'>
            <div className='que__me-image foto'>
              <img height={750} src={foto} />
            </div>
          </div>
          <div className='que__content'>
            <div className='que_cards'>
              <article className='que__card'>
                <AiOutlineEyeInvisible />
                <h5>Invisibles</h5>
                <small>Son completamente transparentes (cristalinos), por lo que son muy discretos para llevar en uso cotidiano.</small>

              </article>
              <article className='que__card'>
                <BiGitCompare />
                <h5>Removibles</h5>
                <small>Puedes comer y beber lo que quieras, además de poder cepillar cómodamente tus dientes sin interferencias. </small>
              </article>
              <article className='que__card'>
                <BsHandThumbsUp />
                <h5>Cómodos</h5>
                <small>
                  Son diseñados de forma individual para cada paciente, lo cual asegura confort y seguridad al momento de su uso y ajuste preciso.
                </small>
              </article>
              <article className='que__card'>
                <MdOutlineHighQuality />
                <h5>Calidad</h5>
                <small>
                  El Set-up es realizado en México, Guadalajara, combinando tecnologías de última generación para garantizar la precisión de nuestros tratamientos.
                </small>
              </article>

            </div>
          </div>
        </div>
      </section>

      <section id="como">
        <h5>Usos</h5>
        <h2>Ideal para los siguientes tratamientos</h2>
        <div className='container fake__container'>
          <div className='contenedor_foto'>
            <img className='foto_izq' src={foto2} />
          </div>
          <div className='container como__container'>
            <div className='usos__end'>
              <article className='details'>
                <div>
                  <h4>
                    Diastemas
                  </h4>
                </div>

              </article>
              <article className='details'>
                <div>
                  <h4>
                    Mordida Abierta.
                  </h4>
                </div>

              </article>
              <article className='details'>
                <div>
                  <h4>
                    Mordida Cruzada Anterior.
                  </h4>
                </div>

              </article>
              <article className='details'>
                <div>
                  <h4>
                    Mordida profunda.
                  </h4>
                </div>
              </article>
              <article className='details'>
                <div>
                  <h4>
                    Apiñamiento.
                  </h4>
                </div>
              </article>
              <article className='details'>
                <div>
                  <h4>
                    Retratamientos.
                  </h4>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section id='eres'>
        <h5>Eres</h5>
        <h2>Candidato?</h2>

        <Swiper className="container eres__container"
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >{
            data.map(({ titulo, name, review }, index) => {
              return (
                <SwiperSlide key={index} className='ere'>
                  <div className="client__avatar">
                    <h5>{titulo}</h5>
                  </div>
                  <h5 className='e__name'></h5>
                  <small className='review'>
                    {review}
                  </small>
                </SwiperSlide>

              )
            })
          }


        </Swiper>
      </section>

       <section id='cita'>
    <h5>Te interesa?</h5>
    <h2>Llamame!</h2>

    <div className="container cita__container">
      <div className="cita__options">
        <article className='cita__option'>
          <MdOutlineEmail className='cita_option-icon'/>
          <h4>Email</h4>
          <h5>inserteemail</h5>
          <a href='mailto:test@gmail.com'>Send an email</a>
        </article>
        <article className='cita__option'>
          <BsWhatsapp className='cita_option-icon'/>
          <h4>Whatsapp</h4>
          <h5>el numero</h5>
          <a href='https://api.whatsapp.com/send?phone=+523335840373' target="_blank">Send a whatsapp</a>
        </article>
          </div>
          </div>
          </section>
    </>
  )

}
export default Pagina;