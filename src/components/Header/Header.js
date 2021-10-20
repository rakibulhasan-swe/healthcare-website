import React from "react";

const Header = () => {
  return (
    <header className="container-fluid">
      <section className="row justify-content-between py-2 my-bg-color">
      <div className="col-md-6 d-flex text-light">
        <div>
          <i className="bi bi-envelope"></i>
          <small className="mx-2">xyz@example.com</small>
        </div>
        <div>
          <i className="bi bi-geo-alt"></i>
          <small className="mx-2">Oakwood, Los Angeles</small>
        </div>
      </div>
      <div className="col-md-6">
        <span className="mx-2 text-light float-end">
          <i className="bi bi-facebook"></i>
        </span>
        <span className="mx-2 text-light float-end">
        <i className="bi bi-github"></i>
        </span>
        <span className="mx-2 text-light float-end">
          <i className="bi bi-google"></i>
        </span>
        <span className="mx-2 text-light float-end">
          <i className="bi bi-linkedin"></i>
        </span>
      </div>
      </section>
    </header>
  );
};

export default Header;
