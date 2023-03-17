import { IIdGenerator } from '../../src/business/ports'

export class IdGeneratorMock implements IIdGenerator {
    generate = jest.fn(() => 'id')
}