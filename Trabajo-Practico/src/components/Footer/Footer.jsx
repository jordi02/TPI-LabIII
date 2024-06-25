import "./Footer.css";

const Footer = () => {

  return (

    <div className="Footer">
      <div className="container">
        <div className="footer-divider"></div>
        <div className="row">
          <div className="col-md-6 ft-1">
            <p>© 2024 PUROHABITO, Nutricion</p>
          </div>
          <div className="col-md-6 ft-3">
            <div className="footer-icons">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-linkedin-in"></i>
            </div>
          </div>
        </div>
      </div>
    </div>

  );

  // <footer className="py-3 bg-dark text-white fixed-bottom" style={{ marginTop: "100px" }}>
  //   <div className="container">
  //     <ul className="nav justify-content-center pb-3 mb-3">
  //       <li className="nav-item"><a href="" target="_blank" rel="noopener noreferrer" className="nav-link px-2 text-white">Facebook</a></li>
  //       <li className="nav-item"><a href="" target="_blank" rel="noopener noreferrer" className="nav-link px-2 text-white">Twitter</a></li>
  //       <li className="nav-item"><a href="" target="_blank" rel="noopener noreferrer" className="nav-link px-2 text-white">Instagram</a></li>
  //     </ul>
  //     <p className="text-center text-white">© 2024 PUROHABITO, Nutricion</p>
  //   </div>
  // </footer>

};

export default Footer;
