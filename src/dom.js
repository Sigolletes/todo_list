// UI utilities:
  // view all projects
  // view all todos of a project (just title and dueDate), different colors for priorities
  // expand a single todo / edit details
  // delete a todo

  const display = function() {

    const main = document.querySelector("#main");

    const renderProjects = function(projectsList) {
      console.log('enter renderProjects');
      for (project of projectsList) {
        let article = document.createElement("article");
        main.appendChild(article);
        article.classList.add("project");

        let projectName = document.createElement("h2");
        article.appendChild(projectName);
        projectName.innerText = project;
      }
    }

    return {
      renderProjects
    }
  }

  export default display;
