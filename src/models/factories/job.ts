import faker from '@faker-js/faker'
import { Factory } from 'fishery'
import { JobCreationAttributes } from '../job'

export const jobFactory = Factory.define<JobCreationAttributes>(() => ({
    title: faker.name.jobTitle(),
    description: faker.lorem.sentence(),
    limitDate: faker.date.soon(60),
    companyId: 1
}))