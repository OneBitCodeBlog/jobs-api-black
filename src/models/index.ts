import { connect } from '../database'
import candidate from './candidate'
import company from './company'
import job from './job'

const sequelize = connect()

const Candidate = candidate(sequelize)
const Company = company(sequelize)
const Job = job(sequelize)

Company.hasMany(Job)
Job.belongsTo(Company)
Job.belongsToMany(Candidate, { through: 'job_candidates' })
Candidate.belongsToMany(Job, { through: 'job_candidates' })

export {
    sequelize,
    Candidate,
    Company,
    Job
}