
import React from 'react';
import Link from 'next/link';



const getDeviceinfo = async () => {

    try {
      const res = await fetch("http://localhost:3000/api/devices" , {
        cache: "no-store",
      });
  
      if (!res.ok) {
        throw new Error("Device info fetch avvaledhu mowa :(");
      }
      else{
        console.log("info fetched..")
      }
    
      return res.json();
    } catch (error) {
      console.log("Info load avvaledhu mowa :(", error);
    }
  };


const Cardcollection = async ({ devclass }) => {

    const { devices } = await getDeviceinfo();
    const firstfour = [devices[0], devices[2], devices[5], devices[9]];

  return (

    <div id="latest" className="w-[92%] h-[200px] my-5 flex flex-col bg-transparent text-white rounded-xl">
          <h1 className="my-3 font-semibold self-center">{ devclass }</h1>
          <div className="cards justify-center flex w-full h-full overflow-x-auto">
            {firstfour.map((d) => (
              <Link href={`/device-info/${d._id}`} className="card flex items-center h-[88%] w-[300px] bg-gradient-to-b from-black to bg-red-900 hover:bg-gradient-to-b hover:from-black hover:to-red-800 rounded-md my-2 mx-2 transition duration-500">
                <div className='h-[90%] w-[120px] mx-2 flex justify-center bg-white'>
                  <img className="h-full" src={d.imageurl} alt="cant show img" />
                </div>
                <div className="details flex flex-col h-[90%] w-[170px] justify-center">
                  <h1 className="font-semibold mb-1 mr-1">{d.name}</h1>
                  <h1 className="font-light">₹{d.price}</h1>
                </div>
              </Link>
            ))}
          </div>
        </div>
  )
}

export default Cardcollection
