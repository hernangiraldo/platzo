const expect = require('chai').expect
const platzo = require('..').default

describe('#platzo', function() {

	it('Si la palabra termina con el "ar", se le quitan esas dos letras', function() {
		const translation = platzo('Programar')
		expect(translation).to.equal('Program');
	})

	it('Si la palabra inicia con z, se le añade "pe" al final', function() {
		const translation1 = platzo('Zorro')
		const translation2 = platzo('Zarpar')
		expect(translation1).to.equal('Zorrope');
		expect(translation2).to.equal('Zarppe');
	})

	it('Si la palabra traducida tiene 10 o más letras, se debe partir en dos por la mitad y unir con un guión medio', function() {
		const translation = platzo('Automatizaaar')
		expect(translation).to.equal('Autom-atizaa');
	})

	it('Si la palabra original es un palíndromo, ninguna regla anterior cuenta y se devuelve la misma palabra pero intercalando entre minísculas y mayúsculas', function() {
		const translation = platzo('aaaallaaaa')
		expect(translation).to.equal('AaAaLlAaAa');
	})

})