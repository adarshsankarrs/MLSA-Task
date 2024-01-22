/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/ai.jpg";

const imageAltText = "artificial intelligence eye";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Building a Strong Foundation: Mastering Essential Technologies for Data Analysis Careers 🎉",
    description:
      "Establish a robust groundwork by mastering fundamental technologies crucial for a successful career in data analysis.",
    url: "https://dev.to/grayhat/building-a-strong-foundation-mastering-essential-technologies-for-data-analysis-careers-3ldi",
  },
  {
    title: "Spotify Data Analysis and Predicting Song Popularity using ML Techniques ",
    description:
      "The project utilizes machine learning, including RandomForestClassifier and MLP, to predict song popularity based on acoustic features, employing binary classification.",
    url: "https://github.com/adarshsankarrs/Spotify-Data-Analysis---RF-vs-MLP-Study/blob/main/README.md",
  },
  {
    title: "Uber Data Analysis",
    description:
      "Uber predicts trip numbers using distance categories and machine learning, employing a tuned Random Forest Classifier for insights into travel patterns.",
    url: "https://github.com/adarshsankarrs/Uber-Data-Analysis/blob/main/README.md",
  },
  {
    title: "Data Anlayst Roadmap 2024",
    description:
      "Video explaining Data Analyst Weekly Study Plan ,Resources, and how best to use each tool.",
    url: "https://www.youtube.com/watch?v=bCLBdxfe57o",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
