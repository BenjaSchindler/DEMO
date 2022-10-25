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
    <Carousel className='h-full w-full sm:h-[65vh]'>
      <Carousel.Item interval={1500}>
        <img
          className="w-full object-cover h-full sm:h-[65vh]"
          src= {img[0]}
          alt={title[0]}
        />
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          className="w-full object-cover sm:h-[65vh]"
          src= {img[1]}
          alt={title[1]}
        />
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          className="w-full object-cover sm:h-[65vh]"
          src= {img[2]}
          alt={title[2]}
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;
