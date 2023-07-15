import React, { useEffect, useState } from 'react'
import axios from "axios";
import { server } from '../index';
import Loader from './Loader';
import ErrorComponent from './ErrorComponent';
import { Link } from 'react-router-dom';
import { HStack, Radio, RadioGroup } from '@chakra-ui/react';
import "./style.css"
import Footer from './Footer';


const Coin=()=> {
  const  [Coins, setCoins] = useState([]);
  const [loading,setloading]=useState(true);
  const [error,seterror]=useState(false)
  const [page,setpage]=useState(1)
  const [Currency, setCurrency] = useState("inr");  

  const currentSymbol = Currency=== "inr"? "₹" :Currency==="eur"?"€":"$";
  const changepage=(page)=>{
    setpage(page);
    setloading(true)
  }

  const btns = new Array(100).fill(1);

  useEffect(() => {
    

    const fetchCoin= async ()=>{
      try {
        const {data} = await axios.get(`${server}/coins/markets?vs_currency=${Currency}&page=${page}`)
        setCoins(data)
      setloading(false)
      } catch (error) {
        seterror(true)
        setloading(false)
      }

         }
   fetchCoin();
  }, [Currency,page]);

  if(error){
    return <ErrorComponent/>
  }


  return (
    <div className='bg-gray-900'>
      {
        loading?<Loader/>:
        <>
        <div className='flex justify-center items-center pt-36 max-[500px]:pt-32'>
        <RadioGroup value={Currency} onChange={setCurrency} className=' bg-gray-800 text-white  w-96 flex justify-center items-center h-14 rounded-lg shadow-lg max-[475px]:w-[70%] '>
            <HStack className=' space-x-3'>
        <Radio value="inr">INR</Radio>
        <Radio value="usd">USD</Radio>
        <Radio value="eur">EUR</Radio>
            </HStack>
          </RadioGroup>
        </div>
        <div className='flex   justify-center  mt-20 max-[500px]:mt-16 max-[500px]:mb-12 mb-16 '>
        <div className='  grid grid-cols-5 gap-7 max-[1300px]:grid-cols-4 max-[1300px]:gap-4 max-[955px]:grid-cols-3  max-[724px]:grid-cols-2 max-[400px]:gap-3 max-[350px]:grid-cols-1'>
        {
          Coins.map(i=>{
           return <ExchangeCard id={i.id} key={i.id} name={i.name} img={i.image} price={i.current_price} rank={i.trust_score_rank
           } url={i.url} currencySymbol={currentSymbol}/>
          })
        }
        </div>
        </div>

       
        <div className='flex justify-center pb-14 pt-10 '>
        <div className='scrollmy flex gap-4 w-[37%] max-[600px]:w-[55%] max-[450px]:w-[65%]   overflow-x-auto mb-10 '>
          {
            btns.map((item,index)=>{
              return(
              <button className='bg-teal-500 h-9 rounded-md text-slate-300 w-fit p-4  flex justify-center items-center'
                key={index}
                onClick={() => changepage(index + 1)}
              >
                {index + 1}
              </button>
              )

            })
          }
        </div>
        </div>
        <Footer/>
        </>
      }
    </div>
  )
}

const ExchangeCard =({id,name,img,price,rank,url,currencySymbol="₹"})=>{
  return(
  <Link to={`/coin/${id}`}  className='h-56 w-56 max-[475px]:h-44 max-[380px]:h-[160px] max-[380px]:w-[160px]  max-[475px]:w-44 bg-gray-800 flex flex-col gap-1 justify-center items-center shadow-lg hover:border-[3px] hover:border-teal-500 rounded-xl hover:scale-[1.1] transition-all  duration-500 cursor-pointer'>
    <img src={img} alt=""  className='h-16'/>
    <h className="text-lg text-slate-300 mt-4 max-[380px]:text-sm">{name}</h>
    <p className=' text-lg text-green-500  '>{
      price?`${currencySymbol}${price}`:"NA"
}</p>
  </Link>
  );

}



export default Coin
