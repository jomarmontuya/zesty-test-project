import Navigation from '../components/common/Navigation'
import Hero from '../components/home/Hero'
import Slider from '../components/home/Slider'
import Footer from '../components/common/Footer'

export default function Error404() {
  return (
    <div>
      <Navigation />
      <Hero
        img={
          'https://irishacademy.ie/wp-content/uploads/2017/09/404-error-banner-2.jpg'
        }
        title={'Error 404'}
        subtitle={
          'The page you are looking for does not exist. Please check the URL and try again.'
        }
      />

      <Footer />
    </div>
  )
}
