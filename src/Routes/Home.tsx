import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from 'react';
import Card from '../Components/Card';
import CarouselComponent from '../Components/Carousels';
import ClassCard from '../Components/ClassCard';
import { CardData, datos } from '../Components/HardCode/Data';
import { getCookie } from '../Services/CookiesHelper';

console.log(getCookie('token'))
var isAuthorized = false
if (getCookie('token') != ""){
  isAuthorized = true
}


const Home: React.FC = () => {

  const probarDatos = () => {
    const token = getCookie('token')
    fetch('http://localhost:3001/api/posts', {
      method:"POST",
      headers:{
        'authorization': token ? `Bearer ${token}`: ""
      }
      }).then((res) => res.json()).then(data => {
      })
    }
    useEffect(()=>{
      probarDatos()
    },[]
    )

  return (
    <>
    <div className='grid grid-cols-4 bg-white h-full w-full'>
      {/* Carousel y Nuestro productos */}
      <div className='w-full row-span-6 col-span-4 lg:h-1/2'>
        {/* Carousel */}
        <div className='col-span-4 row-span-4'>
          <CarouselComponent items={datos}/>
        </div>
        {/* Nuestros prodcutos */}
        <div className='col-span-4 row-span-2 p-3'> 
          <div className="relative flex py-5 items-center">
              <div className="flex-grow border-t border-4 border-black"></div>
                <div className="box-border h-22 w-90 p-4 bg-black flex justify-center items-center">
                  <p className='text-white text-4xl font-bold font-serif'>Nuestros Productos</p>
                </div>
              <div className="flex-grow border-t border-4 border-black"></div>
          </div>
        </div>
      </div> 
      {/* Prodcutos */}
      <div className='row-span-6 col-span-4 px-3 gap-2'>
        <div className='grid grid-cols-1 gap-4 px-5 pb-3 sm:grid-cols-2 md:grid-cols-4 '>
        {CardData?.length > 0 ? (
              <>
              
              {CardData.map((dato) => (
                <div className={`'col-span-1'`}>
                  <Card products={dato}/>
                </div>
              ))}
              </>

          ) : (
            <div>
              <h2>No data found sorry :c</h2>
            </div>
          )}
        </div>
      </div> 
      {/* Conoce Nuestras Categorias */}
      <div className='col-span-4 row-span-2 py-3'>
        <div className="relative flex py-5 items-center">
          <div className="flex-grow border-t border-4 border-black"></div>
            <div className="box-border h-22 w-90 p-4 bg-black flex justify-center items-center">
              <p className='text-white text-4xl font-bold font-serif'>Conoce Nuestras Categorias</p>
            </div>
          <div className="flex-grow border-t border-4 border-black"></div>
        </div>
      </div>
      {/* Categorias */}
      <div className='col-span-4 row-span-2 py-3'>
        <div className='grid grid-cols-1 gap-4 px-5 pb-3 sm:grid-cols-3 justify-center'>
          <ClassCard title={'Te de Hierbas'} img={'https://i.imgur.com/Y2hBPKj.png'} info={'Estas preparaciones a base de hierbas silvestres proporcionan diversos beneficios para nuestra salud. '}/>
          <ClassCard title={'Tes en Bolsa'} img={'https://i.imgur.com/zxj63nb.png'} info={'Té, café e infusiones para todos los gustos, naturales y orgánicos, alternativas perfectas colmadas de ricos aromas y sabores.'}/>
          <ClassCard title={'Utensilios para Te'} img={'https://i.imgur.com/pYsYiDq.png'} info={'Hervidores, teteras, infusionadores, termos: contamos con muchos accesorios para disfrutar de un té con calma... y sin llenarlo de tóxicos.'}/>
        </div>
      </div>
    </div>

      {/*<div className='grid grid-cols-4 bg-Beige h-full divide-y w-full'>
        <div className='w-full divide-y row-span-6 col-span-4 lg:h-1/2'>
          <div className='col-span-4 row-span-4'>
            <CarouselComponent items={datos}/>
          </div>
          <div className='col-span-4 row-span-2 h-[20vh] items-center grid justify-items-center sm:h-[20vh]'>
            <NavTab/>
          </div>
        </div>  

        <div className='col-span-4 row-span-1 relative h-fit content-center'>
          <section id="Acerca de Nosotros"/>
          <img className='object-cover blur-xs w-screen h-fit' src='https://i.imgur.com/mFm4CVD.jpg' alt='Tea'/>
          <p className='absolute'>
            Acerca de Nosotros
            <span className='absolute'>Somos una empresa dedicada a la venta y distribución de variedades de té e infusiones. Contamos con más de 15 años de experiencia y con la confianza de clientes como Work Café Santander y La Fuente Reina. Dentro de nuestros productos puedes encontrar Deslumbra Té Gourmet, Mezclas de té fino en Hojas, Accesorios para preparar té en hojas, Chocolate Caliente Wilef, Venta de Café Arábica y Regalos únicos.</span>
          </p>
           <p className='text-white font-mono pb-1 font-bold text-2xl absolute inset-x-0 top-20 text-center sm:text-6xl md:text-8xl sm:top-10'>Acerca de Nosotros</p>
          <p className='text-white text-center font-mono font-bold text-sm absolute bottom-20 left-1 sm:text-2xl sm:bottom-20  md:bottom-10'>Somos una empresa dedicada a la venta y distribución de variedades de té e infusiones. Contamos con más de 15 años de experiencia y con la confianza de clientes como Work Café Santander y La Fuente Reina. Dentro de nuestros productos puedes encontrar Deslumbra Té Gourmet, Mezclas de té fino en Hojas, Accesorios para preparar té en hojas, Chocolate Caliente Wilef, Venta de Café Arábica y Regalos únicos.</p> 
        </div>

        <div className='col-span-4 row-span-3 h-full w-full content-center mb-10'>
          <h1 className='text-white font-mono font-bold text-center text-2xl inset-x-0 top-20 left-1/4 sm:text-8xl'>Nuestros Productos</h1>
        </div>
        
        {CardData?.length > 0 ? (
            <>

            {CardData.map((dato) => (
              <div className={`'col-span-1 '${dato.style}`}>
                <Card products={dato}/>
              </div>
            ))}
            </>

        ) : (
          <div>
            <h2>No data found sorry :c</h2>
          </div>
        )}
      </div>*
     */}
    </>
  );
};

export default Home;
