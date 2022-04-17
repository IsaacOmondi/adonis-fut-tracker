import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class WeekendLeagues extends BaseSchema {
  protected tableName = 'weekend_leagues'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('start_date', { useTz: true })
      table.timestamp('end_date', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
