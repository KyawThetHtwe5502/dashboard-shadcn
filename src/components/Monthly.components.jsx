import React from 'react'

import { Area, AreaChart } from "recharts"
import { LuArrowDownRight } from "react-icons/lu";
import { TbCurrencyDollar } from "react-icons/tb";

import {
    Card,
    CardContent,
    CardDescription,
    
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {

    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
    { mobile: 25 },
    { mobile: 66 },
    { mobile: 20 },
    { mobile: 40 },
    { mobile: 12 },
    { mobile: 58 },
    { mobile: 20 },
]

const chartConfig = {
    mobile: {
        label: "mobile",
        color: "hsl(var(--chart-1))",
    },
}



const MonthlyComponents = () => {
    return (
        <Card className="w-full h-full p-0 shadow-md">
            <CardHeader>
                <div className='flex justify-between'>
                <div>
                <CardTitle className="text-lg mb-4">Monthly Earnings</CardTitle>
                <p className="text-xl font-semibold mb-4">
                $6,820
                </p>
                <span>
                    <span className='inline-flex justify-center items-center rounded-full  w-5 h-5 bg-[#fbf2ef] dark:bg-gray-800'>
                        <LuArrowDownRight className='text-[#fa896b] text-sm' />
                    </span>
                    <span className='text-sm mx-1'>+9%</span>
                    <span className='text-sm text-gray-500'>last year</span>
                </span>
                </div>
                <span className='inline-flex w-11 h-11 rounded-full bg-blue-300 justify-center items-center'>
                    <TbCurrencyDollar className='text-xl text-white' />
                </span>
                </div>
            </CardHeader>
            <CardContent className="p-0">
                <ChartContainer config={chartConfig} className="py-16 -my-16">
                    <AreaChart
                        accessibilityLayer
                        data={chartData}
                    >
                        <ChartTooltip
                            cursor={true}
                            content={<ChartTooltipContent  />}
                        />
                        <defs>
              
              <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="#eef3f6"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="#eef3f6"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <Area
              dataKey="mobile"
              type="natural"
              fill="url(#fillMobile)"
              strokeWidth={2}
              fillOpacity={0.4}
              stroke="#4262BB"
              stackId="a"
            />
                    </AreaChart>
                </ChartContainer>
            </CardContent>
            
        </Card>
    )
}

export default MonthlyComponents