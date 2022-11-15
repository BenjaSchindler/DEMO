import { Col } from "react-bootstrap"
import { Card } from "../Components/Card"
import storeItems from "../data/items-chocolate.json"

export function Chocolate() {
  return (
    <>
      <div className='grid grid-cols-1 gap-4 px-5 pb-3 sm:grid-cols-2 md:grid-cols-4 '>
      <div className='col-span-4 row-span-2 py-3'>
        <div className="relative flex py-5 items-center">
          <div className="flex-grow border-t border-4 border-black"></div>
            <div className="box-border h-22 w-90 p-4 bg-black flex justify-center items-center">
              <p className='text-white text-4xl font-bold font-serif'>Chocolate Caliente</p>
            </div>
          <div className="flex-grow border-t border-4 border-black"></div>
        </div>
        </div>
        <div className='row-span-6 col-span-4 px-3 gap-2'>
          <div className='grid grid-cols-1 gap-4 px-5 pb-3 sm:grid-cols-2 md:grid-cols-4 '>
            {storeItems.map(item => (
              <Col key={item.id}>
                <Card {...item} />
              </Col>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}