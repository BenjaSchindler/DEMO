import Carousel from 'react-bootstrap/Carousel';

interface CarouselProps {
  items: CarouselModel;
}

interface CarouselModel {
  title: string[];
  img: string[];
  description: string[];
}





const CarouselComponent: React.FC<CarouselProps> = ({
  items: { title, img, description}
}) => {
  return (
    <Carousel>
      <Carousel.Item interval={1500}>
        <img
          className="w-screen object-cover sm:h-[36rem]"
          src= {img[0]}
          alt={title[0]}
        />
        <Carousel.Caption className='invisible sm:visible'>
        <div className="items-center rounded-lg h-24 bg-gradient-to-r from-yellow-400 to-yellow-700">
            <h3 className='pt-3 font-mono font-bold '>{title[0]}</h3>
            <p className='font-mono font-bold '>{description[0]}</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          className="w-screen object-cover sm:h-[36rem]"
          src= {img[1]}
          alt={title[1]}
        />
        <Carousel.Caption className='invisible sm:visible'>
          <div className="items-center rounded-lg h-24 bg-gradient-to-r from-yellow-900 to-sky-600">
            <h3 className='pt-3 font-mono font-bold '>{title[1]}</h3>
            <p className='font-mono font-bold '>{description[1]}</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          className="w-screen object-cover sm:h-[36rem]"
          src= {img[2]}
          alt={title[2]}
        />
        <Carousel.Caption className='invisible sm:visible'>
        <div className="items-center rounded-lg h-24 bg-gradient-to-r from-stone-500 to-red-700">
            <h3 className='pt-3 font-mono font-bold '>{title[2]}</h3>
            <p className='font-mono font-bold '>{description[2]}</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;
