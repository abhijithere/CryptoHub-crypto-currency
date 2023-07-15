import React, { useEffect, useState } from 'react'
import axios from "axios";
import { server } from '../index';
import Loader from './Loader';
import ErrorComponent from './ErrorComponent';
import Footer from './Footer';
import "./style.css"
const Exchanges=()=> {
  const  [Exchanges, setExchanges] = useState([]);
  const [loading,setloading]=useState(true);
  const [error,seterror]=useState(false)

  useEffect(() => {
    

    const fetchExchsnges= async ()=>{
      try {
        const {data} = await axios.get(`${server}/exchanges`)
      setExchanges(data)
      setloading(false)
      } catch (error) {
        seterror(true)
        setloading(false)
      }

         }
   fetchExchsnges();
  }, []);

  if(error){
    return <ErrorComponent/>
  }


  return (
    <div className='dark:bg-gray-900'>
      {
        loading?<Loader/>:
        <>
        <div className='flex justify-center mt-20 pt-14 mb-16 max-[475px]:mt-16'>
        <div className='  grid grid-cols-5 gap-7 max-[1300px]:grid-cols-4 max-[1300px]:gap-4 max-[955px]:grid-cols-3  max-[724px]:grid-cols-2 max-[400px]:gap-3 max-[350px]:grid-cols-1'>
        {
          Exchanges.map(i=>{
           return <ExchangeCard key={i.id} name={i.name} img={i.image} rank={i.trust_score_rank
           } url={i.url}/>
          })
        }
        </div>
        </div>
        </>
      }
      <Footer/>
    </div>
  )
}

const ExchangeCard =({key,name,img,rank,url})=>{
  return(
  <a href={url} target={"blank"} className='h-56 w-56 max-[475px]:h-44 max-[380px]:h-[160px] max-[380px]:w-[160px]  max-[475px]:w-44 bg-gray-800 flex flex-col gap-1 justify-center items-center shadow-lg hover:border-[3px] hover:border-teal-400 rounded-xl min-[700px]:hover:scale-[1.1] transition-all  duration-300 '>
    <img src={img} alt="" />
    <p className='mt-4 text-xl text-green-500'>{rank}</p>
    <h className="text-lg text-slate-100 max-[430px]:text-sm ">{name}</h>
  </a>
  );

}

export default Exchanges
