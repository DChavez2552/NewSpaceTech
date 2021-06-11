import { Header, Nav, Main, Footer } from "./components";
import * as state from './store';
import axios from 'axios';
import '/.env';
import Navigo from "navigo";
import { capitalize, each } from "lodash";


const router = new Navigo(window.location.origin);

// axios.get(`https://api.nasa.gov/techport/api/projects?api_key=JwT3Ks39qQ7L7lhkpJYKZrDkG0gwV1HsOvUJ6a6I`)
//     .then( response => {
//     console.log("Testing string",response.data)
//     });

// axios.get(`https://api.nasa.gov/techport/api/specification?api_key=JwT3Ks39qQ7L7lhkpJYKZrDkG0gwV1HsOvUJ6a6I`)
//     .then( response => {
//     console.log("Testing string",response.data)
//     });
let up1 = 0;
function getProject(){
  axios.get(`https://api.nasa.gov/techport/api/projects?api_key=JwT3Ks39qQ7L7lhkpJYKZrDkG0gwV1HsOvUJ6a6I`)
    .then( response => {
    let new1 = response.data.projects[0].projectId;
    console.log("Testing string",new1)
    up1 = new1;

    axios.get(`https://api.nasa.gov/techport/api/projects/${up1}?api_key=JwT3Ks39qQ7L7lhkpJYKZrDkG0gwV1HsOvUJ6a6I`)
      .then( response => {
      const project = response.data;
      console.log("Testing string",project)

      let projectElement = document.getElementById("projects");
      let projectCard = document.createElement("div");
      projectCard.innerHTML = `
        <h3>${project.project.title}</h3>
      `
      projectElement.appendChild(projectCard);

    });
    });

  }
  getProject()







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
  // addEventListeners();
  getProject();
}

render(state.Home);

