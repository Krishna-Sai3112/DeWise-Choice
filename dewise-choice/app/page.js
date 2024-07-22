import Image from "next/image";
import Link from "next/link";
import Cardcollection from "./components/Cardcollection";


export default async function Home() {


  return (
    <div className="flex flex-col items-center">
      <div id="banner" className="w-full h-[150px] flex justify-center items-center text-gray-50">
        <h1 className="text-2xl font-bold">Welcome to DeWise Choice - The best place to choose the right device</h1>
      </div>
      <div id="surveys" className="w-full h-[200px] flex justify-center items-center text-gray-50">
        <div className="flex flex-col items-center w-full">
          <h1 className="text-2xl font-semibold">Looking for a new Device?</h1>
          <h2 className="mb-3 text-2xl font-semibold">Take our free survey and find the right one for you</h2>
          <div className="flex items-center">
            <Link href={"/surveys/phone"} className="flex justify-center items-center bg-gradient-to-b from-black to-red-900 hover:bg-gradient-to-b hover:from-black hover:to-red-700 font-semibold transition duration-500 rounded-xl mx-5 px-10 py-5">Phone</Link>
            <Link href={"/surveys/laptop"} className="flex justify-center items-center bg-gradient-to-b from-black to-red-900 hover:bg-gradient-to-b hover:from-black hover:to-red-700 font-semibold transition duration-500 rounded-xl mx-5 px-10 py-5">Laptop</Link>
            <Link href={"/surveys/tablet"} className="flex justify-center items-center bg-gradient-to-b from-black to-red-900 hover:bg-gradient-to-b hover:from-black hover:to-red-700 font-semibold transition duration-500 rounded-xl mx-5 px-10 py-5">Tablet</Link>
          </div>
        </div>
      </div>
      <div id="Latest" className="w-[92%] h-[200px] my-5 flex flex-col bg-gradient-to-b from-orange-950 to-orange-900 text-white rounded-xl">
        <h1 className="my-3 font-semibold self-center">Latest</h1>
        <div className="cards justify-center flex w-full h-full overflow-x-auto">
        <div className="card flex items-center h-[88%] w-[300px] bg-amber-950 hover:bg-black rounded-md my-2 mx-2 transition duration-500">
          <img className="h-[90%] w-[120px] mx-2" src="https://m.media-amazon.com/images/I/71lD7eGdW-L._SX679_.jpg" alt="cant show img" />
          <div className="details flex flex-col">
            <h1 className="font-semibold mb-1 mr-1">Samsung Galaxy S23 Ultra</h1>
            <h1 className="font-light">₹84,999</h1>
          </div>
        </div>
        <div className="card flex items-center h-[88%] w-[300px] bg-gray-300 hover:bg-gray-500 rounded-md my-2 mx-2 transition duration-500">
          <img className="h-[90%] w-[120px] mx-2" src="https://m.media-amazon.com/images/I/71lD7eGdW-L._SX679_.jpg" alt="cant show img" />
          <div className="details flex flex-col">
            <h1 className="font-semibold mb-1 mr-1">Samsung Galaxy S23 Ultra</h1>
            <h1 className="font-light">₹84,999</h1>
          </div>
        </div>
        <div className="card flex items-center h-[88%] w-[300px] bg-gray-300 hover:bg-gray-500 rounded-md my-2 mx-2 transition duration-500">
          <img className="h-[90%] w-[120px] mx-2" src="https://m.media-amazon.com/images/I/71lD7eGdW-L._SX679_.jpg" alt="cant show img" />
          <div className="details flex flex-col">
            <h1 className="font-semibold mb-1 mr-1">Samsung Galaxy S23 Ultra</h1>
            <h1 className="font-light">₹84,999</h1>
          </div>
        </div>
        <div className="card flex items-center h-[88%] w-[300px] bg-gray-300 hover:bg-gray-500 rounded-md my-2 mx-2 transition duration-500">
          <img className="h-[90%] w-[120px] mx-2" src="https://m.media-amazon.com/images/I/71lD7eGdW-L._SX679_.jpg" alt="cant show img" />
          <div className="details flex flex-col">
            <h1 className="font-semibold mb-1 mr-1">Samsung Galaxy S23 Ultra</h1>
            <h1 className="font-light">₹84,999</h1>
          </div>
        </div>
        </div>
      </div> 
      <div id="Best in Class" className="w-[92%] h-[200px] my-5 flex flex-col bg-neutral-50 rounded-xl">
        <h1 className="my-3 font-semibold self-center">Best in Class</h1>
        <div className="cards justify-center flex w-full h-full overflow-x-auto">
        <div className="card flex items-center h-[88%] w-[300px] bg-gray-300 hover:bg-gray-500 rounded-md my-2 mx-2 transition duration-500">
          <img className="h-[90%] w-[120px] mx-2" src="https://m.media-amazon.com/images/I/71lD7eGdW-L._SX679_.jpg" alt="cant show img" />
          <div className="details flex flex-col">
            <h1 className="font-semibold mb-1 mr-1">Samsung Galaxy S23 Ultra</h1>
            <h1 className="font-light">₹84,999</h1>
          </div>
        </div>
        <div className="card flex items-center h-[88%] w-[300px] bg-gray-300 hover:bg-gray-500 rounded-md my-2 mx-2 transition duration-500">
          <img className="h-[90%] w-[120px] mx-2" src="https://m.media-amazon.com/images/I/71lD7eGdW-L._SX679_.jpg" alt="cant show img" />
          <div className="details flex flex-col">
            <h1 className="font-semibold mb-1 mr-1">Samsung Galaxy S23 Ultra</h1>
            <h1 className="font-light">₹84,999</h1>
          </div>
        </div>
        <div className="card flex items-center h-[88%] w-[300px] bg-gray-300 hover:bg-gray-500 rounded-md my-2 mx-2 transition duration-500">
          <img className="h-[90%] w-[120px] mx-2" src="https://m.media-amazon.com/images/I/71lD7eGdW-L._SX679_.jpg" alt="cant show img" />
          <div className="details flex flex-col">
            <h1 className="font-semibold mb-1 mr-1">Samsung Galaxy S23 Ultra</h1>
            <h1 className="font-light">₹84,999</h1>
          </div>
        </div>
        <div className="card flex items-center h-[88%] w-[300px] bg-gray-300 hover:bg-gray-500 rounded-md my-2 mx-2 transition duration-500">
          <img className="h-[90%] w-[120px] mx-2" src="https://m.media-amazon.com/images/I/71lD7eGdW-L._SX679_.jpg" alt="cant show img" />
          <div className="details flex flex-col">
            <h1 className="font-semibold mb-1 mr-1">Samsung Galaxy S23 Ultra</h1>
            <h1 className="font-light">₹84,999</h1>
          </div>
        </div>
        </div>
      </div>
      <div id="Upcoming" className="w-[92%] h-[200px] my-5 flex flex-col bg-neutral-50 rounded-xl">
        <h1 className="my-3 font-semibold self-center">Upcoming</h1>
        <div className="cards justify-center flex w-full h-full overflow-x-auto">
        <div className="card flex items-center h-[88%] w-[300px] bg-gray-300 hover:bg-gray-500 rounded-md my-2 mx-2 transition duration-500">
          <img className="h-[90%] w-[120px] mx-2" src="https://m.media-amazon.com/images/I/71lD7eGdW-L._SX679_.jpg" alt="cant show img" />
          <div className="details flex flex-col">
            <h1 className="font-semibold mb-1 mr-1">Samsung Galaxy S23 Ultra</h1>
            <h1 className="font-light">₹84,999</h1>
          </div>
        </div>
        <div className="card flex items-center h-[88%] w-[300px] bg-gray-300 hover:bg-gray-500 rounded-md my-2 mx-2 transition duration-500">
          <img className="h-[90%] w-[120px] mx-2" src="https://m.media-amazon.com/images/I/71lD7eGdW-L._SX679_.jpg" alt="cant show img" />
          <div className="details flex flex-col">
            <h1 className="font-semibold mb-1 mr-1">Samsung Galaxy S23 Ultra</h1>
            <h1 className="font-light">₹84,999</h1>
          </div>
        </div>
        <div className="card flex items-center h-[88%] w-[300px] bg-gray-300 hover:bg-gray-500 rounded-md my-2 mx-2 transition duration-500">
          <img className="h-[90%] w-[120px] mx-2" src="https://m.media-amazon.com/images/I/71lD7eGdW-L._SX679_.jpg" alt="cant show img" />
          <div className="details flex flex-col">
            <h1 className="font-semibold mb-1 mr-1">Samsung Galaxy S23 Ultra</h1>
            <h1 className="font-light">₹84,999</h1>
          </div>
        </div>
        <div className="card flex items-center h-[88%] w-[300px] bg-gray-300 hover:bg-gray-500 rounded-md my-2 mx-2 transition duration-500">
          <img className="h-[90%] w-[120px] mx-2" src="https://m.media-amazon.com/images/I/71lD7eGdW-L._SX679_.jpg" alt="cant show img" />
          <div className="details flex flex-col">
            <h1 className="font-semibold mb-1 mr-1">Samsung Galaxy S23 Ultra</h1>
            <h1 className="font-light">₹84,999</h1>
          </div>
        </div>
        </div>
      </div>
      <Cardcollection/>
    </div>
  );
}
