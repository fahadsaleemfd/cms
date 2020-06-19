import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"

export default function Home() {
  return <div style={{color:'purple'}}>
            <Header headerText="Index Page"/>
            <p>What the world</p>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRpEt6Yta81dkd6h3Exahgm7JB9s75MtMl4M6nB41HxtP1YR6uI&usqp=CAU" />
            <Link to='/contact/'>Contact</Link>
        </div>
}
