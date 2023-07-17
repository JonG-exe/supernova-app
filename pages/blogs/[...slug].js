import React from "react"
import { useRouter } from "next/router"

export default () => {
    const router = useRouter()

    return (
        <h1>{router.query.slug}</h1>
    )
}