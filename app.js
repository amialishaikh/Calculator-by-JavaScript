// let input = document.getElementById("inputBox");
// let button = document.querySelectorAll ('button');

// let string ="";
// let arr = Array.form(button);
// arr.array.forEach(button => {
//     button.addeventlistner('click', (e)=>{
//         if(e.target.innerHTML == '=') {
//             String =eval (string);
//             input.value =string;
//         }
//         else if (e.target.innerHTML == 'AC'){
//             String = ""
//             input.value = string;
//         } 
//         else if (e.target.innerHTML == 'DEL'){
//             String= string.substring(0,string.length-1);
//         }
//         else{
//         string+=e.target.innerHTML;
//         input.value= string;
//     }
//     })
    
// });

let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll('button');

let string = "";

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            try {
                // Evaluate the expression safely
                string = eval(string);
                input.value = string;
            } catch (error) {
                input.value = "Error";
                string = "";
            }
        } else if (e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
        } else if (e.target.innerHTML == 'DEL') {
            string = string.slice(0, -1); // Correct way to remove last character
            input.value = string;
        } else {
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});
