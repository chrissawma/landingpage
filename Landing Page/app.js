function smoothScroll(target,duration){
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;

    function animation(currentTime){
        if(startTime === null )
            startTime = currentTime;
            console.log(startTime);
            
        var timeElapsed = currentTime - startTime;

        var run = ease(timeElapsed,startPosition,distance,duration);
        window.scrollTo(0,run);
        if(timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t,b,c,d) {
        t /= d / 2;
        if(t < 1) return c/2 * t * t + b;
        t--;
        return -c / 2 * ( t * ( t-2)-1) + b;
    }


    requestAnimationFrame(animation);
}

var home = document.querySelector('.na')

    home.addEventListener('click', function(){
        smoothScroll('#index',555);
    });

    var github = document.querySelector('.nb')

    github.addEventListener('click', function(){
        smoothScroll('#b',555);
    });

    var linkedin = document.querySelector('.nc')

    linkedin.addEventListener('click', function(){
        smoothScroll('#c',555);
    });

    var about = document.querySelector('.nd')

    about.addEventListener('click', function(){
        smoothScroll('#d',555);
    });

    var curious = document.querySelector('.ne')

    curious.addEventListener('click', function(){
        smoothScroll('.contente',555);
    });