import { useEffect } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { useNavigate, useSearchParams } from 'react-router-dom';
function App() {
  const [searchParams] = useSearchParams();
  let navigate = useNavigate();
  console.log(searchParams.size)
  useEffect(() => {
    if (searchParams.size === 2) {
      navigate(() => {
        navigate({
          pathname: '/',
          search: '',
        });
      })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div>
      <Navbar></Navbar>
    </div>
  );
}

export default App;
