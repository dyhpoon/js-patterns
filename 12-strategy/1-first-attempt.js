var performanceS = (salary) => {
    return salary * 4
}

var performanceA = (salary) => {
    return salary * 3
}

var performanceB = (salary) => {
    return salary * 2
}

var calculateBonus = (performanceLevel, salary) => {
    if (performanceLevel == 'S') {
        return performanceS(salary)
    }

    if (performanceLevel == 'A') {
        return performanceA(salary)
    }

    if (performanceLevel == 'B') {
        return performanceB(salary)
    } 
}

const s = calculateBonus('A', 1000);
console.log(s);
