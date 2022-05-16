import faker from '@faker-js/faker'
import { Factory } from 'fishery'
import { CompanyCreationAttributes } from '../company'

export const companyFactory = Factory.define<CompanyCreationAttributes>(() => ({
    name: faker.company.companyName(),
    bio: faker.company.bs(),
    email: faker.internet.email(),
    website: faker.internet.domainName()
}))