import { useState } from "react";

const Te : React.FC = () => {
  const [count, setCount] = useState(0);
    return(
      <div className="grid grid-cols-4 gap-4 justify-items-center">
        <h1 className="col-start-2">count is {count}</h1>
        <button onClick={() => setCount(count - 1)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full row-start-2">-</button>
        <button onClick={() => setCount(0)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full row-start-2">Reset</button>
        <button onClick={() => setCount(count + 1)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full row-start-2">+</button>
      </div>
    )  
  }
  
  export default Te;