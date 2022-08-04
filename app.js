


// const CountUp = () => {
//     const countDate = new Date("September 7, 2014 00:00:00").getTime();
//     const ulList = document.querySelector('#ul');
//     const now = new Date().getTime();
//     // How Much time Left since he came here
//     const gap = now - countDate;

//     const sec = 1000;
//     const min = 60 * sec;
//     const hours = 60 * min;
//     const day = 24 * hours;
//     const years = 365 * day;
 

//     const current_number_year = Math.floor(gap / years);
//     const current_number_day = Math.floor((gap % years) / day );
//     const current_number_hours = Math.floor((gap % day) / hours);
//     const current_number__minutes = Math.floor((gap % hours) / min);
//     const current_number_seconds = Math.floor((gap % min) / sec);


//     ulList.innerHTML=`<li> ${current_number_year}<span> Year </span></li>`;
//     ulList.innerHTML +=`<li>${current_number_day}<span> Days </span></li>`;
//     ulList.innerHTML +=`<li> ${current_number_hours}<span> Hours </span></li>`;
//     ulList.innerHTML +=`<li> ${current_number__minutes}<span> Minutes </span></li>`;
//     ulList.innerHTML +=`<li> ${current_number_seconds}<span> Seconds </span></li>`;
//     // divForNumbers.innerHTML=`<h2> S ${current_number_seconds}</h2>`;




// }
// setInterval(CountUp, 1000);