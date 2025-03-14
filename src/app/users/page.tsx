import Categories from '@/components/restComp/Categories'
import Header from '@/components/Header'
import NavBar from '@/components/NavBar'
import Hero from '@/components/restComp/Hero'
import Search from '@/components/restComp/Search'
import React from 'react'

const UsersPage = () => {
  return (
    <>
    <Header/>
    <NavBar/>
    <Hero/>
    <Search/>
    <Categories/>
    </>
  )
}

export default UsersPage