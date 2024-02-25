const topBox = document.querySelector(".top-box");

topBox.addEventListener("click", (e) => {
    e.target.classList.add("animate");
    setTimeout(()=>{  e.target.classList.add("hide");},2000)
   
});
