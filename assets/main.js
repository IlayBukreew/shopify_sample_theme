var slides = document.getElementById('slides');
var controls = document.getElementsByClassName('control');
var slidesCount = slides.children.length;

// for (let index = 0; index < controls.length; index++) {
//     controls[index].addEventListener('click', function() {
//         for (let i = 0; i < slides.children.length; i++) {
//             var element = slides.children[i];
//             if (element.classList.contains('active')) {
//                 element.classList.remove('active');
//                 if (this.classList.contains('next')) {
//                     if (element.nextElementSibling) {
//                         element.nextElementSibling.classList.add('active');
//                     } else {
//                         slides.children[0].classList.add('active');
//                     }
//                 } else {
//                     if (element.previousElementSibling) {
//                         element.previousElementSibling.classList.add('active');
//                     } else {
//                         slides.lastElementChild.classList.add('active');
//                     }
//                 }
//                 break; 
//             }
//         }
//     })
// }

var circles = document.getElementById('circles');
var prod_imgs = document.getElementById('prod_imgs');
var prod_wrap = document.getElementById('prod_wrap');
var sec5 = document.getElementById('sec5');

for (var index = 0; index < circles.children.length; index++) {
    var circle = circles.children[index].children[0];
    circle.addEventListener('click', function () {
        for (var i = 0; i < circles.children.length; i++) {
            circles.children[i].children[0].classList.remove('active');
            prod_imgs.children[i].classList.remove('active');
            prod_wrap.children[i].classList.remove('active');
        }
        this.classList.add('active');
        prod_imgs.children[this.getAttribute('order')].classList.add('active');
        prod_wrap.children[this.getAttribute('order')].classList.add('active');
        sec5.className = 'sec5' + this.getAttribute('order') + '';
    })
}
/* Look for any elements with the class "custom-select": */
var xSelects = document.getElementsByClassName('custom_select');

for (var index = 0; index < xSelects.length; index++) {
    var x = xSelects[index];
    
    var selElmnt = x.getElementsByTagName("select")[0];
    /* For each element, create a new DIV that will act as the selected item: */
    var a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x.appendChild(a);
    /* For each element, create a new DIV that will contain the option list: */
    var b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    for (var j = 0; j < selElmnt.length; j++) {
        var c = document.createElement("DIV");
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.addEventListener("click", function (e) {
            /* When an item is clicked, update the original select box,
            and the selected item: */
            var s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            var h = this.parentNode.previousSibling;
            for (var i = 0; i < s.length; i++) {
                if (s.options[i].innerHTML == this.innerHTML) {
                    s.selectedIndex = i;
                    h.innerHTML = this.innerHTML;
                    var y = this.parentNode.getElementsByClassName("same-as-selected");
                    for (var k = 0; k < y.length; k++) {
                        y[k].removeAttribute("class");
                    }
                    this.setAttribute("class", "same-as-selected");
                    break;
                }
            }
            h.click();
        });
        b.appendChild(c);
    }
    x.appendChild(b);
    a.addEventListener("click", function (e) {
        /* When the select box is clicked, close any other select boxes,
        and open/close the current select box: */
      	console.log(x.nextElementSibling)
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
    });
}

function closeAllSelect(elmnt) {
    /* A function that will close all select boxes in the document,
    except the current select box: */
    var arrNo = [];
    var xx = document.getElementsByClassName("select-items");
    var yy = document.getElementsByClassName("select-selected");
    for (var i = 0; i < yy.length; i++) {
        if (elmnt == yy[i]) {
            arrNo.push(i)
        } else {
            yy[i].classList.remove("select-arrow-active");
        }
    }
    for (var i = 0; i < xx.length; i++) {
        if (arrNo.indexOf(i)) {
            xx[i].classList.add("select-hide");
        }
    }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);


var d = document;
var wrap = d.querySelector('.wrap');
var items = d.querySelector('.items');
var itemCount = d.querySelectorAll('.blog_posts').length;
var scroller = d.querySelector('.scroller');
var pos = 0;

function setTransform() {
  items.style.transform = 'translate3d(' + (-pos * items.offsetWidth) + 'px,0,0)';
}

function prev() {
  pos = Math.max(pos - 1, 0);
  setTransform();
}

function next() {
  pos = Math.min(pos + 1, itemCount - 1);
  setTransform();
}

window.addEventListener('resize', setTransform);