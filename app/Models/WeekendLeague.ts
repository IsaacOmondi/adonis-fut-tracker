import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class WeekendLeague extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime()
  public start_date: DateTime

  @column.dateTime()
  public end_date: DateTime
}
