import { Sequelize } from 'sequelize'

const dbUrl = process.env.DATABASE_URL || ''

const sequelize = new Sequelize(dbUrl, {
  define: {
    underscored: true
  }
})

export { sequelize }