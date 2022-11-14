import { Col, Row } from "react-bootstrap"
import { Card } from "../Components/Card"
import { StoreItem } from "../Components/StoreItem"
import storeItems from "../data/items.json"

export function Te() {
  return (
    <>
      <h1>Té e infusiones</h1>
      <div className='grid grid-cols-1 gap-4 px-5 pb-3 sm:grid-cols-2 md:grid-cols-4 '>
        {storeItems.map(item => (
          <Col key={item.id}>
            <Card {...item} />
          </Col>
        ))}
      </div>
    </>
  )
}
