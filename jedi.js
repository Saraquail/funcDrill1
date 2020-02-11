// first function

function jediName (firstName, lastName) {
    console.log(firstName.substring(0, 3) + lastName.substring(0, 2));
}

jediName('Douglas', 'Miner');

// second function

function beyond(num) {
    if (num === Infinity) {
        console.log('And beyond')
    } else if (num !== Infinity && num > 0) {
        console.log('To infinity')
    } else if (num !== Infinity && num <0) {
        console.log('To negative infinity')
    } else if (num === 0) {
        console.log('Staying home');
    }
}

beyond(Infinity);

// third function

function decode(word) {
    if (word[0] === 'a') {
        console.log(word[1]);
    } else if (word[0] === 'b') {
        console.log(word[2]);
    } else if (word[0] === 'c') {
        console.log(word[3]);
    } else if (word[0] === 'd') {
        console.log(word[4]);
    } else {
        console.log(' ');
    }
}

decode('craft');
decode('block');
decode('argon');
decode('meter');
decode('bells');
decode('brown');
decode('croon');
decode('droop');
// shoulda done a for loop


// fourth function

function howManyDays(month, leapYear) {
    switch (month, leapYear) {
        case 'January', false:
        case 'March', false:
        case 'May', false:
        case 'July', false:
        case 'August', false:
        case 'October', false:
        case 'December', false: {
            result = `${month} has 31 days`;
            break;
        }
        case 'April', false:
        case 'June', false:
        case 'September', false:
        case 'November', false: {
            result = `${month} has 30 days`;
            break;
        }
        case 'February', false: {
            result = `${month} has 28 days`;
            break;
        }   
        case 'January', true:
        case 'March', true:
        case 'May', true:
        case 'July', true:
        case 'August', true:
        case 'October', true:
        case 'December', true: {
            result = `${month} has 31 days`;
            break;
        }
        case 'April', true:
        case 'June', true:
        case 'September', true:
        case 'November', true: {
            result = `${month} has 30 days`;
            break;
        }
        case 'February', true: {
            result = `${month} has 29 days`;
            break;
        }
        console.log(result);
    }
}

howManyDays('February', true)

//fifth function