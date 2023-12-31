let clickingAreaNode = document.querySelector(".js-clicking-area-container");
let skillContainerNode = document.querySelector(".js-skill-container");
let employeeContainerNode = document.querySelector(".js-employee-container");

// állapottér
let {
    seconds,
    gold,
    goldPerClick,
    goldPerSec,
    skillList,
    employeeList,
    startTimestamp,
} = getInitialState();

function getInitialState() {
    return {
        intervalId: setInterval(administrateTime, 200),
        startTimestamp: new Date().getTime(),
        seconds: 0,
        gold: 1000,
        goldPerClick: 1,
        goldPerSec: 0,
        skillList: [ 
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
            goldPerClickIncrement: 10,
            description: "Baglyok betanítását készpénzre válthatjuk. Magasabb szinten postabaglyokat is nevelhetünk.",
            amount: 0,
            price: 200,
            link: "./images/owl.png",
            },
            {
            skillName: 'GYÓGYFŐZET',
            goldPerClickIncrement: 25,
            description: "Minél jobban kitanuljuk a gyógyfőzet készítését, annál több gyógyfőzetet tudunk értékesíteni aranyért cserébe.",
            amount: 0,
            price: 750,
            link: "./images/potion.png",
            },
            {
            skillName: 'KERESKEDELEM',
            goldPerClickIncrement: 100,
            description: "Varázstárgyak készítésével és értékesítésével profitot zsebelhetünk be.",
            amount: 0,
            price: 4000,
            link: "./images/trade.png",
            },
            {
            skillName: 'ALKÍMIA',
            goldPerClickIncrement: 300,
            description: "Az aranykészítés tudománya titkos recept alapján.",
            amount: 0,
            price: 15000,
            link: "./images/alchemy.png",
            },
            {
            skillName: 'VARÁZSTUDOMÁNY',
            goldPerClickIncrement: 1000,
            description: "Az alkímia hatását tovább erősíti és oktatási tevékenységet is végezhetünk.",
            amount: 0,
            price: 100000,
            link: "./images/wizardry.png",
            },
        
        ],
        employeeList: [ 
            {
            employeeName: 'ARANYKUTATÓ',
            goldPerSecIncrement: 1,
            description: "Aranyat keres és talál.",
            amount: 0,
            price: 100,
            link: "./images/prospector.png",
            },
            {
            employeeName: 'BAGOLYIDOMÁR',
            goldPerSecIncrement: 5,
            description: "Szerződéses munkatársként baglyokat tanít.",
            amount: 0,
            price: 1000,
            link: "./images/owl_trainer.png",
            },
            {
            employeeName: 'GYÓGYFŐZETKÉSZÍTŐ',
            goldPerSecIncrement: 10,
            description: "Gyógyfőzeteket készít, amiért aranyat kap.",
            amount: 0,
            price: 3000,
            link: "./images/potion-mixer.png",
            },
            {
            employeeName: 'KERESKEDŐ',
            goldPerSecIncrement: 25,
            description: "Varázstárgyakat ad el.",
            amount: 0,
            price: 10000,
            link: "./images/trader.png",
            },
            {
            employeeName: 'VARÁZSLÓPROFESSZOR',
            goldPerSecIncrement: 100,
            description: "Tanulókat képez ki szerződéses munkatársként. Szabadidejében alkímiával foglalkozik.",
            amount: 0,
            price: 50000,
            link: "./images/alchemist.png",
            },
            {
            employeeName: 'BEFEKTETŐ KACSA',
            goldPerSecIncrement: 1000,
            description: "Dagobeert bácsihoz hasonló szakértelemmel kezeli és fiataltatja a vagyonodat.",
            amount: 0,
            price: 250000,
            link: "./images/gold_duck.png",
            },
        ],
    }
}

