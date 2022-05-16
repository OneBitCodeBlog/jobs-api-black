import { Options, Sequelize } from 'sequelize'

export function connect() {
  const dbUrl = process.env.DATABASE_URL

  if (dbUrl === undefined) throw new Error('DATABASE_URL environment variable is not defined')

  const defaultOptions: Options = {
    define: { underscored: true },
    logging: process.env.NODE_ENV !== 'test' ? console.log : false,
  }

  const sequelize = new Sequelize(dbUrl, defaultOptions)

  return sequelize
}