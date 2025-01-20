const list = document.querySelector(".bi-list"); 
const list_body = document.querySelector(".list-body"); 
const list_rows = document.querySelectorAll('.list-text-span');
const clock = document.querySelector(".bi-clock");
const clock_hours_body = document.querySelector('.clock-hours-body');
const arrow1 = document.querySelectorAll('.arrow1');
const arrow2 = document.querySelectorAll('.arrow2');
const outer_div_nav_options = document.querySelector('.outer-div-nav-options');
let timer;


//for my arrows
// mouseCameOver();
// function mouseCameOver(event){
//     event.target.addEventListener('mouseover', function(event){
//         arrow1.style.opacity = '1';
//         arrow2.style.opacity = '0';
//         arrow1.style.transform = 'translateX(29px)';
//         arrow2.style.transform = 'translateX(29px)';
//         arrow1.style.transition = '.3s';
//         arrow2.style.transition = '.3s';

//     });
//     list_rows.addEventListener('mouseout', function(){
//         arrow1.style.opacity = '1';
//         arrow2.style.opacity = '0';
//         arrow1.style.transform = 'translateX(29px)';
//         arrow2.style.transform = 'translateX(29px)';
//     });
// }

//for my clock list
clock.addEventListener('mouseover', function(){
    clock_hours_body.style.margin = '5px 0px';
    clock_hours_body.style.transition = '.3s';
    clearTimeout(timer);
    clock_hours_body.classList.add('visible');
    // clock_hours_body.style.display = 'block';
    // outer_div_nav_options.style.display = 'flex';
    outer_div_nav_options.classList.add('visible');
});
clock.addEventListener('mouseout', function(e){
    timer = setTimeout(() => {
        if (!clock_hours_body.contains(e.relatedTarget)) {
            clock_hours_body.classList.remove('visible');
            clock_hours_body.style.margin = '0px 0px';
            clock_hours_body.style.transition = '.3s';
            // clock_hours_body.style.display = 'none';
            outer_div_nav_options.classList.remove('visible');
        }
    }, 100);
        
});
clock_hours_body.addEventListener('mouseover', function() {
    clearTimeout(timer);
});
clock_hours_body.addEventListener('mouseout', function() {
    timer = setTimeout(() => {
        if (!clock.matches(':hover')) {
            clock_hours_body.style.margin = '0px 0px';
            clock_hours_body.style.transition = '.3s';
            clock_hours_body.classList.remove('visible');
            outer_div_nav_options.classList.remove('visible');

            // clock_hours_body.style.display = 'none';
            // outer_div_nav_options.style.display = 'none';
        }
    }, 100);
});

//for my pages list
list.addEventListener('mouseover', function(){
    list_body.style.margin = '5px 0px';
    list_body.style.transition = '.3s';
    clearTimeout(timer);
    list_body.classList.add('visible');
    // list_body.style.display = 'block';
    // outer_div_nav_options.style.display = 'flex';
    // outer_div_nav_options.style.z_index = '10';
    outer_div_nav_options.classList.add('visible');

});
list.addEventListener('mouseout', function(e){
    timer = setTimeout(() => {
        if (!list_body.contains(e.relatedTarget)) {
            list_body.classList.remove('visible');
            list_body.style.margin = '0px 0px';
            list_body.style.transition = '.3s';
            // list_body.style.display = 'none';
            // outer_div_nav_options.style.display = 'none';
            // outer_div_nav_options.style.z_index = '-3';
            outer_div_nav_options.classList.remove('visible');

        }
    }, 100);   
});
list_body.addEventListener('mouseover', function() {
    clearTimeout(timer);
});

list_body.addEventListener('mouseout', function() {
    timer = setTimeout(() => {
        if (!list.matches(':hover')) {
            list_body.style.margin = '0px 0px';
            list_body.style.transition = '.3s';
            list_body.classList.remove('visible');
            // list_body.style.display = 'none';
            // outer_div_nav_options.style.display = 'none';
            // outer_div_nav_options.style.z_index = '-3';
            outer_div_nav_options.classList.remove('visible');

        }
    }, 100);
});

document.addEventListener('wheel', (event) => {
    event.preventDefault();
    const container = document.querySelector('.scroll-container');
    container.scrollLeft += event.deltaY; // اسکرول افقی با موس
});
window.addEventListener('load', function () {
    var path = window.location.pathname;
    var fileName = path.substring(path.lastIndexOf('/') + 1);
  
    if (fileName === "restaurant-page.html") {
        if (window.matchMedia("(max-width: 760px)").matches) {
            alert('میتونید از زیر منوی سفید به چپ بکشید و عکس هارو ببینید!');
        } else {
            alert('در اینجا میتوانید عکس هایی از رستوران ما را ببینید!');
        }
    } else if (fileName === "index.html") {
      alert('در حال حاظر تنها صفحات منو و رستوران آماده هستند!');
    } 
    // else if (fileName === "menu-page.html"){
    //     if (window.matchMedia("(max-width: 1170px)").matches) {
    //         alert('به منوی رستوران خوش آمدید');
    //         } else if(window.matchMedia("(max-width: 990px)").matches) {
    //             alert('صفحه به اندازه یک گوشی کوچک است!');
    //         } else if(window.matchMedia("(max-width: 760px)").matches) {
    //             alert('صفحه به اندازه یک گوشی کوچک است!');
    //         } else if(window.matchMedia("(max-width: 500px)").matches) {
    //             alert('صفحه به اندازه یک گوشی کوچک است!');
    //         }
    // }
  });