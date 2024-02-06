
const btnMing = document.querySelector('.btn-ming');
const btnSung = document.querySelector('.btn-sung');
const btnArmy = document.querySelector('.btn-army');
const btns = document.querySelectorAll('.btn');
const unitDisplay = document.querySelector('.unit-display');

const options = {
    mingDynasty: false,
    sungKingdom: true,
    armyOfTheNorth: true
}


const data = [
    {
        name: 'Royal Guard',
        weapons: {
            default: 'swords',
            mingDynasty: 'swords',
            sungKingdom: 'spears'
        },
        size: 'large'
    },
    {
        name: 'Jannisaeres',
        weapons: {
            mingDynasty: 'scimitars',
            default: 'guns'
        },
        size: {
            default: 'large',
            armyOfTheNorth: 'deep'
        }
    }
]

const renderObjects = () => {
    unitDisplay.innerHTML = ``;
    const units = data;
    data.forEach(unit => {
        const renderElem = document.createElement('div');
        renderElem.innerHTML = `
            <h3>${unit.name}</h3>
            <p>Weapons: ${typeof unit.weapons == Object ? unit.weapons.mingDynasty : unit.weapons.default}</p>
            <p>Size: ${unit.size}</p>
        `;
        unitDisplay.appendChild(renderElem);
    })
    // unitDisplay.appendChild()
}

const toggleOption = (e) => {
    console.log(e.target.dataset.option)
    if (e.target.dataset.option === 'ming') { options.mingDynasty = true, options.sungKingdom = false }
    if (e.target.dataset.option === 'sung') { options.mingDynasty = false, options.sungKingdom = true }
    if (e.target.dataset.option === 'army') { options.armyOfTheNorth = !options.armyOfTheNorth }
    console.log(options)
    renderObjects()
}

btns.forEach(btn => {
    btn.addEventListener('click', toggleOption)
});

console.log(typeof data[0].weapons)
renderObjects();
