/*   ::::  AAA Patern  ::::
Arrange: Preparar
Act: Ejecutar
Assert: Validar
*/

const cal = require('./calculator'); //Arrange

describe('Add operator', () => { 
    test('adds 1 + 2 to equal 3', () => {
        const result = cal.add(1,2);    //Ejecutar
        expect(result).toBe(3);         //Assert
    });
    
    test('adds 4 + 8 to equal 12', () => {
        const result = cal.add(4,8)     //Ejecutar
        expect(result).toBe(12);        //Assert
    });
});

describe('Subtract operator', () => {
    test('adds 10 - 4 to equal 6', () => {
        const result = cal.res(10,4);   //Ejecutar
        expect(result).toBe(6);         //Assert
    });
    
    test('adds 3 + 1 to equal 2', () => {
        const result = cal.res(3,1);    //Ejecutar
        expect(result).toBe(2);         //Assert
    });
});
