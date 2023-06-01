//to top button

window.onscroll = function(){
    let YscrollAxis = document.documentElement.scrollTop;
    let YscrollAxis2 = document.body.scrollTop;
    let topBtn = document.querySelector(".toTopButton");
    if(YscrollAxis>200 || YscrollAxis2 >200){
        topBtn.style.display = "block";
    }
    else{
        topBtn.style.display = "none";
    }
};
    let topBtn = document.querySelector(".toTopButton");
topBtn.addEventListener("click",_=>{
    window.scrollBy(0,-1* document.documentElement.scrollTop);
    window.scrollBy(0,-1* document.body.scrollTop);
})


//progress bar


const body = document.body;
const bar = document.querySelector(".bar");
const Update = () =>{
    let scroll = (window.scrollY/(body.scrollHeight - window.innerHeight))*100;
    bar.style.width = `${scroll}%`;
    requestAnimationFrame(Update);
};
Update();


//karty
window.addEventListener('scroll', function() {
    let topics = document.querySelectorAll('.topic');

    for (let i = 0; i < topics.length; i++) {
        (function(index) {
            let topic = topics[index];
            let position = topic.getBoundingClientRect().top;
            let windowHeight = window.innerHeight;

            if (position < windowHeight - topic.offsetHeight) {
                setTimeout(function() {
                    topic.classList.add('visible');
                }, index * 200); // Opóźnienie animacji w milisekundach
            }
        })(i);
    }
});

