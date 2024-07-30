//TASK 21
//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

interface itCource{
    courseName: string;
    location: string;
    onSiteStudents: number;
}

let itCource = { 
    courseName : "Typescript and JavaScript",
    location : "Governer House Sindh",
    onSiteStudents : 50000
};
console.log(itCource);
