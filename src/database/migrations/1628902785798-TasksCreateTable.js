import {MigrationInterface, QueryRunner, Table} from "typeorm";

module.exports = class TaskCreateTable1628893927375 {

    async up(queryRunner) {
      await queryRunner.createTable(
        new Table({
          name: "tasks",
          columns: [
            {
              name: "id",
              type: "int",
              isPrimary: true
            },
            {
              name: "name",
              type: "varchar",
              isNullable: false
            },
            {
              name: "description",
              type: "varchar",
              isNullable: false
            },
            {
              name: "created_at",
              type: "datetime",
              default: "now()",
              isNullable: false
            },
            {
              name: "updated_at",
              type: "datetime",
              default: "now()",
              isNullable: true
            }
          ]
        })
      )
    }

    async down(queryRunner) {
    }
}
