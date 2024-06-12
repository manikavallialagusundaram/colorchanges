function getRandomColor(){
    return `rgb(${Math.floor(Math.random() * 256)},${Math.floor(
        Math.random() * 256)},${Math.floor(
        Math.random() * 256)})`;
}
document.getElementById("clickButton").addEventListener("click",function(){
    this.style.backgroundColor = getRandomColor();
});
document.getElementById("hoverButton").addEventListener("mouseover",function(){
    this.style.backgroundColor = getRandomColor();
});
document.getElementById("dblClickButton").addEventListener("dblclick",function(){
    this.style.backgroundColor = getRandomColor();
});