// állapottér
let seconds = 0;
let gold = 0;
let goldPerClick = 1;
let goldPerSec = 0;

function getTemplate() {
    return `
            <p><strong>${ seconds } másodperc</strong></p>
            <img src="./images/gold_coin.png" alt="Arany klikkelő" >
            <p><strong>${ gold } arany</strong></p>
            <p>${ goldPerClick } arany / klikk</p>
            <p>${ goldPerSec } arany / mp</p>
`;
}

let clickingAreaNode = document.querySelector(".js-clicking-area-container");
clickingAreaNode.innerHTML = getTemplate();

/* később ebből objektum lesz.
let skillName = 'ARANYKUTATÁS';
let goldPerClickIncrement = 1;
let description = "Ahol a víz átamlását akadályok megváltoztatják, aranyat találunk.";
let amount = 0;
let price = 10;
let link = "./images/prospecting.png"; 
*/

let skillList = [ 
    {
    skillName: 'ARANYKUTATÁS',
    goldPerClickIncrement: 1,
    description: "Ahol a víz átamlását akadályok megváltoztatják, aranyat találunk.",
    amount: 0,
    price: 10,
    link: "./images/prospecting.png",
    },
    {
    skillName: 'BAGOLYIDOMÍTÁS',
    goldPerClickIncrement: 1,
    description: "Baglyok betanítását készpénzre válthatjuk. Magasabb szinten postabaglyokat is nevelhetünk.",
    amount: 0,
    price: 10,
    link: "./images/owl.png",
    },
    {
    skillName: 'GYÓGYFŐZET',
    goldPerClickIncrement: 1,
    description: "Minél jobban kitanuljuk a gyógyfőzet készítését, annál több gyógyfőzetet tudunk értékesíteni aranyért cserébe.",
    amount: 0,
    price: 10,
    link: "./images/potion.png",
    },
    {
    skillName: 'KERESKEDELEM',
    goldPerClickIncrement: 1,
    description: "Varázstárgyak készítésével és értékesítésével profitot zsebelhetünk be.",
    amount: 0,
    price: 10,
    link: "./images/trade.png",
    },
    {
    skillName: 'Alkímia',
    goldPerClickIncrement: 1,
    description: "Az aranykészítés tudománya titkos recept alapján.",
    amount: 0,
    price: 10,
    link: "./images/alchemy.png",
    },
    {
    skillName: 'VARÁZSTUDOMÁNY',
    goldPerClickIncrement: 1,
    description: "Az alkímia hatását tovább erősíti és oktatási tevékenységet is végezhetünk.",
    amount: 0,
    price: 10,
    link: "./images/wizardry.png",
    },

];



function getSkill({ skillName, goldPerClickIncrement, description, amount, price, link }) {
    return `
        <tr>
            <td>
                <p><strong>${skillName} (${ goldPerClickIncrement } arany / klikk)</strong></p>
                <p>${description}</p>
            </td>
            <td class="upgrade-stats-cell">
                <p>db: ${amount}</p>
                <p>ár: ${price}</p>
            </td>
            <td>
                <img src="${link}" alt="${skillName}" >
            </td>
        </tr>
    `;
}

let skillTemplate = getSkill(skillList[0]);
let skillTemplate1 = getSkill(skillList[1]);
let skillTemplate2 = getSkill(skillList[2]);
let skillTemplate3 = getSkill(skillList[3]);
let skillTemplate4 = getSkill(skillList[4]);
let skillTemplate5 = getSkill(skillList[5]);
//let skillTemplateAll = getSkill(skillList);


document.querySelector(".js-skills-tbody").innerHTML = skillTemplate + skillTemplate1 + skillTemplate2 + skillTemplate3 + skillTemplate4 + skillTemplate5;
//document.querySelector(".js-skills-tbody").innerHTML = skillTemplateAll;
// document.querySelector(".js-skills-tbody").innerHTML = skillTemplate1;

// let skillAreaNode = document.querySelector(".js-skills-tbody");
// skillAreaNode.innerHTML = skillTemplate;



    let employeeList = [ 
    {
    employeeName: 'ARANYKUTATÓ',
    goldPerClickIncrement: 1,
    description: "Aranyat keres és talál.",
    amount: 0,
    price: 10,
    link: "./images/prospector.png",
    },
    {
    employeeName: 'BAGOLYIDOMÁR',
    goldPerClickIncrement: 1,
    description: "Szerződéses munkatársként baglyokat tanít.",
    amount: 0,
    price: 10,
    link: "./images/owl_trainer.png",
    },
    {
    employeeName: 'GYÓGYFŐZETKÉSZÍTŐ',
    goldPerClickIncrement: 1,
    description: "Gyógyfőzeteket készít, amiért aranyat kap.",
    amount: 0,
    price: 10,
    link: "./images/potion-mixer.png",
    },
    {
    employeeName: 'KERESKEDŐ',
    goldPerClickIncrement: 1,
    description: "Varázstárgyakat ad el.",
    amount: 0,
    price: 10,
    link: "./images/trader.png",
    },
    {
    employeeName: 'VARÁZSLÓPROFESSZOR',
    goldPerClickIncrement: 1,
    description: "Tanulókat képez ki szerződéses munkatársként. Szabadidejében alkímiával foglalkozik.",
    amount: 0,
    price: 10,
    link: "./images/alchemist.png",
    },
    {
    employeeName: 'BEFEKTETŐ KACSA',
    goldPerClickIncrement: 1,
    description: "Dagobeert bácsihoz hasonló szakértelemmel kezeli és fiataltatja a vagyonodat.",
    amount: 0,
    price: 10,
    link: "./images/gold_duck.png",
    },

];



function getEmployee({ employeeName, goldPerClickIncrement, description, amount, price, link }) {
    return `
            <tr>
                <td>
                    <img src="${link}" alt="${employeeName}" >
                </td>
                <td class="upgrade-stats-cell">
                    <p>db: ${amount}</p>
                    <p>ár: ${price}</p>
                </td>
                <td>
                    <p><strong>${employeeName} (${ goldPerClickIncrement } arany / klikk)</strong></p>
                    <p>${description}</p>
                </td>
            </tr>
    `;
}

let employeeTemplate = getEmployee(employeeList[0]);
let employeeTemplate1 = getEmployee(employeeList[1]);
let employeeTemplate2 = getEmployee(employeeList[2]);
let employeeTemplate3 = getEmployee(employeeList[3]);
let employeeTemplate4 = getEmployee(employeeList[4]);
let employeeTemplate5 = getEmployee(employeeList[5]);



document.querySelector(".js-employees-tbody").innerHTML = employeeTemplate + employeeTemplate1 + employeeTemplate2 + employeeTemplate3 + employeeTemplate4 + employeeTemplate5;

