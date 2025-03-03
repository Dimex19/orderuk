import Header from "@/components/Header";
import NavBar from '@/components/NavBar'
import { Poppins } from 'next/font/google'
import Hero from "@/components/Hero";
import Exclusive from "@/components/Exclusive";
import Categories from "@/components/Categories";
import Restaurants from '@/components/Restaurants'
import Partner from '@/components/Partner'
import Download from "@/components/Download";
import Service from "@/components/Service";
import Footer from "@/components/Footer";

const poppins = Poppins({ subsets: ['latin'], weight: '500' }) // Define the font

export default function Home() {
  return (
    <div className={poppins.className}>
      {/* <h1>Hello World</h1>
      <Link href="/users">Users</Link> */}
      <Header/>
      <NavBar/>
      <Hero/>
      <Exclusive/>
      <Categories/>
      <Restaurants/>
      <Download/>
      <Partner/>
      <Service/>
      <Footer/>
    </div>
  );
}
