const findTheOldest = function (peopleList) {
    const oldestPeople = peopleList.reduce((person1, person2) => {
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();

        if (person1.yearOfDeath === undefined) {
            person1.yearOfDeath = currentYear;
        }
        if (person2.yearOfDeath === undefined) {
            person2.yearOfDeath = currentYear;
        }

        const yearLivedPerson1 = person1.yearOfDeath - person1.yearOfBirth;
        const yearLivedPerson2 = person2.yearOfDeath - person2.yearOfBirth;

        // IF person 1 is older
        if (yearLivedPerson1 > yearLivedPerson2) {
            return person1;
        }
        // ELSE person 2 is older
        return person2;
    })
    return oldestPeople;
};

const people = [
    {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
    },
    {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
    },
    {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
    },
]

console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;
