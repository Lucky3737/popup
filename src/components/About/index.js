// Write your code here
import Header from '../Header'
import './index.css'

const About = () => (
  <div className="app">
    <Header />
    <img
      src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
      alt="about"
      className="laptop-view"
    />
    <img
      src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
      alt="about"
      className="mobile-view"
    />
  </div>
)

export default About
