/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Carousel from 'react-bootstrap/Carousel'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const Slider = ({ data }) => {
  return (
    <Row className="mb-5">
      <div className="py-5 text-center">
        <h1 className="text-uppercase my-5">our features</h1>
      </div>
      <Col>
        <TextWrapper className="h-100 d-flex flex-column justify-content-center align-items-center gap-4">
          <h1>
            Spend Less Time Developing &{' '}
            <span className="text-theme-color-secondary">
              More Time Creating
            </span>
          </h1>

          <p>
            Your business moves fast - don’t let your CMS slow you down. Zesty
            helps you get back to the best part of your job: creating.
          </p>
          <ul>
            <li>
              A CMS that grows with you Whether it’s a growing customer base or
              increasing complexity, Zesty's digital experience solutions help
              you grow without limits.
            </li>
            <li>
              Automation at every step Let our automated code and SEO
              optimization do the hard work so you can focus on what matters
              most: connecting with your customers.
            </li>
            <li>
              Robust foundation with flexible framework Build your CMS from the
              ground up without plugins or add-ons that bog down development,
              page speed, and growth.
            </li>
          </ul>
        </TextWrapper>
      </Col>
      <Col>
        <SliderWrapper>
          {data.map((item, idx) => {
            return (
              <SliderItem key={idx}>
                <img
                  className="d-block w-100"
                  src={item.image}
                  alt="First slide"
                />
                <Carousel.Caption className="bg-theme-color-secondary">
                  <h3>{item.title}</h3>
                  <p>{item.subtitle}</p>
                </Carousel.Caption>
              </SliderItem>
            )
          })}
        </SliderWrapper>
      </Col>
    </Row>
  )
}

export default Slider
import styled from 'styled-components'

const TextWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
`

const SliderWrapper = styled(Carousel)``
const SliderItem = styled(Carousel.Item)`
  height: 700px;
  > img {
    position: absolute;
    object-fit: cover;
    top: 0;
    left: 0;
    min-height: 300px;
  }
`
