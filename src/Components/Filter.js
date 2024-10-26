import {filterData} from '../data';
import {useState} from 'react';


 const Filter =({category,setCategory})=>{

     function handleChange(title){
       setCategory(title);
     }
    return (
        <div>
           {
            filterData.map((items)=>{
                return(
                    <button onClick={(e)=> handleChange(e.target.innerText)}>{items.title}</button>
                );
            })
           }
        </div>
    )
}

export default Filter;