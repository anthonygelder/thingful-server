require('dotenv').config();

module.exports = {
  "migrationDirectory": "migrations",
  "driver": "pg",
  "connectionString": "postgresql://postgres:postgres@localhost/thingful"
}
