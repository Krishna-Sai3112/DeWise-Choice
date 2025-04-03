"use client"
import React from 'react';
import Link from 'next/link';
import { useValues } from '@/app/context/ValuesContext';


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

const filterDevicesByPriceRange = (devices, minPrice, maxPrice) => {
    // Convert price string to number for comparison
    const convertPriceToNumber = (price) => {
        return parseFloat(price.replace(/,/g, ''));
    };

    // Filter the devices within the price range
    return devices.filter(device => {
        const price = convertPriceToNumber(device.price);
        return price >= minPrice && price <= maxPrice;
    });
};


const filterDevicesByPriority = (filteredDevices, des,cam, perf, med, sware, imp) => {
    let multipliers = [0, 10, 8, 4, 0]

    des = multipliers[des];
    cam = multipliers[cam];
    perf = multipliers[perf];
    med = multipliers[med];
    sware = multipliers[sware];

    if(imp==1){
      des = 15;
    }
    else if(imp==2){
      cam = 15;
    }
    else if(imp==3){
      perf = 15;
    }
    else if(imp==4){
      med = 15;
    }
    else if(imp==5){
      sware = 15;
    }

    const calculateScore = (filteredDevice) => {
        return (filteredDevice.designrat * des) + (filteredDevice.camrat * cam) + (filteredDevice.perfrat * perf) + (filteredDevice.mediarat * med) + (filteredDevice.softwarerat * sware);
    };

    const devicesWithScores = filteredDevices.map(filteredDevice => ({
        ...filteredDevice,
        score: calculateScore(filteredDevice)
    }));

    
    return devicesWithScores.sort((a, b) => b.score - a.score);

}


const page = async () => {

    const { values } = useValues();
    const { devices } = await getDeviceinfo();
    // console.log(values);
    // console.log(devices);

    let min = [0, 0, 10000, 15000, 20000, 25000, 30000, 40000, 80000]
    let max = [0, 10000, 15000, 20000, 25000, 30000, 40000, 80000, 1000000]

    const minPrice = min[values.budget]; 
    const maxPrice = max[values.budget];
    const des = values.des;
    const cam = values.cam;
    const perf = values.perf;
    const med = values.med;
    const sware = values.sware;
    const imp = values.imp;

    const filteredDevices = filterDevicesByPriceRange(devices, minPrice, maxPrice);
    // console.log(filteredDevices);
    const scoredDevices = filterDevicesByPriority(filteredDevices, des, cam, perf, med, sware, imp);
    // console.log(suggestedDevices);

    // scoredDevices.forEach(suggestedDevice => {
    //     console.log(`Name: ${scoredDevice.name}, Price: ${scoredDevice.price}, Score: ${scoredDevice.score}`);
    // })

    const finalDevices =[scoredDevices[0], scoredDevices[1], scoredDevices[2]];
    console.log(finalDevices);

  return (
    <div className='w-full bg-slate-400 flex items-center justify-center'>
      <div className='w-[70%] h-full bg-slate-900 rounded-xl m-5 p-10'>
        <span className='text-2xl font-semibold text-gray-50'>Here are the top 3 Devices for you!</span>
        {finalDevices.map((d) =>(
            <Link href={`/device-info/${d._id}`} className='w-full h-[200px] bg-blue-200 my-3 flex items-center justify-center rounded-lg'>
              <div className='w-[25%] h-full flex justify-center items-center bg-white rounded-lg'>
                <img src={d.imageurl} alt="cant show img" className='h-[90%] mx-3'/>
              </div>
              <div className='flex flex-col h-[200px] w-[20%] gap-y-2 px-2 items-center justify-center text-xl font-semibold text-gray-900'>
                <span className='flex w-full justify-center'>{d.name}</span>
                <span>₹{d.price}</span>
              </div>
              <div className='flex flex-col h-[200px] w-[55%] overflow-y-scroll'>
              <div className="flex flex-col gap-y-1">
                <span className="text-2xl font-semibold text-emerald-700">Pros</span>
                  <ul className="flex flex-col gap-y-1">
                    <li>{d.pro1}</li>
                    <li>{d.pro2}</li>
                    <li>{d.pro3}</li>
                    <li>{d.pro4}</li>
                  </ul>
              </div>
              <div className="flex flex-col gap-y-1">
                <span className="text-2xl font-semibold text-orange-700">Cons</span>
                  <ul className="flex flex-col gap-y-1">
                    <li>{d.con1}</li>
                    <li>{d.con2}</li>
                  </ul>
              </div>
              </div>
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default page