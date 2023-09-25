import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../Components/Layout';
import "../assets/css/Home.css";
import NavbarHome from '../Components/NavbarHome';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <>
    <div>
        <NavbarHome/>
    </div>
  
  <div className="MainContainer">
      <div className="Left">
        <div className="MainTitle">
           <h6>investment is always<br></br>a good choice<br></br></h6>
        </div>
        <div className='SubContent'>
        <h7>grow with money</h7>
        </div>
        <div className='Start'>
          <button class="button-54" role="button"  onClick={()=>navigate("/Login")}>JOIN US</button>
        </div>
      </div>
      <div className='Right'>
        <br></br>
        <br></br>
        <img src="https://images.pexels.com/photos/7681670/pexels-photo-7681670.jpeg?auto=compress&cs=tinysrgb&w=1600" width="850" height="600"></img>
      </div>
  
</div>
  </>
  )
}

export default Home;