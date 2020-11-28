// fetch(url, {headers: {'Authorization': 'githubToken'}})



const commit = (username) => {
    //return promise
    fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization': 'githubToken'}})
        .then(data => data.json())
        //push event from api doc
        .then(data => data.find(event => event.type === "PushEvent"))
        .then(event => event.created_at)
        .then(date => console.log(date));
};

console.log(commit('calebwardlaw'));

//
// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));