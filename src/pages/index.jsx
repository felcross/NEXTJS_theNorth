import styles from '../styles/Home.module.css'
import House from '../components/HouseC'
import Navbar from '../components/Navbar'
import HomeC from '../components/HomeC'

export default function Home() {
  return (
    <>
    <Navbar text='Casas'destiny='/house'/>
     <HomeC/>
    </>
    
  )
}
