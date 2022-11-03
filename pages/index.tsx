import bgImg from '../imgs/backgroungWallpaper.png'
import Image from 'next/image'
import logo from '../imgs/Logo.png'
import personIcon from '../imgs/personIcon.png'
import typeIcon from '../imgs/typeIcon.png'

// Component
import HeaderSectionAndBackground from '../components/HeaderSectionAndBackground';
import Card from '../components/Card';
import Footer from '../components/Footer'

export default function Home() {
  return (
  <>
<div>
  <HeaderSectionAndBackground/>

{/* card */}
<Card/>
<Footer/>
    </div>
  
  
  
  </>
  ) 
}
