// factory or class for todo creation
  // properties: title, description, dueDate, priority; optional: notes, checklist
  // choose project
  // use date-fns for dates manipulating

  // project creation for store related todos and a global one
const projects = { 
  allProjects: [],
};

class Todo {
  constructor(title, description = '', dueDate = '', priority = 1, checklist = []) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.checklist = checklist;

    projects.allProjects.push(this);
  }
}



// use localStorage for storage data
