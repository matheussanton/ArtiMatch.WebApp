import { Grid } from "@chakra-ui/react";
import InspirationCard from "../InspirationCard/InspirationCard";

export default function InspirationGrid() {
    return (
        <div className="flex items-center justify-center container">
            <Grid
                h="600px"
                w="600px"
                templateRows="repeat(3, 1fr)"
                templateColumns="repeat(3, 1fr)"
                gap={4}
            >
                <InspirationCard />
                <InspirationCard />
                <InspirationCard />

                <InspirationCard />
                <InspirationCard />
                <InspirationCard />

                <InspirationCard />
                <InspirationCard />
                <InspirationCard />
            </Grid>
        </div>
    );
}
