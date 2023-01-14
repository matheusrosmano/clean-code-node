import test from 'node:test'
import { isAssertClause } from 'typescript'
import * as assert from "assert";
import {validate} from "./cpf";

test("Valid cpf with mask", (t) => {
    assert.strictEqual(validate("912.785.830-84"), true)
})

test("Valid cpf without mask", (t) => {
    assert.strictEqual(validate("91278583084"), true)
})