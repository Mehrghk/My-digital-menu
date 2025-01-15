const list = document.querySelector(".bi-list"); 
const list_body = document.querySelector(".list-body"); 
const list_rows = document.querySelectorAll('.list-text-span');
const clock = document.querySelector(".bi-clock");
const clock_hours_body = document.querySelector('.clock-hours-body');
const arrow1 = document.querySelectorAll('.arrow1');
const arrow2 = document.querySelectorAll('.arrow2');
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
});
clock.addEventListener('mouseout', function(e){
    timer = setTimeout(() => {
        if (!clock_hours_body.contains(e.relatedTarget)) {
            clock_hours_body.classList.remove('visible');
            clock_hours_body.style.margin = '0px 0px';
            clock_hours_body.style.transition = '.3s';
        }
    }, 50);
        
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
        }
    }, 50);
});

//for my pages list
list.addEventListener('mouseover', function(){
    list_body.style.margin = '5px 0px';
    list_body.style.transition = '.3s';
    clearTimeout(timer);
    list_body.classList.add('visible');
});
list.addEventListener('mouseout', function(e){
    timer = setTimeout(() => {
        if (!list_body.contains(e.relatedTarget)) {
            list_body.classList.remove('visible');
            list_body.style.margin = '0px 0px';
            list_body.style.transition = '.3s';
        }
    }, 50);   
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
        }
    }, 50);
});

document.addEventListener('wheel', (event) => {
    event.preventDefault();
    const container = document.querySelector('.scroll-container');
    container.scrollLeft += event.deltaY; // اسکرول افقی با موس
});