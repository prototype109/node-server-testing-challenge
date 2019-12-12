// Update with your config settings.

module.exports = {
  development: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: "./data/minions.db3"
    },
    migrations: {
      directory: "./data/migration"
    }
  }
};
