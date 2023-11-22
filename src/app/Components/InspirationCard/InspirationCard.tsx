import { Box, GridItem, Skeleton } from "@chakra-ui/react";
import { useState } from "react";

export default function InspirationCard({ number }: any) {

    const [isImageLoading, setIsImageLoading] = useState(true);
    const [selected, setSelected] = useState(false);


    setTimeout(() => {
        setIsImageLoading(false);
    }, Math.random() * 15000);


    return (
        <GridItem colSpan={1}
            className="hover:cursor-pointer hover:border-green-500 hover:border-2"
            onClick={() => setSelected(!selected)}>
            <Skeleton
                w="100%"
                h="100%"
                isLoaded={!isImageLoading}
                fadeDuration={1}
            >
                <Box className="relative w-full h-full"
                    backgroundImage={`/img/office${number}.png`}
                    backgroundPosition="center"
                    backgroundSize="cover"
                    backgroundRepeat="no-repeat">
                    <Box className={`absolute w-full h-full 
                                ${selected && `bg-green-500 bg-opacity-50`}
                                transition-all duration-100`} />
                </Box>
            </Skeleton>
        </GridItem>
    );
}
