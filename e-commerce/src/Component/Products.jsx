import { useEffect, useState } from "react"
import Card from "./Card"
export default function Products(){
    const [details,setDetails] = useState([])
    useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=>
      {
        console.log(json),
        setDetails(json)  
      }           
)
    },[])
    return (
        <div className="flex flex-wrap justify-center gap-4">
            {details.length > 0 ? details.map((item) => <Card key={item.id} item={item} />) : <h1>Loading...</h1>}
        </div>
    )
}