import React from "react";

import book from "../img/book.jpg";
import books from "../img/books.jpg";
import chart from "../img/chart.jpg";

import "./cards.scss";

const CardExplore = () => (
  <div className="card is-shady">
    <div className="card-image">
      <figure className="image is-3by2">
        <img src={chart} alt="Placeholder image" />
      </figure>
    </div>
    <div className="card-content">
      <div className="content">
        <h4>Explore the Data</h4>
        <p>Browse the map, and visualize the data for powerful data insights</p>
        <p>
          <a href="#">Learn more</a>
        </p>
      </div>
    </div>
  </div>
);

const CardBrowse = () => (
  <div className="card is-shady">
    <div className="card-image">
      <figure className="image is-3by2">
        <img src={books} alt="Placeholder image" />
      </figure>
    </div>
    <div className="card-content">
      <div className="content">
        <h4>Browse the Archive</h4>
        <p>Learn what's available for your study or realtime model</p>
        <p>
          <a href="#">Learn more</a>
        </p>
      </div>
    </div>
  </div>
);

const CardDocs = () => (
  <div className="card is-shady">
    <div className="card-image">
      <figure className="image is-3by2">
        <img src={book} alt="Placeholder image" />
      </figure>
    </div>
    <div className="card-content">
      <div className="content">
        <h4>Documentation</h4>
        <p>How it works and how it's built. User Guide and API Docs.</p>
        <br />
        <p>
          <a href="#">Learn more</a>
        </p>
      </div>
    </div>
  </div>
);

export { CardBrowse, CardDocs, CardExplore };
