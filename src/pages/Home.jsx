import './Home.scss';
import Navbar from '../components/Navbar';
import jessica from '../assets/jessica.jpg'; // Use the big poster image
import thumb1 from '../assets/thumb1.jpg';
import thumb2 from '../assets/thumb2.jpg';
import { FaEye } from "react-icons/fa";
import { SlArrowDown } from "react-icons/sl";


export default function Home() {
  return (
    <div className="home">
      <div className="hero">
        <img className="bg" src={jessica} alt="Jessica Jones" />
        <div className="content">
          <h1>Jessica Jones</h1>
          <p>
            Marvel's Jessica Jones is an American television series created by Melissa Rosenberg for the streaming service Netflix, based on the Marvel Comics character Jessica Jones. It is set in the Marvel Cinematic Universe (MCU), acknowledging the continuity of the franchise's films.
          </p>
          <button className="watch-btn">
            
            Start Watching <FaEye /></button>
          <div className="info-section">
            <div className="info">
              <div><strong>Rating</strong><br />⭐⭐⭐⭐</div>
              <div><strong>Genre</strong><br />Action</div>
              <div><strong>Status</strong><br />3_Seasons</div>
            </div>

            <div className="preview-thumbs">
              <img src={thumb2} alt="scene 2" />
              <img src={thumb1} alt="scene 1" />
              <img src={thumb2} alt="scene 2" />
              <img src={thumb1} alt="scene 1" />
            </div>
          </div>

           <div className="info-movies">
              <div><strong>Category</strong><br />Movie <SlArrowDown /></div>
              <div><strong>Type</strong><br />Action <SlArrowDown /></div>
              <div><strong>Year</strong><br />2021 <SlArrowDown /></div>
            </div>
        </div>
      </div>
    </div>
  );
}