import { DataTypes, Model, Optional, Sequelize } from 'sequelize'

export interface Company {
    id: number
    name: string
    bio?: string
    website?: string
    email?: string
}

export interface CompanyCreationAttributes extends Optional<Company, 'id' | 'bio' | 'website' | 'email'> { }

export interface ComapnyInstance extends Model<Company, CompanyCreationAttributes>, Company { }

export default (sequelize: Sequelize) => {
    const Company = sequelize.define<ComapnyInstance, Company>(
        'companies',
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
            bio: DataTypes.TEXT,
            website: DataTypes.STRING,
            email: DataTypes.STRING
        }
    )

    return Company
}