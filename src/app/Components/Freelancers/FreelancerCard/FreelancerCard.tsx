import { Box, GridItem, Skeleton } from "@chakra-ui/react";
import { useState } from "react";

export default function FreelancerCard({ freelancer, isMainChoice }: any) {

    const [isImageLoading, setIsImageLoading] = useState(true);
    const [selected, setSelected] = useState(false);


    setTimeout(() => {
        setIsImageLoading(false);
    }, Math.random() * 5000);


    return (
        <GridItem colSpan={1}
            onClick={() => setSelected(!selected)}>
            <Skeleton
                w={`${isMainChoice ? '300' : '250'}px`}
                h={`${isMainChoice ? '450' : '400'}px`}
                isLoaded={!isImageLoading}
                fadeDuration={1}
            >
                <Box className={`relative w-full h-full bg-gray-100
                border-2 shadow-md drop-s rounded-lg
                container flex flex-col items-center p-10 justify-between
                hover:cursor-pointer hover:scale-${isMainChoice ? '110' : '105'}
                transition-all duration-300`}>
                    <Box className="rounded-full w-[100px] h-[100px]"
                        backgroundImage={`./img/person${freelancer.id}.jpg`}
                        backgroundPosition="center"
                        backgroundSize="cover"
                        backgroundRepeat="no-repeat"></Box>
                    <Box className="flex flex-col justify-center items-center">
                        <span>{freelancer.name}</span>
                        <br />
                        <span className="text-center overflow-ellipsis">{freelancer.description}</span>
                    </Box>
                    <Box>
                        <span className="font-bold">{freelancer.scorePercentage}</span>
                        <span className="text-xs text-gray-400"> / 100</span>
                    </Box>
                </Box>
                {isMainChoice &&
                    <Box className="h-[50px] w-full bg-red-500
                    flex justify-center items-center
                    rounded-br-lg rounded-bl-lg text-white
                    font-bold text-center">Sua melhor escolha.</Box>
                }
            </Skeleton>
        </GridItem>
    );
}
