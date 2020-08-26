import React from 'react';
import { FaCss3Alt, FaHtml5, FaJsSquare, FaNodeJs, FaPhp, FaReact } from 'react-icons/fa';
// import './style.css';
import './App.css';
import { GrMysql } from "react-icons/gr";
import ImageGallery from 'react-image-gallery';

function App() {

  const images = [
    {
      original: require('./img/ingridsm.jpg'),
      thumbnail: require('./img/ingridsm.jpg'),
    },
    {
      original: require('./img/kettlesm.jpg'),
      thumbnail: require('./img/kettlesm.jpg'),
    },
    {
      original: require('./img/johnsm.jpg'),
      thumbnail: require('./img/johnsm.jpg'),
    },
  ];

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
                    <h2>Colloq App</h2>
                    
                    <p>Colloq is a social networking app for travellers who are also interested in improving a language. After creating a profile, users can search their destination city to find local native speakers and message them to arrange a meet-up.</p>
                    <a href="https://colloq.surge.sh" target="_blank">View</a>
                </div>

                <div class="project-right">
                    <img id="colloq-preview" alt="Colloq App" src={require('./img/colloq-preview.JPG')}/>
                </div>

            </div>
            
            <div class="project">

                <div class="project-left">
                    <h2>GetFit App</h2>
                    
                    <p>GetfiT PHP/MySQL fitness web application project for the PHP1 module at Syntra.</p>
                    <a href="https://wdev.be/wdev_nicole/dag2/login.php" target="_blank">View</a>
                </div>

                <div class="project-right">
                    <img id="getfit-preview" alt="GetFit App" src={require('./img/getfit-preview.JPG')}/>   
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

    {/* <section className="section section-light section-art">
        <h2>Artist</h2>
        <p>Check out my gallery for photos, drawings, and oil paintings.</p>
        <div className="images">
            <div className="row-1">
            return <ImageGallery items={images} />; */}
                   {/* <a className="fancybox-button gal-img" rel="fancybox-button" href="#" title="Ingrid Bergman">
                        <img src="./img/ingrid.jpg" alt="ingrid bergman drawing" />
                    </a>
                    <a className="fancybox-button gal-img" rel="fancybox-button" href="https://www.flickr.com/photos/171530059@N03/46966540105/in/dateposted-public/lightbox/" title="Kettle">
                        <img src="./img/kettle.JPG" alt="kettle painting" />
                    </a>
                    <a className="fancybox-button gal-img" rel="fancybox-button" href="#" title="John">
                        <img src="./img/john.JPG" alt="arizona photo" /> 
                    </a>
            
                    <a href="./img/ingrid.jpg" data-lightbox="mygallery" data-title="Ingrid Bergman"><img className="gal-img" src="./img/ingridsm.jpg" alt="ingrid bergman drawing" /></a>
                    <a href="./img/kettle.JPG" data-lightbox="mygallery" data-title="Kettle"><img className="gal-img" src="./img/kettlesm.JPG" alt="kettle painting" /></a>
                    <a href="./img/john.jpg" data-lightbox="mygallery" data-title="John"><img className="gal-img" src="./img/johnsm.JPG" alt="arizona photo" /></a> */}
                {/* </div>
            
        </div>
    </section> */}

    
        <div className="pimg4">
            <div className="endtext-box">
                <div id="contact">
                  {/* <img id="portrait" alt="Nicole Furtado" src={require('./img/nf3.jpg')}/> */}
                  {/* <img id="portrait" alt="Nicole Furtado" src={require('./img/nf3.jpg')}/> */}
                    {/* <img id="portrait" src="./img/1stand.jpg" alt="Nicole Furtado" /> */}
                        <h1 className="endtext2">Get in touch!</h1>
                        
                        <p className="endtext2">Don't hesitate to contact me with your questions or project ideas!</p>
                        

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
