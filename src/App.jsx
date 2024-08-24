import React, { useState,useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import img1 from "./assets/react.svg"
import Button from "@mui/material/Button"
import img2 from "./assets/unilogo.png"
import img3 from "./assets/scllogo.jpg"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@mui/icons-material/Work';
import StarIcon from '@mui/icons-material/Star';
import img4 from "./assets/certificate01.png"
import img5 from "./assets/certificate02.png"
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import img6 from "./assets/shopily.jpeg"
import img7 from "./assets/nanoprocessor.jpg"
import img8 from "./assets/os.jpeg";
import ScrollReveal from 'scrollreveal';
import 'intersection-observer';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import { IoPersonOutline } from "react-icons/io5";
import { FaPhone } from "react-icons/fa";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { IoSchoolOutline } from "react-icons/io5";
import { FaRegKeyboard } from "react-icons/fa6";
import { MdOutlineVerified } from "react-icons/md";
import { MdLanguage } from "react-icons/md";
import { FaWordpressSimple } from "react-icons/fa6";
import { RiPsychotherapyLine } from "react-icons/ri";
import { PiProjectorScreenChart } from "react-icons/pi";
import { GrWorkshop } from "react-icons/gr";
import { FaCertificate } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import { FaRegCopyright } from "react-icons/fa";
import { CiCircleChevUp } from "react-icons/ci";
import { SlChemistry } from "react-icons/sl";
import { FaShopify } from "react-icons/fa";
import { GiClick } from "react-icons/gi";
import { MdOutlineAdsClick } from "react-icons/md";
import { RxCrossCircled } from "react-icons/rx";
import { FaGithub } from "react-icons/fa";
import { AiFillGoogleCircle } from "react-icons/ai";
import { FaHackerrank } from "react-icons/fa";
import { IoReorderThreeOutline } from "react-icons/io5";


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});



