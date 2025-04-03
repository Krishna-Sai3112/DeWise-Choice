"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/router';

export default function AddDevice() {

    const [name, setName] = useState("");
    const [brand, setBrand] = useState("");
    const [price, setPrice] = useState("");
    const [imageurl, setImageurl] = useState("");
    const [ramrom, setRamrom] = useState("");
    const [display, setDisplay] = useState("");
    const [processor, setProcessor] = useState("");
    const [camera, setCamera] = useState("");
    const [battery, setBattery] = useState("");
    const [os, setOs] = useState("");
    const [softwaresupport, setSoftwaresupport] = useState("");
    const [iprating, setIprating] = useState("");
    const [build, setBuild] = useState("");
    const [dimensions, setDimensions] = useState("");
    const [speakers, setSpeakers] = useState("");
    const [network, setNetwork] = useState("");
    const [fingerprintsensor, setFingerprintsensor] = useState("");
    const [audiojack, setAudiojack] = useState("");
    const [devclass, setDevclass] = useState("");
    const [camrat, setCamrat] = useState("");
    const [perfrat, setPerfrat] = useState("");
    const [designrat, setDesignrat] = useState("");
    const [mediarat, setMediarat] = useState("");
    const [softwarerat, setSoftwarerat] = useState("");
    const [pro1, setPro1] = useState("");
    const [pro2, setPro2] = useState("");
    const [pro3, setPro3] = useState("");
    const [pro4, setPro4] = useState("");
    const [con1, setCon1] = useState("");
    const [con2, setCon2] = useState("");
    

    

    const handleSubmit = async (e) => {
        e.preventDefault();
    
    
        try {
          const res = await fetch("http://localhost:3000/api/devices", {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({ name, brand, price, imageurl, ramrom, display, processor, camera, battery, os, softwaresupport, iprating, build, dimensions, speakers, network, fingerprintsensor, audiojack, devclass, camrat, perfrat, designrat, mediarat, softwarerat, pro1, pro2, pro3, pro4, con1, con2 }),
          });
    
          if (res.ok) {
            console.log("success...yayyyyy!!!")
          } else {
            throw new Error("Failed to add a device");
          }
        } catch (error) {
          console.log(error);
        }
      };

  return (
    <div className='flex flex-col items-center w-full'>
      <div className="m-5 bg-purple-300 rounded-xl w-full">
        <div className="sidegap m-5 w-full">
            <h1 className='font-bold text-2xl self-center my-5'>Device Detais Storing</h1>
            <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
                <input 
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    className='border border-slate-500 px-8 py-2' 
                    type="text" 
                    placeholder='Name'
                />
                <input 
                    onChange={(e) => setBrand(e.target.value)}
                    value={brand}
                    className='border border-slate-500 px-8 py-2' 
                    type="text" 
                    placeholder='Brand'
                />
                <input 
                    onChange={(e) => setPrice(e.target.value)}
                    value={price}
                    className='border border-slate-500 px-8 py-2' 
                    type="text" 
                    placeholder='Price'
                />
                <input 
                    onChange={(e) => setImageurl(e.target.value)}
                    value={imageurl}
                    className='border border-slate-500 px-8 py-2' 
                    type="text" 
                    placeholder='Image Url'
                />
                <input 
                    onChange={(e) => setRamrom(e.target.value)}
                    value={ramrom}
                    className='border border-slate-500 px-8 py-2' 
                    type="text" 
                    placeholder='Ram/Rom'
                />
                <input 
                    onChange={(e) => setDisplay(e.target.value)}
                    value={display}
                    className='border border-slate-500 px-8 py-2' 
                    type="text" 
                    placeholder='Display'
                />
                <input 
                    onChange={(e) => setProcessor(e.target.value)}
                    value={processor}
                    className='border border-slate-500 px-8 py-2' 
                    type="text" 
                    placeholder='Processor'
                />
                <input 
                    onChange={(e) => setCamera(e.target.value)}
                    value={camera}
                    className='border border-slate-500 px-8 py-2' 
                    type="text" 
                    placeholder='Camera'
                />
                <input 
                    onChange={(e) => setBattery(e.target.value)}
                    value={battery}
                    className='border border-slate-500 px-8 py-2' 
                    type="text" 
                    placeholder='Battery'
                />
                <input 
                    onChange={(e) => setOs(e.target.value)}
                    value={os}
                    className='border border-slate-500 px-8 py-2' 
                    type="text" 
                    placeholder='OS'
                />
                <input 
                    onChange={(e) => setSoftwaresupport(e.target.value)}
                    value={softwaresupport}
                    className='border border-slate-500 px-8 py-2' 
                    type="text" 
                    placeholder='Software Support'
                />
                <input 
                    onChange={(e) => setIprating(e.target.value)}
                    value={iprating}
                    className='border border-slate-500 px-8 py-2' 
                    type="text" 
                    placeholder='IP Rating'
                />
                <input 
                    onChange={(e) => setBuild(e.target.value)}
                    value={build}
                    className='border border-slate-500 px-8 py-2' 
                    type="text" 
                    placeholder='Build'
                />
                <input 
                    onChange={(e) => setDimensions(e.target.value)}
                    value={dimensions}
                    className='border border-slate-500 px-8 py-2' 
                    type="text" 
                    placeholder='Dimensions'
                />
                <input 
                    onChange={(e) => setSpeakers(e.target.value)}
                    value={speakers}
                    className='border border-slate-500 px-8 py-2' 
                    type="text" 
                    placeholder='Speakers'
                />
                <input 
                    onChange={(e) => setNetwork(e.target.value)}
                    value={network}
                    className='border border-slate-500 px-8 py-2' 
                    type="text" 
                    placeholder='Network'
                />
                <input 
                    onChange={(e) => setFingerprintsensor(e.target.value)}
                    value={fingerprintsensor}
                    className='border border-slate-500 px-8 py-2' 
                    type="text" 
                    placeholder='Fingerprint Sensor'
                />
                <input 
                    onChange={(e) => setAudiojack(e.target.value)}
                    value={audiojack}
                    className='border border-slate-500 px-8 py-2' 
                    type="text" 
                    placeholder='Audio Jack'
                />
                <input 
                    onChange={(e) => setDevclass(e.target.value)}
                    value={devclass}
                    className='border border-slate-500 px-8 py-2' 
                    type="text" 
                    placeholder='Device Class (Latest/ Upcoming/ no-class)'
                />
                <input 
                    onChange={(e) => setCamrat(e.target.value)}
                    value={camrat}
                    className='border border-slate-500 px-8 py-2' 
                    type="number" 
                    placeholder='Camera Rating'
                />
                <input 
                    onChange={(e) => setPerfrat(e.target.value)}
                    value={perfrat}
                    className='border border-slate-500 px-8 py-2' 
                    type="number" 
                    placeholder='Performance Rating'
                />
                <input 
                    onChange={(e) => setDesignrat(e.target.value)}
                    value={designrat}
                    className='border border-slate-500 px-8 py-2' 
                    type="number" 
                    placeholder='Design and Build Rating'
                />
                <input 
                    onChange={(e) => setMediarat(e.target.value)}
                    value={mediarat}
                    className='border border-slate-500 px-8 py-2' 
                    type="number" 
                    placeholder='Multimedia Rating'
                />
                <input 
                    onChange={(e) => setSoftwarerat(e.target.value)}
                    value={softwarerat}
                    className='border border-slate-500 px-8 py-2' 
                    type="number" 
                    placeholder='Software Support Rating'
                />

                <input 
                    onChange={(e) => setPro1(e.target.value)}
                    value={pro1}
                    className='border border-slate-500 px-8 py-2' 
                    type="text" 
                    placeholder='Pro-1'
                />
                <input 
                    onChange={(e) => setPro2(e.target.value)}
                    value={pro2}
                    className='border border-slate-500 px-8 py-2' 
                    type="text" 
                    placeholder='Pro-2'
                />
                <input 
                    onChange={(e) => setPro3(e.target.value)}
                    value={pro3}
                    className='border border-slate-500 px-8 py-2' 
                    type="text" 
                    placeholder='Pro-3'
                />
                <input 
                    onChange={(e) => setPro4(e.target.value)}
                    value={pro4}
                    className='border border-slate-500 px-8 py-2' 
                    type="text" 
                    placeholder='Pro-4'
                />
                <input 
                    onChange={(e) => setCon1(e.target.value)}
                    value={con1}
                    className='border border-slate-500 px-8 py-2' 
                    type="text" 
                    placeholder='Con-1'
                />
                <input 
                    onChange={(e) => setCon2(e.target.value)}
                    value={con2}
                    className='border border-slate-500 px-8 py-2' 
                    type="text" 
                    placeholder='Con-2'
                />
                <button type='submit' className='bg-indigo-300 font-bold text-black py-3 px-6 w-fit'>Submit</button>

            </form>
        </div>
      </div>
    </div>
  )
}
