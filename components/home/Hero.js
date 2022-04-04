import styled from 'styled-components'

const Hero = ({ img, title, subtitle, home }) => {
  return (
    <HeroWrapper
      style={{ backgroundImage: `url(${img})` }}
      className="d-flex flex-column justify-content-center align-items-center gap-2 px-4"
    >
      <Layer />
      <HeroText className="text-white text-center">{title}</HeroText>
      <HeroSubText className="text-white  text-center mt-2">
        {subtitle}
      </HeroSubText>

      {home && (
        <CallToAction
          href="#"
          className="bg-theme-color-primary text-white mt-2 block "
        >
          Try Free
        </CallToAction>
      )}

      {home && (
        <CallToAction
          href="#"
          className="bg-white border border-theme-color-primary text-theme-color-primary fw-bold mt-2 block "
        >
          Arrange A Guided Demo
        </CallToAction>
      )}
    </HeroWrapper>
  )
}

export default Hero

const HeroWrapper = styled.div`
  position: relative;
  min-height: 800px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`

const HeroText = styled.h1`
  z-index: 1;
  font-size: 4rem;
  font-weight: bold;
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`

const HeroSubText = styled.p`
  z-index: 1;
  max-width: 40%;
  margin: 0 auto;
  letter-spacing: 0.1rem;

  @media (max-width: 768px) {
    max-width: 80%;
  }
`

const CallToAction = styled.a`
  z-index: 1;
  padding: 0.8rem 2rem;
  text-decoration: none;
`
const Layer = styled.div`
  background-color: rgba(000, 000, 000, 0.7);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}`
