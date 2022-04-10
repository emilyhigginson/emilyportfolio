import React from 'react'

function ProjectCard() {
    return (
        <div id= 'projectcontainer'>
            <div id='projectcard'>
          
                <h1> A NEW YORK MINUTE </h1>
                <p> 1 line description </p>
                <a href='https://github.com/gianv322/-Users-gianv-Phase_2-Phase2project-workout-app-.git-' > Github  </a>
                <br></br>
                <iframe className="video" width="350" height="150" src="https://www.youtube.com/embed/9M9BNeZj-YA" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="Demo"></iframe>

            </div>
            <div id='projectcard'>
                <h1> Another Treasure </h1>
                <p> Website for users to see what items are available at local donation sites in their neighborhood.
                </p>
                <p> Built with React front end | Ruby on Rails back end  </p>

                <a href='https://github.com/gianv322/-Users-gianv-Phase_2-Phase2project-workout-app-.git-' > Github  </a>
                <br></br>
                <img id='projectpic' src= './treasure.png'></img>

            </div>
            <div id='projectcard'>
                <h1> Git Commit, Git Fit </h1>
                <p> An exercise library where users can view exercises, stack workouts, and record completed workouts.
                </p>
                <p> Built with React, CSS, HTML </p>

                <a href='https://github.com/gianv322/-Users-gianv-Phase_2-Phase2project-workout-app-.git-' > Github  </a>
                <a> YouTube</a>

                <br></br>
                <img id='projectpic' src= './gitcommit.png'></img>
           

            </div>
            <div id='projectcard'>
                <h1> Viajeras Solas </h1>
                <p> A single page application for solo female travels to document their adventures and leave advice for other travelers.
                </p>
                <p> Built with Javascript, CSS, HTML </p>
                <a href='https://github.com/emilyhigginson/Viajeras-Solas'> Github  </a>
                <a> YouTube</a>
                <br></br>
                <img id='projectpic' src='./viajeras.png'></img>
            </div>



        </div>
    )
}

export default ProjectCard