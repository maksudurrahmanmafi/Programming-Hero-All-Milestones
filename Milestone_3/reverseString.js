const st = 'Hello Bangaladeshi people '

/* for(const c of st){
    console.log(c);
    

} */
// second way to reverse string

/* const rev = st.split(" ").reverse().join("|");
console.log(rev); */

// 3rd way to rev string


let  a = '';
for (const c of st) {
    a = c+a
    
}
console.log(a);

