const xmlhttprequest = require('xmlhttprequest').XMLHttpRequest; 
const cowsay = require('cowsay');


function fetchData(urlApi, callback){
    const xhtr = new xmlhttprequest();
    xhtr.open('GET', urlApi, true);
    xhtr.onreadystatechange = (event)=>{
        if(xhtr.readyState == 4){
            if(xhtr.status == 200){
                return callback(null, JSON.parse(xhtr.responseText))
            }else{
                console.log('HUBO UN ERROR');
                const error = new Error('Error' + urlApi);
                return callback(error, null)
            }
        }
    }
    console.log(xhtr);
    xhtr.send()
}
function searchInformation(error, data){
    if(error){
        return console.log('error' + error);
    }
    return data.title;
}


const messages = [
    "This is where it all begins...",
    "Commit committed",
    "Version control is awful",
    "COMMIT ALL THE FILES!",
    "The same thing we do every night, Pinky - try to take over the world!",
    "Lock S-foils in attack position",
    "This commit is a lie",
    "I'll explain when you're older!",
    "Here be Dragons",
    "Reinventing the wheel. Again.",
    "This is not the commit message you are looking for",
    "Batman! (this commit has no parents)",
    "se puta y ya",
    "la mano arriba cintura sola la media vuelta danza kuduro",
    "tienes que ser grande"
];



const funnyCommit = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    return `\x1b[35m${message}\x1b[89m]`;
    
    };
const printMessage = () =>{
    // console.log(message);
    console.log(cowsay.say({text: 'hola' , r: true}));
    const message =  fetchData('https://jsonplaceholder.typicode.com/todos/3', searchInformation);
    
}
module.exports = {
 printMessage
}

printMessage()