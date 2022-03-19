const { result } = require("lodash");

const secret = '6489';
const correctPosition = 'X';
const correctNumOffPosition = '-';

function codeBreaker(input){
    var result = '';
    for(var i=0; i<secret.length;i++){
        if(input.includes(secret.charAt(i))) {  
            if(input.indexOf(secret.charAt(i)) == i) {  
                result = correctPosition.concat(result);
            }else {
                result = result.concat(correctNumOffPosition);
            }
        }
    }
    return result;
}

module.exports.codeBreaker = codeBreaker;