import test from 'node:test'
import * as assert from "assert";
import {validateCpf} from "./cpf";

test("Valid cpf with mask", (t) => {
    assert.strictEqual(validateCpf("912.785.830-84"), true)
})

test("Valid cpf without mask", (t) => {
    assert.strictEqual(validateCpf("91278583084"), true)
})

test("Invalid cpf with mask", (t) => {
    try {
        validateCpf("1221141112225554")
    } catch(e: any) {
        assert.equal(e.message, "Invalid cpf")
    }
})

test("Invalid cpf without mask", (t) => {
    try {
        validateCpf("1221141112225554")
    } catch(e: any) {
        assert.equal(e.message, "Invalid cpf")
    }
})

test("Invalid cpf with less caracter", (t) => {
    try {
        validateCpf("1112225554")
    } catch(e: any) {
        assert.equal(e.message, "CPF length: 11 or 14")
    }
})

test("Invalid cpf with more caracter", (t) => {
    try {
        validateCpf("1221141112225554")
    } catch(e: any) {
        assert.equal(e.message, "CPF length: 11 or 14")
    }
})