import { Factory } from 'fishery'
import { faker } from '@faker-js/faker'
import { CandidateCreationAttributes } from '../candidate'

export const candidateFactory = Factory.define<CandidateCreationAttributes>(() => ({
    name: faker.name.findName(),
    bio: faker.lorem.sentence(),
    email: faker.internet.email(),
    phone: faker.phone.phoneNumber(),
    openToWork: faker.datatype.boolean()
}))