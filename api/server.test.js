const server = require("./server");
const request = require("supertest");
const db = require("../config/dbConfig");

describe("Testing end points for server check if server up", () => {
  test('GET endpoint: "/" for status 200', async () => {
    const res = await request(server).get("/");
    expect(res.status).toBe(200);
  });
});

describe('POST endpoint: "/minions"', () => {
  beforeEach(async () => {
    await db("minions").truncate();
    console.log("here");
  });
  test("able to make post request get status 200", async () => {
    const res = await request(server)
      .post("/minions")
      .send({ name: "name" });
    expect(res.status).toBe(200);
  });

  test("return type is application/json", async () => {
    const res = await request(server)
      .post("/minions")
      .send({ name: "name" });
    expect(res.type).toBe("application/json");
  });
});

describe('GET endpoint: "/minions"', () => {
  test("able to make get request get status 200", async () => {
    const res = await request(server).get("/minions");
    expect(res.status).toBe(200);
  });

  test("return type is application/json", async () => {
    const res = await request(server).get("/minions");
    expect(res.type).toBe("application/json");
  });
});

describe('DELETE endpoint: "/minions/:id"', () => {
  test("able to get 204 status on delete of value", async () => {
    const res = await request(server).del("/minions/1");
    expect(res.status).toBe(204);
  });

  test("give id that does not exist should return 404", async () => {
    const res = await request(server).del("/minions/2");
    expect(res.status).toBe(404);
  });
});
