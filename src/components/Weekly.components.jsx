import React from 'react'

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"
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
    { customers: 5 },
    { customers: 15 },
    { customers: 10 },
    { customers: 20 },


]

const chartConfig = {
    customers: {
        label: "customers",
        color: "hsl(var(--chart-1))",
    },
}



const WeeklyComponents = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-lg">Weekly Stats</CardTitle>
                <CardDescription>
                    Average sales
                </CardDescription>
            </CardHeader>
            <CardContent>
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
                                    stopColor="#4262BB"
                                    stopOpacity={0.8}
                                />
                                <stop
                                    offset="95%"
                                    stopColor="#EDEEF3"
                                    stopOpacity={0.1}
                                />
                            </linearGradient>
                        </defs>
                        <Area
                            dataKey="customers"
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
            <CardFooter>
                <div className=" w-full space-y-7">
                    <div className='flex justify-between items-center'>
                        <div className='flex gap-x-2'>
                            <span className='inline-flex items-center justify-center rounded-sm w-10 h-10 bg-[#5d87ff1a]'>
                                <TbGridDots className='text-[#5d87ff] text-xl' />
                            </span>
                            <div>
                                <h6 className='font-semibold text-base'>Top Sales</h6>
                                <p className='text-gray-500 text-sm'>Johnathan Doe</p>
                            </div>
                        </div>
                        <span className='inline-block px-2 bg-[#5d87ff1a] text-blue-400 text-sm rounded-md'>
                            +68
                        </span>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='flex gap-x-2'>
                            <span className='inline-flex items-center justify-center rounded-sm w-10 h-10 bg-[#5d87ff1a]'>
                                <TbGridDots className='text-[#5d87ff] text-xl' />
                            </span>
                            <div>
                                <h6 className='font-semibold text-base'>Best Seller</h6>
                                <p className='text-gray-500 text-sm'>MaterialPro Admin</p>
                            </div>
                        </div>
                        <span className='inline-block px-2 bg-[#5d87ff1a] text-blue-800 text-sm rounded-md'>
                            +68
                        </span>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='flex gap-x-2'>
                            <span className='inline-flex items-center justify-center rounded-sm w-10 h-10 bg-[#5d87ff1a]'>
                                <TbGridDots className='text-yellow-400 text-xl' />
                            </span>
                            <div>
                                <h6 className='font-semibold text-base'>Most Commented</h6>
                                <p className='text-gray-500 text-sm'>Ample Admin</p>
                            </div>
                        </div>
                        <span className='inline-block px-2 text-yellow-400 bg-[#5d87ff1a] text-sm rounded-md'>
                            +68
                        </span>
                    </div>
                </div>
            </CardFooter>
        </Card>
    )
}

export default WeeklyComponents