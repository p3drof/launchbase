const user = [
    {name: "Carlos", techs: ["HTML", "CSS"]},
    {name: "Jasmine", techs: ["JavaScript", "CSS"]},
    {name: "Tuane", techs: ["HTML", "Node.js"]},
    {name: "Pedro", techs: ["HTML", "CSS", "Javascript", "C++", "Python"]},
    {name: "Theo", techs: ["C++", "JAVA", "Ruby"]},
    {name: "Sofia", techs: ["Photoshop", "HTML", "CSS"]}
]

/*for(let i = 0; i < user.length; i++) {
    console.log(`${user[i].name} trabalha com ${user[i].techs}`)
}*/

function checaSeUsuarioUsaCSS(user) {
    for(let i = 0; i < user.techs.length; i++) {
        if(user.techs[i] == 'CSS') {
            return true;
        } 
    } 
    return false;
}

for(let i = 0; i < user.length; i++) {
    const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(user[i]);

    if(usuarioTrabalhaComCSS) {
        console.log(`O usuário  ${user[i].name} trabalha com CSS`)
    }
}