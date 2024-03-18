// const personaUno = {
//     nome: "Wayne Barnett",
//     ruolo: "Founder & CEO",
//     foto: "wayne-barnett-founder-ceo.jpg",
// };

// const personaDue = {
//     nome: "Angela Caroll",
//     ruolo: "Chief Editor",
//     foto: "angela-caroll-chief-editor.jpg",
// };

// const personaTre = {
//     nome: "Walter Gordon",
//     ruolo: "Office Manager",
//     foto: "walter-gordon-office-manager.jpg",
// };

// const personaQuattro = {
//     nome: "Angela Lopez",
//     ruolo: "Social Media Manager",
//     foto: "angela-lopez-social-media-manager.jpg",
// };

// const personaCinque = {
//     nome: "Scott Estrada",
//     ruolo: "Developer",
//     foto: "scott-estrada-developer.jpg",
// };

// const personaSei = {
//     nome: "Barbara Ramos",
//     ruolo: "Graphic Designer",
//     foto: "barbara-ramos-graphic-designer.jpg",
// };

const bodyDomElement = document.querySelector("body")
const ulDinamicDomElement = document.createElement("ul")
bodyDomElement.append(ulDinamicDomElement);

const users =  [
    {
        nome: "Wayne Barnett",
        ruolo: "Founder & CEO",
        foto: "wayne-barnett-founder-ceo.jpg",
    },
    {
        nome: "Angela Caroll",
        ruolo: "Chief Editor",
        foto: "angela-caroll-chief-editor.jpg",
    },
    {
        nome: "Walter Gordon",
        ruolo: "Office Manager",
        foto: "walter-gordon-office-manager.jpg",
    },
    {
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        foto: "angela-lopez-social-media-manager.jpg",
    },
    {
        nome: "Scott Estrada",
        ruolo: "Developer",
        foto: "scott-estrada-developer.jpg",
    },
    {
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer",
        foto: "barbara-ramos-graphic-designer.jpg",
    }
];

for (let i = 0; i < users.length; i++){
    userCorrent = users[i];
    console.log(userCorrent.nome,userCorrent.ruolo,userCorrent.foto)
    ulDinamicDomElement.innerHTML += `
        <ul>
            <li>Nome: ${userCorrent.nome}</li>
            <li>Ruolo: ${userCorrent.ruolo}</li>
            <li>Foto: ${userCorrent.foto}</li>
        </ul>
    `
};