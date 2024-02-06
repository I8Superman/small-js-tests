"use strict"

const keywords = [
    {
        word: 'spearmen',
        category: 'type',
        order: 1
    },
    {
        word: 'archers',
        category: 'type',
        order: 1
    },
    {
        word: 'gunmen',
        category: 'type',
        order: 1
    },
    {
        word: 'regular-sized',
        category: 'size',
        order: 4
    },
    {
        word: 'deep',
        category: 'size',
        order: 4
    },
    {
        word: 'small',
        category: 'size',
        order: 4
    },
    {
        word: 'regular',
        category: 'quality',
        order: 3
    },
    {
        word: 'veteran',
        category: 'quality',
        order: 3
    },
    {
        word: 'raw',
        category: 'quality',
        order: 3
    },
    {
        word: 'pistol',
        category: 'sidearm',
        order: 2
    }, {
        word: 'knife',
        category: 'sidearm',
        order: 2
    }, {
        word: 'sling',
        category: 'sidearm',
        order: 2
    }
]

const unitList = [
    {
        name: 'normie',
        keywords: ['spearmen', 'regular', 'pistol', 'regular-sized']
    },
    {
        name: 'badass',
        keywords: ['knife', 'veteran', 'small', 'gunmen']
    },
    {
        name: 'loser',
        keywords: ['raw', 'deep', 'sling', 'archers']
    }
]

// const normie = ['spearmen', 'regular', 'pistol', 'regular-sized']
// const badass = ['knife', 'veteran', 'small', 'gunmen']
// const loser = ['raw', 'deep', 'sling', 'archers']

// Replace strings with keyword objects
const getKeyObjects = (words) => {
    const replacedStrs = words.map((str) => {
        const keywordObj = keywords.find(obj => obj.word === str)
        return keywordObj
    })
    return replacedStrs
}

// Sort keywords by order
const sortKeywords = (unit) => {
    const sortedKeywords = unit.keywords.toSorted((a, b) => {
        return a.order - b.order;
    })
    const updatedUnit = {
        ...unit,
        keywords: sortedKeywords
    }
    return updatedUnit;
}

const wordsToObjects = (units) => {
    const converted = units.map(unit => {
        const getObjs = getKeyObjects(unit.keywords);
        const updatedObj = {
            ...unit,
            keywords: getObjs
        };
        return updatedObj
    })
    return converted
}

const createRow = (unitData) => {
    console.log(unitData)
    const row = document.createElement('tr');
    row.innerHTML = `
        <td class="tg-0lax">${unitData.name}</td>
        <td class="tg-0lax">${unitData.keywords[0].word}</td>
        <td class="tg-0lax">${unitData.keywords[1].word}</td>
        <td class="tg-0lax">${unitData.keywords[2].word}</td>
        <td class="tg-0lax">${unitData.keywords[3].word}</td>
    `;
    document.querySelector('.data-hype').appendChild(row);
}
// Put data in table

const putInTable = (units) => {
    const convertKeywords = wordsToObjects(units)
    const sortedData = convertKeywords.map(unit => sortKeywords(unit))
    sortedData.forEach(data => createRow(data))
}


putInTable(unitList)