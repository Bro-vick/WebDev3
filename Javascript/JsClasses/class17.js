// Higher Order Functions
// What are Higher Order Functions? These are functions that can take other functions as arguments and return their results. E.g foreach, filter, sort, map, etc

function sayHello(){
    console.log("Hello")
};
function greet(funcArg, n){
    for(let i = 0; i < n; i++){
        funcArg();
    }
};
greet(sayHello, 5);

// Sample Data
const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// ForEach
companies.forEach((company) => console.log(company.end - company.start));

// filter
// Create a new array of ages greater than 18. Array name canDrink
const cannotDrink = ages.filter(function(age){
    if(age <= 18){
        return true;
    };
});
console.table(cannotDrink);


// filter the companies array and give me a new aray of companies (retailCompanies) in the retail category.
const retailCompanies = companies.filter(company => company.category === "Retail");
console.log(retailCompanies)

// filter companies that have lasted for at least ten years
const lastedTenYears = companies.filter(company => company.end - company.start >= 10);
console.log(lastedTenYears)

// map
const companyRating = companies.map(company => `${company.name} Is a wonderful company.`);
console.log(companyRating);

// Using a for loop recreate companyRating
const companyRating2 =  [];
for(let i = 0; i <= companies.length; i++){
    companyRating2.push(companies[i].category); 
};
console.log(companyRating2)

// sort
// Ascending order
const sortedAges = ages.sort((a, b) => a - b);
console.log(sortedAges);
// Descendng Order
const descendSortedAges = ages.sort((a, b) => b - a);
console.log(descendSortedAges);
