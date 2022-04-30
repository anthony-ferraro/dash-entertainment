import React from 'react'
import styles from '/styles/Navbar.module.css';
import Link from 'next/link'
import Image from 'next/image'
import { BsBookmarkFill } from 'react-icons/bs';
import { HiTrendingUp } from 'react-icons/hi';
const Navbar = ({ router }) => {
  return (
    <nav className={styles.navbar}>
      <div>
        <div className={styles.icons}>
          <Link passHref={true} href="/">
            <div className={styles.logo}>
              <Image src="/assets/dash-logo.png" layout="fill" object-fit="contain"></Image>
            </div>
          </Link>
          <Link passHref={true} href="/movies">
            <svg className={`${styles.icon} ${router.pathname === "/movies" ? styles.active : ""}`} width="20" height="20" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.956 0H3.044A3.044 3.044 0 0 0 0 3.044v13.912A3.044 3.044 0 0 0 3.044 20h13.912A3.044 3.044 0 0 0 20 16.956V3.044A3.044 3.044 0 0 0 16.956 0ZM4 9H2V7h2v2Zm-2 2h2v2H2v-2Zm16-2h-2V7h2v2Zm-2 2h2v2h-2v-2Zm2-8.26V4h-2V2h1.26a.74.74 0 0 1 .74.74ZM2.74 2H4v2H2V2.74A.74.74 0 0 1 2.74 2ZM2 17.26V16h2v2H2.74a.74.74 0 0 1-.74-.74Zm16 0a.74.74 0 0 1-.74.74H16v-2h2v1.26Z" fill="#5A698F" />
            </svg>
          </Link>
          <Link passHref={true} href="/tv">
            <svg className={`${styles.icon} ${router.pathname === "/tv" ? styles.active : ""}`} width="20" height="20" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 4.481H9.08l2.7-3.278L10.22 0 7 3.909 3.78.029 2.22 1.203l2.7 3.278H0V20h20V4.481Zm-8 13.58H2V6.42h10v11.64Zm5-3.88h-2v-1.94h2v1.94Zm0-3.88h-2V8.36h2v1.94Z" fill="#5A698F" />
            </svg>
          </Link>
          <Link passHref={true} href="/cast?page=1">
            <svg className={`${styles.icon} ${router.pathname === "/cast" ? styles.active : ""}`} width="30" height="30" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <path fill="#5A698F" d="M35.7502,28 C38.0276853,28 39.8876578,29.7909151 39.9950978,32.0427546 L40,32.2487 L40,33 C40,36.7555 38.0583,39.5669 35.0798,41.3802 C32.1509,43.1633 28.2139,44 24,44 C19.7861,44 15.8491,43.1633 12.9202,41.3802 C10.0319285,39.6218485 8.11862909,36.9249713 8.00532378,33.3388068 L8,33 L8,32.2489 C8,29.9703471 9.79294995,28.1122272 12.0440313,28.0048972 L12.2499,28 L35.7502,28 Z M24,4 C29.5228,4 34,8.47715 34,14 C34,19.5228 29.5228,24 24,24 C18.4772,24 14,19.5228 14,14 C14,8.47715 18.4772,4 24,4 Z" id="🎨-Color"></path>
            </svg>
          </Link>
          <Link passHref={true} href="/favorites">
            <BsBookmarkFill size={22} className={`${styles.icon} ${router.pathname === "/favorites" ? styles.active : ""}`}></BsBookmarkFill>
            {/* <svg className={`${styles.icon} ${router.pathname === "/user" ? styles.active : ""}`} width="30" height="30" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <path fill="#5A698F" d="M35.7502,28 C38.0276853,28 39.8876578,29.7909151 39.9950978,32.0427546 L40,32.2487 L40,33 C40,36.7555 38.0583,39.5669 35.0798,41.3802 C32.1509,43.1633 28.2139,44 24,44 C19.7861,44 15.8491,43.1633 12.9202,41.3802 C10.0319285,39.6218485 8.11862909,36.9249713 8.00532378,33.3388068 L8,33 L8,32.2489 C8,29.9703471 9.79294995,28.1122272 12.0440313,28.0048972 L12.2499,28 L35.7502,28 Z M24,4 C29.5228,4 34,8.47715 34,14 C34,19.5228 29.5228,24 24,24 C18.4772,24 14,19.5228 14,14 C14,8.47715 18.4772,4 24,4 Z" id="🎨-Color"></path>
            </svg> */}
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar