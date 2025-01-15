/*
create a menu app that has at least 1 array 2 classes
menu needs options to create, view and delete elements.
*/

/*
------------
| task app |
------------
*/

// creating a task class

class Task {
  constructor(name) {
    this.name = name;
  }
}

// creating a menu class
class Menu {
  constructor() {
    this.tasks = [];
    this.status = null;
  }

  // handle selection of main menu items
  start() {
    let selection = this.showMainMenuOptions();
    while (selection != 0) {
      switch (selection) {
        case "1":
          this.addTask();
          break;
        case "2":
          this.displayTask();
          break;
        case "3":
          this.deleteTask();
          break;
        case "4":
          this.completeTask();
          break;
        default:
          selection = 0;
      }

      selection = this.showMainMenuOptions();
    }

    alert("Goodbye!");
  }

  // prompt user for selection of menu items
  showMainMenuOptions() {
    return prompt(`
            0) exit
            1) add new task
            2) display all tasks
            3) delete task
            4) mark task as complete
            `);
  }

  // showws user list of tasks
  displayTask() {
    let taskString = "";
    for (let i = 0; i < this.tasks.length; i++) {
      taskString += i + ") " + this.tasks[i].name + "\n";
    }

    alert(taskString);
  }

  // prompt user to add tasks
  addTask() {
    let name = prompt(`Please enter a new task:`);
    this.tasks.push(new Task(name));
  }

  // method to handle messages for deleting and completing tasks
  handleTask(taskMessage, successMessage) {
    let index = prompt(
      `Enter the index of the task that you wish to ${taskMessage}:`
    );

    // splice returns array need [0] to accesss the spliced array
    if (index > -1 && index < this.tasks.length) {
      let task = this.tasks.splice(index, 1)[0];

      // alert with success message
      alert(`${task.name} ${successMessage}`);
    }
  }

  // allow user to delete tasks using task array index and tell user element has been deleted.
  deleteTask() {
    this.handleTask("be deleted", "has been deleted!");
  }

  // allow user to mark tasks as complete which removes and returns that the task has been completed
  completeTask() {
    this.handleTask(
      "mark as complete",
      "has been marked complete. Keep up the great work!"
    );
  }
}

let menu = new Menu();
menu.start();
