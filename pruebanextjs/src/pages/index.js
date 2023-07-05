import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import axios from 'axios'
import { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';
import { useRouter } from 'next/router';

const inter = Inter({ subsets: ['latin'] })

export default function login() {
    const router = useRouter();
    const  redirectToGoogleAuth = () => {
        window.location.href = 'https://gotrippf-production.up.railway.app/user/auth/google';
    };

    //

  
    
    const [data,setData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post('https://gotrippf-production.up.railway.app/user/login', {
                    "username": "holfagg@gmail.com", "passwordlogin": "Pitufilaptop01"
                });
                setData(response.data.cookie)
                console.log(data);
                console.log(response.data)
            
                const cookies = new Cookies();
                const cookie = response.data.tokenSession;
                cookies.set('cookieName', cookie, { path: '/' });
                console.log("Cookie almacenada:", cookie);
               
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);
    console.log(data)
  return (
    <>
      
          <div>
              <h2>Realizando una prueba Para los del Front El Back Rifa </h2>
              <button onClick={redirectToGoogleAuth}>Iniciar sesion con Google</button>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        
   
    </>
  )
}
