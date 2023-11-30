import styled from "styled-components"

const Card = styled.div`
    width: 200px;
    height: auto;
`
const AgentCard = ({agent}) => {
    return (
        <Card>
            <div className="imgContainer">
                <img src={agent.displayIcon} alt={agent.displayName} />
            </div>
            <div className="infoContainer">
                <h4 className="agentName">{agent.displayName}</h4>
            </div>
        </Card>
    )
}
  

export default AgentCard