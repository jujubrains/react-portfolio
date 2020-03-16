import React from "react";
import password from "../../images/password.png"
import project1 from "../../images/project1.png"
import recycle from "../../images/recycle.png"
import scheduler from "../../images/scheduler.png"
import palace from "../../images/castle.jpeg"

import "../../styles/style.css"
 
function Portfolio() {
  return (
    <div>
     <h1>Portfolio</h1>
        <hr/>
        <div>
            <div id="wheel" class="imgcontainer"><a href="https://jujubrains.github.io/passwordGen/"><img class= "portfolio" id="password" src={password} alt="password generator" /></a>
                <div class="banner" id="bannerwheel">Password Generator</div>
            </div>
            <div class="imgcontainer"><a href="https://jujubrains.github.io/planner/"><img class= "portfolio" id="planner" src={scheduler} alt="schedule app" /></a>
                <div class="banner" id="bannerhay">Day Planner</div>
            </div>
            <div class="imgcontainer"><a href="https://s212288s.github.io/cream-of-the-crop/"><img class= "portfolio" id="cream-of-crop" src={project1} alt="locator app" /></a>
                <div class="banner" id="bannerstick">Cream of the Crop</div>
            </div>  
            <div class="imgcontainer"><a href="https://intense-thicket-33780.herokuapp.com/"><img class= "portfolio" id="Recycle-Nation" src={recycle} alt="recycle app" /></a>
                <div class="banner" id="banner">Recycle Nation</div>
            </div>  
            <div class="imgcontainer"><img class= "portfolio" id="palace" src={palace} alt="palace" />
                <div class="banner" id="bannerpalace">Palace</div>
            </div>
        </div>
      <p id="abouttxt"> </p>
    </div>
  )
}
export default Portfolio;