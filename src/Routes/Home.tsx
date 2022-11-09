import 'bootstrap/dist/css/bootstrap.css';
import Card from '../Components/Card';
import CarouselComponent from '../Components/Carousels';
import ClassCard from '../Components/ClassCard';
import { CardData, datos } from '../Components/HardCode/Data';
import { getCookie } from '../Services/CookiesHelper';

var isAuthorized = false
if (getCookie('token') != ""){
  isAuthorized = true
}




const Home: React.FC = () => {
  /*
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
    */
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
    </>
  );
};

export default Home;
