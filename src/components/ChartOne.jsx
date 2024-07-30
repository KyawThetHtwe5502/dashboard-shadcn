import React from 'react'
"use client"


import { Bar, BarChart, CartesianGrid, Cell, LabelList, XAxis, YAxis } from "recharts"

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

  }
  return (
    <Card className="w-[500px]">
      <CardHeader>
        <CardTitle>Bar Chart - Negative</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData} >
            <CartesianGrid stroke="#e00" strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0,8)}
            />
            <YAxis       domain={[-4.0, 4.0]} 
      ticks={[-4.0, -2.0, 0, 2.0, 4.0]} 
      tickFormatter={(value) => `${value.toFixed(1)}`} 
 />
            <ChartTooltip
              cursor={true}
              content={<ChartTooltipContent hideLabel hideIndicator />}
            />
                        <Bar
              dataKey={"Earnings"}
              stackId="b"
              fill="blue"
              
            />
          </BarChart>
          <BarChart accessibilityLayer data={chartData} >
            
   
            <ChartTooltip
              cursor={true}
              content={<ChartTooltipContent hideLabel hideIndicator />}
            />
                     
                      <Bar
              dataKey={"Expense"}
              stackId="a"
              fill="red"
              
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}


export default ChartOne