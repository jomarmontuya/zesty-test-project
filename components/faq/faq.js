import Accordion from 'react-bootstrap/Accordion'

const FAQAccordion = ({ data }) => {
  function createMarkup(data) {
    return { __html: data }
  }
  return (
    <div className="py-5 w-75 mx-auto">
      <h1 className="text-center theme-color-secondary">FAQs</h1>
      <Accordion defaultActiveKey="0">
        {data.slice(0, 5).map((item, idx) => {
          return (
            <Accordion.Item key={idx} eventKey={idx}>
              <Accordion.Header>{item.title}</Accordion.Header>
              <Accordion.Body>
                <div
                  dangerouslySetInnerHTML={createMarkup(item.text_content)}
                />
              </Accordion.Body>
            </Accordion.Item>
          )
        })}
      </Accordion>
    </div>
  )
}

export default FAQAccordion
