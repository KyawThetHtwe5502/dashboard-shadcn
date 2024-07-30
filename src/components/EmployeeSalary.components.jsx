import React from 'react'
import { Bar, BarChart, CartesianGrid, Rectangle, XAxis } from "recharts"
import { TbGridDots } from "react-icons/tb";

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
const chartData = [
  { month: "Apr", salary: 20 },
  { month: "June", salary: 15 },
  { month: "July", salary: 30 },
  { month: "Aug", salary: 25},
  { month: "Sept", salary: 15},
]

const chartConfig = {
  salary: {
    label: "Employee Salary",
  },
  month: {
    label: "month",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
} 

const  EmployeeSalaryComponents = () => {
  return (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle className="text-lg -mb-2">Employee Salary</CardTitle>
        <CardDescription>Every month</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}  >
          <BarChart accessibilityLayer data={chartData}  >
            <CartesianGrid vertical={false} horizontal={false}  />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              
            />
            <ChartTooltip
              content={<ChartTooltipContent label="month"/>}
            />
            <Bar
              dataKey="salary"
              strokeWidth={2}
              fill='#EBEFF8'
              radius={4}
              activeIndex={2}
              barSize={23}
              activeBar={({ ...props }) => {
                return (
                  <Rectangle
                    {...props}
                    fillOpacity={1}
                    fill={"#4262BB"}
                    strokeDasharray={4}
                    strokeDashoffset={4}
                  />
                )
              }}
              
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex justify-between items-center text-sm">
        <div className='flex gap-x-2'>
        <span className='inline-flex items-center justify-center rounded-sm w-10 h-10 bg-[#5d87ff1a]'>
          <TbGridDots className='text-[#5d87ff] text-xl' />
        </span>
        <div>
          <p className='text-gray-500'>Salary</p>
          <h6 className='font-semibold text-base'>$36,358</h6>
        </div>
        </div>
        <div className='flex gap-x-2'>
        <span className='inline-flex items-center justify-center rounded-sm w-10 h-10 bg-[#5d87ff1a]'>
          <TbGridDots className='text-[#5d87ff] text-xl' />
        </span>
        <div>
          <p className='text-gray-500'>Profit</p>
          <h6 className='font-semibold text-base'>$5,296</h6>
        </div>
        </div>
      </CardFooter>
    </Card>
  )
}

export default EmployeeSalaryComponents