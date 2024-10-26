import "./App.css";
import { useEffect, useState } from "react";
import NavBar from "./Components/NavBar";
import Filter from "./Components/Filter";
import Cards from "./Components/Cards";
import { apiUrl } from "./data";
import { toast } from "react-toastify";
import Spinner from './Components/Spinnner';
import {filterData} from './data';

function App() {
  const [value, setValue] = useState([]);
  const [loading,setLoading] = useState(true);
  const [category , setCategory] = useState(filterData[0].title);

 

   
    const fetchData = async () => {
      setLoading(true);
      try {
                                       
        const result = await fetch(apiUrl);
        const output = await result.json();
        setValue(output);
        console.log(output);

      } catch (error) {
        toast.error("not found");
        console.log(error);
      }

      setLoading(false);

    };


     useEffect(()=>{
        fetchData();
     },[]);
    
   

  return (
    <div className="top">
      <NavBar />
         
      <Filter category={category} setCategory={setCategory}/>
       
       <div>
        {
          loading?(<div><Spinner></Spinner></div>):(<div> <Cards value={value} category={category} /></div>)
        }
       </div>
      
    </div>
  );
}

export default App;
