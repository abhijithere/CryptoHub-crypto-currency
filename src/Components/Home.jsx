import React from 'react'
import myapi from './boxapi'
import "./style.css"
import Footer from './Footer'

function Home() {
  return (
    <>
    <div className='dark:bg-gray-900 h-full    max-[1400px]:w-[100%] relative overflow-hidden'>
      <div className='flex h-auto   justify-center items-center min-[950px]:h-screen  dark:bg-gray-900 font-poppin ml-20 max-[1200px]:ml-24 max-[950px]:ml-0'>
        <div className='flex gap-8 max-[950px]:flex-col justify-center items-center mt-28 max-[1400px]:gap-1 max-[950px]:gap-8 '>
        <div className=' flex flex-col  max-[510px]:w-[90%]'>
          <h1 className='text-6xl max-[700px]:text-5xl max-[510px]:text-4xl text-white'>Everything you need</h1>
          <h1 className='text-6xl max-[700px]:text-5xl max-[510px]:text-4xl text-white'> in the crypto </h1>
          <h className='text-6xl max-[700px]:text-5xl max-[510px]:text-4xl text-teal-500 mt-3'>simplified</h>
          <p className='text-slate-400  w-[470px] max-[510px]:w-[90%] mt-8'>15 inspirational designs, illustrations, and graphic elements from the world’s best designers.</p>
          <button className= ' mt-8 rounded-full text-white bg-teal-600 w-52 h-14 hover:bg-teal-500'><a href='/exchanges'>Get Started</a></button>
          <div className='flex items-center mt-10'>
            <img src="./img/bitcoin.png" className='h-10 ml-2'></img>
            <img src="./img/polygon.png" className='h-10   absolute ml-7'></img>
            <img src="./img/ethereum.png" className='h-10  absolute ml-14'></img>
            <img src="./img/tether.png" className='h-10  absolute ml-20'></img>
            <p className='ml-24 text-teal-500'>1500+ coins available </p>

          </div>
        </div>
        <div>
        <img src="./img/landingnew.png" alt=""  className=' h-[650px] max-[1400px]:h[500px] max-[1200px]:h-[400px] max-[950px]:h-[600px] max-[510px]:h-[400px]  '/>
        </div>
        </div>
      </div>
      <div className='flex flex-col  justify-center items-center mt-20 max-[400px]:mt-14'>

        <h1 className='text-5xl    justify-end mb-16 text-white max-[510px]:text-3xl '>Popular<span className='text-teal-500'>  Currencies</span></h1>
        
    <div className='border-[px] rounded-2xl border-teal-500'>
      <img src='./img/aak.png' className='h-96 rounded-2xl shadow-xl max-[1200px]:h-80  max-[950px]:h-60 max-[700px]:h-52 max-[550px]:h-40 max-[510px]:h-32 max-[400px]:h-28  max-[360px]:h-24'></img>
      </div>
      </div>
    <div className='flex flex-col justify-center items-center mt-14 font-poppin '>
      <h className="mt-10 text-white mb-10 text-4xl max-[510px]:text-3xl max-[400px]:text-2xl">Earn your <span className='text-teal-600 text-4xl max-[510px]:text-3xl max-[400px]:text-2xl'>daily reawords</span></h>
      <div className='grid grid-cols-5 max-[950px]:grid-cols-3 max-[1200px]:grid-cols-4 place-items-center gap-7 mt-5 max-[700px]:grid-cols-2 max-[510px]:gap-4 max-[400px]:gap-2 max-[400px]:ml-3 max-[340px]:grid-cols-1 '>
        {
          myapi.map((i,id)=>{
            return (
              <div className='aa1 h-52 w-52 max-[510px]:h-44 max-[510px]:w-44 max-[365px]:w-40 max-[360px]:h-40 bg-gray-800 rounded-2xl flex flex-col justify-center items-center hover:border-[3px] cursor-pointer  hover:border-teal-400 hover:bg-gray-900'>
                <img src={i.image} className='h-14 max-[510px]:h-12 max-[365px]:h-10'></img>
                <h1 className='text-white text-xl mt-5 max-[365px]:mt-3'>{i.text1}</h1>
                <h2 className='text-sm flex gap-2 text-white mb-2'>APR  <span className='text-teal-500'>{i.text2}</span></h2>
                <div className='aa2 h-8 w-8 max-[365px]:h-7 max-[365px]:w-7  bg-gray-700 rounded-full mt-1 flex justify-center items-center'><img src="./img/right-arrow.png" className='h-[9px]'></img></div>

              </div>
            )
          })
        }

      </div>
      <div className=' flex justify-between max-[700px]:justify-center w-[75%] '> 
      <button className=' mt-10 rounded-xl mb-8 text-white bg-teal-600 w-52 h-14 '><a href='/coin'>Start Earning</a></button>
      <h1></h1>
      </div>
      </div>

      <div className='flex max-[1200px]:flex-col-reverse max-[950px]:  justify-center items-center pb-20  font-poppin mt-10 max-[450px]:pb-14'>
        <div  className='flex flex-col gap-12 mt-14 max-[950px]:justify-center max-[950px]:w-[80%] '>
          <h className="text-white text-4xl max-[510px]:text-3xl">Build your crypto <span className='text-teal-400 text-5xl max-[510px]:text-3xl'> Account</span></h>
          <div className='flex gap-8 justify-center items-center'>
              <img src="./img/identity.png" alt="" srcset="" className='h-16' />
              <div className='flex flex-col gap-4'>
              <p className='text-white text-2xl '>Verify your identity</p>
              <p className='min-[950px]:w-[70%] text-slate-400 '>Complete the identity verification process to secure your account and transactions.</p>
              </div>
          </div>
          <div className='flex gap-8 justify-center items-center'>
              <img src="./img/user.png" alt="" srcset="" className='h-16' />
              <div className='flex flex-col gap-4'>
              <p className='text-white text-2xl '>Fund your account</p>
              <p className='min-[950px]:w-[70%] text-slate-400'>Complete the identity verification process to secure your account and transactions.</p>
              </div>
          </div>
          <div className='flex gap-8 justify-center items-center'>
              <img src="./img/trend.png" alt="" srcset="" className='h-16' />
              <div className='flex flex-col gap-4'>
              <p className='text-white text-2xl '>Start trading</p>
              <p className='min-[950px]:w-[70%] text-slate-400'>Complete the identity verification process to secure your account and transactions.</p>
              </div>
          </div>
          <button className='  mt-5 rounded-xl mb-8 text-white bg-teal-600 w-52 h-14 '><a href='/exchanges'>Get Started</a></button>


        </div>
        <div className=' flex  justify-center items-center relative'>
            <img src="./img/mb.png" alt="" className='z-10 ml-6 relative' />
            <div  className='max-[510px]:hidden h-[520px] w-[520px] max-[750px]:h-[400px] max-[750px]:w-[400px] rounded-full   absolute  border-[2px] animate-[spin_7s_linear_infinite]  max-[550px]:h-[300px] max-[550px]:w-[300px]   border-t-[#14b8a5e5]  border-gray-800 '></div>
        </div>
      </div>
      
      <div className='flex flex-col justify-center items-center pb-40 font-poppin max-[450px]:pb-28'>
        <h1 className='text-4xl text-white mt-10 mb-20 max-[450px]:mt-1 '>need <span className='text-teal-400 '> help?</span></h1>
        <div className=' flex max-[1200px]:flex-col gap-10 items-center max-[400px]:w-[90%]'>

        <div className='flex justify-center items-center w-96  max-[400px]:w-[90%] gap-7'>
          <img src="./img/customer-service.png" alt="" className='h-20' />
          <div className='flex flex-col gap-3'>
            <h1 className='text-xl text-white'>24/7 Chat Support</h1>
            <p className='text-sm  text-gray-400 '>Get 24/7 chat support with our friendly customer service agents  service.</p>
            <p className='text-sm text-teal-500  cursor-pointer'>Chat now</p>
          </div>
        </div>

        <div className='flex justify-center items-center w-96 gap-7 max-[400px]:w-[90%]'>
          <img src="./img/questions.png" alt="" className='h-20' />
          <div className='flex flex-col gap-3'>
            <h1 className='text-xl text-white'>FAQs</h1>
            <p className='text-sm text-gray-400 '>View FAQs for detailed instructions on specific features.
</p>
            <p className='text-sm text-teal-500 cursor-pointer'>View more</p>
          </div>
        </div>

        <div className='flex justify-center items-center w-96 gap-7 max-[400px]:w-[90%]'>
          <img src="./img/blogging.png" alt="" className='h-16' />
          <div className='flex flex-col gap-3'>
            <h1 className='text-xl text-white'>Blog</h1>
            <p className='text-sm text-gray-400'>Stay up to date with the latest stories and commentary.</p>
            <p className='text-sm text-teal-500 cursor-pointer'>View more</p>
          </div>
        </div>



        </div>
</div>

{/* here  */}

{/* here  */}
 </div>
 <Footer/>
    </>
  )
}

export default Home
