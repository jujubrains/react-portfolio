import React from "react";
import "../../styles/style.css"
 
function Contact() {
  return (
    <div>
       <h1>Contact</h1>

        <form>

            <label class="labels" for="Name">Name</label>
            <input class="formentry" type="text" name="Name" placeholder="John Smith" />

            <label class="labels" for="Email">Email</label>
            <input class="formentry" type="text" name="Email" placeholder="Example@gmail.com" />
            
            <label class="labels" for="Message">Message</label>
            <input id="Message" class="formentry" type="text" name="Message" />
        
        </form>
        <button class= "button" type="submit">Submit</button>
    </div>
  )
}

export default Contact;