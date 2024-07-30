import React from 'react'

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { LuArrowDownRight } from "react-icons/lu";
import {

    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
    { customers: 30 },
    { customers: 25 },
    { customers: 35 },
    { customers: 20 },
    { customers: 30 },
    { customers: 40 },

]

const chartConfig = {
    customers: {
        label: "customers",
        color: "hsl(var(--chart-1))",
    },
}



const CustomersComponents = () => {
    return (
        <Card className="w-[400px]">
            <CardHeader>
                <p>Customers</p>
                <CardTitle>36,358</CardTitle>
                <span>
                    <span className='inline-flex justify-center items-center rounded-full  w-5 h-5 bg-[#fbf2ef]'>
                        <LuArrowDownRight className='text-[#fa896b] text-sm' />
                    </span>
                    <span className='text-sm mx-1'>+9%</span>
                    
                </span>
            </CardHeader>
            <CardContent className="p-0 -mb-20">
                <ChartContainer config={chartConfig}>
                    <AreaChart
                        accessibilityLayer
                        data={chartData}
                    >
                        <ChartTooltip
                            cursor={true}
                            content={<ChartTooltipContent />}
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
                            dataKey="customers"
                            type="natural"
                            fill="url(#fillMobile)"
                            fillOpacity={0.4}
                            strokeWidth={2}
                            stroke="#4262BB"
                            stackId="a"
                        />
                    </AreaChart>
                </ChartContainer>
            </CardContent>
            
        </Card>
    )
}

export default CustomersComponents