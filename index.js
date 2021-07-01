import { Header, Nav, Main, Footer } from "./components";
import * as state from './store';
import axios from 'axios';
import "dotenv";
import Navigo from "navigo";
import { capitalize, each } from "lodash";

const router = new Navigo(window.location.origin);

// let up1 = 0;
// function getProject(i){
//   axios.get(`https://api.nasa.gov/techport/api/projects?api_key=JwT3Ks39qQ7L7lhkpJYKZrDkG0gwV1HsOvUJ6a6I`)
//     .then( response => {
//     let new1 = response.data.projects[i].projectId;
//     console.log("Testing string",new1)
//     up1 = new1;

//     axios.get(`https://api.nasa.gov/techport/api/projects/${up1}?api_key=JwT3Ks39qQ7L7lhkpJYKZrDkG0gwV1HsOvUJ6a6I`)
//       .then( response => {
//       const project = response.data;
//       console.log("Testing string",project)

//       let projectElement = document.getElementById("projects");
//       let projectCard = document.createElement("div");
//       projectCard.innerHTML = `
//       <section class="mbody">

//           <button id="btn"><h2>${project.project.title}</h2></button>

//           <h4>Last updated: ${project.project.lastUpdated}</h4>


//         <div class="description"><p>${project.project.description}</p></div>
//       </section>  `
//       projectElement.appendChild(projectCard);

//       });
//       });

//   }






router
  .on({
    "/": () => render(state.Home),
    ":page": params => render(state[capitalize(params.page)]),
  })
  .resolve();

function render(st) {
  document.querySelector("#root").innerHTML = `
    ${Header(st)}
    ${Nav(state.Links)}
    ${Main(st)}
    ${Footer()}
  `;

  router.updatePageLinks()
  // getProject();
  // $(window).on('load', function() {
  // // addEventListeners();

  // });
}

// function addEventListeners() {
//   const button = document.getElementById("btn");
//   console.log(button);
//   button.addEventListener("click", () => {
//     console.log("you clicked me");
//     document.getElementsByClassName("description").style.display = "flex-box";
//   });
// }



