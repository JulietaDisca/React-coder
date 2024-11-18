import React from 'react'
import './App.css'
import { useState, useEffect } from 'react';

import CardPlayer from './components/CardPlayer/CardPlayer';

import { db } from './firebase/firebaseConfig';
import { query, collection, getDocs } from 'firebase/firestore'; //1ro

const App = () => {
  const [playersData, setPlayersData] = useState([]); //1.1

  useEffect(() => {
    console.log("fetching data");
    const getPlayers = async () => { //4to
      try {
        const q = query(collection(db, "players")); //2do
        const docs = [];                    //8vo
        const querySnapshot = await getDocs(q); //3ro
        console.log(querySnapshot);

        querySnapshot.forEach((doc) => { //6to
          // doc.data() is never undefined for query doc snapshots
          //console.log(doc.id, " => ", doc.data()); //7mo
          docs.push({ ...doc.data(), id: doc.id}); //9no   (Ante c/iteracion se va a pushear en el array vacio toda la info de la doc.data() y el id)
        });
        setPlayersData(docs);

      } catch (error) {
        console.log("Error fetching players:", error);
      }
    };
    
    getPlayers(); //5to
  }, []); // 1.2

  return (
    <div className='App'>
      <h1>Firebase</h1>
      <div className='grid-players'>
        {playersData.map((player) => {
          return <CardPlayer key={player.id} playersData={player}/>
        })}
      </div>
    </div>
  );
};

export default App;