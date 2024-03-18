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

const imgDomElement = document.querySelectorAll(".img-card");
const h5DomElement = document.querySelectorAll("h5");
const pDomElement = document.querySelectorAll("p");

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

    userCorrentFoto = userCorrent.foto;
    userCorrentName = userCorrent.nome;
    userCorrentWork = userCorrent.ruolo;

    imgDomElement[i].innerHTML = `<img src="./img/${userCorrentFoto}">`;
    h5DomElement[i].innerText = userCorrentName;
    pDomElement[i].innerText = userCorrentWork;
};