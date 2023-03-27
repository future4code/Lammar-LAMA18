import { ITokenGenerator } from "../../src/business/ports";
import { UserRole } from "../../src/model/User";

export class TokenGeneratorMock implements ITokenGenerator {
    public generate = jest.fn(()=>{
        return "token"
    })
    
    public verify = jest.fn(() => {
        return { id: "id", role: UserRole.NORMAL }
    })
    
}