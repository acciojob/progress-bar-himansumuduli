//your JS code here. If required.




const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');
const lines = document.querySelectorAll('.line');

let currentActive = 1;

next.addEventListener('click', () => {
    currentActive++;

    if (currentActive > circles.length) {
        currentActive = circles.length;
    }

    update();
})

prev.addEventListener('click', () => {
    currentActive--;

    if (currentActive < 1) {
        currentActive = 1;
    }

    update();
})

function update() {
    circles.forEach((circle, idx) => {
     idx<currentActive ? circle.classList.add("active"):
		 circle.classList.remove("active");
    });

    lines.forEach((line, idx) => {
     idx<currentActive-1 ? line.classList.add("active"):
		 line.classList.remove("active");
    });

	prev.disabled= currentActive ===1;
	next.disabled=currentActive ===circles.length;
    // if (currentActive === 1) {
    //     prev.disabled = true;
    // } else if (currentActive === circles.length) {
    //     next.disabled = true;
    // } else {
    //     prev.disabled = false;
    //     next.disabled = false;
    // }
}
