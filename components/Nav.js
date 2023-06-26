import React from 'react'

export default function Nav () {
  return (
    <nav>
        <ul className="nav-list">
            <li><a href="/"><img className="logo" src="images/logo.png" /></a></li>
            <li className="meet_mauri_li"><a className="meet_mauri" href="/">Meet <span>Mauricia</span></a></li>
        </ul>
    </nav>
  )
}
