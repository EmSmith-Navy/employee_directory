// TODO: this file :)

const express = require("express");
const employees = require("./employees"); // Importing the employees array

const app = express();
const PORT = 3000;

// Middleware to handle JSON responses
app.use(express.json());

// GET / - Sends a welcome message
app.get("/", (req, res) => {
  res.send("Hello employees!");
});

// GET /employees - Sends the array of employees
app.get("/employees", (req, res) => {
  res.json(employees);
});

// GET /employees/:id - Sends the employee with the given id
app.get("/employees/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const employee = employees.find((emp) => emp.id === id);

  if (employee) {
    res.json(employee);
  } else {
    res.status(404).send({ message: "Employee not found." });
  }
});

// GET /employees/random - Sends a random employee from the array
app.get("/employees/random", (req, res) => {
  const randomIndex = Math.floor(Math.random() * employees.length);
  const randomEmployee = employees[randomIndex];
  res.json(randomEmployee);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
