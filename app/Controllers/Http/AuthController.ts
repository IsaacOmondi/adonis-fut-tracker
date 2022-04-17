import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthController {
  public async login (ctx: HttpContextContract) {
    const { password, email } = ctx.request.body()
    try {
      const user = await ctx.auth.attempt(email, password)
      return ctx.response.ok({
        data: user,
      })
    } catch (error) {
      return ctx.response.unauthorized({
        errors: error,
      })
    }
  }
}
