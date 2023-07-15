import React, { useEffect, useState } from 'react'
import Loader from './Loader';
import {useParams}from "react-router-dom"
import axios from 'axios';
import { server } from '..';
import { Badge, Box, Button, HStack, Progress, Radio, RadioGroup, Stat, StatArrow, Text, VStack, background } from '@chakra-ui/react';
import ErrorComponent from './ErrorComponent';
import Chart from './Chart';
import './style.css'
import Footer from './Footer';
function CoinDetails() {
  const  [Coins, setCoins] = useState([]);
  const [loading,setloading]=useState(true);
  const [error,seterror]=useState(false)
  const [days, setDays] = useState("24h");
  const [Currency, setCurrency] = useState("inr");
  const [chartArray, setChartArray] = useState([]);

  const params= useParams()
  const currentSymbol = Currency=== "inr"? "₹" :Currency==="eur"?"€":"$";


  const btns = ["24h", "7d", "14d", "30d", "60d", "200d", "1y", "max"];

  const switchChartStats = (key) => {
    switch (key) {
      case "24h":
        setDays("24h");
        setloading(true);
        break;
      case "7d":
        setDays("7d");
        setloading(true);
        break;
      case "14d":
        setDays("14d");
        setloading(true);
        break;
      case "30d":
        setDays("30d");
        setloading(true);
        break;
      case "60d":
        setDays("60d");
        setloading(true);
        break;
      case "200d":
        setDays("200d");
        setloading(true);
        break;
      case "1y":
        setDays("365d");
        setloading(true);
        break;
      case "max":
        setDays("max");
        setloading(true);
        break;

      default:
        setDays("24h");
        setloading(true);
        break;
    }
  };

  

  useEffect(() => {
    

    const fetchCoindetail= async ()=>{
      try {
        const {data} = await axios.get(`${server}/coins/${params.id}`)
        const { data: chartData } = await axios.get(
          `${server}/coins/${params.id}/market_chart?vs_currency=${Currency}&days=${days}`
        );

      setCoins(data)
      setChartArray(chartData.prices)
      setloading(false)
      } catch (error) {
        seterror(true)
        setloading(false)
      }

         }

         const scrollToTop = () =>{
          window.scrollTo({
            top: 0, 
          });
        };
        scrollToTop();
   fetchCoindetail();
  }, [params.id,Currency,days]);

  if(error){
    return <ErrorComponent/>
  }
  return (
    <div className='dark:bg-gray-900  overflow-hidden'>
      {
        loading?<Loader/>:
        <>
        
        <div className='all mt-20    '>

{/* select type portion starts  and last update------------------*/}

        <div className='flex justify-center  mt-6 '>
        <RadioGroup value={Currency} onChange={setCurrency} className='  bg-gray-800 text-white  w-96 flex justify-center items-center h-14 rounded-lg shadow-xl max-[450px]:w-80 max-[330px]:w-64'>
            <HStack className=' space-x-3'>
        <Radio value="inr">INR</Radio>
        <Radio value="usd">USD</Radio>
        <Radio value="eur">EUR</Radio>
            </HStack>
          </RadioGroup>
          </div>
          <h1 className='text-center text-sm mt-6 mb-3 text-slate-500 '> Last Updated on {Date(Coins.market_data.last_updated).split("G")[0]}</h1>
          <Stat>
{/* select type portion starts--------------------- */}


{/* chart portion -------------------------- */}
<div className='flex justify-center items-center '>

            <Chart arr={chartArray} currency={currentSymbol} days={days} />
            </div>   
            
     {/* chart portion  end---------------------------------*/}

     {/* chart filter starts ------------------------------*/}
<div className=' max-[600px]:flex max-[600px]:justify-center max-[600px]:items-center '>
            <div className='alfa  max-[640px]:w-[80%] max-[500px]:w-[60%]  flex  gap-1 p-4 mt-4 mb-5 overflow-x-auto  max-[360px]:w-[50%]'>
            {btns.map((i) => (
              <button
                disabled={days === i}
                key={i}
                onClick={() => switchChartStats(i)}
                background={'gray.700'}
                color={'white'}
                className=' bg-gray-800 h-10 p-5 hover:bg-gray-700 w-fit text-white flex justify-center items-center rounded-lg'
              >
                {i}
              </button>
            ))}
          </div>
          </div>
     {/* chart filter starts ends----------------------------------------------*/}

     {/* coin card box detail start -------------------------------------- */}
     <div className='max-[600px]:flex max-[600px]:justify-center max-[600px]:items-center '>
          <div className='h-fit w-64 bg-gray-800 p-6 mb-14 rounded-xl shadow-xl '>
          <img src={Coins.image.large} alt=""  className='h-36 ' />
          <h1 className='text-xl font-bold mt-4 text-slate-200'>{Coins.name}</h1>
          <h1 className='text-green-500 text-lg'>{currentSymbol}{Coins.market_data.current_price[Currency]}</h1>
          <div className='flex items-center text-slate-300'>
          <StatArrow type={Coins.market_data.price_change_percentage_24h>0 ?"increase":"decrease"}/>
            {Coins.market_data.price_change_percentage_24h}%
            </div>
          <h1 className='h-8 p-2 w-fit flex justify-center items-center text-white mt-2 rounded-md bg-teal-500'>{`#${Coins.market_cap_rank}`}</h1>

          </div>
          </div>
     {/* coin card box detail end-------------------------------------- */}

          </Stat>

   {/* progressbar starts here  */}
          <CustomBar high={`${currentSymbol}${Coins.market_data.high_24h[Currency]}`} low={`${currentSymbol}${Coins.market_data.low_24h[Currency]}`} />
   {/* progressbar ends here  */}

 {/* stats shown here  */}
          <Box   className='w-[40%] max-[1000px]:w-96 mt-10 mb-20 bg-gray-800 rounded-xl  p-4 px-8 shadow-xl max-[405px]:w-80 max-[330px]:w-64'>
              <Item title={"Max Supply"} value={Coins.market_data.max_supply} />
              <Item
                title={"Circulating Supply"}
                value={Coins.market_data.circulating_supply}
              />
              <Item
                title={"Market Cap"}
                value={`${currentSymbol}${Coins.market_data.market_cap[Currency]}`}
              />
              <Item
                title={"All Time Low"}
                value={`${currentSymbol}${Coins.market_data.atl[Currency]}`}
              />
              <Item
                title={"All Time High"}
                value={`${currentSymbol}${Coins.market_data.ath[Currency]}`}
              />
            </Box>
             {/*end stats shown here  */}

            </div>
        </>
      }
      <Footer/>
    </div>
  )
}

const Item = ({ title, value }) => (
  <HStack justifyContent={"space-between"} w={"full"} my={"4"}>
    <Text fontFamily={"Bebas Neue"} letterSpacing={"widest"} className='text-slate-300'>
      {title}
    </Text>
    <Text className=' text-teal-400'>{value}</Text>
  </HStack>
);

const CustomBar =({high,low})=>{
  return(
    <VStack w={"full"}>
      <Progress value={50} colorScheme={"teal"} className='w-[50%] max-[500px]:w-[90%] rounded-2xl ' />
    <HStack className='w-[50%] justify-between max-[500px]:w-[90%] '>
      <Badge children={low} colorScheme={"red"}  className=''/>
      <Text fontSize={"sm"} className='text-slate-300 font-semibold'>24H Range</Text>
      <Badge children={high} colorScheme={"green"} />
    </HStack>
    </VStack>
  )
}
export default CoinDetails
