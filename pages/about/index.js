import Navigation from '../../components/common/Navigation'
import Hero from '../../components/home/Hero'
import Footer from '../../components/common/Footer'
import Content from '../../components/about/about'

export default function About({ data }) {
  return (
    <div>
      <Navigation about />
      <Hero
        img={data.hero_image}
        title={data.title}
        subtitle={data.hero_content.replace(/(<([^>]+)>)/gi, '')}
      />
      <Content data={data} />
      <Footer />
    </div>
  )
}

export const getStaticProps = async () => {
  const data = await fetch('https://www.zesty.io/-/gql/about.json')
    .then((res) => res.json())
    .then((json) => json[0])
    .catch((err) => console.log(err))

  return {
    props: {
      data,
    },
  }
}
