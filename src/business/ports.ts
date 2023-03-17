import { AuthenticationData } from "../services/Authenticator";

export interface IHashGenerator {
  hash(s: string): Promise<string>;
  compareHash(s: string, hash: string): Promise<boolean>;
}

export interface IIdGenerator {
  generate(): string;
}

export interface ITokenGenerator {
  generate(input: AuthenticationData): string;
  verify(token: string): AuthenticationData;
}
