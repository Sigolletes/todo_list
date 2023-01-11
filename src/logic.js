// factory or class for todo creation
  // properties: title, description, dueDate, priority; optional: notes, checklist
  // choose project
  // use date-fns for dates manipulating

  // project creation for store related todos and a global one

import display from './dom.js';

const projects = function() {

  const projectsList = { 
    allTodos: [],
  };

  const createProject = function(name) {
    if (!Object.hasOwn(projectsList, name)) {
      projectsList[name] = [];
    } else {
      console.log('That project already exists');
    }
  }

  const deleteProject = function(name) {
    if (name === 'allTodos') {
      console.log('You cannot delete the global todo list');
    } else if (Object.hasOwn(projectsList, name)) {
      delete projectsList[name];
    } else {
      console.log("That project doesn't exist");
    }
  }

  const seeProjects = function() {
    console.log(projectsList);
  }

  const seeProject = function(name) {
    console.log(projectsList[name]);
  }

  return {
    createProject,
    deleteProject,
    seeProjects,
    seeProject
  }
}

const todos = function() {
  const createTodo = function(title, description = '', dueDate = '', priority = 3, checklist = {}, project = '') {
    projects.projectsList.allTodos.forEach(todo => {
      if (!Object.values(todo).includes(title)) {
        let newTodo = [title, description, dueDate, priority, checklist];
        projects.projectsList.allTodos.push(newTodo);
        if (Object.hasOwn(projects.projectsList, project)) {
          projects.projectsList[project].push(newTodo);
        }
      } else {
        console.log('That todo title already exists');
      }
    });
  }

  const deleteTodo = function(titleForDelete) {
    let index = projects.projectsList.allTodos.findIndex((todo) => todo.title === titleForDelete);

    if (index > -1) {
      projects.projectsList.allTodos.splice(index, 1);
    } else {
      console.log("That todo doesn't exist");
    }
  }

  return {
    createTodo,
    deleteTodo
  }
}



// use localStorage for storage data


export { projects, todos };
