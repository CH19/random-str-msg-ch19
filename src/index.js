const cowsay = require('cowsay');


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
    console.log(cowsay.say({text: funnyCommit(), r: true}));

}
module.exports = {
 printMessage
}