const server = require("../api/server");
const request = require("supertest");
const db = require("../config/dbConfig");

describe("Test requests for minions", () => {
  beforeEach(async () => {
    await db("minions").truncate();
  });

  //   test('POST endpoint: "/minion" successfully added to db', async () => {
  //     const minions = await db("minions").insert({ name: "Mimi" });
  //     expect(minions[0].name).toBe("Mimi");
  //   });
  test('GET endpoint: "/minion" for status 200', () => {});
});
