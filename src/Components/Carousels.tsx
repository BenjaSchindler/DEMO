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
          className="w-screen object-cover sm:h-[33rem]"
          src= {img[0]}
          alt={title[0]}
        />
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          className="w-screen object-cover sm:h-[33rem]"
          src= {img[1]}
          alt={title[1]}
        />
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          className="w-screen object-cover sm:h-[33rem]"
          src= {img[2]}
          alt={title[2]}
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;
