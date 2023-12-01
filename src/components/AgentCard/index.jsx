import styled from "styled-components"
import { FaRegHeart } from "react-icons/fa";
import { useContext } from "react";
import { useFavoritosContext } from "../../context/Favoritos";

const Card = styled.div`
    width: 300px;
    height: 400px;
    display: flex;
    align-items: center;
    padding: 10px;
    flex-direction: column;
    border: 1px solid #222;
    position: relative;
    .imgContainer img {
        width: 200px;
    }
    
    h3,h4,h5 {
        text-align: center;
    }
    h4 {
        margin-top: 0.8rem;
        text-transform: uppercase;
        font-size: 1.4rem;
        font-weight: 700;
    }
`
const BotaoIcone = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    border: none;
    position: absolute;
    bottom: 20px;
    cursor: pointer;
    transition: all 500ms ease-in-out;
    &:hover {
        color: #ff4655;
    }

`
const AgentCard = ({agent}) => {
    const {favoritos, adicionarFavorito} = useFavoritosContext();
    return (
        <Card background={[agent.backgroundGradientColors]} >
            <div className="imgContainer">
                <img src={agent.displayIcon} alt={agent.displayName} />
            </div>
            <div className="infoContainer">
                <h4 className="agentName">{agent.displayName}</h4>
                <h5 className="roleName">{agent.role.displayName}</h5>
            </div>
            <BotaoIcone onClick={() => adicionarFavorito(agent)}>
                <FaRegHeart size="25px" />
            </BotaoIcone>
        </Card>
    )
}
  

export default AgentCard