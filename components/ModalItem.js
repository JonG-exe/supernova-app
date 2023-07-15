import React from 'react'
import Link from "next/link"
import { Stack, Typography } from "@mui/material"

const ModalItem = ( { name, icon, href, handleClose } ) => {

    console.log("icon: ", icon)

  return (
    <>
        <Link href={href} onClick={handleClose} style={{color: "black"}} >
            <Stack direction="row" spacing={4} alignItems="center">
            {icon}
                <Typography variant="h4"> {name} </Typography>
            </Stack>
        </Link>
    </>
  )
}

export default ModalItem