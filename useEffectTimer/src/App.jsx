 import React from 'react'
 import { useState, useEffect } from 'react';
 import './App.css'

 const App = () => {
   const [seconds, setSeconds] = useState(0);
   const [isActive, setIsActive] = useState(false);

   useEffect(() => {
     let timer;
     if (isActive) {
       timer = setInterval(() => {
         setSeconds(prevSeconds => prevSeconds + 1);
       }, 1000);
     }
     return () => clearInterval(timer);
   }, [isActive]);

   const handleStart = () => {
     setIsActive(true);
   };

   const handlePause = () => {
     setIsActive(false);
   };

   const handleReset = () => {
     setIsActive(false);
     setSeconds(0);
   };

   const formatTimer = (seconds) => {
     return `${String(seconds).padStart(2, '0')}s`;
   };
   return (
     <>
       <div>
         <h2>Temporizador: {formatTimer(seconds)}</h2>
         <button onClick={handleStart}>Iniciar</button>
         <button onClick={handlePause}>Pausar</button>
         <button onClick={handleReset}>Resetear</button>
       </div>
     </>
   );
 }

export default App
