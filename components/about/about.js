/* eslint-disable @next/next/no-img-element */
import styled from 'styled-components'

const Content = ({ data }) => {
  function createMarkup(data) {
    return { __html: data }
  }
  return (
    <div className="py-5">
      <PageContent
        className="text-center mx-auto mt-5"
        dangerouslySetInnerHTML={createMarkup(data.page_content)}
      />
    </div>
  )
}
export default Content
const PageContent = styled.div`
  max-width: 50%;
  @media (max-width: 768px) {
    max-width: 90%;
  }
`
