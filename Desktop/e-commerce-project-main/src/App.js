import './App.css';
import Header from './components/header/header';
import Product from './components/product';
import Home from './components/Home';
import { Routes, Route } from "react-router-dom";
import Basket from './components/Basket';
import { useEffect, useState } from 'react';
import './tailwind.css'


function App() {
  const [veri,setVeri]=useState([])

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYmJiN2RkNzg4NmE5Zjg2NGI1NTE5NjM3NThmM2JjMSIsInN1YiI6IjY0YTNiZTYwZTlkYTY5MDBlNDBjMGEwZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HzqMwIdfly2bNUmAySxz23lk8GcBss0_eVyLj1zktr4'
          }
        };

        const response = await fetch('https://api.themoviedb.org/3/movie/now_playing', options);
        const data = await response.json();
        setVeri(data.results); // Assuming the API response has a "results" field containing the data array
      } catch (error) {
        console.error(error);

      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product veri={veri}/>} />
        <Route path="/sepet" element={<Basket />} />
      </Routes>
    </div>
  );
}

export default App;
