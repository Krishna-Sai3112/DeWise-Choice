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


const Cardcollection = async () => {

    const { devices } = await getDeviceinfo();

  return (

    <div id="latest" className="w-[92%] h-[200px] my-5 flex flex-col bg-neutral-50 rounded-xl">
          <h1 className="my-3 font-semibold self-center">Latest devices</h1>
          <div className="cards justify-center flex w-full h-full overflow-x-auto">
            {devices.map((d) => (

              (d.class == latest &&
              <div key={d._id} className="card flex items-center h-[88%] w-[300px] bg-gray-300 hover:bg-gray-500 rounded-md my-2 mx-2 transition duration-500">
                <img className="h-[90%] w-[120px] mx-2" src={d.imageurl} alt="cant show img" />
                <div className="details flex flex-col">
                  <h1 className="font-semibold mb-1 mr-1">{d.name}</h1>
                  <h1 className="font-light">₹{d.price}</h1>
                </div>
              </div>
              )
            ))}
          </div>
        </div>
  )
}

export default Cardcollection
