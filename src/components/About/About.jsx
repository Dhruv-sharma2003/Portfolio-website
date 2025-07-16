import React from 'react';
import Tilt from 'react-parallax-tilt';
import { Typewriter } from 'react-simple-typewriter';
import me from '../../assets/me.jpg';
const About = () => {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 px-[7vw] py-16 mt-24"
      id="about"
    >
      <div>
        <h1 className='text-[#2E2E2E] poppins-extrabold-italic text-4xl md:text-5xl leading-tight'>
          Hi, I am <br /> Dhruv Sharma
        </h1>
        <h2 className="text-[#9F3D3D] text-2xl mt-4 poppins-semibold">
          I am a{' '}
          <Typewriter
            words={['Computer Science Student']}
            loop={true}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h2>
        <p className="text-[#4A4A4A] mt-4 patrick-hand-regular text-2xl">
         Highly motivated and detail-oriented B. Tech third-year student with a strong foundation in Python, DSA, Machine learning, data analysis in AI ML. <br />I also have working knowledge of C++ and MySQL. <br /> Passionate about leveraging technology to develop innovative solutions and optimize system performance. <br /> Strong analytical mindset combined with excellent teamwork and communication skills. <br /> Eager to contribute technical expertise in a dynamic and challenging work environment while continuously enhancing knowledge and skill set. </p>
        <a
          href="./My-Resume.pdf" 
          download
          className="inline-block mt-8 px-6  py-3  bg-[#9F3D3D] text-white text-2xl font-semibold rounded-lg shadow-md transition duration-300 ease-in-out border-3 border-black  hover:bg-[#832f2f]"
        >
          Download CV
        </a>
      </div>

      <Tilt
  tiltMaxAngleX={15}
  tiltMaxAngleY={15}
  perspective={1000}
  scale={1.05}
  transitionSpeed={1000}
  gyroscope={true}
  className="flex justify-center items-center"
>
  <img
     src={me} 
    alt="Dhruv Sharma"
    className="rounded-full shadow-lg w-96 h-120 object-cover border-3 border-black"
  />
</Tilt>

    </div>
  );
};

export default About;
