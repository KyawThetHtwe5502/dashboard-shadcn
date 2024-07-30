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


const YearlyComponents = () => {
  const [activeIndex, setActiveIndex] = useState(10);
  const [isRadius,setIsRadius] = useState(0);
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
      
    const renderActiveShape = ({ outerRadius = 0, ...props }) => (
        <Sector {...props} outerRadius={outerRadius + 10} />
      );
      
    return (
      <Card className="flex flex-col">
        <CardHeader className="items-center pb-0">
          <CardTitle>Pie Chart - Donut Active</CardTitle>
          <CardDescription>January - June 2024</CardDescription>
        </CardHeader>
        <CardContent className="flex-1 pb-0">
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square max-h-[250px]"
          >
            <PieChart>
              <ChartTooltip
                cursor={true}
                content={<ChartTooltipContent hideLabel />}
              />
              <Pie
                data={chartData}
                dataKey="visitors"
                nameKey="browser"
                innerRadius={60}
                strokeWidth={5}
                activeIndex={0}
                onClick={() =>  setIsRadius((pre) => pre + 10) }
                activeShape={({
                  outerRadius = 0,
                  ...props
                }) => (
                  <Sector {...props} outerRadius={isRadius } />
                )}
  
              />
              
            </PieChart>
          </ChartContainer>
        </CardContent>
        <CardFooter className="flex-col gap-2 text-sm">
          <div className="flex items-center gap-2 font-medium leading-none">
            Trending up by 5.2% this month 
          </div>
          <div className="leading-none text-muted-foreground">
            Showing total visitors for the last 6 months
          </div>
        </CardFooter>
      </Card>
    )
  }

export default YearlyComponents