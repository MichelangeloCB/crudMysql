import { Document } from "./Document";
import { Cpf } from "./Cpf";
import { Cnpj } from "./Cnpj";

export class DocumentFactory {
    static create(value: string): Document {
        if (Cpf.isValid(value)) {
            return new Cpf(value)

        }
        if (Cnpj.isValid(value)) {
            return new Cnpj(value)
        }

        throw new Error(`Value not is document valid: ${value}`)
    }
}