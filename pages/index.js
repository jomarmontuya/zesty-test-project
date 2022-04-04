import Navigation from '../components/common/Navigation'
import Hero from '../components/home/Hero'
import Slider from '../components/home/Slider'
import Footer from '../components/common/Footer'

export default function Home({ data }) {
  return (
    <div>
      <Navigation home />
      <Hero
        home
        img={data[5].image}
        title={'Maximize your results'}
        subtitle={
          'Zesty.io is the scalable digital experience platform that empowers your marketing teams to create, distribute and optimize web content with less hassle.'
        }
      />
      <Slider data={data} />
      <Footer />
    </div>
  )
}

export const getStaticProps = async () => {
  const data = await fetch('https://www.zesty.io/-/gql/features.json')
    .then((res) => res.json())
    .then((json) => json)
    .catch((err) => console.log(err))

  return {
    props: {
      data,
    },
  }
}
