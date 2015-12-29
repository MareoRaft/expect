class Expect{
	constructor(value){
		this.value = value
	}
	toBe(other_value){
		if( this.value === other_value ) return true
		return this.error(other_value, '===')
	}
	toBeLike(other_value){
		if( this.value == other_value ) return true
		return this.error(other_value, '==')
	}
	error(other_value, operand_string){
		let this_string = ( this.value === undefined )? 'undefined': this.value.toString()
		let other_string = ( other_value === undefined )? 'undefined': other_value.toString()
		let err_string = 'Expected '+this_string+' to be '+other_string+', but they are not '+operand_string+'.'
		alert(err_string)
		throw err_string
		return false
	}
}
function expect(value){
	return new Expect(value)
}
