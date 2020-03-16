import React from "react";
import JuJu from "../../images/JuJu.jpg"
import "../../styles/style.css"
 
function Home() {
  return (
    <div>
      <h1>About Me</h1>
        <hr />
        <img id="juju" src={JuJu} alt="JuJu" />
        <p id= "abouttxt">Artist turned tech startup monkey trying to make things and make things work. No coding background but trying to make sense of it all.</p>
    </div>
  )
}
export default Home;