import React from 'react'
import Link from "next/link"
import Image from "next/image"

export default function Nav () {
  return (
    <nav>
        <ul className="nav-list">
            <li>
              <Link href="/"><Image alt="" width={150} height={200} className="logo" src="images/logo.png" /></Link>
            </li>
            <li className="meet_mauri_li">
              <Link className="meet_mauri" href="/">Meet <span>Mauricia</span></Link>
            </li>
        </ul>
    </nav>
  )
}
