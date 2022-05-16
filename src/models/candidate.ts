
import { DataTypes, Model, Optional, Sequelize } from 'sequelize'

export interface Candidate {
    id: number
    name: string
    bio?: string
    email: string
    phone?: string
    openToWork: boolean
}

export interface CandidateCreationAttributes extends Optional<Candidate, 'id' | 'bio' | 'phone'> { }

export interface CandidateInstance extends Model<Candidate, CandidateCreationAttributes>, Candidate { }

export default (sequelize: Sequelize) => {
    const Candidate = sequelize.define<CandidateInstance, Candidate>(
        'candidates',
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            bio: DataTypes.TEXT,
            phone: DataTypes.STRING,
            openToWork: {
                type: DataTypes.BOOLEAN,
                defaultValue: true
            }
        }
    )

    return Candidate
}