import React, { useState } from 'react'
"use client"


import { Label, Pie, PieChart, Sector } from "recharts"


import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {

  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { RiArrowLeftUpLine } from "react-icons/ri";
import { BsDot } from 'react-icons/bs'
const YearlyComponents = () => {
  const [activeIndex, setActiveIndex] = useState(10);
  const [isRadius, setIsRadius] = useState(0);
  // const onPieEnter = () => {
  //   setActiveIndex(pre => pre + 10 );
  // };

  const chartData = [
    { browser: "chrome", visitors: 275, fill: "blue" },
    { browser: "safari", visitors: 200, fill: "red" },
    { browser: "firefox", visitors: 187, fill: "pink" },

  ]

  const chartConfig = {
    visitors: {
      label: "Visitors",
    },
    chrome: {
      label: "Chrome",
      color: "blue",
    },
    safari: {
      label: "Safari",
      color: "red",
    },
    firefox: {
      label: "Firefox",
      color: "pink",
    }
  }

  const renderActiveShape = ({ outerRadius = 0, ...props }) => (
    <Sector {...props} outerRadius={outerRadius + 10} />
  );

  return (
    <Card className=" flex  ">
      <CardHeader>

        <div>
          <CardTitle className="text-lg mb-4">Yearly Breakup</CardTitle>
          <p className="text-xl font-semibold mb-4">
            $36,358
          </p>
          <span>
            <span className='inline-flex justify-center items-center rounded-full  w-5 h-5 bg-[#fbf2ef] dark:bg-gray-700'>
              <RiArrowLeftUpLine className='text-[#fa896b] text-sm' />
            </span>
            <span className='text-sm mx-1 text-gray-500'>+9%</span>
            <span className='text-sm text-gray-500'>last year</span>
          </span>
          <div className='flex items-center'>
            <div className='flex items-center'>

              <BsDot className='text-5xl text-blue-500' />
              <span className='text-xs text-gray-500 -ms-2'>2024</span>
            </div>
            <div className='flex items-center'>

              <BsDot className='text-5xl text-gray-700' />
              <span className='text-xs text-gray-500 -ms-2'>2024</span>
            </div>
          </div>
        </div>

      </CardHeader>
      <CardContent className="flex pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[150px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={true}
              content={<ChartTooltipContent />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={40}
              strokeWidth={10}
              activeIndex={0}
              onClick={() => setIsRadius((pre) => pre + 10)}
              activeShape={({
                outerRadius = 0,
                ...props
              }) => (
                <Sector {...props} outerRadius={isRadius} />
              )}

            />

          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

export default YearlyComponents;