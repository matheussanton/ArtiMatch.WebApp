import { Grid } from "@chakra-ui/react";
import FreelancerCard from "../FreelancerCard/FreelancerCard";

const freelancers = [
    {
        id: 1,
        icon: "🚀",
        name: "Kaike Gimenes",
        scorePercentage: 87,
        description: "Designer de interiores desde 2017, mais de 100 projetos realizados.",
        price: 200
    },
    {
        id: 2,
        icon: "👩‍💻",
        name: "Ana Silva",
        scorePercentage: 92,
        description: "Arquiteta especializada em design de interiores, transformando espaços desde 2015. Concepção única e prática em mais de 80 projetos executados.",
        price: 300
    },
    {
        id: 3,
        icon: "🎨",
        name: "Carlos Oliveira",
        scorePercentage: 78,
        description: "Especialista em decoração residencial, trazendo elegância e funcionalidade para lares desde 2018. Mais de 60 residências transformadas com sucesso.",
        price: 250
    }
];

export default function FreelancersGrid() {
    return (
        <div className="flex items-center justify-center w-full container mt-10">
            <Grid
                h="100%"
                w="100%"
                templateRows="repeat(1, 1fr)"
                templateColumns="repeat(3, 1fr)"
                gap={4}
                className="flex items-center justify-between container w-full"
            >
                {freelancers.map(freelancer => (
                    <FreelancerCard freelancer={freelancer} isMainChoice={isMainChoice(freelancer)} key={freelancer.id} />
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
