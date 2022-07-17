const sinon = require( 'sinon' );
const helpers = require( './helpers' );
const chai = require( 'chai' );
const spies = require( 'chai-spies' );

chai.use( spies );

describe( "main.js", () => {
  it("contains a hidden modal", () => {
    let modal = document.querySelector('.hidden')
    expect(modal).not.to.equal(null)
  } )
} )
function dropdownFilter(filterSelection, liBreedElement) {
  constFirstLetterOfBreed = liBreedElement.innerText[0]
  console.log(filterSelection, constFirstLetterOfBreed)
  if(filterSelection === firstLetterOfBreed) {
    liBreedElement.style.display = 'none'
    console.log('hideme')
  }else{
    liBreedElement.style.display = 'block'
    console.log('leaveme')
  }

}