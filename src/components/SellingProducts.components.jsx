import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import MaterialProComponents from './MaterialPro.components'
import FlexyAdminComponents from './FlexyAdmin.components'

const SellingProductsComponents = () => {
    return (
        <Card className="w-[300px] bg-blue-400">
            <CardHeader>
                <CardTitle className="text-xl text-white">Best Selling Products</CardTitle>
                <CardDescription className="text-white">Overview 2024</CardDescription>
            </CardHeader>
            <img src="piggy.png" className='-mb-4 z-10 relative' alt="" />
            <CardContent className="p-2 z-20 relative">
                <Card className="bg-white p-8">
                    <div className='mb-5'>
                        <div className='flex justify-between items-center mb-5'>
                            <div>
                                <h6 className='font-semibold'>MaterialPro</h6>
                                <p className='text-gray-500 text-sm'>$23,568</p>
                            </div>
                            <span className='bg-[#5d87ff1a] text-blue-400 inline-block rounded-md px-2 text-sm'>
                                55%
                            </span>
                        </div>
                        <MaterialProComponents />
                    </div>
                    <div>
                    <div className='flex justify-between items-center mb-5'>
                            <div>
                                <h6 className='font-semibold'>MaterialPro</h6>
                                <p className='text-gray-500 text-sm'>$23,568</p>
                            </div>
                            <span className='bg-[#5d87ff1a] text-blue-400 inline-block rounded-md px-2 text-sm'>
                                20%
                            </span>
                        </div>
                        <FlexyAdminComponents />
                    </div>
                </Card>

            </CardContent>
        </Card>

    )
}



export default SellingProductsComponents