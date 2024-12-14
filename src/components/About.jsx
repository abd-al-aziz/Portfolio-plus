import React from "react";
// import aboutImg from "../assets/images/about.png";
const About = () => {
  const info = [
    { text: "Years experience", count: "04" },
    { text: "Completed Projects", count: "24" },
    { text: "Companies Work", count: "06" },
  ];
  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-8xl font-semibold text-right pr-40">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg text-right pr-40">My introduction</p>


        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <p className="text-justify leading-7 w-11/12 mx-auto">
                Dedicated Full-Stack Developer with hands-on experience increating responsive web applications using
                HTML, CSS, JavaScript,PHP, and MySQL. Proficient in both front-end and back-end development, with strong
                collaborative skills and experience in agile methodologies. Recognized for delivering high-quality, user
                centered applications and adapting effectively to new challenges. Currently seeking an opportunity to
                leverage technical expertise and problem-solving abilities within a dynamic team environment.
              </p>
              <div className="flex mt-10 items-center gap-7">
                {info.slice(0, 2).map((content, index) => (
                  <div key={index}>
                    <h3 className="md:text-4xl text-2xl font-semibold text-white">
                      {index === 0 ? "01+" : "4+"}
                      <span className="text-cyan-600"></span>
                    </h3>
                    <span className="md:text-base text-xs">{content.text}</span>
                  </div>
                ))}
              </div>

              <br />
              <br />
              <a href="../AbdalazizAtyeh-FullStackDeveloper.pdf" download>
                <button className="btn-primary">Download CV</button>
              </a>
            </div>
          </div>
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
              <img
                // src={aboutImg}
                alt=""
                className="w-full object-cover bg-cyan-600 rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
