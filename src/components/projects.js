import '../App.css';
import React from 'react';
import Proj1 from '../assets/images/touchgrassnew.png';
import Proj2 from '../assets/images/rerunnew.png'
import Proj3 from '../assets/images/smallchange.png'

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
            <a class="projectImgLink" href="https://smallchange-app.herokuapp.com/" target="_blank" rel="noreferrer">
            <img 
                className='img1'
                src={Proj3} 
                width={250} 
                height={250} 
                alt="Small Change - your reminder to be kinder"
              />;
            </a>
            <div class="project">
              <h1 class="title">
                <a href="https://github.com/Ashley1Thompson/small-change" 
                   target="_blank" 
                   rel="noreferrer">
                  Small Change
                </a>
              </h1>

              <div class="description">
              An app that encourages users to commit to one small act of kindness each and every day, and inspire others to as well.
              </div>
            </div>
          </article>
        </div>
      </section>
  );
}


export default Projects;