import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Footer } from "../../Components";
import "./Home.scss"

const Home = () => {
  return (
    <div>
      <Navbar />

      <div className="home">

        <div className="welcome">
          <h2>Welcome to CourseMatch!</h2>
          <p>Harness the power of AI to find your perfect Udemy course. Get personalized recommendations powered by advanced Fuzzy Logic technology.</p>
          <h3>How it Works:</h3>
          <ol>
            <li><b>Input Your Course Details: </b> Tell us the title, duration, and price of the Udemy course you've finished.</li>
            <li><b>AI-Powered Recommendations: </b> Our AI system analyzes your input to suggest courses tailored just for you.</li>
            <li><b>Deepen Your Learning: </b> Embark on the next chapter of your educational adventure with confidence.</li>
          </ol>
          <Link to="/recommend" className="getstarted">Get Started</Link>
        </div>

        <div className="about">
          <h2>About CourseMatch</h2>
          <p>CourseMatch revolutionizes the way learners discover their next Udemy course. Amidst the vast sea of options on Udemy, pinpointing the ideal next step can be daunting. Enter CourseMatch.</p>
          <h3>Why CourseMatch?</h3>
          <ul>
            <li>At the heart of CourseMatch is an advanced Fuzzy Logic AI system, fine-tuned to parse nuances in course details and align them with your learning preferences.</li>
            <li>No more endless browsing. Get straight to courses that resonate with your interests and learning pace.</li>
            <li>Beyond our AI's capabilities, our expert team reviews and curates top courses to guarantee a meaningful learning experience.</li>
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Home;