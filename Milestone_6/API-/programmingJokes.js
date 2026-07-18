/* const jokes = async() =>{
    try{
        const data =await fetch('https://v2.jokeapi.dev/joke/Programming')
        const convert = await data.json()
        console.log(convert);
        
    }
    catch(err){
        console.log('get error');
        
    }
}
jokes() */

const setup = document.getElementById("setup");
const delivery = document.getElementById("delivery");
const btn = document.getElementById("btn");

const jokes = async () => {

    try{

        const response = await fetch("https://v2.jokeapi.dev/joke/Programming");

        const data = await response.json();

        if(data.type === "single"){

            setup.textContent = data.joke;
            delivery.textContent = "";

        }

        else{

            setup.textContent = data.setup;
            delivery.textContent = data.delivery;

        }

    }

    catch(error){

        setup.textContent = "Something went wrong!";
        delivery.textContent = "";

    }

}

btn.addEventListener("click", jokes);
