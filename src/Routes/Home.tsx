import 'bootstrap/dist/css/bootstrap.css';
import CarouselComponent from '../Components/Carousels';
import { datos } from '../Components/HardCode/Data';
import NavTab from '../Components/NavTab';

const Home: React.FC = () => {
  return (
    <>
      <div  className='bg-PewterBlue h-full'>
        <div>
          <CarouselComponent items={datos}/>
        </div>
        <div className='py-20'>
          <NavTab/>
        </div>
        <div className='w-full h-full flex justify-center items-center relative py-16'>      
          <img className='blur-sm w-full h-4/6' src='https://i.imgur.com/7RZQJ5L.jpg' alt='Tea'/>
          <h1 className='text-white absolute font-extrabold text-3xl top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:text-8xl sm:top-1/4 sm:left-1/2'>Acerca de Nosotros</h1>
          <p className='absolute font-mono font-bold text-2xl bottom-1/3 left-1/2 -translate-x-1/2 sm:text-4xl'>Deslumbra Té Gourmet, Mezclas de té fino en Hojas. Accesorios para preparar té en hojas. Encuentra Regalos únicos. Chocolate Caliente Wilef y finas hierbas. Venta de Café Arábica. </p>
        </div>
      </div>
    </>
  );
};

export default Home;
