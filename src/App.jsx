import "./App.css";
import Line from "./assets/img/Line 2.svg";
import HeroImage from "./assets/img/heroImage.png";
import GithubIcon from "./assets/img/GitHub_Icon.png";
import LinkedinIcon from "./assets/img/Linkedin_Icon.png";
import DribbleIcon from "./assets/img/Dribble_Icon.png";
import FigmaIcon from "./assets/img/Figma_Icon.png";
import Code from "./assets/img/code.png";
import Design from "./assets/img/design.png";
import Quality from "./assets/img/quality.png";
import { useEffect, useRef, useState } from "react";
import ReactApexChart from "react-apexcharts";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import HamburgerMenu from "./components/HamburgerMenu";

function App() {
  // Add this state and data near the start of the App component
  const [selectedEducation, setSelectedEducation] = useState("Bachelor");
  const scrollContainerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    const container = scrollContainerRef.current;

    if (!container) return;

    const handleScroll = () => {
      const scrollY = container.scrollTop;
      const firstPageHeight = container.clientHeight;

      // Show header on the first page only
      setIsVisible(scrollY < firstPageHeight);
    };

    // Attach scroll listener to the parent container
    container.addEventListener("scroll", handleScroll);

    // Ensure visibility is correct on initial render
    handleScroll();

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const educationData = {
    "0-10": {
      institution: "School Name",
      location: "City, Country",
      course: "Primary & Secondary Education",
      description:
        "Completed my primary and secondary education with distinction, focusing on core subjects including Mathematics, Science, and Languages. Participated in various extracurricular activities and maintained excellent academic performance throughout these foundational years.",
    },
    "11-12": {
      institution: "Junior College Name",
      location: "City, Country",
      course: "Higher Secondary Education - Science",
      description:
        "Pursued Science stream with focus on Physics, Chemistry, and Mathematics. Developed strong analytical and problem-solving skills while maintaining academic excellence. Participated in various science competitions and projects.",
    },
    Bachelor: {
      institution: "Parul University",
      location: "Gujarat, India",
      course: "Btech- CSE(AI)",
      description:
        "UI/UX Developer with a passion for design and an eye for detail, Hub of creativity Expert in using tools like Figma. Canva Adobe, PicsArt and other to deliver compelling visual solutions that improve user experiences. Love to solve problems, design and implement real-world applications. Collaborates well with all-across from concepts, to class, to final designs. Used to collaborating on genuine projects, activating functional specifications into pleasant interaction flows.",
    },
  };
  return (
    <>
      <div
        ref={scrollContainerRef}
        className="lg:h-screen w-full  overflow-y-scroll lg:snap-y lg:snap-mandatory scroll-smooth no-scrollbar px-6 lg:px-12 space-y-8 lg:space-y-25"
      >
        {/* Section 1 */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className=" max-lg:px-[3rem]    lg:h-screen flex items-center justify-center text-white text-4xl lg:snap-start"
        >
          {/* Navbar */}
          <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-full"
            }  max-lg:fixed lg:absolute  z-[9999] p-5 backdrop-blur-[10px]  lg:px-12  lg:py-7 top-0 flex  items-center  justify-between w-full transition-transform duration-400`}
          >
            {/* Logo */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <p className="text-[2rem]  font-semibold  lg:text-5xl lg:font-semibold text-[#93E508] cursor-pointer">
                Shashitha
              </p>
            </motion.div>

            {/* Hamburger Menu */}
            <HamburgerMenu />

            {/* Navlinks */}
            <div className="hidden lg:flex items-center gap-7">
              {["Home", "Service", "Education", "About"].map((item, index) => (
                <motion.div
                  key={index}
                  className="relative group cursor-pointer"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <p className="relative text-3xl font-semibold">{item}</p>
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#93E508] transition-all duration-300 group-hover:w-full"></span>
                </motion.div>
              ))}
              <motion.button
                className="text-3xl font-semibold rounded-full px-5 py-2 text-[#051A1D] bg-[#93E508] cursor-pointer glow"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.7 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.button>
            </div>
          </motion.header>
          {/* Hero Section */}
          <div className="   flex max-lg:flex-col-reverse  lg:mt-24 items-center justify-between">
            {/* Left Part */}
            <motion.div
              className=" lg:w-1/2 max-lg:mt-5"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.div
                className="flex gap-2 items-center max-lg:px-3 text-xl lg:text-2xl font-semibold text-[#93E508]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <img src={Line} className=" size-7 lg:size-16" alt="Line" />
                <span>Hello</span>
              </motion.div>
              <motion.p
                className="text-3xl max-lg:px-3  text-left lg:text-5xl font-bold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <span> I am </span>
                <span className="text-[#93E508]">Shashitha Pitchuka</span>
              </motion.p>
              <motion.p
                className="flex justify-center my-2 gap-4 text-2xl max-lg:px-3 max-lg:justify-start lg:text-3xl font-semibold max-w-[553px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                Developer <span>|</span> Designer
              </motion.p>
              <motion.p
                className=" text-lg max-lg:px-3 lg:text-xl my-5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.4 }}
              >
                I love to create and design things especially on computer. My
                passion towards drawing and sketching drew me to this field and
                make me feel that this is correct for me. I love UI UX . I also
                have hands on various tools such as figma and wordpress etc
              </motion.p>
              {/* Social Icons */}
              <motion.div
                className="flex max-lg:px-3 my-3 gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.6 }}
              >
                {[GithubIcon, LinkedinIcon, DribbleIcon, FigmaIcon].map(
                  (icon, index) => (
                    <motion.a
                      key={index}
                      href=""
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <img
                        src={icon}
                        className="max-lg:size-8"
                        alt={`social-icon-${index}`}
                      />
                    </motion.a>
                  )
                )}
              </motion.div>
              {/* Contact me Btn */}
              <motion.button
                className="bg-white rounded-full max-lg:ml-3 px-4 py-2 lg:px-8 lg:py-2 text-xl lg:text-2xl font-semibold my-4 text-[#051A1D] hover:bg-[#93E508] hover:text-white glow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.8 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.button>
            </motion.div>
            {/* Right Part */}
            <motion.img
              src={HeroImage}
              className="max-lg:mt-20 max-lg:max-w-[350px] lg:size-[38%]"
              alt="heroImage"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
            />
          </div>
        </motion.section>
        {/* Section 2 */}
        <section className="lg:h-screen   flex flex-col items-center justify-center lg:gap-4 text-white lg:text-4xl lg:snap-start">
          <motion.div
            className="flex gap-4 mb-5 lg:mb-15"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <motion.img
              className="max-lg:size-10"
              src={Line}
              alt="Line"
              animate={{
                rotate: window.innerWidth <= 1024 ? 0 : [0, 10, 0],
              }}
              transition={
                window.innerWidth <= 1024
                  ? {}
                  : { repeat: Infinity, duration: 3, ease: "easeInOut" }
              }
            />
            <motion.p
              className="text-3xl lg:text-5xl text-[#93E508] font-semibold cursor-pointer relative before:content-[''] before:absolute before:w-0 before:h-[3px] before:bg-[#93E508] before:left-0 before:bottom-0 before:transition-all before:duration-300 hover:before:w-full"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Feature
            </motion.p>
          </motion.div>
          {/* Cards */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 my-0 gap-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ staggerChildren: 0.2, delayChildren: 0.3 }}
          >
            {/* Card 1 */}
            <motion.div
              className="card"
              initial={{ opacity: 0, y: window.innerWidth <= 1024 ? 0 : 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -20, backgroundColor: "#93E508", color: "#000" }}
            >
              <motion.img
                src={Code}
                className="mx-auto"
                alt="code_image"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
              />
              <motion.p
                className="text-3xl lg:text-5xl font-semibold mx-auto text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Developer
              </motion.p>
              <motion.p
                className="text-lg mx-auto text-center tracking-tighter"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                UI/UX Developer with a passion for design and an eye for detail,
                Hub of creativity Expert in using tools like Figma. Canva Adobe,
                PicsArt and other to deliver compelling visual solutions that
                improve user experiences.solutions that improve user
                experiences.
              </motion.p>
            </motion.div>
            {/* Card 2 */}
            <motion.div
              className="card flex flex-col items-center"
              initial={{ opacity: 0, y: window.innerWidth <= 1024 ? 0 : 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: 0, backgroundColor: "#93E508", color: "#000" }}
            >
              <motion.div
                className="bg-[#93E508] rounded-full size-20"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                animate={{
                  boxShadow: [
                    "0px 0px 0px rgba(147, 229, 8, 0)",
                    "0px 0px 20px rgba(147, 229, 8, 0.7)",
                    "0px 0px 0px rgba(147, 229, 8, 0)",
                  ],
                }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <img src={Design} className="mx-auto" alt="code_image" />
              </motion.div>
              <motion.p
                className="text-3xl lg:text-5xl text-nowrap font-semibold mx-auto text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Creative Design
              </motion.p>
              <motion.p
                className="text-lg mx-auto text-center tracking-tighter"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                UI/UX Developer with a passion for design and an eye for detail,
                Hub of creativity Expert in using tools like Figma. Canva Adobe,
                PicsArt and other to deliver compelling visual solutions that
                improve user experiences.solutions that improve user
                experiences.
              </motion.p>
            </motion.div>
            {/* Card 3 */}
            <motion.div
              className="card group"
              initial={{ opacity: 0, y: window.innerWidth <= 1024 ? 0 : 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -20, backgroundColor: "#93E508", color: "#000" }}
            >
              <motion.img
                src={Quality}
                className="mx-auto group-hover:bg-black rounded-full"
                alt="code_image"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
              />
              <motion.p
                className="text-3xl lg:text-5xl font-semibold mx-auto text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Developer
              </motion.p>
              <motion.p
                className="text-lg mx-auto text-center tracking-tighter"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                UI/UX Developer with a passion for design and an eye for detail,
                Hub of creativity Expert in using tools like Figma. Canva Adobe,
                PicsArt and other to deliver compelling visual solutions that
                improve user experiences.solutions that improve user
                experiences.
              </motion.p>
            </motion.div>
          </motion.div>
        </section>
        {/* Section 3 */}
        <motion.section
          className="lg:h-screen  flex flex-col items-center justify-center text-white lg:text-4xl lg:snap-start"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="flex gap-4 mb-3 lg:mb-10"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <motion.img
              src={Line}
              className="max-lg:size-10"
              alt="Line"
              animate={{ rotate: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            />
            <motion.p
              className="text-3xl lg:text-5xl text-[#93E508] font-semibold cursor-pointer relative before:content-[''] before:absolute before:w-0 before:h-[3px] before:bg-[#93E508] before:left-0 before:bottom-0 before:transition-all before:duration-300 hover:before:w-full"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              About
            </motion.p>
          </motion.div>
          <motion.p
            className="text-center text-4xl lg:text-6xl font-semibold mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Shashitha Pitchuka
          </motion.p>
          <motion.p
            className="text-center text-lg tracking-tighter lg:my-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            UI/UX Developer with a passion for design and an eye for detail, Hub
            of creativity Expert in using tools like Figma. Canva Adobe, PicsArt
            and other to deliver compelling visual solutions that improve user
            experiences. Love to solve problems, design and implement real-world
            applications. Collaborates well with all-across from concepts, to
            class, to final designs. Used to collaborating on genuine projects,
            activating functional specifications into pleasant interaction
            flows.UI/UX Developer with a passion for design and an eye for
            detail, Hub of creativity Expert in using tools like Figma. Canva
            Adobe, PicsArt and other to deliver compelling visual solutions that
            improve user experiences. Love to solve problems, design and
            implement real-world applications. Collaborates well with all-across
            from concepts, to class, to final designs. Used to collaborating on
            genuine projects, activating functional specifications into pleasant
            interaction flows.UI/UX Developer with a passion for design and an
            eye for detail, Hub of creativity Expert in using tools like Figma.
            Canva Adobe, PicsArt and other to deliver compelling visual
            solutions that improve user experiences. Love to solve problems,
            design and implement real-world applications. Collaborates well with
            all-across from concepts, to class, to final designs. Used to
            collaborating on genuine projects, activating functional
            specifications into pleasant interaction flows.UI/UX Developer with
            a passion for design and an eye for detail, Hub of creativity Expert
            in using tools like Figma. Canva Adobe, PicsArt and other to deliver
            compelling visual solutions that improve user experiences. Love to
            solve problems, design and implement real-world applications.
          </motion.p>
          <motion.button
            className="bg-[#93E508] text-[#051A1D] font-semibold glow px-10 py-4 rounded-full my-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.button>
        </motion.section>
        {/* Section 4 */}
        <motion.section
          className="lg:h-screen  flex flex-col items-center justify-center text-white lg:text-4xl lg:snap-start"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="flex gap-4 mb-3 lg:mb-10"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <motion.img
              src={Line}
              className="max-lg:size-10"
              alt="Line"
              animate={window.innerWidth >= 1024 ? { rotate: [0, 10, 0] } : {}}
              transition={
                window.innerWidth >= 1024
                  ? { repeat: Infinity, duration: 3, ease: "easeInOut" }
                  : {}
              }
            />
            <motion.p
              className="text-3xl lg:text-5xl text-[#93E508] font-semibold cursor-pointer relative before:content-[''] before:absolute before:w-0 before:h-[3px] before:bg-[#93E508] before:left-0 before:bottom-0 before:transition-all before:duration-300 hover:before:w-full"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Education
            </motion.p>
          </motion.div>
          <motion.p
            className="text-center text-4xl lg:text-6xl font-semibold mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            My Education Life{" "}
          </motion.p>
          <motion.div
            className=" max-lg:flex-col-reverse max-lg:gap-5 flex  items-center justify-evenly w-full my-4 lg:my-7"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Left Section */}
            <motion.div
              className="flex max-lg:w-[90%] max-lg:gap-4 lg:flex-col lg:gap-10"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {Object.keys(educationData).map((level, index) => (
                <motion.div
                  key={level}
                  onClick={() => setSelectedEducation(level)}
                  className={`cursor-pointer glow active:scale-90 select-none font-bold text-black text-center w-full p-2 rounded-xl ${
                    selectedEducation === level
                      ? "bg-[#93E508] text-white"
                      : "bg-white"
                  }`}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {level}
                </motion.div>
              ))}
            </motion.div>
            {/* Right Section */}
            <motion.div
              className="bg-white lg:space-y-5 text-black p-5 rounded-xl  max-lg:w-[90%]  w-[80%] h-[300px] overflow-y-auto no-scrollbar"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              animate={{
                boxShadow: [
                  "0px 0px 0px rgba(147, 229, 8, 0)",
                  "0px 0px 20px rgba(147, 229, 8, 0.3)",
                  "0px 0px 0px rgba(147, 229, 8, 0)",
                ],
              }}
            >
              <motion.h1
                className="font-bold text-xl lg:text-3xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                key={selectedEducation + "-institution"}
                transition={{ duration: 0.3 }}
              >
                {educationData[selectedEducation].institution}
              </motion.h1>
              <motion.p
                className="lg:text-[20px] text-[#93E508] font-bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                key={selectedEducation + "-location"}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                {educationData[selectedEducation].location}
              </motion.p>
              <motion.p
                className=" text-[18px] lg:text-[25px] font-bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                key={selectedEducation + "-course"}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                Course: {educationData[selectedEducation].course}
              </motion.p>
              <motion.p
                className="text-[15px] lg:ext-[22px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                key={selectedEducation + "-description"}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                {educationData[selectedEducation].description}
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Section 5 */}
        <motion.section
          className="min-h-screen flex flex-col items-center justify-center text-white text-4xl lg:snap-start"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="flex gap-4 mb-5 mt-5 lg:mt-0"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <motion.img
              src={Line}
              alt="Line"
              className="max-lg:w-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
            <motion.p
              className="text-3xl lg:text-5xl text-[#93E508] font-semibold cursor-pointer relative before:content-[''] before:absolute before:w-0 before:h-[3px] before:bg-[#93E508] before:left-0 before:bottom-0 before:transition-all before:duration-300 hover:before:w-full"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Skills
            </motion.p>
          </motion.div>
          <motion.p
            className="text-center text-3xl lg:text-5xl font-semibold lg:my-5"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            My Skills
          </motion.p>

          {/* Skills Grid */}
          <motion.div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full px-2 lg:px-5">
            {[
              { name: "Figma", percentage: 95 },
              { name: "Canvas", percentage: 95 },
              { name: "HTML", percentage: 9 },
              { name: "CSS", percentage: 5 },
              { name: "Python", percentage: 95 },
              { name: "Power BI", percentage: 95 },
              { name: "React", percentage: 15 },
              { name: "JavaScript", percentage: 75 },
            ].map((skill, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center justify-center p-2 lg:p-4"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <ReactApexChart
                    options={{
                      chart: {
                        type: "radialBar",
                        background: "transparent",
                        animations: {
                          enabled: true,
                          easing: "easeinout",
                          speed: 800,
                          animateGradually: {
                            enabled: true,
                            delay: 150,
                          },
                          dynamicAnimation: {
                            enabled: true,
                            speed: 350,
                          },
                        },
                      },
                      plotOptions: {
                        radialBar: {
                          startAngle: -135,
                          endAngle: 135,
                          hollow: {
                            margin: 0,
                            size: "70%",
                            background: "transparent",
                          },
                          track: {
                            background: "#1a1a1a",
                            strokeWidth: "97%",
                            margin: 2,
                            dropShadow: {
                              enabled: false,
                            },
                          },
                          dataLabels: {
                            name: {
                              show: false,
                            },
                            value: {
                              color: "#fff",
                              fontSize:
                                window.innerWidth <= 768 ? "1rem" : "1.5rem",
                              fontWeight: 600,
                              offsetY: 8,
                              formatter: function (val) {
                                return val + "%";
                              },
                            },
                          },
                        },
                      },
                      fill: {
                        type: "gradient",
                        gradient: {
                          shade: "dark",
                          type: "horizontal",
                          shadeIntensity: 0.5,
                          gradientToColors: ["#93E508"],
                          inverseColors: true,
                          opacityFrom: 1,
                          opacityTo: 1,
                          stops: [0, 100],
                        },
                      },
                      stroke: {
                        lineCap: "round",
                      },
                      colors: ["#93E508"],
                    }}
                    series={[skill.percentage]}
                    type="radialBar"
                    height={window.innerWidth <= 768 ? 150 : 200}
                  />
                </motion.div>
                <motion.p
                  className="mt-2 lg:mt-4 text-lg lg:text-2xl font-semibold text-white"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
                  {skill.name}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Section 6 */}
        <motion.section
          className="lg:h-screen  flex flex-col items-center justify-center text-white lg:text-4xl lg:snap-start"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="flex my-5 lg:mt-28 gap-4 lg:mb-5"
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            <motion.img
              className="max-lg:size-10"
              src={Line}
              alt="Line"
              animate={{ rotate: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            />
            <motion.p
              className="text-3xl lg:text-5xl text-[#93E508] font-semibold cursor-pointer relative before:content-[''] before:absolute before:w-0 before:h-[3px] before:bg-[#93E508] before:left-0 before:bottom-0 before:transition-all before:duration-300 hover:before:w-full"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Projects
            </motion.p>
          </motion.div>
          <p className="text-center text-4xl mb-8 lg:text-5xl font-semibold lg:mb-5">
            My Recent Work
          </p>

          {/* Filter Buttons */}
          <div className="flex max-lg:justify-between  lg:gap-4 mb-10  max-lg:w-[95%] ">
            {["All", "UI/UI", "Web Apps", "Mobile Apps"].map(
              (filter, index) => (
                <button
                  key={index}
                  className={`lg:px-6 lg:py-2 max-md:text-sm py-2 max-lg:w-[20%] rounded-full lg:text-lg font-semibold transition-all duration-300
                  ${
                    index === 0
                      ? "bg-[#93E508] text-white"
                      : "bg-white text-black hover:bg-[#93E508] hover:text-white"
                  }`}
                >
                  {filter}
                </button>
              )
            )}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl px-4">
            {[
              { title: "Project 1", category: "UI/UX" },
              { title: "Project 2", category: "UI/UX" },
              { title: "Project 3", category: "UI/UX" },
              { title: "Project 4", category: "UI/UX" },
              { title: "Project 5", category: "UI/UX" },
              { title: "Project 6", category: "UI/UX" },
            ].map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl cursor-pointer transition-all duration-300 hover:scale-105"
              >
                {/* Placeholder Image */}
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-800 to-gray-900 w-full">
                  <img
                    src={`https://placehold.co/600x400/1a1a1a/93E508?text=${project.title}`}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-lg text-[#93E508]">{project.category}</p>
                  <div className="flex gap-4 mt-4">
                    <button className="px-4 py-2 bg-[#93E508] text-black text-sm font-semibold rounded-full hover:bg-white transition-colors duration-300">
                      Live Demo
                    </button>
                    <button className="px-4 py-2 bg-white text-black text-sm font-semibold rounded-full hover:bg-[#93E508] transition-colors duration-300">
                      Source Code
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Section 7 */}
        <motion.section
          className="lg:h-screen  flex flex-col items-center justify-center text-white lg:text-4xl lg:snap-start"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="flex gap-4 mb-5 "
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            <motion.img
              className="max-lg:size-10"
              src={Line}
              alt="Line"
              animate={{ rotate: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            />
            <motion.p
              className="text-3xl mb-10 lg:text-5xl text-[#93E508] font-semibold cursor-pointer relative before:content-[''] before:absolute before:w-0 before:h-[3px] before:bg-[#93E508] before:left-0 before:bottom-0 before:transition-all before:duration-300 hover:before:w-full"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Services
            </motion.p>
          </motion.div>
          {/* Services Card */}
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-0 gap-10">
            {/* Card 1 */}
            <motion.div
              className="card-feature"
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src={Code} className="mx-auto" alt="code_image" />
              <p className="text-xl font-semibold mx-auto text-center">
                Developer
              </p>
              <p className="text-lg mx-auto text-center tracking-tighter">
                UI/UX Developer with a passion
              </p>
            </motion.div>
            {/* Card 2 */}
            <motion.div
              className="card-feature flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="bg-[#93E508] rounded-full size-20 ">
                <img src={Design} className="mx-auto " alt="code_image" />
              </div>
              <p className="text-xl text-nowrap  font-semibold mx-auto text-center">
                Creative Design{" "}
              </p>
              <p className="text-lg mx-auto text-center tracking-tighter">
                UI/UX Developer with a passion for design and an eye for detail,
              </p>
            </motion.div>
            {/* Card 3 */}
            <motion.div
              className="card-feature group"
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={Quality}
                className="mx-auto group-hover:bg-black rounded-full"
                alt="code_image"
              />
              <p className="text-xl font-semibold mx-auto text-center">
                Developer
              </p>
              <p className="text-lg mx-auto text-center tracking-tighter">
                improve user experiences.solutions that improve user
                experiences.{" "}
              </p>
            </motion.div>
            {/* Card 4 */}
            <motion.div
              className="card-feature"
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src={Code} className="mx-auto" alt="code_image" />
              <p className="text-xl font-semibold mx-auto text-center">
                Developer
              </p>
              <p className="text-lg mx-auto text-center tracking-tighter">
                that improve user experiences.solutions that improve user
                experiences.{" "}
              </p>
            </motion.div>
            {/* Card 5 */}
            <motion.div
              className="card-feature flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="bg-[#93E508] rounded-full size-20 ">
                <img src={Design} className="mx-auto " alt="code_image" />
              </div>
              <p className="text-xl text-nowrap  font-semibold mx-auto text-center">
                Creative Design{" "}
              </p>
              <p className="text-lg mx-auto text-center tracking-tighter">
                UI/UX Developer with a passion for design and an eye for detail
              </p>
            </motion.div>
            {/* Card 6 */}
            <motion.div
              className="card-feature group"
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={Quality}
                className="mx-auto group-hover:bg-black rounded-full"
                alt="code_image"
              />
              <p className="text-xl font-semibold mx-auto text-center">
                Developer
              </p>
              <p className="text-lg mx-auto text-center tracking-tighter">
                UI/UX Developer with a passion for design and an eye for detail,
              </p>
            </motion.div>
            {/* Card 7 */}
            <motion.div
              className="card-feature group"
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={Quality}
                className="mx-auto group-hover:bg-black rounded-full"
                alt="code_image"
              />
              <p className="text-xl font-semibold mx-auto text-center">
                Developer
              </p>
              <p className="text-lg mx-auto text-center tracking-tighter">
                UI/UX Developer with a passion for design and an eye for detail,
              </p>
            </motion.div>
            {/* Card 8 */}
            <motion.div
              className="card-feature group"
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={Quality}
                className="mx-auto group-hover:bg-black rounded-full"
                alt="code_image"
              />
              <p className="text-xl font-semibold mx-auto text-center">
                Developer
              </p>
              <p className="text-lg mx-auto text-center tracking-tighter">
                UI/UX Developer with a passion for design and an eye for detail,
              </p>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Section 8 - Contact Form */}
        <section className="lg:h-screen  flex flex-col items-center justify-center text-white text-4xl lg:snap-start">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex gap-4 max-lg:mt-10 max-lg:mb-5 lg:mb-10"
          >
            <img className="max-lg:size-10" src={Line} alt="Line" />
            <p className="text-3xl lg:text-5xl text-[#93E508] font-semibold cursor-pointer relative before:content-[''] before:absolute before:w-0 before:h-[3px] before:bg-[#93E508] before:left-0 before:bottom-0 before:transition-all before:duration-300 hover:before:w-full">
              Contact Me
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full max-w-4xl px-4"
          >
            <form className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="space-y-2 flex flex-col"
                >
                  <label className="text-lg font-semibold">Your Name</label>
                  <input
                    type="text"
                    className="w-full text-xl px-4 py-3 rounded-lg bg-[#051A1D] border border-[#93E508]/20 focus:border-[#93E508] focus:outline-none transition-colors duration-300"
                    placeholder="John Doe"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="space-y-2 flex flex-col"
                >
                  <label className="text-lg font-semibold">Your Email</label>
                  <input
                    type="email"
                    className="w-full text-xl px-4 py-3 rounded-lg bg-[#051A1D] border border-[#93E508]/20 focus:border-[#93E508] focus:outline-none transition-colors duration-300"
                    placeholder="john@example.com"
                  />
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                whileHover={{ scale: 1.02 }}
                className="space-y-2 flex flex-col"
              >
                <label className="text-lg font-semibold">Subject</label>
                <input
                  type="text"
                  className="w-full text-xl px-4 py-3 rounded-lg bg-[#051A1D] border border-[#93E508]/20 focus:border-[#93E508] focus:outline-none transition-colors duration-300"
                  placeholder="Project Inquiry"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ scale: 1.02 }}
                className="space-y-2 flex flex-col"
              >
                <label className="text-lg font-semibold">Message</label>
                <motion.textarea
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                  rows="6"
                  className="w-full text-xl px-4 py-3 rounded-lg bg-[#051A1D] border border-[#93E508]/20 focus:border-[#93E508] focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Your message here..."
                ></motion.textarea>
              </motion.div>

              <motion.button
                type="submit"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full md:w-auto px-8 py-3 bg-[#93E508] text-[#051A1D] rounded-full font-semibold text-lg hover:bg-white transition-colors duration-300 glow"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </section>

        {/* Footer Section */}
        <footer className="min-h-[50vh] flex flex-col items-center justify-center text-white lg:snap-start bg-[#051A1D] px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-8 mb-8"
          >
            {/* About Column */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <h3 className="text-3xl font-semibold text-[#93E508]">
                Shashitha
              </h3>
              <p className="text-sm text-gray-400">
                UI/UX Developer with a passion for design and an eye for detail.
                Creating compelling visual solutions that improve user
                experiences.
              </p>
              <motion.div
                className="flex gap-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {[GithubIcon, LinkedinIcon, DribbleIcon, FigmaIcon].map(
                  (icon, index) => (
                    <motion.a
                      key={index}
                      href="#"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <img
                        src={icon}
                        alt={`Social ${index + 1}`}
                        className=" lg:size-8"
                      />
                    </motion.a>
                  )
                )}
              </motion.div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-semibold">Quick Links</h3>
              {["Home", "About", "Services", "Projects", "Contact"].map(
                (link, index) => (
                  <motion.p
                    key={link}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    className="cursor-pointer hover:text-[#93E508] transition-colors"
                  >
                    {link}
                  </motion.p>
                )
              )}
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-semibold">Services</h3>
              {[
                "UI/UX Design",
                "Web Development",
                "Mobile Apps",
                "Graphic Design",
              ].map((service, index) => (
                <motion.p
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  className="cursor-pointer hover:text-[#93E508] transition-colors"
                >
                  {service}
                </motion.p>
              ))}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-semibold">Contact Info</h3>
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <p className="text-gray-400">Email:</p>
                <motion.p
                  whileHover={{ scale: 1.05 }}
                  className="hover:text-[#93E508] transition-colors cursor-pointer"
                >
                  contact@shashitha.com
                </motion.p>
                <p className="text-gray-400 mt-4">Phone:</p>
                <motion.p
                  whileHover={{ scale: 1.05 }}
                  className="hover:text-[#93E508] transition-colors cursor-pointer"
                >
                  +1 234 567 890
                </motion.p>
                <p className="text-gray-400 mt-4">Location:</p>
                <motion.p
                  whileHover={{ scale: 1.05 }}
                  className="hover:text-[#93E508] transition-colors cursor-pointer"
                >
                  Gujarat, India
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="w-full border-t border-gray-800 pt-8 mt-8 text-center"
          >
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Shashitha. All rights reserved.
            </p>
          </motion.div>
        </footer>
      </div>
    </>
  );
}

export default App;
