// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = ['Beck, Glenn', 'Becker, Carl','Capocaccia, Carter', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
var fifteen = inventors.filter((inventor) => {
    return inventor.year >= 1500 && inventor.year < 1600 ? inventor : '';
});
console.log('Lived in the 1500s');
console.table(fifteen);

// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names
var names = inventors.map((inventor) => {
    return `${inventor.first}` + `${inventor.last}`;
});
console.log('Just their names');
console.log(names);


// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
var oldToYoung = inventors.sort((a,b) => {
    return a.year - b.year;
});
console.log('Sorted Old To Young');
console.table(oldToYoung);

// Array.prototype.reduce()
// 4. How many years did all the inventors live?
var yearsLived = inventors.reduce((total, inventor) => {
    return  total + (inventor.passed - inventor.year);
}, 0);
console.log('Total Years Lived');
console.log(yearsLived);

// 5. Sort the inventors by years lived
var sortedByLifespan = inventors.sort((a, b) => {
    return (a.passed - a.year) - (b.passed - b.year);
});
console.log('Sorted by lifespan');
console.table(sortedByLifespan);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
var boulevards = ["Boulevards of Paris", "City walls of Paris", "Thiers wall", "Wall of Charles V", "Wall of Philip II Augustus", "City gates of Paris", "Haussmann's renovation of Paris", "Boulevards of the Marshals", "Boulevard Auguste-Blanqui", "Boulevard Barbès", "Boulevard Beaumarchais", "Boulevard de l'Amiral-Bruix", "Boulevard des Capucines", "Boulevard de la Chapelle", "Boulevard de Clichy", "Boulevard du Crime", "Boulevard Haussmann", "Boulevard de l'Hôpital", "Boulevard des Italiens", "Boulevard de la Madeleine", "Boulevard de Magenta", "Boulevard Montmartre", "Boulevard du Montparnasse", "Boulevard Raspail", "Boulevard Richard-Lenoir", "Boulevard de Rochechouart", "Boulevard Saint-Germain", "Boulevard Saint-Michel", "Boulevard de Sébastopol", "Boulevard de Strasbourg", "Boulevard du Temple", "Boulevard Voltaire", "Boulevard de la Zone"]
var boulevardsWithDe = boulevards.filter(item => item.includes('de'));
console.log('Boulevards in Paris with "de" in them');
console.log('(Sourced from: https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris)');
console.table(boulevardsWithDe);

// 7. sort Exercise
// Sort the people alphabetically by last name
var sortedByLastName = people.sort((prev, curr) =>{
    const [aLast,afirst] = prev.split(', ');
    const [bLast,bfirst] = curr.split(', ');
    return aLast[0] > bLast[0];
}, 0);
console.log('Sorted By Last Name');
console.table(sortedByLastName);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
var instancesOf = data.reduce((obj, item) => {
    obj[item] ? obj[item]++ : obj[item] = 1;
    return obj;
}, {});
console.log('Instances of transportation types in an array.');
console.log(instancesOf);
