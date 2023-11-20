import { Grid } from "@chakra-ui/react";
import InspirationCard from "../InspirationCard/InspirationCard";

const arrayOfIntegers = Array.from({ length: 9 }, (_, index) => index + 1);

export default function InspirationGrid() {
    return (
        <div className="flex items-center justify-center container w-full">
            <Grid
                h="600px"
                w="600px"
                templateRows="repeat(3, 1fr)"
                templateColumns="repeat(3, 1fr)"
                gap={4}
            >
                {arrayOfIntegers.map(number => (
                    <InspirationCard number={number}/>
                ))}
            </Grid>
        </div>
    );
}
