import axios from "axios";

function getProject(i){
  axios.get(`https://api.nasa.gov/techport/api/projects?api_key=JwT3Ks39qQ7L7lhkpJYKZrDkG0gwV1HsOvUJ6a6I`)
    .then( response => {
    let new1 = response.data.projects[i].projectId;
    console.log("Testing string",new1)
    let up1 = new1;

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
          </div>

          <h4>Last updated: ${project.project.lastUpdated}</h4>

          <div class="drop__content">
            <p>${project.project.description}</p>
          </div>

      </section>
      <scripts>${dropdown}</scripts>
      `
      projectElement.appendChild(projectCard);

      let body = projectCard.getElementsByClassName("mbody");
      window.getSelection().collapse(body,0);


      });
      });

  };

export default getProject();
