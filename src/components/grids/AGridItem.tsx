import { Grid, Theme } from "@mui/material"
import { SystemProps } from "@mui/system"

interface IAGridItemProps extends SystemProps<Theme> {
    children?: any
    xs?: number
    sm?: number
    md?: number
    lg?: number
    xl?: number
    sx?: any
    className?: string
    innerHTML?: any
}

export default function AGridItem(props: IAGridItemProps) {
    const { children, innerHTML } = props

    return (
        <Grid item {...props} dangerouslySetInnerHTML={innerHTML}>
            {children}
        </Grid>
    )
}
