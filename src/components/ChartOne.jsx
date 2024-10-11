import React from 'react'
"use client"


import { Bar, BarChart, CartesianGrid, Cell, LabelList, XAxis, YAxis } from "recharts"
import { TbGridDots } from "react-icons/tb";
import { BsDot } from "react-icons/bs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"






const ChartOne = () => {
  // const chartData = [
  //   { date: '16/08', desktop: 1.5, mobile: -1.8 },
  //   { date: '17/08', desktop: 2.7, mobile: -1.1 },
  //   { date: '19/08', desktop: 2.2, mobile: -2.5 },
  //   { date: '20/08', desktop: 3.6, mobile: -1.5 },
  //   { date: '21/08', desktop: 1.5, mobile: -0.6 },
  //   { date: '22/08', desktop: 1.0, mobile: -1.8 },

  // ]
  const chartData = [
    { date: '16/08', Earnings: 1.5, Expense: -1.8 },
    { date: '17/08', Earnings: 2.7, Expense: -1.1 },
    { date: '19/08', Earnings: 2.2, Expense: -2.5 },
    { date: '20/08', Earnings: 3.6, Expense: -1.5 },
    { date: '21/08', Earnings: 1.5, Expense: -0.6 },
    { date: '22/08', Earnings: 1.0, Expense: -1.8 },

  ]

  const chartConfig = {
    Earnings: {
      label: "Earnings this Month",
      color: "#2563eb",
    },
    Expense: {
      label: "Expense this Month",
      color: "#60a5fa",
    },

  }
  return (
    <Card className="w-full h-full p-5 flex flex-col">
      <CardHeader className="w-full h-full basis-1">
        <div>
        <CardTitle>Bar Chart - Negative</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
        </div>
    
      </CardHeader>
      <CardContent className="">
        <div className='flex sm:flex-row flex-col sm:items-center  sm:gap-x-10'>
          <ChartContainer className=" w-full mb-5 md:mb-0 " config={chartConfig}>
            <BarChart accessibilityLayer data={chartData} >
              <CartesianGrid stroke="#e00" strokeDasharray="3 3" vertical={false} />
              <XAxis
                dataKey="date"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 8)}
              />
              <YAxis domain={[-4.0, 4.0]}
                ticks={[-4.0, -2.0, 0, 2.0, 4.0]}
                tickFormatter={(value) => `${value.toFixed(1)}`}
              />
              <ChartTooltip
                cursor={true}
                content={<ChartTooltipContent />}
              />
              <Bar
                dataKey={"Earnings"}
                fill="#2563eb"

              />
              <Bar
                dataKey={"Expense"}
                fill="#60a5fa"

              />
            </BarChart>
          </ChartContainer>
          <div className=''>
            <div className='flex flex-col space-y-6'>
              <div className='flex items-center gap-4'>
                <span className='inline-flex items-center justify-center rounded-sm w-10 h-10 bg-[#5d87ff1a]'>
                  <TbGridDots className='text-[#5d87ff] text-xl' />
                </span>
                <div>
                  <h3 className='text-2xl font-semibold'>$63,489.50</h3>
                  <p className='text-sm text-gray-500'>Total Earnings</p>
                </div>
              </div>
              <div className='flex items-start'>
                <BsDot className='text-blue-600 text-5xl' />
                <div>
                  <span className='text-sm text-gray-500'>Earnings this month </span>
                  <p className='text-lg font-semibold text-gray-800 dark:text-gray-50'>$48,820</p>
                </div>
              </div>
              <div className='flex items-start'>
                <BsDot className='text-blue-600 text-5xl' />
                <div>
                  <span className='text-sm text-gray-500'>Expense this month </span>
                  <p className='text-lg font-semibold text-gray-800 dark:text-gray-50'>$26,498</p>
                </div>
              </div>
              <Button className="bg-blue-600">View Full Report</Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}


export default ChartOne