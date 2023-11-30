import { Link } from "react-router-dom"
import styled from "styled-components"

const Cabecalho = styled.header`
    width: 100%;
    background: #222;
    color: white;
    height: 60px;
    display: flex;
    align-items: center;
`
const Header = () => {
    return (
        <Cabecalho>
            <Link to="/">valorant</Link>
        </Cabecalho>
    )
}

export default Header
