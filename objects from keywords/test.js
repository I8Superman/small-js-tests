"use strict";


const contacts = [
    {
        id: '4nfj4339',
        name: 'Bubba',
        serLetter: 'D',
        phone: '+4560803312',
        newcomer: false
    },
    {
        id: 'n44d99ej',
        name: 'Adrian',
        serLetter: 'L',
        phone: '+4560803312',
        newcomer: true
    },
    {
        id: 'mwm39f9',
        name: 'Abdullah',
        serLetter: 'B',
        phone: '+4560803312',
        newcomer: false
    },
    {
        id: 'sad0993',
        name: 'Cecil',
        serLetter: 'W',
        phone: '+4560803312',
        newcomer: false
    },
    {
        id: '04oflll',
        name: 'Ethan',
        serLetter: 'H',
        phone: '+4560803312',
        newcomer: false
    },
    {
        id: '3494343h',
        name: 'Kabbu',
        serLetter: 'O',
        phone: '+4560803312',
        newcomer: true
    },
    {
        id: '48wjcewooo',
        name: 'Sandy',
        serLetter: 'B',
        phone: '+4560803312',
        newcomer: false
    },
    {
        id: '4nfj4339',
        name: 'Bubba',
        serLetter: 'D',
        phone: '+4560803312',
        newcomer: false
    },
    {
        id: 'n44d99ej',
        name: 'Adrian',
        serLetter: 'L',
        phone: '+4560803312',
        newcomer: true
    },
    {
        id: 'mwm39f9',
        name: 'Abdullah',
        serLetter: 'B',
        phone: '+4560803312',
        newcomer: false
    },
    {
        id: 'sad0993',
        name: 'Cecil',
        serLetter: 'W',
        phone: '+4560803312',
        newcomer: false
    },
    {
        id: '04oflll',
        name: 'Ethan',
        serLetter: 'H',
        phone: '+4560803312',
        newcomer: false
    },
    {
        id: '3494343h',
        name: 'Kabbu',
        serLetter: 'O',
        phone: '+4560803312',
        newcomer: true
    },
    {
        id: '48wjcewooo',
        name: 'Sandy',
        serLetter: 'B',
        phone: '+4560803312',
        newcomer: false
    },
    {
        id: '4nfj4339',
        name: 'Bubba',
        serLetter: 'D',
        phone: '+4560803312',
        newcomer: false
    },
    {
        id: 'n44d99ej',
        name: 'Adrian',
        serLetter: 'L',
        phone: '+4560803312',
        newcomer: true
    },
    {
        id: 'mwm39f9',
        name: 'Abdullah',
        serLetter: 'B',
        phone: '+4560803312',
        newcomer: false
    },
    {
        id: 'sad0993',
        name: 'Cecil',
        serLetter: 'W',
        phone: '+4560803312',
        newcomer: false
    },
    {
        id: '04oflll',
        name: 'Ethan',
        serLetter: 'H',
        phone: '+4560803312',
        newcomer: false
    },
    {
        id: '3494343h',
        name: 'Kabbu',
        serLetter: 'O',
        phone: '+4560803312',
        newcomer: true
    },
    {
        id: '48wjcewooo',
        name: 'Sandy',
        serLetter: 'B',
        phone: '+4560803312',
        newcomer: false
    },
]

// Get different starting letters with .reduce

const getLetters = contacts.reduce((obj, letter) => {
    if (!obj[letter]) {
        obj[letter]
    }
})

    .reduce((total, duration) => total + duration, 0)

const vehicleTypes = data.reduce((obj, vehicleType) => { // obj is the 'total' = what we 'reduce' the data to
    if (!obj[vehicleType]) { // Check if this elem has been iterated before
        obj[vehicleType] = 0; // If not, then create a property/key for it in the initial obj and set its value to 0
    }
    obj[vehicleType]++; // Now add 1 to the value of the key
    return obj // We must return the obj. It will serve as the initial value for the next iteration of the func
}, {})
// Extract all contacts with same starting letter