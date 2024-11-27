const express = require("express");
const app = express();
app.use(express.json());

let todos = [
  {
    id: 1,
    title: "Buy groceries",
    description: "Milk, Bread, Eggs, Cheese",
    status: "Pending",
    dueDate: "2024-11-30",
  },
  {
    id: 2,
    title: "Complete project report",
    description: "Finalize and submit the project report for the team",
    status: "In Progress",
    dueDate: "2024-12-01",
  },
  {
    id: 3,
    title: "Call the plumber",
    description: "Fix the kitchen sink leak",
    status: "Pending",
    dueDate: "2024-11-28",
  },
  {
    id: 4,
    title: "Workout",
    description: "30 minutes of cardio and strength training",
    status: "Completed",
    dueDate: "2024-11-27",
  },
  {
    id: 5,
    title: "Plan weekend trip",
    description: "Research destinations and book accommodation",
    status: "Pending",
    dueDate: "2024-12-05",
  },
];

app.post("/todos", (req, res) => {
  try {
    const { title, description, dueDate } = req.body;

    if (!title || !description) {
      return res
        .status(400)
        .json({ error: "Title and description are required" });
    }

    const newTodo = {
      id: todos.length + 1,
      title,
      description,
      status: "Pending",
      dueDate: dueDate || null,
    };

    todos.push(newTodo);
    res.status(201).json(newTodo);
  } catch (error) {
    console.error("Error:: Method: POST; resource: /todos; error: ", error);
    return res.status(500).json({
      status: "error",
      message: "Sorry, something went wrong",
    });
  }
});

app.get("/todos", (req, res) => {
  try {
    res.status(200).json(todos);
  } catch (error) {
    console.error("Error:: Method: GET; resource: /todos; error: ", error);
    return res.status(500).json({
      status: "error",
      message: "Sorry, something went wrong",
    });
  }
});


const PORT = 3030;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
