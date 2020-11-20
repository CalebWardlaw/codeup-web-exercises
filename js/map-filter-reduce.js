const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];


const countLanguages = users.filter(function(array){
    return array.languages.length >= 3;
})

console.log(countLanguages);

const stringEmails = users.map(function(users){
    return users.email
})

console.log(stringEmails);

//What is the , 0)
const yearsOfExp = users.reduce(function(currentSum, currentUser){
    return currentSum + currentUser.yearsOfExperience
}, 0)

console.log(yearsOfExp);

const longestEmail = users.reduce(function(currentLong, currentUser){
    if(currentLong.email.length > currentUser.email.length){
        return currentLong
    }
    return currentUser
})

console.log(longestEmail);
