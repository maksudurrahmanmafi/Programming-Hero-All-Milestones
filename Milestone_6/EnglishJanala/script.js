/* const level = `https://openapi.programming-hero.com/api/levels/all`;

const allLevel = () => {
    fetch(level).then(result => result.json())
    .then(eachLevel)
};

const eachLevel =(results)=>{
    const containeDiv = document.getElementById('level-container')
    containeDiv.innerHTML=""
    results.data.forEach(result => {
       const createDiv =  document.createElement ( 'div')
        containeDiv.innerHTML  `
         <button class="btn btn-outline btn-primary mx-4">
         Level-${result.level_no}</button>
        `   
       
        
         containeDiv.appendChild(child)
        console.log(result);
        
    });
}
allLevel()
 */

const level = "https://openapi.programming-hero.com/api/levels/all";

const allLevel = () => {
    fetch(level)
        .then(response => response.json())
        .then(eachLevel);
};

const eachLevel = (results) => {
    const containerDiv = document.getElementById("level-container");
    containerDiv.innerHTML = "";

    results.data.forEach((result) => {
        const createDiv = document.createElement("div");

        createDiv.innerHTML = `
            <button onClick ="vocaBulary(${result.level_no})" class="btn btn-outline btn-primary mx-4">
            <i class="fa-solid fa-book-open"></i>
                Level-${result.level_no}
            </button>
        `;

        containerDiv.appendChild(createDiv);
    });
};

// loadVocabular
const vocaBulary = (id)=>{
    
    fetch(`https://openapi.programming-hero.com/api/level/${id}`).then(res => res.json()).
    then(loadVocabulary
    )
}
const loadVocabulary = (words)=>{
    const vocabularyContainer = document.getElementById('loadvocabulary')
    vocabularyContainer.innerHTML=''

     if(words.data.length ===0){
            vocabularyContainer.innerHTML =`
            <div class="text-center col-span-full p-4">
            <img src="./assets/alert-error.png" class="mx-auto mb-4" alt="No Data">
        <p class="text-xl text-gray-400 font-bangla my-4">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
        <h2 class="text-4xl font-bold">নেক্সট Lesson এ যান</h2>
        </div>`
            return
        }

    words.data.forEach(word =>{
        const vocaContainer = document.createElement('div')
       
        vocaContainer.innerHTML =`
         <div class="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 text-center p-8 space-y-5">

            <h2 class="text-3xl font-bold text-gray-800">
                ${word.word}
            </h2>

            <div>
                <p class="text-gray-500 font-medium">
                    Meaning
                </p>

                <p class="text-xl font-bold text-blue-600">
                    ${word.meaning || "No Meaning"}
                </p>
            </div>

            <div>
                <p class="text-gray-500 font-medium">
                    Pronunciation
                </p>

                <p class="text-lg font-semibold font-bangla">
                    ${word.pronunciation || "Not Available"}
                </p>
            </div>

            <div class="flex justify-between items-center pt-4">

                <button
                    class="bg-blue-100 hover:bg-blue-500 hover:text-white transition duration-300 p-3 rounded-xl">
                    <i class="fa-solid fa-circle-info"></i>
                </button>

                <button
                    class="bg-blue-100 hover:bg-blue-500 hover:text-white transition duration-300 p-3 rounded-xl">
                    <i class="fa-solid fa-volume-high"></i>
                </button>

            </div>

        </div>
        `
        vocabularyContainer.appendChild(vocaContainer)
    })
}

allLevel();