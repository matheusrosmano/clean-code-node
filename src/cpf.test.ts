import test from 'node:test'
import * as assert from "assert";
import {CPF} from "./cpf";

test("Valid cpf with mask", (t) => {
    const cpf = new CPF("912.785.830-84")
    assert.strictEqual(cpf.isValid(), true)
})

test("Valid cpf without mask", (t) => {
    const cpf = new CPF("91278583084")
    assert.strictEqual(cpf.isValid(), true)
})

test("Invalid cpf with mask", (t) => {
    try {
        const cpf = new CPF("1221141112225554")
        cpf.isValid()
    } catch(e: any) {
        assert.equal(e.message, "Invalid cpf")
    }
})

test("Invalid cpf without mask", (t) => {
    try {
        const cpf = new CPF("1221141112225554")
        cpf.isValid()
    } catch(e: any) {
        assert.equal(e.message, "Invalid cpf")
    }
})

test("Invalid cpf with less caracter", (t) => {
    try {
        new CPF("1112225554")
    } catch(e: any) {
        assert.equal(e.message, "CPF length: 11 or 14")
    }
})

test("Invalid cpf with more caracter", (t) => {
    try {
        new CPF("1221141112225554")
    } catch(e: any) {
        assert.equal(e.message, "CPF length: 11 or 14")
    }
})