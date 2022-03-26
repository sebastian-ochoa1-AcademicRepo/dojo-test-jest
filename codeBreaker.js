var secret = ''+Math.floor(Math.random() * (9999 - 1000) + 1000);
const correctPosition = 'X';
const correctNumOffPosition = '-';


function breakCode(input){
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

function setSecret(num){
    secret = num;
}

function setRandomSecret(){
    secret = ''+Math.floor(Math.random() * (9999 - 1000) + 1000);
}

module.exports.breakCode = breakCode;
module.exports.setSecret = setSecret;
module.exports.setRandomSecret = setRandomSecret;
