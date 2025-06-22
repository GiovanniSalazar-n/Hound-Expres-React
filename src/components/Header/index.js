import logo from "../../assets/logo-Hound_Express-bg-white.png";
import { HeaderBanner, HeaderContainer, HeaderLink, HeaderNav, HeaderSlogan, HeaderTitle } from "./style";
const Header=()=>{
    return(
        <HeaderContainer >
        <HeaderBanner >
            <img src={logo} alt="Logo de la empresa"/>
            <HeaderTitle>Hound Express</HeaderTitle>
            <HeaderSlogan >Enviamos tus paquetes con rapidez y seguridad</HeaderSlogan>
        </HeaderBanner>
        <HeaderNav >
            
            
            <HeaderLink>Inicio</HeaderLink>
            <HeaderLink>Registro de Guías</HeaderLink>
            <HeaderLink>Estado General</HeaderLink>
            <HeaderLink>Lista de Guías</HeaderLink>
            <HeaderLink>Buscar Guías</HeaderLink>
            <HeaderLink>Historial de Guías</HeaderLink>
          
        </HeaderNav>
    </HeaderContainer>

    )
}
export default Header
