import ALoading from '../loading/ALoading'
import ACard from './ACard'
import ACardContent from './ACardContent'

export default function ALoadingCard() {
    return (
        <ACard>
            <ACardContent sx={{ height: "100%" }}>
                <ALoading></ALoading>
            </ACardContent>
        </ACard>
    )
}
