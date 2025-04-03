"use client"
import { createContext, useContext, useState } from 'react';
import React from 'react';

const ValuesContext = createContext();

export const ValuesProvider = ({ children }) => {
  const [values, setValues] = useState({
    budget: '8',
    des: '4',
    cam: '4',
    perf: '4',
    med: '4',
    sware: '4',
    imp: '0',
  });


  const updateValue = (key, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [key]: value,
    }));
    console.log(values);
  };

  return (
    <ValuesContext.Provider value={{ values, updateValue }}>
      {children}
    </ValuesContext.Provider>
  );
};

export const useValues = () => {
  return ( useContext(ValuesContext) );
}