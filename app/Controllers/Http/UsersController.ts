import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
  public async index (ctx: HttpContextContract) {
    const users = await User.query().orderBy('id', 'asc')
    return ctx.response.ok({
      data: users,
    })
  }
}
