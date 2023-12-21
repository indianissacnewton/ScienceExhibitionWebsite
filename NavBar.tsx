function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item" id="logo">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="../index.html"
                >
                  <img src="WS.jpg" height={100} width={100} />
                </a>
              </li>
              <li className="nav-item" id="form">
                <a className="nav-link" href="../ctt.html">
                  Contact Us
                </a>
              </li>
              <li className="nav-item" id="form">
                <a className="nav-link" href="../form.html">
                  Place Order
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
