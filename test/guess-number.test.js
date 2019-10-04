// IMPORT MODULES under test here:
// import example from '../src/example.js';
import compareNumbers from '../compare-numbers.js';

const test = QUnit.test;

test('should return 0 if user number and correct number are the same', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const correctNumber = 17;
    let userNumber = 17;
    //Act 
    // Call the function you're testing and set the result to a const
    const result = compareNumbers(userNumber, correctNumber);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 0);
});

test('should return -1 if user number is lower than the correct number', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const correctNumber = 17;
    let userNumber = 5;
    //Act 
    // Call the function you're testing and set the result to a const
    const result = compareNumbers(userNumber, correctNumber);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, -1);
});

test('should return 1 if user number is higher than the correct number', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const correctNumber = 17;
    let userNumber = 19;
    //Act 
    // Call the function you're testing and set the result to a const
    const result = compareNumbers(userNumber, correctNumber);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, 1);
});