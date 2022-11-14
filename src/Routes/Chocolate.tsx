import { Col, Row } from "react-bootstrap"
import { StoreItem } from "../Components/StoreItem"
import storeItems from "../data/items-chocolate.json"

export function Chocolate() {
  return (
    <>
      <h1>Chocolate caliente</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map(item => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  )
}