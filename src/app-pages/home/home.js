import React from "react";

import Footer from "../../app-components/footer";
import Hero from "../../app-components/hero";
import { CardBrowse, CardDocs, CardExplore } from "../../app-components/cards";

import "./home.scss";

const BannerContent = () => (
  <span>
    <span className="tag is-primary">Coming Soon...</span> Products Available as{" "}
    <a rel="noopener noreferrer" target="_blank" href="https://stacspec.org/">
      SpatioTemporal Asset Catalogs (STAC)
    </a>
  </span>
);

const Notification = () => (
  <div className="column is-6 is-offset-3">
    <div className="notification is-danger is-light">
      <button className="delete"></button>
      This application is under active development. We're deploying new progress
      early and often. Please expect to find buttons that do not go anywhere and
      incomplete features until this banner is taken down.
    </div>
  </div>
);

export default function home() {
  return (
    <>
      <Hero banner={true} bannerContent={BannerContent()} />
      <Notification />
      <section className="section is-small">
        <div className="container">
          <div className="column">
            <div className="tile is-ancestor">
              <div className="tile">
                <CardExplore />
              </div>
              <div className="tile">
                <CardBrowse />
              </div>
              <div className="tile">
                <CardDocs />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="content">
        <div className="intro column is-10 is-offset-1">
          <h5 className="title is-size-5">
            Precipitation, Air Temperature, and Snow for the Continental United
            States and Beyond.
          </h5>
          <p className="subtitle is-size-5 has-text-weight-light is-italic">
            Never let missing data get in the way of modeling again.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}
