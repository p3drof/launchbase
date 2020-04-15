const user = [
    {name: "Carlos", techs: ["HTML", "CSS"]},
    {name: "Jasmine", techs: ["JavaScript", "CSS"]},
    {name: "Tuane", techs: ["HTML", "Node.js"]},
]

for(let i = 0; i < user.length; i++) {
    console.log(`${user[i].name} trabalha com ${user[i].techs}`)
}