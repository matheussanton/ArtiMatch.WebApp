import { GridItem, Skeleton } from "@chakra-ui/react";
import { useState } from "react";

export default function InspirationCard() {

    const [isImageLoading, setIsImageLoading] = useState(true);
    setTimeout(() => {
        setIsImageLoading(false);
    }, Math.random() * 5000);

    function callLoading() {
        setTimeout(() => {
            setIsImageLoading(false);
        }, Math.random() * 1000);
    }

    return (
        <GridItem colSpan={1} bg="#2F855A">
            <Skeleton
                w="100%"
                h="100%"
                isLoaded={!isImageLoading}
                fadeDuration={1}
            >
                Random image
            </Skeleton>
        </GridItem>
    );
}
