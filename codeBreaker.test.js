const cb = require('./codeBreaker'); //Arrange
//6489

test('sends 7152 and returns ', () => {
    var result = cb.codeBreaker('7152')   //Ejecutar
    expect(result).toBe('');        //Assert
});

test('sends 4152 and returns -', () => {
    var result = cb.codeBreaker('4152')   //Ejecutar
    expect(result).toBe('-');        //Assert
});

test('sends 1452 and returns X', () => {
    var result = cb.codeBreaker('1452')   //Ejecutar
    expect(result).toBe('X');        //Assert
});

test('sends 1456 and returns X-', () => {
    var result = cb.codeBreaker('1456')   //Ejecutar
    expect(result).toBe('X-');        //Assert
});

test('sends 6452 and returns XX', () => {
    var result = cb.codeBreaker('6452')   //Ejecutar
    expect(result).toBe('XX');        //Assert
});

test('sends 8456 and returns X--', () => {
    var result = cb.codeBreaker('8456')   //Ejecutar
    expect(result).toBe('X--');        //Assert
});

test('sends 8465 and returns X--', () => {
    var result = cb.codeBreaker('8465')   //Ejecutar
    expect(result).toBe('X--');        //Assert
});

test('sends 3486 and returns XX-', () => {
    var result = cb.codeBreaker('3486')   //Ejecutar
    expect(result).toBe('XX-');        //Assert
});

test('sends 6418 and returns XX-', () => {
    var result = cb.codeBreaker('6418')   //Ejecutar
    expect(result).toBe('XX-');        //Assert
});

test('sends 6482 and returns XXX', () => {
    var result = cb.codeBreaker('6482')   //Ejecutar
    expect(result).toBe('XXX');        //Assert
});

test('sends 6894 and returns X---', () => {
    var result = cb.codeBreaker('6894')   //Ejecutar
    expect(result).toBe('X---');        //Assert
});

test('sends 6948 and returns X---', () => {
    var result = cb.codeBreaker('6948')   //Ejecutar
    expect(result).toBe('X---');        //Assert
});

test('sends 6984 and returns XX--', () => {
    var result = cb.codeBreaker('6984')   //Ejecutar
    expect(result).toBe('XX--');        //Assert
});

test('sends 6498 and returns XX--', () => {
    var result = cb.codeBreaker('6498')   //Ejecutar
    expect(result).toBe('XX--');        //Assert
});

test('sends 6489 and returns XXXX', () => {
    var result = cb.codeBreaker('6489')   //Ejecutar
    expect(result).toBe('XXXX');        //Assert
});