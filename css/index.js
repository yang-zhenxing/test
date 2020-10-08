window.addEventListener('load', function() {
    const as = this.document.querySelectorAll('.banner-center>ul>li>a');
    console.log(as);
    for (var i = 0; i < as.length; i++) {
        as[i].addEventListener('mouseover', function() {
            this.classList.add('acolor');
        })
        as[i].addEventListener('mouseout', function() {
            this.classList.remove('acolor');
        })
    }
    const mi = document.querySelector('.mi');
    const rmi = document.querySelector('.rmi');
    const search = document.querySelector('#search');
    const backTop = this.document.querySelector('.db');
    const time = document.querySelector('#time');
    const reverse = document.querySelector('#reverse').querySelectorAll('span');
    const list = document.querySelectorAll('.list-item');
    // console.log(list);
    const changeList = document.querySelectorAll('.list-item-div');
    const important_a = document.querySelectorAll('.again-top>div a');
    const checkdiv = document.querySelectorAll('.again-main-main>div');
    // console.log(changeList);
    var count = -43;
    const topcount = -15;
    for (let i = 1; i < changeList.length; i++) {
        changeList[i].style.top = count + topcount + 'px';
        count -= 43;
    }
    gettime();
    for (let i = 0; i < list.length; i++) {
        list[i].setAttribute('index', i);
        list[i].addEventListener('mouseenter', function() {
            var index = this.getAttribute('index');
            // console.log(index);
            for (let j = 0; j < changeList.length; j++) {
                changeList[j].style.display = 'none';
            }
            changeList[i].style.display = 'block';
        });
        list[i].addEventListener('mouseleave', function() {
            this.children[1].style.display = 'none'
        })
    }
    window.addEventListener('scroll', () => {
        if (window.scrollY >= 800) {
            backTop.style.display = 'block';
        } else {
            backTop.style.display = 'none';
        }
    });
    backTop.addEventListener('click', function() {
        document.documentElement.scrollTop = 0;
    })
    var flag = true;
    search.addEventListener('focus', () => {
        var flag = false;
        op(mi);
        op(rmi);
    });
    search.addEventListener('blur', () => {
        if (flag == true) {
            mi.style.opacity = 1;
            rmi.style.opacity = 1;
        }
    });

    for (let i = 0; i < important_a.length; i++) {
        important_a[i].addEventListener('mouseenter', function() {
            console.log(i);
            for (var j = 0; j < important_a.length; j++) {
                important_a[j].classList.remove('orgain');
                // checkdiv[j].className = ''
                checkdiv[j].classList.remove('hide')
            }
            this.classList.add('orgain');
            checkdiv[i].className = 'hide clearfix'
        });
    }

    function gettime() {
        var date = new Date();
        var hour = date.getHours();
        time.innerHTML = hour + ':00'
    }
    // console.log(date);
    function reverseTime() {
        var date = new Date();
        var nextdate = date.getDate() + 1;
        // console.log(nextdate);
        var hour = date.getHours();
        hour = hour < 10 ? '0' + hour : hour;
        var minute = date.getMinutes();
        minute = minute < 10 ? '0' + minute : minute;
        var second = date.getSeconds();
        second = second < 10 ? '0' + second : second;
        reverse[0].innerHTML = hour;
        reverse[1].innerHTML = minute;
        reverse[2].innerHTML = second;
    }
    setInterval(reverseTime, 1000)
})




function op(ele) {
    var opacity = 1;
    setInterval(function() {
        // opacity = parseInt(opacity - 0.1);
        opacity = opacity - 0.1;
        if (opacity <= 0) {
            return false;
            var flag = true;
        } else {
            ele.style.opacity = opacity;
        }
    }, 20);
    // ele.style.display = 'none';
}