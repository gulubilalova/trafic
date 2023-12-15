function starTrafic(){
    let red = document.getElementById('red')
    let yellow = document.getElementById('yellow')
    let green = document.getElementById('green')

   setTimeout(()=>{
    red.style.opacity=1
    red.style.boxShadow="0px 0px 50px 15px"
    green.style.opacity=.3
    yellow.style.opacity=.3

   },6000);
   setTimeout(()=>{
    yellow.style.opacity=1
    yellow.style.boxShadow="0px 0px 50px 15px"
   red.style.opacity=.3
   green.style.opacity=.3

   },9000);

   setTimeout(()=>{
    green.style.opacity=1
    green.style.boxShadow="0px 0px 50px 15px"
   red.style.opacity=.3
   yellow.style.opacity=.3

   },15000);
   
}
setInterval(()=>{

starTrafic()
},1500);
starTrafic()

        
