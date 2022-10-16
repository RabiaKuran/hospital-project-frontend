import { CircularProgress } from '@mui/material'
import { ColorPalette } from '../../theme/ColorPalette'
import './ALoading.css'
export default function ALoading() {
    return (
        <div className='loading-container'>
            <CircularProgress sx={{ color: ColorPalette.albarakaOrange }} />
        </div>
    )
}