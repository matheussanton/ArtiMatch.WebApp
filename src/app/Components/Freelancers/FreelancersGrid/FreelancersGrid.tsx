import { Grid } from "@chakra-ui/react";
import FreelancerCard from "../FreelancerCard/FreelancerCard";

const freelancers = [
    {
        id: 1,
        icon: "🚀",
        name: "Matheus Santon",
        scorePercentage: 87,
        description: "Designer de interiores desde 2017, mais de 100 projetos realizados.",
    },
    {
        id: 2,
        icon: "👩‍💻",
        name: "Ana Silva",
        scorePercentage: 92,
        description: "Desenvolvedora web com experiência em front-end e back-end.",
    },
    {
        id: 3,
        icon: "🎨",
        name: "Carlos Oliveira",
        scorePercentage: 78,
        description: "Artista visual especializado em pintura a óleo, participou de diversas exposições.",
    }
];

export default function FreelancersGrid() {
    return (
        <div className="flex items-center justify-center w-full container">
            <Grid
                h="100%"
                w="100%"
                templateRows="repeat(1, 1fr)"
                templateColumns="repeat(3, 1fr)"
                gap={4}
                className="flex items-center justify-between container w-full"
            >
                {freelancers.map(freelancer => (
                    <FreelancerCard freelancer={freelancer} isMainChoice={isMainChoice(freelancer)} />
                ))}
            </Grid>
        </div>
    );
}

function isMainChoice(freelancer: any) {
    const freelancerWithGreatestScore = freelancers.reduce((maxFreelancer, currentFreelancer) => {
        return currentFreelancer.scorePercentage > maxFreelancer.scorePercentage ? currentFreelancer : maxFreelancer;
    }, freelancers[0]);

    return freelancer.id == freelancerWithGreatestScore.id;
}
