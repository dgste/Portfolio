import { FaLinkedinIn, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";

const socialNetworks = [
    { name: "linkedin", icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/douglas-rocha-3923052b1/" },
    { name: "github", icon: <FaGithub />, link: "https://github.com/dgste" },
    { name: "instagram", icon: <FaInstagram />, link: "https://www.instagram.com/douglasete7/" },
    { name: "whatsapp", icon: <FaWhatsapp />, link: "https://wa.me/11933135702?text=MENSAGEM" },
];

import '../styles/components/socialnetwork.sass'

function SocialNetwork (){
    return(
        <section id="social-networks">
            {socialNetworks.map((network) => (
                <a href={network.link} className="social-btn" id={network.name} key={network.name} target="_blank" rel="noopener noreferrer">
                    {network.icon}
                </a>
            ))}
        </section>
    )
}

export default SocialNetwork;