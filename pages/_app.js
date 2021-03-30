import '../styles/globals.css'
import Menu from '../component/generic/Menu'
import Header from '../component/generic/Header'
import Footer from '../component/generic/Footer'
import Sidebar from '../component/generic/Sidebar' 
import {useRouter} from 'next/router'
import { useState } from 'react'




function MyApp({ Component, pageProps }) {

const router =useRouter()
const [loading,setLoding] =useState(false)






  return(
    <div>
{/* {loading && 'loading....'} */}

<Header/>
<section style={{display:'flex'}}>
  <Sidebar />
  <article>
  <Component {...pageProps}/>
  </article>
</section>

<Footer/>

    </div>
  ) 
}

export default MyApp