function App() {

  const [openCert,setOpenCert] = useState(true)
  const [openAct,setOpenAct] = useState(false)

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
  };
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openCertificate =()=>{
    setOpenCert(true)
    setOpenAct(false)
  }
  const openActivities =()=>{
    setOpenCert(false)
    setOpenAct(true)
  }

  const [openScl01, setOpenScl01] = useState(false);
  const [openScl02, setOpenScl02] = useState(false);

  const [open01, setOpen01] = useState(false);
  const [open02, setOpen02] = useState(false);

  const handleClickOpenScl01 = () => {
    setOpenScl01(true);
  };
  const handleClickOpenScl02 = () => {
    setOpenScl02(true);
  };
  const handleClickOpen01 = () => {
    setOpen01(true);
  };
  const handleClickOpen02 = () => {
    setOpen02(true);
  };

  const handleCloseScl02 = () => {
    setOpenScl02(false);
  };
  const handleCloseScl01 = () => {
    setOpenScl01(false);
  };
  const handleClose01 = () => {
    setOpen01(false);
  };
  const handleClose02 = () => {
    setOpen02(false);
  };

  const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
      color: "rgba(0,0,0,0.5)",
    }
  });

  const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
      console.log(entry);
      if (entry.isIntersecting){
        entry.target.classList.add("show");
      }else{
        entry.target.classList.remove("show");
      }
    })
  })

 
  const hiddenElements = document.querySelectorAll('.hidden')
  hiddenElements.forEach((el)=>observer.observe(el))

  const [isNavVisible, setNavVisible] = useState(false);

  const toggleNavigation = () => {
      setNavVisible(!isNavVisible);
  };

  return (
    <div className="page">
      <div className="container">

        {/*-------------------------------- Header -------------------------------- */}
        <div className={`header d-flex align-items-center justify-content-center ${isNavVisible ? 'active' : ''}`}>
          <div className="name">
            L@hiru
          </div>
          <Button className="navigate-symbol" onClick={toggleNavigation}><IoReorderThreeOutline /></Button>
          <div className="navigate">
            <a className="navigate-word" href="#wai" onClick={toggleNavigation}><span>Info</span></a>
            <a className="navigate-word" href="#educa" onClick={toggleNavigation}><span>Education</span></a>
            <a className="navigate-word" href="#ski" onClick={toggleNavigation}><span>Skills</span></a>
            <a className="navigate-word" href="#proj" onClick={toggleNavigation}><span>Projects</span></a>
            <a className="navigate-word" href="#exp" onClick={toggleNavigation}><span>Experience</span></a>
            <a className="navigate-word" href="#act" onClick={toggleNavigation}><span>Activities</span></a>
            <a className="navigate-word" href="#cont" onClick={toggleNavigation}><span>ContactMe</span></a>
          </div>
        </div>

        
        <div className="body justify-conteny-center">
          <div className="row d-flex align-items-center justify-content-center">
            {/*-------------------------------- Introduction -------------------------------- */}
            <div id="wai" className="col-md-7 info full-screen-para">
              <div className="widthChange">
                <h2  className="pb-4 d-flex align-items-center justify-content-center topic hidden"><span className="symbols"><IoPersonOutline/></span>Who am I</h2>
                <p>A dedicated and highly motivated
                      undergraduate student who is interested in the possibilities
                      of using my technical skills and passion for creativity in
                      a demanding and exciting workplace. Still a new beginner
                      with an endless thirst to learn the industry under different
                      conditions.<br/><br/>
                      I have good analytical and problem-solving
                      abilities, which allow me to take a proactive and creative
                      approach to problems. To provide effective solutions, I am
                      aware of using the most recent technological
                      advancements. I am prepared to take on new chances and
                      leave a lasting impression in the area.
                </p>
                <div className="actions topic">
                  <a href="#cont"><Button>Contact Me<span className="icon"><FaPhone/></span></Button></a>
                  <a href="Lahiru-Randika-CV.pdf" download="Lahiru-Randika-CV.pdf"><Button>Download Cv<span className="icon"><FaCloudDownloadAlt/></span></Button></a>
                </div>
              </div>
            </div>
            <div className="col-md-4 img">
              <img src={img1}/>
            </div>
          </div>


          {/*-------------------------------- Education -------------------------------- */}
          <div id="educa" className="education projects">
            <h2 className="pb-4 d-flex align-items-center justify-content-center topic hidden"><span className="symbols"><IoSchoolOutline/></span>Education</h2>
            <p className="para">My educational journey began at Wp/Ke Jayakody Maha Vidyalaya, where I excelled in my studies and passed the grade five scholarship exam. Following this, 
              Royal College became my alma mater, where I developed a strong foundation in academics and nurtured my passion for technology. The guidance I received there helped 
              me achieve outstanding results in both my O-Levels and A-Levels. Building on this success, 
              I am following my higher education at the University of Moratuwa, enrolling in the CSE degree program.</p>
            <div className="row">
              <div className="col-md-6 uni">
                <h4 className="uniname">University of Moratuwa</h4>
                <img src={img2}/>
                <div className="span d-flex align-items-center justify-content-center">
                  <span>Computer Science Engineering(UG)</span>
                  <span>Specializing in Cyber Security</span>
                </div>
                <p>I am currently pursuing a Computer Science and Engineering degree at the University of Moratuwa,
                  with a focus on Cyber Security. While my studies are primarily centered around cybersecurity, I am in the early stages of 
                  applying this knowledge to projects. My academic journey is equipping me with the foundational skills needed to excel in this critical field
                </p>
              </div>
              <div className="col-md-6 uni">
                <h4 className="uniname">Royal Collage</h4>
                <img src={img3}/>
                <span>Als and Ols</span>
                <span>Specializing in Cyber Security</span>
                <ul className="list list-inline">
                  <li className="list-items"> Al results 
                    <Button onClick={handleClickOpenScl01}>Click Me<GiClick className="clickMeforMore"/></Button>
                    <Dialog
                      open={openScl01}
                      TransitionComponent={Transition}
                      onClose={handleCloseScl01}
                      id = "Alresults"
                    >
                      <DialogTitle className="p-4 Dtitle"><span>AL Results</span></DialogTitle>
                      <DialogContent className="Dbody">
                        <DialogContentText id="alert-dialog-slide-description">
                          <div className="d-flex">
                            <div className="image">
                              <img src={img3} alt=""/>
                            </div>
                            <div className="details">
                              <h5 className="pb-2">Sinhala medium</h5>
                              <ul className="list list-inline results-list">
                                <li className="AlPopup pb-1">
                                  <span>Physics</span>
                                  <span>A</span>
                                </li>
                                <li className="AlPopup pb-1">
                                  <span>Combined Maths</span>
                                  <span>A</span>
                                </li>
                                <li className="AlPopup pb-1">
                                  <span>Chemistry</span>
                                  <span>A</span>
                                </li>
                                <li className="AlPopup mt-4 last">
                                  <span>English</span>
                                  <span>A</span>
                                </li>
                                <li className="AlPopupZ">
                                  <span>Z Score</span>
                                  <span className="item1">2.0774</span>
                                </li>
                                <li className="AlPopupZ">
                                  <span>Island Rank</span>
                                  <span className="item2">701</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                          
                        </DialogContentText>
                      </DialogContent>
                      <DialogActions className="Dactions">
                        <Button onClick={handleCloseScl01} className="exitAls"><RxCrossCircled/>Exit</Button>
                      </DialogActions>
                    </Dialog>
                  </li>
                  <li className="list-items">Ol results
                    <Button onClick={handleClickOpenScl02}>Click Me<GiClick className="clickMeforMore"/></Button>
                    <Dialog
                      open={openScl02}
                      TransitionComponent={Transition}
                      onClose={handleCloseScl02}
                      id = "Alresults"
                    >
                      <DialogTitle className="p-4 Dtitle"><span>Ol Results</span></DialogTitle>
                      <DialogContent className="Dbody">
                        <DialogContentText id="alert-dialog-slide-description">
                        <div className="d-flex">
                            <div className="image">
                              <img src={img3} alt=""/>
                            </div>
                            <div className="details">
                              <h5 className="pb-2">Sinhala medium</h5>
                              <ul className="list list-inline results-list">
                                <li className="AlPopup pb-1">
                                  <span>Science</span>
                                  <span>A</span>
                                </li>
                                <li className="AlPopup pb-1">
                                  <span>Maths</span>
                                  <span>A</span>
                                </li>
                                <li className="AlPopup pb-1">
                                  <span>English</span>
                                  <span>A</span>
                                </li>
                                <li className="AlPopup pb-1">
                                  <span>Sinhala</span>
                                  <span>A</span>
                                </li>
                                <li className="AlPopup pb-1">
                                  <span>History</span>
                                  <span>A</span>
                                </li>
                                <li className="AlPopup pb-1">
                                  <span>Buddhism</span>
                                  <span>A</span>
                                </li>
                                <li className="AlPopup pb-1">
                                  <span>Commerce</span>
                                  <span>A</span>
                                </li>
                                <li className="AlPopup pb-1">
                                  <span>English Lit.</span>
                                  <span>B</span>
                                </li>
                                <li className="AlPopup pb-1">
                                  <span>ICT</span>
                                  <span>A</span>
                                </li>
                                {/* <li className="OlPopup">
                                  <span>-------------------------</span>
                                </li> */}
                              </ul>
                            </div>
                          </div>
                        </DialogContentText>
                      </DialogContent>
                      <DialogActions className="Dactions">
                        <Button onClick={handleCloseScl02} className="exitAls"><RxCrossCircled/>Exit</Button>
                      </DialogActions>
                    </Dialog>
                  </li>
                </ul>
              </div>
            </div>
          </div>


          {/*-------------------------------- Skills -------------------------------- */}
          <div id="ski" className="skills projects">
            <h2 className="pb-4 d-flex align-items-center justify-content-center topic hidden"><span className="symbols"><FaRegKeyboard/></span>Skills</h2>
            <p>I have gained a diverse set of skills that empower me. From coding, software development to cybersecurity and problem-solving, each skill has been carefully cultivated through rigorous study. 
              These competencies form the foundation of my ability to contribute effectively in any technical environment, enabling me to adapt and excel in various projects and scenarios.</p>
            <div className="cards">
              <div className="row d-flex align-items-center justify-content-center">
                <div className="col-md-3 div div1">
                  <h4><MdLanguage className="icon"/>Languages</h4>
                  <div className="d-flex skill-set">
                    <p><MdOutlineVerified className="icon"/> Python</p>
                    <div className="skill-bar-back">
                      <div className="skill-bar-front-80">
                      </div>
                    </div>
                  </div>
                  <div className="d-flex skill-set">
                    <p><MdOutlineVerified className="icon"/> Java</p>
                    <div className="skill-bar-back">
                      <div className="skill-bar-front-80">
                      </div>
                    </div>
                  </div>
                  <div className="d-flex skill-set">
                    <p><MdOutlineVerified className="icon"/> C++</p>
                    <div className="skill-bar-back">
                      <div className="skill-bar-front-80">
                      </div>
                    </div>
                  </div>
                  <div className="d-flex skill-set">
                    <p><MdOutlineVerified className="icon"/> C</p>
                    <div className="skill-bar-back">
                      <div className="skill-bar-front-80 skill-bar-front-60">
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 div div2">
                  <h4><FaWordpressSimple className="icon"/>Web Development</h4>
                  <div className="d-flex skill-set">
                    <p><MdOutlineVerified className="icon"/> NodeJs</p>
                    <div className="skill-bar-back">
                      <div className="skill-bar-front-80">
                      </div>
                    </div>
                  </div>
                  <div className="d-flex skill-set">
                    <p><MdOutlineVerified className="icon"/> React</p>
                    <div className="skill-bar-back">
                      <div className="skill-bar-front-80">
                      </div>
                    </div>
                  </div>
                  <div className="d-flex skill-set">
                    <p><MdOutlineVerified className="icon"/> JavaScript</p>
                    <div className="skill-bar-back">
                      <div className="skill-bar-front-80 skill-bar-front-60">
                      </div>
                    </div>
                  </div>
                  <div className="d-flex skill-set">
                    <p><MdOutlineVerified className="icon"/> HTML</p>
                    <div className="skill-bar-back">
                      <div className="skill-bar-front-80 skill-bar-front-90">
                      </div>
                    </div>
                  </div>
                  <div className="d-flex skill-set">
                    <p><MdOutlineVerified className="icon"/> CSS</p>
                    <div className="skill-bar-back">
                      <div className="skill-bar-front-80 skill-bar-front-90">
                      </div>
                    </div>
                  </div>
                  <div className="d-flex skill-set">
                    <p><MdOutlineVerified className="icon"/> Bootstrap</p>
                    <div className="skill-bar-back">
                      <div className="skill-bar-front-80 skill-bar-front-90">
                      </div>
                    </div>
                  </div>
                  <div className="d-flex skill-set">
                    <p><MdOutlineVerified className="icon"/> MySQL</p>
                    <div className="skill-bar-back">
                      <div className="skill-bar-front-80">
                      </div>
                    </div>
                  </div>
                  <div className="d-flex skill-set">
                    <p><MdOutlineVerified className="icon"/> MongoDB</p>
                    <div className="skill-bar-back">
                      <div className="skill-bar-front-80 skill-bar-front-60">
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 div div3">
                  <h4><RiPsychotherapyLine className="icon"/>Other</h4>
                  <div className="d-flex skill-set">
                    <p><MdOutlineVerified className="icon"/> Wireshark</p>
                    <div className="skill-bar-back">
                      <div className="skill-bar-front-80 skill-bar-front-60">
                      </div>
                    </div>
                  </div>
                  <div className="d-flex skill-set">
                    <p><MdOutlineVerified className="icon"/> Git</p>
                    <div className="skill-bar-back">
                      <div className="skill-bar-front-80 skill-bar-front-60">
                      </div>
                    </div>
                  </div>
                  <div className="d-flex skill-set">
                    <p><MdOutlineVerified className="icon"/> Photoshop</p>
                    <div className="skill-bar-back">
                      <div className="skill-bar-front-80">
                      </div>
                    </div>
                  </div>
                  <div className="d-flex skill-set">
                    <p><MdOutlineVerified className="icon"/> Canva</p>
                    <div className="skill-bar-back">
                      <div className="skill-bar-front-80 skill-bar-front-90">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/*-------------------------------- Projects -------------------------------- */}
          <div id="proj" className="projects">
            <h2 className="pb-4 d-flex align-items-center justify-content-center topic hidden"><span className="symbols"><PiProjectorScreenChart/></span>Projects</h2>
            <p>In this section, you'll find a collection of my most impactful projects, each reflecting my dedication, and hard-working to problem-solving. 
              These projects highlight my ability to tackle complex challenges and deliver solutions that make a difference. 
              Dive in to see the work that defines my journey and demonstrates my commitment to excellence.</p>
            <Slider {...settings}>
              <div className="d-flex sliderSet">
                <img src={img6}/>
                <div className="description">
                  <h5>Shopily</h5>
                  <span>
                  Shopily is a comprehensive online marketplace that integrates a wide array of physical supermarkets, grocery stores, 
                  and specialty shops into a single, user-friendly platform. It offers customers the convenience of browsing and shopping 
                  from multiple retailers all in one place. With Shopily, you can easily find and purchase your desired goods while also discovering the exact locations of 
                  products within participating stores. This seamless experience not only saves time but also ensures that you can quickly locate and obtain the items you need.<br/>
                  (Still under constuctions..)<br/>
                  <a href="https://github.com/Lahiru-Randika/Shopily"><Button className="OpentheProject">Open the project in GitHub</Button></a>
                  </span>
                </div>
              </div>
              <div className="d-flex sliderSet">
                <img src={img7}/>
                <div className="description">
                  <h5>NanoProcessor</h5>
                  <span>
                  In this project, we designed and implemented a 4-bit nano processor using VHDL. The project involved coding a range of fundamental components and basic instructions to create a functional microprocessor. 
                  This included developing essential elements such as the ALU (a very basic one), instruction decoders, etc. as well as integrating them to ensure the processor could execute simple instructions effectively. 
                  The design highlights our ability to work with hardware description languages and understand processor architecture at a fundamental level.<br/>
                  This was a group project and my team member was Pamudu Nayanga<br/>
                  <a href="https://github.com/Lahiru-Randika/Nano-Processor"><Button className="OpentheProject">Open the project in GitHub</Button></a>
                  </span>
                </div>
              </div>
              <div className="d-flex sliderSet">
                <img src={img8}/>
                <div className="description">
                  <h5>PintOS</h5>
                  <span>
                  In this project, we contributed to the development of the Pintos operating system, focusing on implementing key components and functionalities. Our work involved coding and integrating several essential parts of the OS, 
                  allowing it to execute basic commands such as whoami and more. This project 
                  provided hands-on experience in operating system design and implementation, deepening our understanding of fundamental OS principles.<br/>
                  <a href="https://github.com/Lahiru-Randika/PintOS/"><Button className="OpentheProject">Open the project in GitHub</Button></a>
                  </span>
                </div>
              </div>
            </Slider>
          </div>


          {/*-------------------------------- Experience -------------------------------- */}
          <div id="exp" className="projects experience">
            <h2 className="pb-4 d-flex align-items-center justify-content-center topic hidden"><span className="symbols"><GrWorkshop/></span>Experience</h2>
            <p><b>While I don't have direct industry-related experience, </b>
              I have gained valuable insights and skills from various job experiences. These roles have significantly contributed 
              to my personal and professional growth, providing me with a solid foundation in work ethics, teamwork, and problem-solving. 
              Each position, whether in customer service, retail, or any other field, has taught me the importance of communication, 
              adaptability, and perseverance. These experiences have not only prepared me to face challenges but also equipped me with 
              a strong sense of responsibility and a commitment to continuous learning.
            </p>
            <VerticalTimeline>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgba(0, 0, 0,0.4)', color: '#fff'}}
                contentArrowStyle={{ borderRight: '7px solid  rgba(255, 255, 255)' }}
                date="2021 - present"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<SlChemistry />}
              >
                <h3 className="vertical-timeline-element-title">AL Chemistry Tutor</h3>
                <h4 className="vertical-timeline-element-subtitle">Arround Kadawatha</h4>
                <p>
                  Crative teaching styles, Try to uplift the knowledge of the student, Different students - different teaching styles
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgba(33, 150, 243,0.4)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(255,255,255)' }}
                date="2022 - 2022"
                iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                icon={<WorkIcon />}
              >
                <h3 className="vertical-timeline-element-title">Freelancer</h3>
                <h4 className="vertical-timeline-element-subtitle">Fiverr</h4>
                <p>
                  Flyer designing, Graphic designing works, Resume & cover letter designing
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgba(0, 0, 0,0.4)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgba(255,255,255)' }}
                date="2021-2022"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<FaShopify />}
              >
                <h3 className="vertical-timeline-element-title">Keells Cashier</h3>
                <h4 className="vertical-timeline-element-subtitle">Eldeniya</h4>
                <p>
                  Handeled cash and registers, Worked under pressure situations, Team contributor, Customer handeling
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                icon={<StarIcon />}
              />
            </VerticalTimeline>
          </div>


          {/*-------------------------------- Certificates & Actions -------------------------------- */}
          <div id="act" className="projects activities">
            <h2 className="pb-4 d-flex align-items-center justify-content-center topic hidden"><span className="symbols"><FaCertificate/></span>Activities & Certifications</h2>
            <p>Explore my diverse certifications, and activities where each achievement reflects my commitment to continuous learning and growth, showcasing the skills and knowledge 
              I've gained to excel in the cybersecurity field. Some of these activities define who I am, reflecting my journey,and passions.
            </p>
            <div className="row">
              <div className="col-md-3 d-flex align-items-center actAndCet">
                <Button onClick={openCertificate}>Certificates</Button>
                <Button onClick={openActivities}>Activities</Button>
              </div>
              <div className="col-md-9 card">
                {
                  openAct? 
                  <div className="d-flex align-items-center justify-content-center">
                    <ul className="list list-inline">
                      <li>1. An active member of OREPA</li>
                      <li>2. A member of RCU</li>
                      <li>3. Was an outstanding member of 
                        <ul>
                          <li>Maths Society</li>
                          <li>Non Addict Movements</li>
                          <li>Buddhist Assosiation</li>
                        </ul>
                      </li>
                      <li>4. Was a palyer of
                        <ul>
                          <li>Badminton</li>
                          <li>Volleyball</li>
                        </ul>
                      </li>
                      <li>5. Volunteer in Soyuru Sathkara</li>
                    </ul>
                  </div>
                  :
                  <div>
                    <div className="certificateSection certpic d-flex">
                      <div className="cert1">
                        <img src={img4}/>
                      </div>
                      <div className="cert1">
                        <img src={img5}/>
                      </div>
                    </div>
                    <div className="cert-info certificateSection d-flex">
                      <div className="cert1">
                        <Button onClick={handleClickOpen01}><span>Click Me to See More Info</span></Button>
                        <Dialog
                          open={open01}
                          TransitionComponent={Transition}
                          onClose={handleClose01}
                          id="certificates"
                        >
                          <DialogTitle className="Dtitle d-flex align-items-center justify-content-center">
                            <h2>Career Essentials in Cybersecurity</h2>
                            <h4>by Microsoft and LinkedIn</h4>
                          </DialogTitle>
                          <DialogContent>
                            <DialogContentText id="alert-dialog-slide-description">
                              <img className="certinDialog" src={img4}/>
                            </DialogContentText>
                          </DialogContent>
                          <DialogActions className="Dactions d-flex align-items-center">
                            <a href="https://www.linkedin.com/learning/certificates/c52650e03eb22bcb10f0c370ad184b0957a2f55308002a655dfe32d1e402fd94"><Button onClick={handleClose01}><MdOutlineAdsClick/>Show Credentials</Button></a>
                            <Button onClick={handleClose01}><RxCrossCircled/>Exit</Button>
                          </DialogActions>
                        </Dialog>
                      </div>
                      <div className="cert1 cert2">
                        <Button onClick={handleClickOpen02}><span>Click Me to See More Info</span></Button>
                        <Dialog
                          open={open02}
                          TransitionComponent={Transition}
                          onClose={handleClose02}
                        >
                          <DialogTitle className="Dtitle d-flex align-items-center justify-content-center">
                            <h2>Cyber Security Foundation</h2>
                            <h4>by LinkedIn</h4>
                          </DialogTitle>
                          <DialogContent>
                            <DialogContentText id="alert-dialog-slide-description">
                              <img className="certinDialog" src={img5}/>
                            </DialogContentText>
                          </DialogContent>
                          <DialogActions  className="Dactions d-flex align-items-center">
                            <a href="https://www.linkedin.com/learning/certificates/d95cabd1d2b08a0a8bf9362a7db76598ddc9ee624f6f36b70935f8ff4deebc8b?trk=share_certificate"><Button onClick={handleClose02}><MdOutlineAdsClick/>Show Credentials</Button></a>
                            <Button onClick={handleClose02}><RxCrossCircled/>Exit</Button>
                          </DialogActions>
                        </Dialog>
                      </div>
                    </div>
                  </div>
                }
              </div>
            </div>
          </div>


          {/*-------------------------------- Contact Me -------------------------------- */}
          <div id="cont" className=" projects contact">
            <h2 className="pb-4 d-flex align-items-center justify-content-center topic hidden"><span className="symbols"><FaPhoneAlt/></span>Contact Me</h2>
            <p>I am always open to connecting and discussing opportunities. For any inquiries or collaborations, you can contact me via email
               or connect with me on LinkedIn. I look forward to hearing from you!<br/>
               If you have any specific details or adjustments, just let me know!
            </p>
            <div className="contact-info">
              <div className="contact-info-in d-flex align-items-center justify-content-center">
                <span>Name</span>
                <span>Lahiru Randika</span>
              </div>
              <div className="contact-info-in d-flex align-items-center justify-content-center">
                <span>Nationality</span>
                <span>Sri Lankan</span>
              </div>
              <div className=" contact-info-in links d-flex align-items-center justify-content-center">
                <span className="email"><MdMarkEmailRead className="icon"/>lahiru.21@cse.mrt.ac.lk</span>
                <a href="https://www.linkedin.com/in/lahiru-randika-m/"><span><FaLinkedin className="icon"/>LinkedIn</span></a>
                <a href="https://github.com/Lahiru-Randika/"><span><FaGithub className="icon"/>GitHub</span></a>
                <a href="https://developers.google.com/profile/u/lahiru-randika/"><span><AiFillGoogleCircle className="icon"/>GoogleDeveloper</span></a>
                <a href="https://www.hackerrank.com/profile/210527J_CSE_21/"><span><FaHackerrank className="icon"/>HackerRank</span></a>
              </div>
            </div>
          </div>


          {/*-------------------------------- Footer -------------------------------- */}
          <div className="header footer d-flex align-items-center justify-conteny-center">
            <div className="name">
              <span>Want to go up?</span>
              <Button onClick={scrollToTop}><span className="goUp"><CiCircleChevUp className="icon"/></span></Button>
            </div>
            <div className="navigate footerNav">
              <span>Copyright<FaRegCopyright className="icon icon1"/> Lahiru Randika</span>
              <span>All Rights Reserved</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}

export default App;
