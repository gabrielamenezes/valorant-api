import { useEffect, useState } from "react";
import AgentCard from "../components/AgentCard";
import styled from "styled-components";
import { useAgentesContext } from "../context/Agentes";

const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    margin-top: 2rem;
`
const Home = () => {
  const {agentes, getAgentsAPI, setAgentes} = useAgentesContext();
  const urlGetAgent = `https://valorant-api.com/v1/agents?isPlayableCharacter=true&language=pt-BR`

    
  useEffect(() => {
    getAgentsAPI(urlGetAgent);
    
  }, []) 
    return (
        <CardContainer>
            {agentes && agentes.map(agent => <AgentCard key={agent.uuid} agent={agent}></AgentCard>)}
        </CardContainer>
    )
}

export default Home;