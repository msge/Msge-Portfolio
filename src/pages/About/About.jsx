/* eslint-disable react/no-unescaped-entities */

import { useEffect, useState } from "react"
import Testimonial from "./Testimonial";
import Service from "./Service";

const servicesData = [
  {
    icon: "/images/icon-design.svg",
    title: "Web design",
    description: "The most modern and high-quality design made at a professional level."
  },
  {
    icon: "/images/icon-dev.svg",
    title: "Web development",
    description: "High-quality development of sites at the professional level."
  },
  {
    icon: "/images/icon-app.svg",
    title: "Data Analysis",
    description: "Professional Data analysis for research projects both national and international."
  },
  {
    icon: "/images/icon-photo.svg",
    title: "Training",
    description: "I provide high-quality traing for training centers like Basic programming web developmenet and personal development at a professional level."
  }
];


const About = () => {
  const [testimonials , setTestimonials ] = useState([]);
  useEffect(()=> {
    fetch('testimonials.json').then(res => res.json()).then(data => {
      console.log(data)
      setTestimonials(data)
    });
  }, [])
  return (
    <article className="about  active" data-page="about">

    <header>
      <h2 className="h2 article-title">About me</h2>
    </header>

    <section className="about-text">
      <h1>  Welcome to my portfolio!</h1>
      <p>
      I'm a seasoned professional passionate about technology and education. With four years of experience in technical assistance and
       teaching at prestigious institutions, I've honed a diverse skill set.
      </p>

      <p>
    
      Proficient in programming languages like JAVA, Python, and C++, as well as web development tools such 
      as HTML, CSS, JS, PHP Laravel, and ReactJS, Mongo , Express, React and Node.
      I'm also skilled in hardware and software maintenance, including network installations.
</p>
<p>Currently pursuing a Master's degree in Artificial Intelligence and Data Science,
   my academic journey encompasses deep learning, machine learning, big data analytics, and computer vision.


   </p><p>
As a Junior Data Analyst at SART Research Consultants, I apply my analytical skills to impactful research projects.
 My certification for publication on Music Genre classification using deep learning highlights my commitment to 
 advancing knowledge.
</p><p>
Driven by a passion for innovation, I'm eager to collaborate on projects that demand technical expertise,
 educational insight, and a dedication to progress.

Let's connect and explore opportunities together.
      </p>
    </section>


    {/* <!--
      - service
    --> */}

    <section className="service">

      <h3 className="h3 service-title">What i'm doing</h3>

      <ul className="service-list">

      {servicesData.map((service, index) => (
            <Service
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}

      </ul>

    </section>


    {/* <!--
      - testimonials
    --> */}

    <section className="testimonials">

      <h3 className="h3 testimonials-title">Testimonials</h3>

      <ul className="testimonials-list has-scrollbar">

      {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              name={testimonial.name}
              avatar={testimonial.avatar}
              testimonial={testimonial.testimonial}
            />
          ))}

      </ul>

    </section>


    {/* <!--
      - clients
    --> */}

    <section className="clients">

      <h3 className="h3 clients-title">Clients</h3>

      <ul className="clients-list has-scrollbar">

        <li className="clients-item">
          <a href="#">
            <img src="images/wollo.jpeg" alt="client logo"/>
          </a>
        </li>

        <li className="clients-item">
          <a href="#">
            <img src="images/mekdel.jpeg" alt="client logo"/>
          </a>
        </li>

        
      </ul>

    </section>

  </article>
  )
}

export default About