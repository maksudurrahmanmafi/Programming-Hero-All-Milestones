const sentence = "I love JavaScript because JavaScript is awesome and it is fun and you have to do it ";
const sentence2= sentence.trim().split(" ")

const wordCount=sentence2.reduce((acc,cur)=>{
    if(acc[cur]){
        acc[cur]+=1
    }
    else acc[cur]=1
    return acc
},{})

console.log(wordCount);
