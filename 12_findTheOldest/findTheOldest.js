const findTheOldest = function(people) {
    oldest = {};
    oldest_age = 0;
    for (let i = 0; i < people.length; i++) {
        let deathYear = new Date().getFullYear();
        let birthYear = people[i]["yearOfBirth"];
        if ("yearOfDeath" in people[i]) {
            deathYear = people[i]["yearOfDeath"];
        }
        let age = deathYear - birthYear;
        if (oldest_age < age) {
            oldest_age = age;
            oldest = people[i];
        }
    }
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
