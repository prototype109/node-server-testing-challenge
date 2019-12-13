const db = require("../config/dbConfig");

describe("Test requests for minions", () => {
  beforeEach(async () => {
    await db("minions").truncate();
  });

  test("should be able to get resources from db", async () => {
    const resource = await db("minions");
    expect(Array.isArray(resource)).toBe(true);
  });

  test("should be able to insert into db", async () => {
    await db("minions").insert({ name: "minion-1" });
    await db("minions").insert({ name: "minion-2" });

    const minions = await db("minions");

    expect(minions[0].name).toBe("minion-1");
    expect(minions[1].name).toBe("minion-2");
  });

  test("should have (length - 1) on delete", async () => {
    await db("minions").insert({ name: "Bee" });
    await db("minions")
      .where("id", 1)
      .del();
    const minionsAfterDel = await db("minions");

    expect(minionsAfterDel.length).toBe(0);
  });
});
