//import "./Footer.css";

const Footer = () => {

  return (

    <footer className="py-3 bg-dark text-white fixed-bottom" style={{ marginTop: "100px" }}>
      <div className="container">
        <ul className="nav justify-content-center pb-3 mb-3">
          <li className="nav-item"><a href="" target="_blank" rel="noopener noreferrer" className="nav-link px-2 text-white">Facebook</a></li>
          <li className="nav-item"><a href="" target="_blank" rel="noopener noreferrer" className="nav-link px-2 text-white">Twitter</a></li>
          <li className="nav-item"><a href="" target="_blank" rel="noopener noreferrer" className="nav-link px-2 text-white">Instagram</a></li>
        </ul>
        <p className="text-center text-white">© 2024 PUROHABITO, Nutricion</p>
      </div>
    </footer>

  );

};

export default Footer;
