import React from 'react'
import Link from "next/link"
import Image from "next/image"
import Logo from "../public/images/logo.png" 

export default function Nav () {
  return (
    <nav>
        <ul className="nav-list">
            <li>
              <Link href="/"><Image alt="" className="logo" src={Logo}/></Link>
            </li>
            <li className="meet_mauri_li">
              <Link className="meet_mauri" href="/">Meet <span>Mauricia</span></Link>
            </li>
        </ul>
    </nav>
  )
}
