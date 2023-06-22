'use strict'
function initDynamicCircle() {
    let parentCircles = document.querySelectorAll('.circle');

    if (parentCircles) {
        for (let parentCircle of parentCircles) {
            let percentValue = parentCircle.dataset.percents;
            let scale = parentCircle.querySelector('.circle__rate');
            
            let percent = 0;
            let degree;
            let animation;
            let topPosition = parentCircle.getBoundingClientRect();

            window.addEventListener('scroll', function() {
               let bottomWindowFrame = window.pageYOffset + window.innerHeight;
               if (bottomWindowFrame > topPosition.y) {
                    setTimeout(startAnimation, 1000);
               };

            }, false);

            function startAnimation() {
                animation = setInterval(setScalePosition, 30);
            }


            function setScalePosition() {
                if (percent > percentValue) {
                    clearInterval(animation);
                } else if (percent <= percentValue) {
                    showHideSides(degree);
                    scale.style.transform = `rotate(${degree}deg)`;
                    if (percent >= 100) {
                        percent = 100; 
                    }
                    degree = 360 / 100 * percent;
                    parentCircle.querySelector('.circle__value').innerText = `${percent}%`;
                    percent++;      
                }  
            }

            function showHideSides(deg) {
                if (deg < 180) {
                    parentCircle.querySelector('.circle__left').style.zIndex = '13';
                    parentCircle.querySelector('.circle__right').style.zIndex = '11';
                    parentCircle.querySelector('.circle__right').classList.remove('_show-side');
                } else if (deg > 180) {
                    parentCircle.querySelector('.circle__left').style.zIndex = '11';
                    parentCircle.querySelector('.circle__right').style.zIndex = '13';
                    parentCircle.querySelector('.circle__right').classList.add('_show-side');
                }
            }
        }
    }
};
initDynamicCircle();

