'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import OrderCard from './OrderCard'

interface clickProps {
  key: string
}
const Order = () => {
  const [activeItem, setActiveItem] = useState<string | null>("Pizza")

  const links = [
    {item: "Pizza", path: "/pizza"},
    {item: "Garlic Bread", path: "/garlic-bread"},
    {item: "Calzone", path: "/calzone"},
    {item: "Kebabas", path: "/kebabas"},
    {item: "Salads", path: "/salads"},
    {item: "Cold Drinks", path: "/cold-drinks"},
    {item: "Happy Meal®", path: "/happy-meal"},
    {item: "Deserts", path: "/deserts"},
    {item: "Hot Drinks", path: "/hot-drinks"},
    {item: "Sauces", path: "/sauces"},
    {item: "Orbit®", path: "/orbit"},
  ]
  return (
    <div className='mx-[50px] mt-[50px] flex'>
        <div className="flex flex-col gap-4 bg-[#FBFBFB] border border-[#BCBCBC] rounded-[12px]">
            <div className="flex justify-center items-center gap-4 pl-6 pr-[90px] pt-8">
                <img src="/assets/menu.png" alt="" />
                <p className='font-bold text-3xl'>Menu</p>
            </div>
            {links.map(({item}) => (
              <p key={item} onClick={()=> {setActiveItem(item)}} className="px-6 py-3 text-xl font-semibold hover:bg-[#03081F] hover:text-white">
                {item}
              </p>
            ))}
          </div>

          <div className="mx-5">
            {activeItem === 'Pizza' && <>
              <p className="text-[36px] font-bold mb-6">Pizza</p>
              <OrderCard title='Farm House Xtreme Pizza' description='1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks'/>
              <OrderCard title='Pepperoni Blast Pizza' description='Double pepperoni slices, creamy mozzarella, and rich tomato sauce spread over a crispy thin crust.'/>
              <OrderCard title='BBQ Chicken Pizza' description='Tender BBQ chicken with onions, peppers, and a smoky sauce layered with gooey mozzarella.'/>
            </>}

            {activeItem === 'Garlic Bread' && <>
              <p className="text-[36px] font-bold mb-6">Garlic Bread</p>
              <OrderCard title='Classic Garlic Bread' description='Freshly baked bread with a buttery garlic spread, seasoned with herbs and a touch of parmesan.'/>
              <OrderCard title='Cheesy Garlic Bread' description='Garlic bread smothered in mozzarella and cheddar, melted to golden perfection.'/>
              <OrderCard title='Spicy Garlic Bread' description='Garlic bread infused with chili flakes and jalapeños for a fiery twist.'/>
            </>}

            {activeItem === 'Calzone' && <>
              <p className="text-[36px] font-bold mb-6">Calzone</p>
              <OrderCard title='Meat Lover Calzone' description='Stuffed with pepperoni, sausage, ham, and cheese, baked in a folded crust.'/>
              <OrderCard title='Veggie Calzone' description='Packed with mushrooms, spinach, bell peppers, and ricotta cheese.'/>
              <OrderCard title='Four Cheese Calzone' description='A blend of mozzarella, ricotta, parmesan, and provolone wrapped in a crispy crust.'/>
            </>}

            {activeItem === 'Kebabas' && <>
              <p className="text-[36px] font-bold mb-6">Kebabas</p>
              <OrderCard title='Chicken Kebab' description='Grilled chicken cubes marinated in spices, served with garlic sauce and veggies.'/>
              <OrderCard title='Beef Shawarma Kebab' description='Sliced beef layered in pita with tahini, onions, and tomatoes.'/>
              <OrderCard title='Mixed Grill Kebab' description='A mix of lamb, chicken, and beef kebabs served with flatbread.'/>
            </>}

            {activeItem === 'Salads' && <>
              <p className="text-[36px] font-bold mb-6">Salads</p>
              <OrderCard title='Caesar Salad' description='Romaine lettuce, croutons, parmesan, and Caesar dressing.'/>
              <OrderCard title='Greek Salad' description='Cucumbers, olives, feta cheese, red onions, and tomatoes.'/>
              <OrderCard title='Garden Salad' description='Fresh greens, carrots, cucumbers, and cherry tomatoes.'/>
            </>}

            {activeItem === 'Cold Drinks' && <>
              <p className="text-[36px] font-bold mb-6">Cold Drinks</p>
              <OrderCard title='Coca-Cola' description='Chilled, fizzy, and refreshing classic soda drink.'/>
              <OrderCard title='Iced Lemon Tea' description='Cool tea with a hint of lemon served over ice.'/>
              <OrderCard title='Fruit Punch' description='A tropical blend of mixed fruit juices with ice.'/>
            </>}

            {activeItem === 'Happy Meal®' && <>
              <p className="text-[36px] font-bold mb-6">Happy Meal®</p>
              <OrderCard title='Mini Burger Meal' description='A mini cheeseburger, small fries, and a fun-sized drink.'/>
              <OrderCard title='Chicken Nuggets Meal' description='4-piece nuggets with fries and an apple juice.'/>
              <OrderCard title='Veggie Meal' description='Veggie patty, fries, and a fruit box for kids.'/>
            </>}

            {activeItem === 'Deserts' && <>
              <p className="text-[36px] font-bold mb-6">Deserts</p>
              <OrderCard title='Chocolate Lava Cake' description='Warm chocolate cake with a molten center served with vanilla cream.'/>
              <OrderCard title='Cheesecake Slice' description='Classic creamy cheesecake with a graham cracker crust.'/>
              <OrderCard title='Ice Cream Sundae' description='Vanilla ice cream topped with syrup and crushed nuts.'/>
            </>}

            {activeItem === 'Hot Drinks' && <>
              <p className="text-[36px] font-bold mb-6">Hot Drinks</p>
              <OrderCard title='Cappuccino' description='Espresso mixed with steamed milk and foam.'/>
              <OrderCard title='Hot Chocolate' description='Creamy hot chocolate topped with whipped cream.'/>
              <OrderCard title='Herbal Tea' description='A calming blend of chamomile, peppermint, and lemon balm.'/>
            </>}

            {activeItem === 'Sauces' && <>
              <p className="text-[36px] font-bold mb-6">Sauces</p>
              <OrderCard title='Garlic Mayo' description='Creamy garlic mayonnaise perfect for dipping.'/>
              <OrderCard title='Spicy BBQ Sauce' description='Bold barbecue flavor with a hint of heat.'/>
              <OrderCard title='Honey Mustard' description='Sweet and tangy mustard sauce blend.'/>
            </>}

            {activeItem === 'Orbit®' && <>
              <p className="text-[36px] font-bold mb-6">Orbit®</p>
              <OrderCard title='Orbit Spearmint' description='Fresh spearmint flavor gum that lasts long.'/>
              <OrderCard title='Orbit Peppermint' description='Bold peppermint taste in every chew.'/>
              <OrderCard title='Orbit Bubblemint' description='Fusion of bubblegum and mint for a fresh twist.'/>
            </>}
          </div>
    </div>
  )
}

export default Order
