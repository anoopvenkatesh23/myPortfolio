import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/images/drive-test.png";
import project2 from "../assets/images/rate-myprofessor.png";
import project3 from "../assets/images/ecommerce-react.png";
import project4 from "../assets/images/woo-commerce.png";
import project5 from "../assets/images/note-manager.png";
import project6 from "../assets/images/login-system.png";
import project7 from "../assets/images/jumbled-words.png";
import project8 from "../assets/images/onestop-shop.png";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Project = () => {
  const projects = [
    {
      img: project1,
      name: "Drive Test",
      github_link: "https://github.com/anoopvenkatesh23/driveTest",
      live_link: "#",
    },
    {
      img: project2,
      name: "Rate My Professor",
      github_link: "",
      live_link: "https://rate-my-professor-rmp.vercel.app/",
    },
    {
      img: project3,
      name: "React ecommerce",
      github_link: "https://github.com/anoopvenkatesh23/ecommerce-reactJS",
      live_link: "",
    },
    {
      img: project4,
      name: "Woo commerce",
      github_link: "https://github.com/anoopvenkatesh23/woocommerce",
      live_link: "https://dev-anoop-ecommerce.pantheonsite.io/",
    },
    {
      img: project5,
      name: "Note Manager",
      github_link: "https://github.com/anoopvenkatesh23/noteManager-flask",
      live_link: "",
    },
    {
      img: project6,
      name: "Login system",
      github_link: "https://github.com/anoopvenkatesh23/loginSystem-flask",
      live_link: "",
    },
    {
      img: project7,
      name: "Jumbled words",
      github_link: "https://github.com/anoopvenkatesh23/jumbledWords-Flask",
      live_link: "",
    },
    {
      img: project8,
      name: "One stop shop",
      github_link: "https://github.com/anoopvenkatesh23/onestopStop-flask",
      live_link: "",
    },
  ];
  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
        <div className="w-full">
          <Swiper
            slidesPerview={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img src={project_info.img} alt="" className="rounded-lg" />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Github
                    </a>
                    <a
                      href={project_info.live_link}
                      target="_blank"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Project;
