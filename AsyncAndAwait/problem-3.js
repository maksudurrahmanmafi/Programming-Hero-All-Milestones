/* const userName = async()=> {
    const name = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await name.json()
    
    return data;
}

userName().then((name)=>{
   const usernames = name.map((n)=>{
        
    return n.username;
    })
    console.log(usernames);
    console.log(usernames.filter(n => n.startsWith('M')));
}) */

//userName > 10


const userName = async () =>{
    const name = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await name.json()
    
    return data;
}

userName().then(names =>{
    const username = names.map(name => name.username);

    const filteredUserNames = username.filter(name => name.length > 10);
    console.log(filteredUserNames);
})