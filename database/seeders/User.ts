import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class UserSeeder extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    await User.createMany([
      {
        email: 'iomondi90@gmail.com',
        password: 'password',
        team_name: 'RaverzClaverz',
        username: 'ZakRabbin',
        role: 'admin',
      },
      {
        email: 'zakrabbin@gmail.com',
        password: 'password',
        team_name: 'Montpellier',
        username: 'ZakyKun',
        role: 'default',
      },
    ])
  }
}
