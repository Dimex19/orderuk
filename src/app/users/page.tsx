import Categories from '@/components/restComp/Categories'
import Header from '@/components/Header'
import NavBar from '@/components/NavBar'
import Hero from '@/components/restComp/Hero'
import Search from '@/components/restComp/Search'
import React from 'react'
import Order from '@/components/restComp/Order'
import OrderCard from '@/components/restComp/OrderCard'

const UsersPage = () => {
  return (
    <>
    <Header/>
    <NavBar/>
    <Hero/>
    <Search/>
    <Categories/>
    <div className='flex'>
      <Order/> 
      {/* <OrderCard title='Farm House Xtreme Pizza' description='1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks'/> */}
    </div>
    </>
  )
}

export default UsersPage