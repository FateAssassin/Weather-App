import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <div className="App">
      <div className='h-screen flex items-center justify-center'>

        <div className='flex flex-col items-center'>
          <div>
            <i className='bi bi-search mr-2'></i>
            <input type='text' className='duration-200 border border-black px-3 py-0.5 rounded-xl hover:bg-gray-100 focus:outline-none focus:bg-gray-100' placeholder='Search' />
          </div>
          <button className='text-center mt-2 border border-black/50 py-1 px-5 rounded-xl bg-gray-400'>Search</button>
        </div>

      </div>
    </div>
  );
}

export default App;
