import styled from 'styled-components'

const Footer = () => {
  return (
    <Wrapper className="bg-theme-color-neutral  d-flex justify-content-center align-items-center">
      <span className="text-white text-center">
        © Zesty.io Platform, Inc. All Rights Reserved.
      </span>
    </Wrapper>
  )
}
export default Footer

const Wrapper = styled.div`
  background-color: #f5f5f5;
  height: 100px;
`
