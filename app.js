// let n= prompt("Enter the number!!");

// function sumn(n){
//     let sum=0;
//     for(let i=1;i<=n;i++){
//          sum=sum+i;
//     }
//     console.log(sum);
// }

// sumn(n);

//////////////////////////////////////////////


// let str=["hi","hello","how","are","you","?"];

// function printstring(str){
//     let result="";
//     for(let i=0;i<str.length;i++){
//         result+=str[i];
//         result+=" ";
//     }

//     return result;
// }

// printstring(str);

//////////////////////////////////////////////
// let number= (Math.floor(Math.random()*6))+1;
// console.dir(number);


/////////////////////////////////////////////////


// let btn=document.querySelector("button");



// btn.addEventListener("click",function(){
//     let h3= document.querySelector('h3');
//     let randomColor= randomcolor();
//     h3.innerText=randomColor;

//     let div= document.querySelector('div');
//     div.style.backgroundColor=randomColor;

//     console.log("color updated");
// });

// function randomcolor(){
//     let red=Math.floor(Math.random()*255);
//     let green=Math.floor(Math.random()*255);
//     let blue=Math.floor(Math.random()*255);

//     let color=`(${red},${green},${blue})`;
//     return color;
// }


document.addEventListener("DOMContentLoaded", function() {
    // Get all "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll(".product button");

    // Add click event listener to each button
    addToCartButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            // Get product details
            const product = button.closest(".product");
            const productName = product.querySelector("h2").innerText;

            // Add product to cart (in this example, we'll just log the product name)
            console.log(`Added ${productName} to cart!`);

            // You can add more complex logic here, such as updating a cart display or sending an AJAX request to add the product to a server-side cart
        });
    });
});
