const calculatetemp = ()=>
{
    const input = document.getElementById("temp").value;
    const select = document.getElementById("tempdiff");
    const option = tempdiff.options[select.selectedIndex].value;
    
    const celtofah = (cel)=>
    {
        let fah = Math.round((cel * 9/5) + 32);
        return fah;
    }

    const fahtocel = (fah)=>
    {
        let cel = Math.round((fah - 32) * 5/9);
        return cel;
    }

    let result;

    if(option === "")
    {
        alert("Please select the temprature");
    }else if(option === "cel")
    {
        result = celtofah(input);
        document.getElementById("show").innerHTML = ` ${result} °Fahrenheit `;
    }else{
        result = fahtocel(input);
        document.getElementById("show").innerHTML = ` ${result} °Celcius `;
    }
}

// const calculate2 = ()=>
// {
//     const input = document.getElementById("temp").value;
//     const select = document.getElementById("tempdiff");
//     const option = tempdiff.options[select.selectedIndex].value;
    
//     const celtofah = (cel)=>
//     {
//         let fah = Math.round((cel * 9/5) + 32);
//         return fah;
//     }

//     const fahtocel = (fah)=>
//     {
//         let cel = Math.round((fah - 32) * 5/9);
//         return cel;
//     }

//     let result;

//     if(option === "")
//     {
//         alert("Please select the temprature");
//     }else if(option === "cel")
//     {
//         result = celtofah(input);
//         document.getElementById("show").innerHTML = ` ${result} °Fahrenheit `;
//     }else{
//         result = fahtocel(input);
//         document.getElementById("show").innerHTML = ` ${result} °Celcius `;
//     }
// }
 
// const calculate3 = ()=>
// {
//     const input = document.getElementById("temp").value;
//     const select = document.getElementById("tempdiff");
//     const option = tempdiff.options[select.selectedIndex].value;
    
//     const celtofah = (cel)=>
//     {
//         let fah = Math.round((cel * 9/5) + 32);
//         return fah;
//     }

//     const fahtocel = (fah)=>
//     {
//         let cel = Math.round((fah - 32) * 5/9);
//         return cel;
//     }

//     let result;

//     if(option === "")
//     {
//         alert("Please select the temprature");
//     }else if(option === "cel")
//     {
//         result = celtofah(input);
//         document.getElementById("show").innerHTML = ` ${result} °Fahrenheit `;
//     }else{
//         result = fahtocel(input);
//         document.getElementById("show").innerHTML = ` ${result} °Celcius `;
//     }
// }
 
 