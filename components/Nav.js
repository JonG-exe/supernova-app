import React from 'react'
import Link from "next/link"

export default function Nav () {
  return (
    <nav>
        <ul className="nav-list">
            <li>
              <Link href="/"><img className="logo" src="images/logo.png" /></Link>
            </li>
            <li className="meet_mauri_li">
              <Link className="meet_mauri" href="/">Meet <span>Mauricia</span></Link>
            </li>
        </ul>
    </nav>
  )
}
