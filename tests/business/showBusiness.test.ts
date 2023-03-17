describe('Testing show registration in showBusiness', () => {
    it('Sucess case: sucessful registration and acess token verification', () => {
        expect.assertions(2)
        const input = {
            bandId: 'id',
            weekDay: 'sabado',
            startTime: 8,
            endTime: 10
        }
        const showDatabase = new ShowDatabaseMock()
        const idGenerator = new IdGeneratorMock()
        const authenticator = new TokenGeneratorMock()
        const showBusiness = new ShowBusiness(
            showDatabase,
            idGenerator,
            authenticator
        )
        const result = await showBusiness.createShow(input, 'token')
        expect(result).toBe('id')
        expect(authenticator.verify).toHaveBeenCalledWith('token')
    })
})
