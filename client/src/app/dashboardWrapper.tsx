"use client"

import React, { useEffect } from 'react'
import Navbar from "@/components/Navbar/index";
import Sidebar from "@/components/Sidebar/index";
import StoreProvider, { useAppSelector } from './redux';




const DashboardLayout = ({children}:{children: React.ReactNode}) => {
  const isSidebarCollapsed = useAppSelector((state)=> state.global.isSidebarCollapsed,);
  const isDrakMode = useAppSelector((state)=> state.global.isDarkMode);

  useEffect(()=>{
    if(isDrakMode){
      document.documentElement.classList.add("dark");
    }else{
      document.documentElement.classList.remove("dark");
    }
  })


  return (
    <div className='flex min-h-screen w-full bg-gray-50 text-gray-900'>
        {/* {sidebar} */}
        <Sidebar/>

        <main className={`flex w-full flex-col bg-gray-50 dark:bg-dark-bg ${isSidebarCollapsed ? "" : "md:pl-64"}`}>
            {/* Navbar exist */}
            <Navbar/>
            {children}
        </main>




    </div>
  )
}

const DashboardWrapper = ({children}: {children: React.ReactNode}) =>{
  return(
    <StoreProvider>
      <DashboardLayout>{children}</DashboardLayout>
    </StoreProvider>
  )
}

export default DashboardWrapper