//Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.

//creating a function
function describe_city (city:string, country:string ="Pakistan"){
    console.log(`${city} is in ${country}`);
}

//calling a funtion with diffrent city and by default country 
describe_city("Karachi");
describe_city("Islamabad");
describe_city("Lahore");

//calling a function with a diffrent ciy and different country
describe_city("Makkah", "Suadia Arabia");