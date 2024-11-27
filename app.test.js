const request = require("supertest");
const app = require("./index");

describe("GET /todos", () => {
  // fetch todo
  it("should get all to-dos", async () => {
    const response = await request(app).get("/todos");
    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
  });
});

describe("POST /todos", () => {
  //create todo
  it("should add a new to-do", async () => {
    const response = await request(app)
      .post("/todos")
      .send({ title: "Call the Electrician", description: "Fix the lights" });

    expect(response.status).toBe(201);
    expect(response.body).toEqual({
      id: 6,
      title: "Call the Electrician",
      description: "Fix the lights",
      status: "Pending",
      dueDate: null,
    });
  });

  // incorrect todo input
  it("should return 400 if title is missing", async () => {
    const response = await request(app)
      .post("/todos")
      .send({ description: "Fix the lights" });

    expect(response.status).toBe(400);
    expect(response.body.error).toBe("Title and description are required");
  });
  it("should return 400 if description is missing", async () => {
    const response = await request(app)
      .post("/todos")
      .send({ title: "Call the Electrician" });

    expect(response.status).toBe(400);
    expect(response.body.error).toBe("Title and description are required");
  });
  it("should return 400 if empty body", async () => {
    const response = await request(app).post("/todos").send({});

    expect(response.status).toBe(400);
    expect(response.body.error).toBe("Title and description are required");
  });
});

