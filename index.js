// function clock(){
//     let hour = document.getElementById('hours');
//     let minut = document.getElementById('minutes'); 
//     let seconds = document.getElementById('seconds');
//     let period = document.getElementById('period');

//     let h = new Date().getHours();
//     let m = new Date().getMinutes();
//     let s = new Date().getSeconds();

//     let ampm = h>=12 ? "PM" : "AM";

//     if(h>12){
//         h = h-12;
//     }

//     h = (h<10)? "0" + h : h;
//     m = (m<10)? "0" + m : m;
//     s = (s<10)? "0" + s : s;


//     hour.innerHTML = h;
//     minut.innerHTML = m;
//      seconds.innerHTML = s;
//      period.innerHTML = ampm
// }

// // clock()
// setInterval(clock , 1000)



function clock(){
    let hour = document.getElementById('hours')
    let minut = document.getElementById('minutes')
    let second = document.getElementById('seconds')
    let period = document.getElementById('period')

   let  h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()

    let apmp = (h>=12)? "PM" : "AM";
    
    if(h>12){
        h = h-12;
    }

    h = (h<10)? "0" + h : h;
    s = (s<10)? "0" + s : s;
    m = (m<10)? "0" + m : m;


    hour.innerHTML = h
    minut.innerHTML = m
    second.innerHTML = s
    period.innerHTML = apmp

}
setInterval(clock , 1000)
// clock()