function administrateTime() {
    let currentTimestamp = new Date().getTime();
    let elapsedTime = Math.floor((currentTimestamp - startTimestamp) / 1000);
    let rewardSeconds = elapsedTime - seconds;
    if (rewardSeconds > 0) {
        gold += goldPerSec * rewardSeconds;
        seconds = elapsedTime;
        render();
    }
}

/* ********************************** click event listener ******************************** */
function handleGoldClicked(event) {
    if (event.target.dataset.enable_click === 'true') {
    gold = gold + goldPerClick;
    render();
    }
}

function handleSkillClicked(event) {
    let clickIndex = event.target.dataset.index;
    // console.log(clickIndex);
    // console.log(event.target);
    if (typeof clickIndex !== 'undefined') {
        let clickedSkill = skillList[clickIndex];
        if (gold < clickedSkill.price) {
            alert("Nincs elég aranyad, hogy ezt megvedd!");
            return;
        }
        gold -= clickedSkill.price;
        goldPerClick += clickedSkill.goldPerClickIncrement;
        clickedSkill.amount += 1;
        render();
    }
}

function handleEmployeeClicked(event) {
    let clickIndex = event.target.dataset.index;
    clickIndex = Number(clickIndex);
    if (typeof clickIndex !== 'undefined') {
        let clickedEmployee = employeeList[clickIndex];
        if (gold < clickedEmployee.price) {  
            alert("Nincs elég aranyad, hogy ezt megvedd!");
            return;
        }
        gold -= clickedEmployee.price;
        goldPerSec += clickedEmployee.goldPerSecIncrement;
        clickedEmployee.amount += 1;
        render();
    }
}

function formatPrice(price) {
    /* PRE: 0 <= Price <= 999999 */ 
    if (price < 1000) return price;
    let kValue = price / 1000;
    return `${kValue}K`
}

/* ********************************** templates ******************************** */

function getClickingAreaTemplate() {
    return `
            <p><strong>${ seconds } másodperc</strong></p>
            <img src="./images/gold_coin.png" alt="Aranyklikkelő" data-enable_click="true" class="gold-coin" >
            <p><strong>${ gold } arany</strong></p>
            <p>${ goldPerClick } arany / klikk</p>
            <p>${ goldPerSec } arany / mp</p>
`;
}

function getSkill({ skillName, goldPerClickIncrement, description, amount, price, link }, index) {
    return `
        <tr>
            <td>
                <p><strong>${skillName} (${ goldPerClickIncrement } arany / klikk)</strong></p>
                <p>${description}</p>
            </td>
            <td class="upgrade-stats-cell">
                <p>db: ${amount}</p>
                <p>ár: ${formatPrice(price)}</p>
            </td>
            <td>
                <img src="${link}" alt="${skillName}" data-index="${index}">
            </td>
        </tr>
    `;
}

function getEmployee({ employeeName, goldPerSecIncrement, description, amount, price, link }, index) {
    return `
            <tr>
                <td>
                    <img src="${link}" alt="${employeeName}" data-index="${index}">
                </td>
                <td class="upgrade-stats-cell">
                    <p>db: ${amount}</p>
                    <p>ár: ${formatPrice(price)}</p>
                </td>
                <td>
                    <p><strong>${employeeName} (${ goldPerSecIncrement } arany / mp)</strong></p>
                    <p>${description}</p>
                </td>
            </tr>
    `;
}

function render() {
    clickingAreaNode.innerHTML = getClickingAreaTemplate();
    document.querySelector(".js-skills-tbody").innerHTML = skillList.map(getSkill).join("");
    document.querySelector(".js-employees-tbody").innerHTML = employeeList.map(getEmployee).join("");
};

function initialize() {
    let data = getInitialState(); 
    seconds = data.seconds;
    gold = data.gold;
    goldPerClick = data.goldPerClick;
    goldPerSec = data.goldPerSec;

    clickingAreaNode.addEventListener('click', handleGoldClicked);
    skillContainerNode.addEventListener('click', handleSkillClicked);
    employeeContainerNode.addEventListener('click', handleEmployeeClicked);

    render();
};

initialize();