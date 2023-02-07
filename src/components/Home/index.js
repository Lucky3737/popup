// Write your code here

import Header from '../Header'
import './index.css'

const Home = () => (
  <div className="app">
    <Header />
    <img
      src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
      alt="home"
      className="mobile-view"
    />

    <img
      src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
      alt="home"
      className="laptop-view"
    />
  </div>
)

export default Home
