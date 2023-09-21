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
           <h4>investment<br></br>is always<br></br>a good choose</h4>
        </div>
        <div className='SubContent'>
        <h4> <br></br></h4>
        </div>
        <div className='Start'>
          <button class="button-54" role="button"  onClick={()=>navigate("/Login")}>JOIN US</button>
        </div>
      </div>
      <div className='Right'>
        <br></br>
        <br></br>
        <img src="https://images.pexels.com/photos/7681670/pexels-photo-7681670.jpeg?auto=compress&cs=tinysrgb&w=1600" width="650" height="600"></img>
      </div>
      
  </div>
  </>
  )
}

export default Home;