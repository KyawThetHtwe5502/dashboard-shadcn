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
        <section className='p-10'>
            <div className=' grid grid-cols-5 gap-x-8 '>
                <Card className="w-full py-2 bg-[#e6fffa]  border-none">
                    <CardContent className="pt-6">
                        <img src="icon-speech-bubble.svg" className='mb-5 mx-auto' alt="" />
                        <div className='text-center'>
                            <h6 className='text-[#13deb9] text-sm font-medium'>Payroll</h6>
                            <span className='text-[#13deb9]  text-lg font-semibold'>$96k</span>
                        </div>
                    </CardContent>
                </Card>
                <Card className="w-full py-2 bg-[#fbf2ef] border-none">
                    <CardContent className="pt-6">
                        <img src="icon-favorites.svg" className='mb-5 mx-auto' alt="" />
                        <div className='text-center'>
                            <h6 className='text-[#fa896b] text-sm font-medium'>Event</h6>
                            <span className='text-[#fa896b]  text-lg font-semibold'>696</span>
                        </div>
                    </CardContent>
                </Card>
                <Card className="w-full py-2 bg-[#ebf3fe] border-none">
                    <CardContent className="pt-6">
                        <img src="icon-mailbox.svg" className='mb-5 mx-auto' alt="" />
                        <div className='text-center'>
                            <h6 className='text-[#539bff] text-sm font-medium'>Clients</h6>
                            <span className='text-[#539bff]  text-lg font-semibold'>3,650</span>
                        </div>
                    </CardContent>
                </Card>
                <Card className="w-full py-2 bg-[#fef5e5] border-none">
                    <CardContent className="pt-6">
                        <img src="icon-briefcase.svg" className='mb-5 mx-auto' alt="" />
                        <div className='text-center'>
                            <h6 className='text-[#ffae1f] text-sm font-medium'>Clients</h6>
                            <span className='text-[#ffae1f]  text-lg font-semibold'>3,650</span>
                        </div>
                    </CardContent>
                </Card>
                <Card className="w-full py-2 bg-[#5d87ff1a] border-none">
                    <CardContent className="pt-6">
                        <img src="icon-user-male.svg" className='mb-5 mx-auto' alt="" />
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