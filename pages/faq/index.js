import Navigation from '../../components/common/Navigation'
import Hero from '../../components/home/Hero'
import Footer from '../../components/common/Footer'
import FAQAccordion from '../../components/faq/faq'

export default function Faq({ data }) {
  return (
    <div>
      <Navigation faq />
      <Hero
        img={'https://zebyl.com/wp-content/uploads/2019/09/faq_banner.jpg'}
        title={'Frequently Asked Questions'}
        subtitle={'Scroll down and read our Frequently asked questions'}
      />
      <FAQAccordion data={data} />
      <Footer />
    </div>
  )
}

export const getStaticProps = async () => {
  const data = await fetch('https://www.zesty.io/-/gql/platform_section.json')
    .then((res) => res.json())
    .then((json) => json)
    .catch((err) => console.log(err))

  return {
    props: {
      data,
    },
  }
}
