import test from 'node:test'
import { isAssertClause } from 'typescript'
import * as assert from "assert";
import {validate} from "./cpf-before";

test("Teste de cpf válido", (t) => {
    assert.strictEqual(validate("912.785.830-84"), true)
})