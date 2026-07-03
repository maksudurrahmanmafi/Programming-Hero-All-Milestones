const employes = [
    ["Mafi","Abdus Salam","Mallika Begum"],
    ["Sadd","Farhad Ali","Shoheli Begum"]
]
//without loop
console.log(employes [0][0]);

//using loop
for (const emp of employes) {
    console.log(`Employe name is : ${emp[0]}\nFather Name is : ${emp[1]}`);
    
}