import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Results extends BaseSchema {
  protected tableName = 'results'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('weekend_league_id').unsigned().references('id').inTable('weekend_leagues')
      table.integer('user_id').unsigned().references('id').inTable('users')

      table.integer('goals_for').notNullable()
      table.integer('goals_against').notNullable()
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
