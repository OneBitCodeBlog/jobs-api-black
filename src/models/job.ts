import { CandidateInstance } from './candidate'
import {
    BelongsToManyAddAssociationMixin,
    BelongsToManyAddAssociationsMixin,
    BelongsToManyCountAssociationsMixin,
    BelongsToManyGetAssociationsMixin,
    BelongsToManyHasAssociationMixin,
    BelongsToManyRemoveAssociationMixin,
    DataTypes,
    Model,
    Optional,
    Sequelize
} from 'sequelize'

export interface Job {
    id: number
    title: string
    description: string
    limitDate: Date
    companyId: number
}

export interface JobCreationAttributes extends Optional<Job, 'id'> { }

export interface JobInstance extends Model<Job, JobCreationAttributes>, Job {
    addCandidate: BelongsToManyAddAssociationMixin<CandidateInstance, number>
    addCandidates: BelongsToManyAddAssociationsMixin<CandidateInstance, number>
    removeCandidate: BelongsToManyRemoveAssociationMixin<CandidateInstance, number>
    countCandidates: BelongsToManyCountAssociationsMixin
    getCandidates: BelongsToManyGetAssociationsMixin<CandidateInstance>
    hasCandidate: BelongsToManyHasAssociationMixin<CandidateInstance, number>
}

export default (sequelize: Sequelize) => {
    const Job = sequelize.define<JobInstance, Job>(
        'jobs',
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false
            },
            description: {
                type: DataTypes.TEXT,
                allowNull: false
            },
            limitDate: {
                type: DataTypes.DATE,
                allowNull: false
            },
            companyId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'companies',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'RESTRICT'
            }
        }
    )

    return Job
}