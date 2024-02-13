import Image from 'next/image';
import style from './style.css';

export default function Home() {
  return (
    <>      
        <header>
          <div className='logoContainer'>
            <img src={'/JoshOleaLogo.png'} alt="" />
          </div>
          <div className='links'>
              <a target="_blank" href="https://www.linkedin.com/in/josh-michael-olea/"><i className='fa-xl fa-brands fa-linkedin' /></a>
              <a target="_blank" href="https://github.com/joshmichael23"><i className='fa-xl fa-brands fa-github'></i></a>
              <a target="_blank" href="https://www.frontendmentor.io/profile/joshmichael23"><i className="fa-xl fa-solid fa-code"></i></a>
          </div>
        </header>
        <main className="test">
          
          <div className="wrapper">

            
            <article className='main-content'>
              <div className='description-content'>
                <p className='hello'>Hello I'm</p>
                <div>
                  <h1> Josh Olea </h1>
                  <h2>Web Developer</h2>
                </div>
                <p>I'm a web developer from Naga City, Philippines.  I create my projects using HTML, CSS, and JavaScript. I've been studying and learning React.JS, Vue.JS lately to expand my knowledge in front-end development. I try to practice my skills in Frontend Mentor by completing their challenges. Check my projects below.</p>

                <a className="downloadResume" target="_blank" rel="noopener noreferrer" href="/Resume.pdf" id='btnDownloadResume'>Download Resume</a>
              </div>
              <div className='profile-container'>
                <img className="profile-pic" alt="Josh Michael's Picture" src={'/profile2.png'} />
              </div>
            </article>


            <section className='skills'>
              <a href="https://www.javascript.com" className="skill js">
                <img src={'./logos/JavaScript-logo.png'} alt="Javascript Logo" />
              </a>

              <a href="https://html.com" className="skill html">
                <img src={'./logos/html.png'} alt="HTML Logo" />
              </a>

              <a href="https://getbootstrap.com" className="skill bootstrap">
                <img src={'./logos/bootstrap.png'} alt="Bootstrap Logo" />
              </a>
              
              <a href="https://web.dev/learn/css" className="skill css">
                <img src={'./logos/css.png'} alt="CSS Logo" />
              </a>

              <a href="https://react.dev" className="skill react">
                <img src={'./logos/react.png'} alt="React Logo" />
              </a>

              <a href="https://jquery.com" className="skill jquery">
                <img src={'./logos/jquery.png'} alt="Jquery Logo" />
              </a>

              <a href="https://sass-lang.com" className='skill sass'>
                <img src={'./logos/sass.png'} alt="Sass Logo" />
              </a>

              <a href="https://tailwindcss.com" className='skill tailwind'>
                <img src={'./logos/tailwlind.png'} alt="Tailwind Logo" />
              </a>

              <a href="https://vitejs.dev" className='skill vite'>
                <img src={'./logos/vite.png'} alt="Vite Logo" />
              </a>
            </section>

            <section className='project'>
              <h1>Frontend Mentor Projects</h1>
              <div className='projects'>
                
                <a href="https://ecomm-psi-seven.vercel.app" className="challenge">
                <img src={'./screenshots/ecommerce.png'} alt="Project's Screenshot"/>
                  <h2>E-commerce</h2>
                </a>

                <a href="https://comments-brown-five.vercel.app" className='challenge'>
                  <img src={'./screenshots/interactive-comments.png'} alt="Project's Screenshot"/>
                  <h2>Interactive Comments</h2>
                </a>

                <a href="https://roomhomepage-jade.vercel.app" className='challenge'>
                  <img src={'./screenshots/room-homepage.png'} alt="Project's Screenshot"/>
                  <h2>Room Landing Page</h2>
                </a>

                <a href="https://calculator-hazel-rho.vercel.app" className='challenge'>
                  <img src={'./screenshots/calculator.png'} alt="Project's Screenshot"/>
                  <h2>Calculator</h2>
                </a>

                <a href="https://advice-generator-app-main-seven-theta.vercel.app" className='challenge'><img src={'./screenshots/advice-generator.png'} alt="Project's Screenshot"/>
                  <h2>Advice Generator</h2>
                </a>

                <a href="https://age-calculator-app-weld.vercel.app" className="challenge">
                  <img src={'./screenshots/age-calculator.png'} alt="Project's Screenshot"/>
                  <h2>Age Calculator</h2>
                </a>

                <a href="https://expenses-chart-component-main-opal.vercel.app" 
                className="challenge">
                  <img src={'./screenshots/expenses-chart.png'} alt="Project's Screenshot"/>
                  <h2>Expenses Chart</h2>
                </a>

                <a href="https://interactive-rating-component-main-ten-livid.vercel.app" className="challenge">
                <img src={'./screenshots/interactive rating.png'} alt="Project's Screenshot"/>
                  <h2>Interactive Rating</h2>
                  
                </a>

                <a href="https://loopstudios-flame-phi.vercel.app" className="challenge">
                <img src={'./screenshots/loopstudios.png'} alt="Project's Screenshot"/>
                  <h2>Loopstudios</h2>
                </a>

                <a href="https://order-summary-component-main.vercel.app" className="challenge">
                <img src={'./screenshots/order-summary.png'} alt="Project's Screenshot"/>
                  <h2>Order Summary</h2>
                </a>

                <a href="https://pricing-component-omega-eight.vercel.app" className="challenge">
                <img src={'./screenshots/pricing-component.png'} alt="Project's Screenshot"/>
                  <h2>Pricing Component</h2>
                </a>

                <a href="https://social-media-switcher-alpha.vercel.app" className="challenge">
                <img src={'./screenshots/social-dark-mode.png'} alt="Project's Screenshot"/>
                  <h2>Social Dashboard w/ Dark Mode</h2>
                </a>

                <a href="https://time-tracking-teal.vercel.app" className="challenge">
                <img src={'./screenshots/time-tracking.png'} alt="Project's Screenshot"/>
                  <h2>Time Tracking App</h2>
                </a>

                <a href="https://tip-calculator-app-main-umber-alpha.vercel.app" className="challenge">
                <img src={'./screenshots/tip-calculator.png'} alt="Project's Screenshot"/>
                  <h2>Tip Calculator</h2>
                </a>
              </div>
            </section>

             
            </div>
          </main>
          <footer>
          <div className='contactMe'>
              <h1>Contact me at:</h1>
              <ul>
                <li>olea.josh@gmail.com</li>
                <li>+63 912 113 7950</li>
              </ul>
          </div>
          <div className='links'>
              <a target="_blank" href="https://www.linkedin.com/in/josh-michael-olea/"><i className='fa-xl fa-brands fa-linkedin' /></a>
              <a target="_blank" href="https://github.com/joshmichael23"><i className='fa-xl fa-brands fa-github'></i></a>
              <a target="_blank" href="https://www.frontendmentor.io/profile/joshmichael23"><i className="fa-xl fa-solid fa-code"></i></a>
          </div>
          </footer>
      </>
   
  )
}
