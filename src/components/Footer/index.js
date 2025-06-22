import { FooterContainer, FooterIcon, FooterSocial } from "./style"

const Footer=()=>{
    return(
    <FooterContainer class="footer">
      
            <p class="footer__text">“We are Hound Express”.</p>
            <p class="footer__text">© 2025 Hound Express | Todos los derechos reservados</p>
            <FooterSocial class="footer__social">
                <FooterIcon  class="footer__icon">Instagram</FooterIcon>
                <FooterIcon  class="footer__icon">Facebook</FooterIcon>
                <FooterIcon class="footer__icon">Twitter</FooterIcon>
            
        </FooterSocial>
    </FooterContainer>
    )
}
export default Footer
