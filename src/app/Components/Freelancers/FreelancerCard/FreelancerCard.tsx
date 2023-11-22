import { Box, GridItem, Skeleton, Tooltip } from "@chakra-ui/react";
import { useState } from "react";

export default function FreelancerCard({ freelancer, isMainChoice }: any) {

    const [isImageLoading, setIsImageLoading] = useState(true);
    const [selected, setSelected] = useState(false);


    setTimeout(() => {
        setIsImageLoading(false);
    }, Math.random() * 10000);


    return (
        <GridItem colSpan={1}
            onClick={() => setSelected(!selected)}>
            <Skeleton
                w={`${isMainChoice ? '300' : '250'}px`}
                h={`${isMainChoice ? '450' : '400'}px`}
                isLoaded={!isImageLoading}
                fadeDuration={1}
            >
            <div  className={`w-full h-full bg-gray-100
                    ${isMainChoice && `border-2 border-green-500`}
                    shadow-md drop-shadow rounded-lg
                    flex flex-col items-center justify-between
                    hover:cursor-pointer hover:scale-${isMainChoice ? '110' : '105'}
                    transition-all duration-300`}>
                    <Box
                         className={`w-full h-full p-10
                         container flex flex-col items-center justify-between
                         transition-all duration-300`}>
                        <Box className="rounded-full w-[100px] h-[100px]"
                            backgroundImage={`./img/person${freelancer.id}.jpg`}
                            backgroundPosition="center"
                            backgroundSize="cover"
                            backgroundRepeat="no-repeat"></Box>
                        <Box className="flex flex-col justify-center items-center">
                            <p className="text-black">{freelancer.name}</p>
                            <br />
                            <Tooltip label={freelancer.description} aria-label='Description tooltip'>
                            <p className="text-black text-center max-h-[90px] overflow-hidden line-clamp-3">{freelancer.description}</p>
                        </Tooltip>
                            
                        </Box>
                        <Box>
                            <p className="text-black font-bold">{freelancer.scorePercentage}
                                <span className="text-xs text-gray-400"> / 100</span>
                            </p>
                        </Box>
                    </Box>
                    {isMainChoice &&
                        <Box className="h-[50px] w-full bg-green-500
                        flex justify-center items-center
                        rounded-br-lg rounded-bl-lg text-white
                        font-bold text-center">Sua melhor escolha.</Box>
                    }
                </div>
            </Skeleton>
        </GridItem>
    );
}
