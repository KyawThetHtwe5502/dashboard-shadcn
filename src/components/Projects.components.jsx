import React from 'react'
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import { RiArrowLeftUpLine } from "react-icons/ri";

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
  {project:4},
  {project:10},
  {project:9},
  {project:7},
  {project:9},
  {project:10},
  {project:11},
  {project:8},
  {project:10},
  {project:9},
]

const chartConfig = {
  project: {
    label: "-",
    color: "",
  },
} 

const  ProjectsComponents  = () => {
  return (
    <Card className="w-[400px]">
      <CardHeader>
        <p className='text-sm  text-gray-500'>Projects</p>
        <CardTitle>78,298</CardTitle>
        <span>
          <span className='inline-flex justify-center items-center rounded-full  w-5 h-5 bg-[#fbf2ef]' >
            <RiArrowLeftUpLine className='text-[#fa896b] text-sm' />
          </span>
          <span className='text-sm ms-1'>+9%</span>
        </span>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} horizontal={false} />
            
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel ChartTooltipContent="line" />}
            />
            <Bar dataKey="project" fill="#4262BB" radius={0}  />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

export default ProjectsComponents;