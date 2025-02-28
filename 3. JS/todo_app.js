let todo = [];

let req = prompt("Enter your request");

while (true) {
    if (req === "quit") {
        console.log("You quit.");
        break;
    }

    if (req === "list") {
        console.log("-----------------");
        for (let task of todo) {
            console.log(task);
        }
        console.log("----------------");
    }

    else if (req === "add") {
        let task = prompt("Enter the task you want to add");
        todo.push(task);
        console.log("Task added");
    }

    else if (req === "delete") {
        let idx = prompt("Please enter the task index") - 1; // Convert the input to a number and adjust for zero-based index
        if (idx >= 0 && idx < todo.length) {
            todo.splice(idx, 1);
            console.log("Task deleted");
        } else {
            console.log("Invalid index");
        }
    }

    else {
        console.log("Wrong request");
    }

    req = prompt("Enter your request");
}
