import React from "react";
import hero from "../assets/images/hero.jpeg";
import { Link } from "react-router-dom";
const Hero = () => {
  const social_media = [
    {
      image: "logo-instagram",
      link: "#instagram",
    },
    {
      image: "logo-github",
      link: "https://github.com/anoopvenkatesh23",
    },
    {
      image: "logo-linkedin",
      link: "https://www.linkedin.com/in/anoop-venkatesh/",
    },
  ];
  return (
    <section
      id="home"
      className="min-h-screen flex py-10 mt-9 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <img src={hero} alt="" className="md:w-8/12 h-full object-cover" />
      </div>
      <div className="flex-1 mt-4">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            I'm <span>Anoop Venkatesh</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            Frontend Developer
          </h4>
          <button className="btn-primary mt-8">Contact Me</button>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {social_media?.map((icon) => (
              <a
                key={icon.image}
                className="text-gray-600 hover:text-white cursor-pointer"
                href={icon.link}
                target="_blank"
              >
                <ion-icon name={icon.image}></ion-icon>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
