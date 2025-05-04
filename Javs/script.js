let box = document.querySelector(".box");
let circle = document.querySelector(".circle");


  gsap.to(circle, {
    x: -300,
    opacity: 0.5,
    duration: 1.5,
    delay: 0.5,
    ease: "bounce.out",
    repeat: -1,
    yoyo: true
  });

gsap.to(box, {
    y: "40vh",       // move UP 50% of the viewport height
    duration: 0.8,     // quicker to simulate bounce speed
    ease: "bounce.out",
    repeat: -1,        // infinite bouncing
    yoyo: true,        // bounce back to the ground
    delay: 0.5         // small delay before first bounce
  });
