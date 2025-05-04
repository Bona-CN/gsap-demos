let box = document.querySelector(".box");
let circle = document.querySelector(".circle");



// gsap.to([box, circle], {
//     x:-500,
//     rotation: 90,
//     duration: 4
// });

gsap.to(box, {
    x: -300,
    opacity: 0.5,
    duration: 2,
    delay: 0.5,
    ease: "bounce.out",
    // onComplete: () => alert("Done!")
  });

//   gsap.to(box, {
//     x: 300,
//     opacity: 0.5,
//     duration: 2,
//     delay: 1,
//     ease: "power2.in"
//   });

//   gsap.to(circle, {
//     x: -300,
//     opacity: 0.5,
//     duration: 1.5,
//     delay: 0.5,
//     ease: "bounce.out",
//     repeat: -1,
//     yoyo: true
//   });

gsap.to(box, {
    y: "40vh",       // move UP 50% of the viewport height
    duration: 0.8,     // quicker to simulate bounce speed
    ease: "bounce.out",
    repeat: -1,        // infinite bouncing
    yoyo: true,        // bounce back to the ground
    delay: 0.5         // small delay before first bounce
  });