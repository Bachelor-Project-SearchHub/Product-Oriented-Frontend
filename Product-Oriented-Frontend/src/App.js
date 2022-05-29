import Appbar from './components/Appbar';
import WebpageList from './components/WebpageList';
import SearchBar from './components/SeachBar';
import { useEffect, useState } from 'react';

function App() {
  const[webpages, setWebpages]=useState([])
  const[product, setProduct]=useState([])
  const [searchTerm, setSearchTerm] = useState('');
  const [errorMsg, setErrorMsg] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchWebpages();
  },[product])

  const onClick = async () => {
    const productFromServer = await getProduct(searchTerm)
    setProduct(productFromServer)
  }

  const getProduct = async (searchTerm) => {
    try{
      const res = await fetch (`http://localhost:8080/product/get/name/${searchTerm}`)
      if (!res.ok) { // error coming back from server
        throw Error('could not fetch the data for that resource');
      }
      const data = await res.json()
      return data
    }catch(err) {
      setErrorMsg(err.message);
      setError(true)
    }
  }

  const getWebpages = async (ProductID) => {
    try{
      var productIDString = toFixed(ProductID)

      const res = await fetch(`http://localhost:8080/webpage/get/${productIDString}`)

      if (!res.ok) { // error coming back from server
        throw Error('could not fetch the data for that resource');
      }
      if (res.status === 400) { // error coming back from server
        throw Error('could not fetch the data for that resource');
      }
      
      const data = await res.json()
      return data

    }catch(err) {
      setErrorMsg(err.message);
      setError(true)
    }
  }

  const fetchWebpages = async () => {
    if(!(product.id === null)){
      if(!isNaN(product.id)){
        setError(false)
        const webpagesFromServer = await getWebpages(product.id)
        setWebpages(webpagesFromServer)
        return;
      }
    }
    setError(true)
    setErrorMsg('No Product. Try a different search!')
  }

  function toFixed(x) {
    if (Math.abs(x) < 1.0) {
      var e = parseInt(x.toString().split('e-')[1]);
      if (e) {
          x *= Math.pow(10,e-1);
          x = '0.' + (new Array(e)).join('0') + x.toString().substring(2);
      }
    } else {
      var e = parseInt(x.toString().split('+')[1]);
      if (e > 20) {
          e -= 20;
          x /= Math.pow(10,e);
          x += (new Array(e+1)).join('0');
      }
    }
    return x;
  }

  return (
    <div className="App">
      <Appbar/>
      <WebpageList webpages={webpages} error={error} errorMsg={errorMsg}/>
      <SearchBar onClick={onClick} setSearchTerm={setSearchTerm}/>
    </div>
  );
}

export default App;
