const apiCalculator = require("./api.calculator");
const apiCodeBreaker = require("./api.codeBreaker");

apiCalculator.listen(3001, () => {
    console.log("running calculator")
});

apiCodeBreaker.listen(3002, () => {
    console.log("running codeBreaker")
});

