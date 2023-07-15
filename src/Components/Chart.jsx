import React from 'react'
import {Line } from "react-chartjs-2"
import { Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,} from "chart.js"

    ChartJS.register(CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend);
function Chart({arr=[],currency,days }) { 

    const prices =[];
    const date=[]
    for (let i = 0; i < arr.length; i++) {
        if (days === "24h") date.push(new Date(arr[i][0]).toLocaleTimeString());
        else date.push(new Date(arr[i][0]).toLocaleDateString());
        prices.push(arr[i][1]);
      }
    

    const data ={
        labels:date,
        datasets:[{
        label:`price in ${currency}`,
        data: prices,
        borderColor: "rgb(20 184 166)",
        backgroundColor: "rgb(20 184 166)",
        }],
    }
    
  return (
    <div className='w-[1000px]  text-white max-[1030px]:w-[100%] max-[630px]:w-[470px] max-[530px]:w-[400px] max-[405px]:w-[380px] max-[380px]:w-[360px] max-[340px]:w-[300px]'>
      <Line
      options={{
        responsive: true,
        scales: {
          x: {
            grid: {
              color: 'rgba(255,0,0,0.1)',
              borderColor: 'red'
            },
            ticks: { color: 'rgb(209 213 219)', beginAtZero: true }
          },
          y: {
            grid: {
              color: 'rgba(0,255,0,0.1)',
              borderColor: 'green'
            },
            ticks: { color: 'rgb(209 213 219)', beginAtZero: true }
          }
        }
      }}
      data={data}
      />
    </div>
  )
}

export default Chart
