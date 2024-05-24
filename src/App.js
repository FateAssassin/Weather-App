import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useState } from 'react';
import axios from 'axios';

function App() {

  const [location, setLocation] = useState('');
  const changeLocation = (e) => {
    setLocation(e.target.value);
  }
  const fetchWeather =  (e) => {
    e.preventDefault();
    alert(location)
    var url = "https://api.open-meteo.com/v1/search?name="+ location + "&count=10&language=en&format=json"
    alert(url)
    var result = axios.get("https://geocoding-api.open-meteo.com/v1/search?name=innsbruck&count=10&language=en&format=json")
    console.log(result)
  }

  return (
    <div className="App bg-slate-300">
        <div className='h-screen flex items-center justify-center'>
          
          <div>
            <h1 className=' font-bold text-gray-700 text-center mb-5'>Weather-App</h1>
            <div className='border border-gray px-32 py-20 bg-white/80 shadow-lg rounded-md hover:bg-white/90 duration-200'>
              <form>
                <div className='flex flex-col items-center'>
                  <div>
                    <input onChange={changeLocation} type='text' className='duration-200 border border-black/50 px-3 py-0.5 rounded-xl hover:bg-gray-100 focus:outline-none focus:bg-gray-100' placeholder='Search' />
                  </div>
                  <button onClick={fetchWeather} className='text-center mt-2 border border-black/50 py-1 px-5 rounded-xl bg-gray-400'><i className='bi bi-search mr-2'></i> Search</button>
                </div>
              </form>
            </div>
        </div>

      </div>
    </div>
  );
}

export default App;
