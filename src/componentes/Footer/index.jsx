import "./Footer.css"

const Footer = ()=>{
    return <footer className="footer" style={ {backgroundImage: "url(/img/Footers.png)"} }>
        <div className="redes">
            <a href="http://www.aluracursos.com">
              <img src="/img/facebook.png" alt="facebook"/>
            </a>
            <a href="http://www.aluracursos.com">
              <img src="/img/twitter.png" alt="twitter"/>
            </a>
            <a href="http://www.aluracursos.com">
              <img src="/img/instagram.png" alt="instagram"/>
            </a>
        </div>
        <img href="./img/Logo(1).png"/>
        <strong>Desarrollado por Boris Antunez </strong>

    </footer>
}

export default Footer