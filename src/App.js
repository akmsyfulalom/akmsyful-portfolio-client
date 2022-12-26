import { RouterProvider } from 'react-router-dom';
import './App.css';


import router from './Router/Router/Router';

function App() {
  // const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false)
  //   }, 10000)
  // }, [])
  return (
    <div className='bg-primary' >
      <RouterProvider router={router}>

      </RouterProvider>

    </div>
  );
}

export default App;
