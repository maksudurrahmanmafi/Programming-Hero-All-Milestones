

const post = async ()=>{
    console.log(1);
    const ftch = await fetch('https://jsonplaceholder.typicode.com/posts');
    const json = await ftch.json()
    console.log(json);
    

    
}
post()

const post2 = async ()=>{
    console.log(1);
    try{

        const ftch = await fetch('https://jsonplaceholder.typicode.com/posts');
        const json = await ftch.json()
        console.log(json);
        
    }
    catch(err){
        console.log("Get error");
        
    }

    
}
post2()

/* const apple = async()=>{
    await console.log('🍎');
    
}
const banana =()=>{
    console.log('🍌');
    
}
banana()

apple() */
