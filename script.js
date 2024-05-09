import { projects } from "./data.js";
const projectContainer = document.getElementsByClassName("projects-center")[0];

projects.map((item) => {
  const div = document.createElement("div");
  const { url, title, image } = item;
  div.innerHTML = `<a  class='project' href=${url} target='_blank' rel='noreferrer'>
       <img src=${image} alt=${title} class='img' />
       <h5>${title}</h5>
     </a>`;
  return projectContainer.append(div);
});
