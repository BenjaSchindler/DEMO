import { Col, Row } from "react-bootstrap"
import { StoreItem } from "../Components/StoreItem"
import storeItems from "../data/items.json"

export function Te() {
  return (
    <>
      <h1>Té e infusiones</h1>
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
