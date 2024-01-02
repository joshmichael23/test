import Image from 'next/image';
import profilepic from './images/'
import style from './style.css';

export default function Home() {
  return (
    <div className="wrapper">
      <main className="test">
        <img src={profilepic} alt="" />
       <article>
         <h1>Hello I'm Josh Michael </h1>
         <p>I'm a frontend developer from Naga City, Philippines.  I create my projects using HTML, CSS, and JavaScript. I've been studying and learning React.JS, Vue.JS lately to expand my knowledge in front-end development. I try to practice my skills in Frontend Mentor by completing their challenges. Check my projects below.</p>
       </article>


      </main>
    </div>
  )
}
