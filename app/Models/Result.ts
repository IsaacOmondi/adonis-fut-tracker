import { DateTime } from 'luxon'
import { BaseModel, belongsTo, BelongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import User from 'App/Models/User'
import WeekendLeague from 'App/Models/WeekendLeague'

export default class Result extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public weekend_league_id: number

  @column()
  public goals_for: number

  @column()
  public goals_against: number

  @column()
  public user_id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  @belongsTo(() => WeekendLeague)
  public weekendLeague: BelongsTo<typeof WeekendLeague>
}
