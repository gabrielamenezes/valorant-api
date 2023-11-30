import styled from "styled-components"

const Card = styled.div`
    width: 300px;
    height: 400px;
    display: flex;
    align-items: center;
    padding: 10px;
    flex-direction: column;
    background-color: #fffffe;
    border: 1px solid #222;
    img {
        width: 200px;
    }
    h4 {
        text-align: center;
        margin-top: 0.8rem;
    }
`
const AgentCard = ({agent}) => {
    return (
        <Card background={agent.background} >
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