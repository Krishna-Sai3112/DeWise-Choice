

import React from "react"
import Link from "next/link"




const getDevinfoById = async (id) => {
    try {
      const res =  await fetch(`http://localhost:3000/api/devices/${id}`, {
        cache: "no-store",
      });
  
      if (!res.ok) {
        throw new Error("Failed to fetch device info");
      }
      else{
        console.log("info fetcheddd");
      }
      console.log(res.ok);
      return res.json();
    } 
    
    catch (error) {
      console.log(error);
    }
};
  



export default async function Page({ params }) {

    const { id } = params; 
    console.log(params);
    
    //const info  = await getDevinfoById(id); 
    
    // const { name, brand } ={ info };
    // console.log( name, brand );
    // console.log( await getDevinfoById(id) );
    // console.log(info)
    // console.log(info.name);

    //onst { _id, name, brand, price, imageurl, ramrom, display, processor, camera, battery, os, softwaresupport, iprating, build, dimensions, speakers, network, fingerprintsensor, audiojack, devclass, camrat, perfrat, designrat, mediarat, softwarerat } = await getDevinfoById(id);
    const info  = await getDevinfoById(id); 
    console.log(info.device.perfrat);
    

    return (
    <div className="w-full flex flex-col items-center">
        <div className="w-full h-[30px] hidden bg-slate-200 justify-center items-center">
            You are seeing the details of {params.slug}
        </div>
        
        <div id="devicecard" className="w-[95vw] h-[500px] min-w-[800px] my-5 rounded-xl flex items-center bg-slate-400">
            <div id="deviceimg" className="h-[500px] w-[500px] flex flex-col justify-center items-center">
                <img className=" h-[480px] w-[480px] rounded-xl" src="https://m.media-amazon.com/images/I/71lD7eGdW-L._SX679_.jpg" alt="cant-show-img" />
            </div>
            <div id="deviceinfo" className=" w-[650px] h-[480px] bg-slate-100 flex flex-col items-center rounded-xl overflow-y-auto overflow-x-hidden">
                <div id="devicename" className="w-[650px] h-[70px] mb-2 bg-slate-100 text-2xl font-bold flex justify-center items-center ">
                    Samsung Galaxy S23 Ultra
                </div>
                <div id="price" className="flex items-center">
                    <span className="text-lg font-light pr-1">Price:</span>
                    <span className="text-xl font-semibold">₹84,999</span>
                </div>
                <div id="prosandcons" className="flex flex-col w-[620px]">
                    <div id="pros" className="flex flex-col gap-y-1">
                        <span className="text-2xl font-semibold text-emerald-300">Pros</span>
                        <ul className="flex flex-col gap-y-1">
                            <li>Features one of the best camera setup on mobiles</li>
                            <li>Incredible Performance with SD 8 Gen-2</li>
                            <li>Top-notch Software with tons of Features and Customisation</li>
                            <li>Supports Useful AI Features</li>
                        </ul>
                    </div>
                    <div id="cons" className="flex flex-col gap-y-1">
                        <span className="text-2xl font-semibold text-orange-300">Cons</span>
                        <ul className="flex flex-col gap-y-1">
                            <li>Released 1.5 years ago</li>
                        </ul>
                    </div>
                </div>
                <div id="specs" className="flex flex-col w-[620px] mt-5">
                    <span className="font-semibold text-2xl">Full Details</span>
                    <div className="flex">
                        <span className="font-semibold pr-2 py-1 w-[100px]">RAM/ROM</span>
                        <span className="py-1">: 12/256GB, 12/512GB, 12GB/1TB</span>
                    </div>
                    <div className="flex">
                        <span className="font-semibold pr-2 py-1 w-[100px]">Display</span>
                        <span className="py-1">: 6.8' 120Hz QHD AMOLED with Gorilla Glass Victus 2</span>
                    </div>
                    <div className="flex">
                        <span className="font-semibold pr-2 py-1 w-[100px]">Processor</span>
                        <span className="py-1">: Qualcomm Snapdragon 8 Gen-2</span>
                    </div>
                    <div className="flex">
                        <span className="font-semibold pr-2 py-1 w-[100px]">Camera</span>
                        <span className="py-1">: 200MP main, 12MP wide, 10MP 3X Telephoto, 10MP 10X Telephoto and 12MP Front </span>
                    </div>
                    <div className="flex">
                        <span className="font-semibold pr-2 py-1 w-[100px]">Battery</span>
                        <span className="py-1">: 5000 mAh, 45W Fast Charging</span>
                    </div>
                    <div className="flex">
                        <span className="font-semibold pr-2 py-1 w-[100px]">OS</span>
                        <span className="py-1">: One UI, Android</span>
                    </div>
                    <div className="flex">
                        <span className="font-semibold pr-2 py-1 w-[100px]">Software Support</span>
                        <span className="py-1">: 4Y OS and 5Y Security</span>
                    </div>
                    <div className="flex">
                        <span className="font-semibold pr-2 py-1 w-[100px]">IP Rating</span>
                        <span className="py-1">: IP68</span>
                    </div>
                    <div className="flex">
                        <span className="font-semibold pr-2 py-1 w-[100px]">Build</span>
                        <span className="py-1">: Glass Back with Titanium Frame</span>
                    </div>
                    <div className="flex">
                        <span className="font-semibold pr-2 py-1 w-[100px]">Dimensions</span>
                        <span className="py-1">: 9/75/165mm, 233g</span>
                    </div>
                    <div className="flex">
                        <span className="font-semibold pr-2 py-1 w-[100px]">Speakers</span>
                        <span className="py-1">: Stereo with Dolby Support</span>
                    </div>
                    <div className="flex">
                        <span className="font-semibold pr-2 py-1 w-[100px]">Network</span>
                        <span className="py-1">: 5G</span>
                    </div>
                    <div className="flex">
                        <span className="font-semibold pr-2 py-1 w-[100px]">Fingerprint Sensor</span>
                        <span className="py-1">: In-Display</span>
                    </div>
                    <div className="flex">
                        <span className="font-semibold pr-2 py-1 w-[100px]">Audio Jack</span>
                        <span className="py-1">: No</span>
                    </div>
                </div>
            </div>
            <div id="ratings" className="w-[190px] h-[480px] mx-[10px] rounded-xl bg-slate-100 flex flex-col items-center justify-around">
                <div id="camera" className="flex flex-col items-center">
                    <div className="font-bold text-3xl">5*</div>
                    <h1 className="font-semibold text-xl">Camera</h1>
                </div>
                <div id="performance" className="flex flex-col items-center">
                    <div className="font-bold text-3xl">5*</div>
                    <h1 className="font-semibold text-xl">Performance</h1>
                </div>
                <div id="overall" className="flex flex-col items-center">
                    <div className="font-bold text-3xl">5*</div>
                    <h1 className="font-semibold text-xl">Overall</h1>
                </div>
            </div>
        </div>
        
        <div id="Explore" className="w-[92%] h-[200px] my-5 flex flex-col bg-neutral-50 rounded-xl">
        <h1 className="my-3 font-semibold self-center">Explore</h1>
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
        
    </div>
    )
  } 