import { gsap } from 'gsap';

var tl = gsap.timeline({defaults:{duration: 1, ease: "circ.out", opacity: 0, autoAlpha: 0}})
tl.to("#loading-screen", {immediateRender: true, smoothOrigin:true, delay: 1, duration: 1})
.from(".branding", {immediateRender: true, smoothOrigin:true, duration: 3, scale: 1.2},"-=1.2")

var tl2 = gsap.timeline({defaults:{}})
tl2.to(".loading-letter", {immediateRender: true, smoothOrigin:true, y: 20, skewX:45, stagger: 0.1, repeat: -1, repeatDelay:0.2, yoyo: true})

gsap.config({
    nullTargetWarn: false,
  });

