// import getProject from "../functions/getProj.js";
import  { dropDown } from "../functions/drop.js"
import axios from "axios";
export default () => `
<div><input class="topnav" type="text" placeholder="Search.."></div>
<div>

        <img id="quantum" src="https://www.stellartradingsystems.com/wp-content/uploads/2015/04/quantum.png"/>
        <h1>Welcome to NewSpaceTech!</h1>
        <p id='un-con'>This webpage is under construction</p>
        <p>Explore with us and find the latest technology under research by NASA.</p>

</div>
<div id="projects"></div>

`;

let up1 = 0;
function getProject(i){
  axios.get(`https://api.nasa.gov/techport/api/projects?api_key=JwT3Ks39qQ7L7lhkpJYKZrDkG0gwV1HsOvUJ6a6I`)
    .then( response => {
    let new1 = response.data.projects[i].projectId;
    console.log("Testing string",new1)
    up1 = new1;

    axios.get(`https://api.nasa.gov/techport/api/projects/${up1}?api_key=JwT3Ks39qQ7L7lhkpJYKZrDkG0gwV1HsOvUJ6a6I`)
      .then( response => {
      const project = response.data;
      console.log("Testing string",project)


      let projectElement = document.getElementById("projects");
      let projectCard = document.createElement("div");
      projectCard.innerHTML = `
      <section class="mbody">

        <div class="drop">

          <button class="drop__button"><h2>${project.project.title}</h2></button>

          <div class="drop__content">

            <p>${project.project.description}</p>
            <br>
            <h2>Benefits</h2>
            <p class="benefits">${project.project.benefits}</p>
          </div>

          <h4 class="lastUpdated">Last updated: ${project.project.lastUpdated}</h4>


        </div>


      </section>



      `
      projectElement.appendChild(projectCard);

      dropDown();

    ;
      });
      });

  }


for(let i = 0; i < 3; i++){
        getProject(i)};

console.log("dropped");

