import hero_img from '../../assets/hero.png'
import Brands from '../Brands/Brands'
import './Hero.css'

const Hero = () => {
  return (
    <div className="hero_container">
      <div className="hero_content">
        <h1>QUALITY TOBACCO</h1>
        <img src={hero_img} alt="hero_image" className='hero_img' />
      </div>

      {/* Brands masuk ke dalam Hero */}
      <Brands />
    </div>
  )
}

export default Hero