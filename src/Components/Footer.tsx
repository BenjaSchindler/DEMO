const Footer: React.FC = () => {
  return (
    <footer className="p-4 bg-Pumpkin shadow md:px-6 md:py-8">
      <div className="sm:flex sm:items-center sm:justify-between">
        <a
          href="https://www.instagram.com/inspiraing/"
          className="flex items-center mb-4 sm:mb-0"
        >
          <img
            src="https://i.imgur.com/uwuSHzp.png"
            className="mr-3 h-8"
            alt="Inspira Logo"
          />
        </a>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
          <li>
            <a href="/#" className="text-white mr-4 text-lg hover:underline md:mr-6 font-mono font-bold">
              Instagram
            </a>
          </li>
          <li>
            <a href="/#" className="text-white mr-4 text-lg hover:underline md:mr-6 font-mono font-bold">
              Contactos:
            </a>
          </li>
          <li>
            <a href="tel:+56998742685" className="text-white mr-4 text-lg hover:underline md:mr-6 font-mono font-bold">
            +56998742685
            </a>
          </li>
          <li>
            <a href="mailto:ventas@inspiragourmet.com" className="text-white mr-4 text-lg hover:underline md:mr-6 font-mono font-bold">
            ventas@inspiragourmet.com
            </a>
          </li>
        </ul>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400 font-mono font-bold">
        © 2022{" "}
        <a href="https://www.instagram.com/inspiraing/" className="hover:underline font-mono font-bold">
          Inspira Gourmet™
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;