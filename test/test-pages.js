var expect  = require('chai').expect;
var request = require('request');
const funciones = require('../funciones')


describe("validator isNumValid()", () => {

	it("Deberia retornar verdadero si el numero es mayor a 0", ()=> {
		expect(funciones.EsPositivo(43)).to.be.true
	})

	it("Deberia retornar falso si el numero es menor a 0", () => {
		expect(funciones.EsPositivo(-45)).to.be.false
	})

	it("Deberia retornar falso si el numero es 0", () => {
		expect(funciones.EsPositivo(0)).to.be.false
	})


})