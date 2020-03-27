import React from "react";

import Navbar from "./navbar";

import "./hero.scss";

const HeroBanner = ({ bannerContent }) => (
  <div className="box content">
    <p className="has-text-centered">{bannerContent}</p>
  </div>
);

export default ({ banner = false, bannerContent }) => (
  <>
    <section className="hero is-medium is-info" style={{ height: 440 }}>
      <div className="hero-bg-img" />
      <div className="hero-head">
        <Navbar />
      </div>
      <div className="hero-body" style={{ zIndex: 2 }}>
        <div className="container-fluid has-text-centered">
          <h1 className="title is-size-2 has-text-weight-light">
            Meteorology with Simple Data Access
          </h1>
          <h2 className="subtitle has-text-weight-light">
            Realtime Processing, Data Archive, and REST API to Support
            Hydrologic Modeling
          </h2>
        </div>
      </div>
    </section>
    {banner && <HeroBanner bannerContent={bannerContent} />}
  </>
);
