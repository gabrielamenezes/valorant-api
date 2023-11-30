import { useEffect, useState } from "react";
import AgentCard from "../components/AgentCard";
import styled from "styled-components";

const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    margin-top: 2rem;
`
const Home = () => {
    const [agents, setAgents] = useState([])
    const urlGetAgent = `https://valorant-api.com/v1/agents?isPlayableCharacter=true&language=pt-BR`
    async function getAgents(url) {
    const response = await fetch(url)
    const data = await response.json();
    console.log(data.data)
    setAgents(data.data)
  }
  useEffect(() => {
    getAgents(urlGetAgent);
  }, []) 
    return (
        <CardContainer>
            {agents && agents.map(agent => <AgentCard key={agent.uuid} agent={agent}></AgentCard>)}
        </CardContainer>
    )
}

export default Home;