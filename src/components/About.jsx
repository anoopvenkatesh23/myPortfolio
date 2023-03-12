import React from "react";
import aboutImg from "../assets/images/about.png";
const About = () => {
  const info = [
    { text: "Years experience", count: "04" },
    { text: "Completed Projects", count: "24" },
    { text: "Companies Worked", count: "01" },
  ];
  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">My introduction</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <p className="text-justify leading-7 w-11/12 mx-auto">
                A Junior Full Stack Developer with over 6 years of academic and
                4 years of hands-on experience in computer programming, I am
                passionate about all things related to software development. I
                am well-versed in a variety of programming languages, including
                JavaScript, HTML5, CSS3, jQuery, React, Node.js, Python, and
                Flask. I am a skilled and highly motivated developer with an
                ability to adapt quickly to new environments and think
                creatively. I have a proven track record of success in both
                independent and collaborative projects, and I am a highly
                effective communicator, both verbally and in writing. My
                problem-solving skills are a significant asset, which is evident
                in the results of my work. I have experience with database
                management, including SQL (MySQL & SQLite3) and NoSQL (MongoDB)
                I have a good understanding of RESTful API principles and
                experience with building and consuming APIs. I am proficient in
                Git and other version control systems and have knowledge of
                common web application security vulnerabilities and experience
                with implementing security measures. I am skilled in project
                management, able to manage and prioritize tasks and collaborate
                with a team. I have a solid understanding of Agile development
                methodologies, such as Scrum, and I have a good understanding of
                computer science concepts, such as data structures, object
                oriented programming and algorithms. I am committed to staying
                up to date with the latest technologies and best practices in
                the field, and I am constantly looking for new ways to improve
                my skills and knowledge.
              </p>
              <div className="flex mt-10 items-center justify-center gap-7">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="md:text-4xl text-2xl font-semibold text-white">
                      {content.count}
                      <span className="text-cyan-600"></span>{" "}
                    </h3>
                    <span className="md:text-base text-xs">{content.text}</span>
                  </div>
                ))}
              </div>
              <br />
              <br />
              <a
                className="items-center flex justify-center"
                href="./src/assets/Anoop_Venkatesh.pdf"
                download
              >
                <button className="btn-primary">Download CV</button>
              </a>
            </div>
          </div>
          {/* <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
              <img
                src={aboutImg}
                alt=""
                className="w-full object-cover bg-cyan-600 rounded-xl"
              />
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default About;
