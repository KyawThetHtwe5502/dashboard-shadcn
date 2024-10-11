import React from 'react'
import AboutSectionComponents from '../components/AboutSection.components'
import MonthlyComponents from '../components/Monthly.components'
import EmployeeSalaryComponents from '../components/EmployeeSalary.components'
import CustomersComponents from '../components/Customers.components'
import ProjectsComponents from '../components/Projects.components'
import SellingProductsComponents from '../components/SellingProducts.components'
import SuperAwesomeComponents from '../components/SuperAwesome.components'
import WeeklyComponents from '../components/Weekly.components'
import YearlyComponents from '../components/Yearly.components'
import ChartOne from '../components/ChartOne'
import TopPerformersComponents from '../components/TopPerformers.components'

const ModernPage = () => {
  return (
    <div className='p-5'>
      <AboutSectionComponents />
      <div className='grid grid-cols-12 gap-5'>
        <div className='lg:col-span-8 col-span-12'>
          <ChartOne />
        </div>
        <div className='col-span-12 lg:col-span-4'>
          <div className='flex flex-col gap-2'>
            <YearlyComponents  />
            <MonthlyComponents />
          </div>
        </div>
        <div className=' col-span-12 lg:col-span-6'>

        <EmployeeSalaryComponents />
        </div>
        <div className='col-span-12 lg:col-span-3'>
          <div className='flex flex-col gap-4'>
            <div className='w-full h-full flex flex-col sm:flex-row sm:items-center gap-2'>
              <CustomersComponents />
              <ProjectsComponents />
            </div>
            <SuperAwesomeComponents />
          </div>
        </div>
        <div className='col-span-12 lg:col-span-3'>
        <SellingProductsComponents />

        </div>
        <div className='col-span-12 lg:col-span-4'>
        <WeeklyComponents />

        </div>
        <div className='col-span-12 lg:col-span-8'>
          <TopPerformersComponents />
        </div>
      </div>
    </div>
  )
}

export default ModernPage