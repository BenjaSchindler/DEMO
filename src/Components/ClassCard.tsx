import { Link } from "react-router-dom";


const ClassCard: React.FC<{title:string, img:string, info:string, page:string}> = ({ title, img, info, page }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="object-scale-down h-48 w-96" src={img} alt="Sunset in the mountains"/>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">
                {info}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
            <Link to={page}>
                <button className="bg-transparent hover:bg-blue-500 text-gray-700 font-semibold hover:text-black py-2 px-4 border border-blue-500  hover:border-transparent rounded">
                    Ver Productos
                </button>
            </Link>
            </div>
        </div>
        )};

export default ClassCard;