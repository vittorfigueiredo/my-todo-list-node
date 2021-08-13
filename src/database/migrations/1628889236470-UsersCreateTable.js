const { MigrationInterface, QueryRunner, Table } = require("typeorm");

module.exports = class UsersCreateTable1628889236470 {

    async up(queryRunner) {
      await queryRunner.createTable(
        new Table({
          name: "users",
          columns: [
            {
              name: "id",
              type: "int",
              isPrimary: true,
            },
            {
              name: "name",
              type: "varchar"
            },
            {
              name: "password",
              type: "varchar"
            },
            {
              name: "created_at",
              type: "timestamp",
              default: "now()"
            },
            {
              name: "updated_at",
              type: "timestamp",
              default: "null"
            }
          ]
        })
      )
    }

    async down(queryRunner) {
      await queryRunner.dropTable("users");
    }
}
