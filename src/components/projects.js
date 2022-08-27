import '../App.css';
import React from 'react';
import Proj1 from '../assets/images/touchgrassnew.png';
import Proj2 from '../assets/images/rerunnew.png'
import Proj3 from '../assets/images/project3.jpg'

function Projects() {
  return (
//return projects page... maybe move to homepage as a preview? big obvious link?
<section class="py-5">
        <div class="container1">
          <article class="projcontainer">
            <a
              class="projectImgLink"
              href="https://ashley1thompson.github.io/touch-grass-app-national-park-finder/"
              target="_blank"
              rel="noreferrer"
            >
              <img 
                className='img1'
                src={Proj1} 
                width={250} 
                height={250} 
                alt="touchgrass app"
              />;
            </a>
            <div class="project">
              <h1 class="title">
                <a
                  href="https://github.com/Ashley1Thompson/touch-grass-app-national-park-finder"
                  target="_blank"
                  rel="noreferrer"
                >
                  Touch Grass App
                </a>
              </h1>

              <div class="description">
                A web-based app that allows users to search their target state for National Parks. The search returns a list with links to the parks' websites, so users can plan ahead.
              </div>
            </div>
          </article>
          <article class="projContainer">
            <a
              class="projectImgLink"
              href="https://rerun-game.herokuapp.com/game"
              target="_blank"
              rel="noreferrer"
            >
             <img 
                className='img1'
                src={Proj2} 
                width={250} 
                height={250} 
                alt="rerun game"
              />;
            </a>
            <div class="project">
              <h1 class="title">
                <a
                  href="https://github.com/Ashley1Thompson/rerun-game"
                  target="_blank"
                  rel="noreferrer"
                >
                  RERUN
                </a>
              </h1>

              <div class="description">
                A fast-paced, heart-racing choose-your-own-adventure game! Login capability, so that users can compete for the high score on the leaderboard.
              </div>
            </div>
          </article>
          <article class="projContainer">
            <a class="projectImgLink" href="#" target="_blank" rel="noreferrer">
            <img 
                className='img1'
                src={Proj3} 
                width={250} 
                height={250} 
                alt="laptop with coffee"
              />;
            </a>
            <div class="project">
              <h1 class="title">
                <a href="#" target="_blank" rel="noreferrer">
                  Project 3 Coming Soon!
                </a>
              </h1>

              <div class="description">
              Another epic project is in the works!
              </div>
            </div>
          </article>
        </div>
      </section>
  );
}


export default Projects;