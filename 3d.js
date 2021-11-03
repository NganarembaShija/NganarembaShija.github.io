// Movement to happen
const card = document.querySelector('.card');
const container=document.querySelector('.container');


// Items
const title = document.querySelector(".title");
const sneaker = document.querySelector(".sneaker img");
const purchase = document.querySelector(".purchase button");
const description = document.querySelector(".info h3");
const sizes = document.querySelector(".sizes");




// // Moving Animation event

// container.addEventListener('mousemove',(e)=>{
//    // console.log(e.pageX, e.pageY);
//    let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
//    let yAxis = (window.innerHeight /2 - e.pageY) / 20;
//    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
// })


// // Animate in
// container.addEventListener('mouseenter',(e)=>{
//     card.style.transition = "none";
//     // Pop out effect
//     title.style.transform ="perspective(1000px) translateZ(150px)";
//     sneaker.style.transform ="perspective(1000px) translateZ(300px) rotate(-45deg)";
//     purchase.style.transform ="perspective(1000px) translateZ(150px)";
//     description.style.transform =" perspective(1000px) translateZ(150px)";
//     sizes.style.transform ="perspective(1000px) translateZ(150px)";


// })

// // Animate out
// container.addEventListener('mouseleave', (e)=>{
//     card.style.transition = "all 0.5s ease";
//     card.style.transform = `rotateY(0deg) rotateX(0deg)`;

//     // Pop in 
//     title.style.transform ="translateZ(0)";
//     sneaker.style.transform ="translateZ(0) rotate(0deg)";
//     purchase.style.transform ="translateZ(0)";
//     description.style.transform ="translateZ(0)";
//     sizes.style.transform ="translateZ(0)";

// })

sneaker.addEventListener("mousemove",(e)=>{
    sneaker.style.transform = "perspective(1000px) translateZ(750px) rotate(-45deg)";
})
sneaker.addEventListener("mouseleave",(e)=>{
    sneaker.style.transform = "translateZ(0) rotate(0)";
})