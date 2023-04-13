import * as React from "react"
import { SizePalette } from "../../theme/SizePalette"
import { ColorPalette } from "../../theme/ColorPalette"
import { Button } from "@mui/material"

interface IshadowButtonProps {
    onClick?: () => void
    text?: string
}

export default function ShadowButton(props: IshadowButtonProps) {
    const { text, onClick } = props
    return (
        <Button
            sx={{
                width: 95,
                height: 36,
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.12)",
                borderRadius: 1,
                textAlign: "center",
                fontSize: SizePalette.size1,
                fontWeight: "bold",
                color: ColorPalette.gray,
                backgroundColor: "white",
                margin: "0 5px, 0 5px",
                padding: "0  5px 0 5px",
                fontFamily: "montserrat",
                ":hover": {
                    backgroundColor: "white",
                },
            }}
            onClick={onClick}
        >
            {text}
        </Button>
    )
}
