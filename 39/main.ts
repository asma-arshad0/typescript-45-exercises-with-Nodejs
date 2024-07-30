//City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

// "Lahore, Pakistan"

// Call your function with at least three city-country pairs, and print the value that’s returned.

//creating a function with parameters which return a values in string
function city_country(city:string, country:string) : string{ return `${city}, ${country}`;
}

//calling a funtion and print the returned value
city_country("Karachi", "Pakistan"); //return ma ap is tarhan nh call karsakty console krana phary ga
console.log(city_country("Karachi", "Pakistan"));
console.log(city_country("tokyo", "Japan"));
console.log(city_country("Boston", "USA"));