import {
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiNodejsSmall,
    DiMysql,
    DiReact,
    DiMongodb,
    DiSass 
  } from "react-icons/di";


  
import "../styles/components/technologiescontainer.sass";

const technologies = [
    { id: "html", name: "HTML5", icon: <DiHtml5 />, description: "Estrutura e marcação para páginas web modernas."},
    { id: "css", name: "CSS3", icon: <DiCss3 />, description: ".Estiliza páginas web com design responsivo e efeitos avançados." },
    { id: "js", name: "JavaScript", icon: <DiJsBadge />, description: "Adiciona interatividade e dinâmica às páginas web." },
    { id: "node", name: "Node.js", icon: <DiNodejsSmall />, description: "Adiciona interatividade e dinâmica às páginas web." },
    { id: "mysql", name: "MySQL", icon: <DiMysql />, description: "Banco de dados relacional para armazenamento de dados estruturados." },
    { id: "react", name: "React", icon: <DiReact />, description: "Biblioteca para construir interfaces de usuário reutilizáveis." },
    { id: "mongodb", name: "MongoDB", icon: <DiMongodb/>, description: "Banco de dados NoSQL para dados flexíveis e escaláveis." },
    { id: "sass", name:"Sass", icon: <DiSass/>, description: "Pré-processador CSS com variáveis e mixins para código mais modular."}

    
  ];
  
  const TechnologiesContainer = () => {
    return (
      <section className="technologies-container">
        <h2>Tecnologias</h2>
        <div className="technologies-grid">
          {technologies.map((tech) => (
            <div className="technology-card" id={tech.id} key={tech.id}>
              {tech.icon}
              <div className="technology-info">
                <h3>{tech.name}</h3>
                <p>{tech.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default TechnologiesContainer;