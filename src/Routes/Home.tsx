import 'bootstrap/dist/css/bootstrap.css';
import CarouselComponent from '../Components/Carousels';
import { datos } from '../Components/HardCode/Data';
import NavTab from '../Components/NavTab';

const Home: React.FC = () => {
  return (
    <>
      <div className='grid grid-cols-4 bg-Nickel h-full divide-y w-full'>
        <div className='w-full divide-y row-span-6 col-span-4 lg:h-1/2'>
          <div className='col-span-4 row-span-4'>
            <CarouselComponent items={datos}/>
          </div>
          <div className='col-span-4 row-span-2 h-[20vh] items-center grid justify-items-center sm:h-[20vh]'>
            <NavTab/>
          </div>
        </div>  

        <div className='col-span-4 row-span-1 relative h-[60vh]'>
          <section id="Acerca de Nosotros"/>
          <img className='object-cover blur-xs w-screen h-full' src='https://i.imgur.com/mFm4CVD.jpg' alt='Tea'/>
          <h1 className='text-white font-mono font-bold text-2xl absolute inset-x-0 top-20 left-1/4 sm:text-8xl'>Acerca de Nosotros</h1>
          <p className='text-white text-center mx-1 font-mono font-bold text-sm absolute bottom-10 left-1 sm:text-2xl sm:bottom-20 sm:mx-40'>Somos una empresa dedicada a la venta y distribución de variedades de té e infusiones. Contamos con más de 15 años de experiencia y con la confianza de clientes como Work Café Santander y La Fuente Reina. Dentro de nuestros productos puedes encontrar Deslumbra Té Gourmet, Mezclas de té fino en Hojas, Accesorios para preparar té en hojas, Chocolate Caliente Wilef, Venta de Café Arábica y Regalos únicos.</p>
        </div>
        {/* <div className='w-full h-full justify-content-center content-center relative '>      
          <img className='blur-sm w-full h-4/6' src='https://i.imgur.com/7RZQJ5L.jpg' alt='Tea'/>
          <h1 className='text-white absolute font-extrabold text-3xl top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:text-8xl sm:top-1/4 sm:left-1/2'>Acerca de Nosotros</h1>
          <p className='absolute font-mono font-bold text-md bottom-1/3 left-1/2 -translate-x-1/2 sm:text-4xl'>Deslumbra Té Gourmet, Mezclas de té fino en Hojas. Accesorios para preparar té en hojas. Encuentra Regalos únicos. Chocolate Caliente Wilef y finas hierbas. Venta de Café Arábica. </p>
        </div> */}
      </div>
    </>
  );
};

export default Home;
