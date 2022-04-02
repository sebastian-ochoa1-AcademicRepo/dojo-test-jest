const { beforeAll, afterAll } = require("jest-circus");
const request = require("supertest");
var api = require("./api.codeBreaker"); 


describe("testing /codeBreaker path", () => {

    beforeEach(() => {
        request(api)
        .get("/resettests")
        .then();
    });
    
    test("it should return status code 200", done => {
        request(api)
        .get("/codebreaker/?code=6478") // Act
        .then(response => {
            expect(response.statusCode).toBe(200); //Assert
            done();
        });
    });

    test("it should return application/json content type", done => {
        request(api)
        .get("/codebreaker?code=6478") // Act
        .then(response => {
            expect(response.type).toBe("application/json"); //Assert
            done();
        });
    });

    test("it should return a valid json object", done => {
        request(api)
        .get("/codebreaker/?code=6478") // Act
        .then(response => {
            expect(response.body).not.toBeNull(); //Assert
            expect(response.body.result).not.toBeUndefined(); //Assert
            expect(response.body.attempts).not.toBeUndefined(); //Assert
            done();
        });
    });

    test("it should return a correct answer", done => {
        request(api)
        .get("/codebreaker/?code=6478") // Act
        .then(response => {
            expect(response.body.result).toBe("XX-"); //Assert
            expect(response.body.attempts).toBe(1);
            done();
        });
    });
})

/*
describe("testing /reset path", () => {

    beforeEach(() => {
        request(api)
        .get("resettests")
        .then();
    });
    
    test("it should return status code 200", done => {
        request(api)
        .get("/reset") // Act
        .then(response => {
            expect(response.statusCode).toBe(200); //Assert
            done();
        });
    });

    test("it should return application/json content type", done => {
        request(api)
        .get("/reset") // Act
        .then(response => {
            expect(response.type).toBe("application/json"); //Assert
            done();
        });
    });

    test("it should return a valid json object", done => {
        request(api)
        .get("/reset") // Act
        .then(response => {
            expect(response.body).not.toBeNull(); //Assert
            expect(response.body.result).not.toBeUndefined(); //Assert
            done();
        });
    });

    test("it should return a correct answer", done => {
        request(api)
        .get("/reset") // Act
        .then(response => {
            expect(response.body.result).toBe("Reiniciado correctamente"); //Assert
            done();
        });
    });

    test("it should apply correctly", done => {
        request(api)
        .get("/reset") // Act
        .then();
        
        request(api)
        .get("/codebreaker/?code=6489") // Act
        .then(response => {
            expect(response.body.result).not.toBe("XXXX"); //Assert
            expect(response.body.attempts).toBe(1);
            done();
        });
    });
})
*/