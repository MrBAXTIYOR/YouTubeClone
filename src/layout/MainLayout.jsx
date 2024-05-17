import React from 'react'
import Header from '../components/Header/Header'
import Sidebar from '../components/Sidebar/Sidebar'

const MainLayout = ({children}) => {
  return (
    <div className='mainlayout'>
      <Header/>
      <Sidebar/>
      {children}

    </div>
  )
}

export default MainLayout
