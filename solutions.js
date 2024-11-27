/*
*******************************************************************
********************* UPDATE TODO ENDPOINT *********************************
*******************************************************************

app.put("/todos", (req, res) => {
  try {
    console.log(req.body);
    const { id, title, description, status, dueDate } = req.body;

    if (!id || (!title && !description && !status && !dueDate)) {
      console.log("inside");
      return res.status(400).json({
        status: "error",
        message: "Invalid Request Body",
      });
    }

    const todo = todos.find((todo) => todo.id === id);

    if (!todo) {
      return res.status(404).json({
        status: "error",
        message: "Todo with the given ID not found",
      });
    }

    if (title) todo.title = title;
    if (description) todo.description = description;
    if (status) todo.status = status;
    if (dueDate) todo.dueDate = dueDate;

    res.status(201).json(todo);
  } catch (error) {
    console.error("Error:: Method: PUT; resource: /todos; error: ", error);
    return res.status(500).json({
      status: "error",
      message: "Sorry, something went wrong",
    });
  }
});

*/

/*
*******************************************************************
********************* UPDATE TODO TEST ****************************
*******************************************************************
// update todo
describe("PUT /todos", () => {
  //no input
  it("should return 400 if no input", async () => {
    const response = await request(app).put("/todos").send({});

    expect(response.status).toBe(400);
    expect(response.body).toEqual({
      status: "error",
      message: "Invalid Request Body",
    });
  });

  // only id input
  it("should return 400 if no update fields", async () => {
    const response = await request(app).put("/todos").send({ id: 2 });

    expect(response.status).toBe(400);
    expect(response.body).toEqual({
      status: "error",
      message: "Invalid Request Body",
    });
  });

  // only update fields input
  it("should return 400 if no ID", async () => {
    const response = await request(app).put("/todos").send({ status: "Done" });

    expect(response.status).toBe(400);
    expect(response.body).toEqual({
      status: "error",
      message: "Invalid Request Body",
    });
  });

  // Non-existent ID
  it("should return 404 if the todo with the given ID does not exist", async () => {
    const response = await request(app)
      .put("/todos")
      .send({ id: 999, status: "Done" }); // Assume ID 999 doesn't exist

    expect(response.status).toBe(404);
    expect(response.body).toEqual({
      status: "error",
      message: "Todo with the given ID not found",
    });
  });

  // correct request
  it("should update the todo and return the updated todo", async () => {
    const response = await request(app)
      .put("/todos")
      .send({ id: 2, status: "Done" });

    expect(response.status).toBe(201);
    expect(response.body).toEqual({
      id: 2,
      title: "Complete project report",
      description: "Finalize and submit the project report for the team",
      status: "Done",
      dueDate: "2024-12-01",
    });
  });
});

*/
