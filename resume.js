function main(event){
	event.preventDefault();
  var targetSectionId=this.textContent.trim().toLowerCase();
  var targetSection=document.getElementById(targetSectionId);
  
  var scrollInterval=setInterval(function (){
    var targetCoordinates= targetSection.getBoundingClientRect();
    if(targetCoordinates.top<=0)
      {
        clearInterval(scrollInterval);
        return;
      }
    scrollBy(0,60);
  },10);
}
var v=document.querySelectorAll(".nav-menu a");

for(let i=0;i<v.length;i++)
{ 		
  v[i].addEventListener("click",main);
}



// Bar filling
var progressBars = document.querySelectorAll(".skill-bar > div");

function initialiseBar(bar) {
    bar.setAttribute("data-visited", false);
    bar.style.width = 0 ;
}

for (var bar of progressBars) {
    initialiseBar(bar);
}



function fillBar(bar) {

    var currentWidth = 0;
    var targetWidth = bar.getAttribute("data-bar-width");
    var interval = setInterval(function () {
        if (currentWidth >= targetWidth) {
            clearInterval(interval);
            return;
        }
        currentWidth++;
        bar.style.width = currentWidth+"%";
        console.log(bar.style.width);
    }, 5);

}



// This function uses a for loop for individual progress bars.
function checkScroll() {

    for (let bar of progressBars) {
        var barCoordinates = bar.getBoundingClientRect();
        if ((bar.getAttribute("data-visited") == "false") &&
            (barCoordinates.top <= (window.innerHeight - barCoordinates.height))) {
            bar.setAttribute("data-visited", true);
            fillBar(bar);
        } else if (barCoordinates.top > window.innerHeight) {
            bar.setAttribute("data-visited", false);
            initialiseBar(bar);
        }

    }
}



window.addEventListener("scroll", checkScroll);

// This event fills the progress bars if they are displayed on the screen when the page is loaded.
//window.addEventListener("load", checkScroll);