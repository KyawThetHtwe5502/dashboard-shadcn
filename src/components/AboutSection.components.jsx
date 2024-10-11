import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const AboutSectionComponents = () => {
    return (
        <section className='py-8'>
            <div className=' grid grid-cols-12 xl:grid-cols-5 gap-x-8 '>
                <Card className="hidden xl:inline-block w-full py-2 dark:bg-[#1b3c48] bg-[#e6fffa]  border-none">
                    <CardContent className="pt-6">
                        <img src="/icon-speech-bubble.svg" className='mb-5 mx-auto' alt="" />
                        <div className='text-center'>
                            <h6 className='text-[#13deb9] text-sm font-medium'>Payroll</h6>
                            <span className='text-[#13deb9]  text-lg font-semibold'>$96k</span>
                        </div>
                    </CardContent>
                </Card>
                <Card className="hidden xl:inline-block w-full py-2 dark:bg-[#4b313d] bg-[#fbf2ef] border-none">
                    <CardContent className="pt-6">
                        <img src="/icon-favorites.svg" className='mb-5 mx-auto' alt="" />
                        <div className='text-center'>
                            <h6 className='text-[#fa896b] text-sm font-medium'>Event</h6>
                            <span className='text-[#fa896b]  text-lg font-semibold'>696</span>
                        </div>
                    </CardContent>
                </Card>
                <Card className="hidden sm:col-span-4 xl:col-span-1  sm:inline-block w-full py-2 dark:bg-[#223662] bg-[#ebf3fe] border-none">
                    <CardContent className="pt-6">
                        <img src="/icon-mailbox.svg" className='mb-5 mx-auto' alt="" />
                        <div className='text-center'>
                            <h6 className='text-[#539bff] text-sm font-medium'>Projects</h6>
                            <span className='text-[#539bff]  text-lg font-semibold'>356</span>
                        </div>
                    </CardContent>
                </Card>
                <Card className="col-span-6 sm:col-span-4 xl:col-span-1 w-full py-2 dark:bg-[#4d3a2a] bg-[#fef5e5] border-none">
                    <CardContent className="pt-6">
                        <img src="/icon-briefcase.svg" className='mb-5 mx-auto' alt="" />
                        <div className='text-center'>
                            <h6 className='text-[#ffae1f] text-sm font-medium'>Clients</h6>
                            <span className='text-[#ffae1f]  text-lg font-semibold'>3,650</span>
                        </div>
                    </CardContent>
                </Card>
                <Card className="col-span-6 sm:col-span-4 xl:col-span-1 w-full py-2 dark:bg-[#26334a] bg-[#5d87ff1a] border-none">
                    <CardContent className="pt-6">
                        <img src="/icon-user-male.svg" className='mb-5 mx-auto' alt="" />
                        <div className='text-center'>
                            <h6 className='text-[#5d87ff] text-sm font-medium'>Employees</h6>
                            <span className='text-[#5d87ff]  text-lg font-semibold'>96</span>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>

    )
}

export default AboutSectionComponents