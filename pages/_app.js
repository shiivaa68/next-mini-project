import '../styles/globals.css'
import Menu from '../component/generic/Menu'
import Header from '../component/generic/Header'
import Footer from '../component/generic/Footer'
import Sidebar from '../component/generic/Sidebar' 
import {useRouter} from 'next/router'
import { useState } from 'react'
import styles from '../styles/Home.module.css'


function MyApp({ Component, pageProps }) {

const router =useRouter()
const [loading,setLoding] =useState(false)






  return(
    <div>
{/* {loading && 'loading....'} */}

<Header/>
<section >
  <Sidebar />
  <article className={styles.container}>
  <Component {...pageProps}/>
  </article>
</section>

<Footer/>

    </div>
  ) 
}

export default MyApp
