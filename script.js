function updateClock(){
    var currentTime=new Date();
    var date=currentTime.getDate();
    var Month=currentTime.getMonth();
    var year=currentTime.getFullYear();
    var hours=currentTime.getHours();
    var minutes=currentTime.getMinutes();
    var seconds=currentTime.getSeconds();

    var str_date=date.toString();
    var str_Month=Month.toString();
    var str_Year=year.toString();
   var str_hours=hours.toString().padStart(2,'0');
   var str_minutes=minutes.toString().padStart(2,'0');
   var str_seconds=seconds.toString().padStart(2,'0');

   document.querySelector(".date").textContent=str_date+"/";
   document.querySelector(".month").textContent=str_Month+"/";
   document.querySelector(".year").textContent=str_Year;
   document.querySelector(".hour p").textContent=str_hours;
   document.querySelector(".minute p").textContent=str_minutes;
   document.querySelector(".second p").textContent=str_seconds;

   setInterval(updateClock,1000);
}

function Backgroundcolor(){
    var colours=['#CCCCFF','#6495ED','#40E0D0','#800080','#008080']
    var random_colours=colours[Math.floor(Math.random()* colours.length)];
    document.body.style.backgroundColor=random_colours;

    setTimeout(Backgroundcolor,3000);
    

}

updateClock();
Backgroundcolor();