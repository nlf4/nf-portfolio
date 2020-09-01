import React from 'react';
import { FaCss3Alt, FaHtml5, FaJsSquare, FaNodeJs, FaPhp, FaReact, FaSymfony } from 'react-icons/fa';
import './App.css';
import { GrMysql } from "react-icons/gr";
// import { BiWorld } from "react-icons/bi"
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';

function App() {

   
    const slideImages = [
        require('./img/colloq-preview.JPG'),
        require('./img/colloq-inbox.JPG'),
        require('./img/colloq-calendar.JPG')
    ];

    const slideImages2 = [
        require('./img/getfit.png'),
        require('./img/options-menu5.jpg'),
    ];


    const properties = {
        autoplay: false,
      };
   

 

  return (
    <div>
    <div className="pimg1">
        <div className="ptext focus-in-contract fade-in-one">
            <span className="border">
                <p id="name-header">Nicole Furtado</p>
                
            </span>
        </div>
    </div>

    <section className="section section-light" id="section-dev">
        <h2 id="intro-title">Hey there!</h2>
        <p>I am a full stack web developer who loves keeping up with the latest <br />frameworks and technologies. Feel free to message me for more details!</p>
        <p>I work with:</p>
        <div id="icons">
            
            <span className="tech-icon" id="css-icon"><FaCss3Alt /></span>
            <span className="tech-icon" id="html-icon"><FaHtml5 /></span>
            <span className="tech-icon" id="js-icon"><FaJsSquare /></span>
            <span className="tech-icon" id="node-icon"><FaNodeJs /></span>
            <span className="tech-icon" id="php-icon"><FaPhp /></span>
            <span className="tech-icon" id="react-icon"><FaReact /></span>
            <span className="tech-icon" id="mysql-icon"><GrMysql /></span>
            
        </div>
    </section>

    <div className="pimg2">
        <div className="ptextimg">
            <span className="border">
                
            </span>
        </div>
    </div>

    <section className="section section-dark">

        <h2 id="projects-title">Projects</h2>

        <div id="projects-div">

            <div class="project">

                <div class="project-left">
                    <h2>Colloq</h2>
                    <div id="project-icons">
                        <span className="tech-icon-project" id="php-icon"><FaSymfony /></span>
                        <span className="tech-icon-project" id="react-icon"><FaReact /></span>
                        <span className="tech-icon-project" id="mysql-icon"><GrMysql /></span>
                    </div>
                    <p>Colloq is a social networking app for travellers who are also interested in improving a language. After creating a profile, users can search their destination city to find local native speakers and message them to arrange a meet-up.</p>
                    <a href="https://colloq.surge.sh" target="_blank" rel="noopener noreferrer">Live</a>
                    <a href="https://github.com/nlf4/colloq-frontend" target="_blank" rel="noopener noreferrer">Code</a>
                </div>

                <div class="project-right">

                <div class="project-right-inner">
                    <Slide easing="ease" {...properties}>
                    <div className="each-slide">
                        <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
                        
                        </div>
                    </div>
                    <div className="each-slide">
                        <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
                        
                        </div>
                    </div>
                    <div className="each-slide">
                        <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
                        
                        </div>
                    </div>
                    </Slide>
                </div>

                </div>
                
                             

            </div>
            
            <div class="project">

                <div id="project-left-two" class="project-left">
                    <h2>GetFit</h2>
                    <div id="project-icons">
                        <span className="tech-icon-project" id="php-icon"><FaPhp /></span>
                        <span className="tech-icon-project" id="mysql-icon"><GrMysql /></span>
                    </div>
                    <p>GetfiT is a fitness web application where users can utilize basic CRUD functions to store, access, update and delete workout exercises.</p>
                    <div class="project-buttons">
                    <a href="https://wdev.be/wdev_nicole/dag2/login.php" target="_blank" rel="noopener noreferrer">Live</a>
                    <a href="https://github.com/nlf4/getfit" target="_blank" rel="noopener noreferrer">Code</a>
                    </div>
                    
                </div>

                <div class="project-right">

                <div>
                    <Slide easing="ease" {...properties}>
                    <div className="each-slide">
                        <div style={{'backgroundImage': `url(${slideImages2[0]})`}}>
                        
                        </div>
                    </div>
                    <div className="each-slide">
                        <div style={{'backgroundImage': `url(${slideImages2[1]})`}}>
                        
                        </div>
                    </div>
                    </Slide>
                </div>

                </div>

            </div>

            <div class="project">

                <div id="project-left-two" class="project-left">
                    <h2>Movie Search</h2>
                    <div id="project-icons">
                    <span className="tech-icon-project" id="react-icon"><FaReact /></span>
                    </div>
                    <p>An app which lets users search films and add them to their favorites collection. Built using OMDb API, React Redux and Material-UI.</p>
                    <div class="project-buttons">
                    <a href="http://movie-search-redux.surge.sh/" target="_blank" rel="noopener noreferrer">Live</a>
                    <a href="https://github.com/nlf4/redux-movie-liker" target="_blank" rel="noopener noreferrer">Code</a>
                    </div>
                    
                </div>

                <div class="project-right">

                <div>
                <img id="movie-search" alt="Movie Search App" src={require('./img/movie-search.JPG')}/>
                </div>

                </div>

            </div>

                
                
        </div>
        
          
             
    </section>

    <div className="pimg3">
        <div className="ptextimg">
            <span className="border">
               
            </span>
        </div>
    </div>

    
        <div className="pimg4">
            <div className="endtext-box">
                <div id="contact">
                  <img id="portrait" alt="Nicole Furtado" src={require('./img/nf3.jpg')}/>
                  {/* <img id="portrait" alt="Nicole Furtado" src={require('./img/nf3.jpg')}/> */}
                    {/* <img id="portrait" src="./img/1stand.jpg" alt="Nicole Furtado" /> */}
                        <h1 className="endtext2">About Me</h1>
                        
                        <p className="endtext3">My name is <span class="color">Nicole</span>, I'm a 29-year-old <span class="color">web developer</span> based in Antwerp. Previously a Dutch-to-English translator, I developed a love for <span class="color">JavaScript</span> in 2018, decided to switch careers and haven't looked back. Please <span class="color">contact me</span> with your questions or project ideas!</p>
                        

                        <ul className="list-unstyled social">
                            <li>
                                <a href="https://github.com/nlf4" title="github">
                                    <span className="fa fa-github" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/nicole.furtado.96" title="facebook">
                                    <span className="fa fa-facebook-f" />
                                </a>
                            </li>
                            <li>
                                <a href="mailto:nlfurtado4@gmail.com" title="email">
                                    <span className="fa fa-envelope-o"></span>
                                    <span className="sr-only">E-mail</span>
                                </a>
                            </li>
                        </ul>
                </div>
                        
            </div>
        </div>
    </div>
  );
}

export default App;
