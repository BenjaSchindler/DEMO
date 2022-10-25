interface CardProps {
    products: CardModel;
}

interface CardModel {
    title: string;
    img: string;
    info: string;
    style: string;
}

const Card: React.FC<CardProps> = ({
    products:{ title, img, info },
}) => {
    return (

        <a href="/#" className="flex flex-col items-center bg-black rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={img} alt={title}/>
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{info}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            </div>
        </a>
)};

export default Card;