import React, { useEffect } from 'react'
import logo from './assets/image.png'
import { useRef } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import student from './assets/student.svg'
import tie from './assets/tie.svg'

gsap.registerPlugin(ScrollTrigger);


function App() {

  const text1ref = useRef(null);
  const text2ref = useRef(null);
  const text3ref = useRef(null);
  const text4ref = useRef(null);
  const text5ref = useRef(null);
  const StudentBoxRef = useRef(null);
  const dotsRef = useRef(null);
  const tieBoxRef = useRef(null);
  const text6ref = useRef(null);

  useEffect(() => {
    const text1animation = gsap.to(text1ref.current, {
      scale: 1.5,
      duration: 1,
      opacity: 1,
      scrollTrigger: {
        trigger: text1ref.current,
        start: "top 80%",         // When the top of the element reaches 80% from the top of the viewport
        end: "bottom",         // End animation 500px after the start
        scrub: false,             // Disable scrub so it runs immediately
        toggleActions: "play none none reverse",  // Play when the element comes into view, reverse when it leaves
        // markers: true
      },
    });

    const text2animation = gsap.to(text2ref.current, {
      scale: 1.5,
      duration: 1,
      opacity: 1,
      scrollTrigger: {
        trigger: text2ref.current,
        start: "top 80%",         // When the top of the element reaches 80% from the top of the viewport
        end: "bottom",         // End animation 500px after the start
        scrub: false,             // Disable scrub so it runs immediately
        toggleActions: "play none none reverse",  // Play when the element comes into view, reverse when it leaves
        // markers: true
      },
    });

    const text3animation = gsap.to(text3ref.current, {
      scale: 1.5,
      duration: 1,
      opacity: 1,
      scrollTrigger: {
        trigger: text3ref.current,
        start: "top 80%",         // When the top of the element reaches 80% from the top of the viewport
        end: "bottom",         // End animation 500px after the start
        scrub: false,             // Disable scrub so it runs immediately
        toggleActions: "play none none reverse",  // Play when the element comes into view, reverse when it leaves
        // markers: true,
      },
    });

    const text4animation = gsap.to(text4ref.current, {
      scale: 1.5,
      duration: 1,
      opacity: 1,
      scrollTrigger: {
        trigger: text4ref.current,
        start: "top 80%",         // When the top of the element reaches 80%
        end: "bottom",         // End animation 500px after the start
        scrub: false,             // Disable scrub so it runs immediately
        toggleActions: "play none none reverse",  // Play when the element comes into view, reverse when it leaves
        // markers: true,
      },
    });

    const text5animation = gsap.to(text5ref.current, {
      scale: 1.5,
      duration: 1,
      scrollTrigger: {
        trigger: text5ref.current,
        start: "top 80%",         // When the top of the element reaches 80%
        end: "bottom",         // End animation 500px after the start
        scrub: false,             // Disable scrub so it runs immediately
        toggleActions: "play none none reverse",  // Play when the element comes into view, reverse when it leaves
        // markers: true,
      },
    });

    const studentBoxAnimation = gsap.to(StudentBoxRef.current, {
      backgroundColor: "#6249C5",
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: StudentBoxRef.current,
        start: "top 80%",         // When the top of the element reaches 80% from the top of the viewport
        end: "bottom",         // End animation 500px after the start
        scrub: false,             // Disable scrub so it runs immediately
        toggleActions: "play none none reverse",  // Play when the element comes into view, reverse when it leaves
        // markers: true,
      },
    });


    const tl = gsap.timeline();

    const dotsAnimation = tl.to(dotsRef.current, {
      height: "100%",
      duration: 1,
      opacity: 1,
      scrollTrigger: {
        trigger: dotsRef.current,
        start: "top 80%",         // When the top of the element reaches 80%
        end: "bottom",         // End animation 500px after the start
        scrub: true,             // Disable scrub so it runs immediately
        toggleActions: "play none none reverse",  // Play when the element comes into view, reverse when it leaves
        // markers: true,
      },
    });   

    const tieBoxAnimation = gsap.to(tieBoxRef.current, {
      backgroundColor: "#65B168",
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: tieBoxRef.current,
        start: "top 50%",         // When the top of the element reaches 80%
        end: "bottom",         // End animation 500px after the start
        scrub: false,             // Disable scrub so it runs immediately
        toggleActions: "play none none reverse",  // Play when the element comes into view, reverse when it leaves
        // markers: true,
      },
    });

    const text6animation = gsap.to(text6ref.current, {
      scale: 1.5,
      duration: 1,
      opacity: 1,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: tieBoxRef.current,
        start: "top 50%",         // When the top of the element reaches 80%
        end: "bottom",         // End animation 500px after the start
        scrub: false,             // Disable scrub so it runs immediately
        toggleActions: "play none none reverse",  // Play when the element comes into view,
        // markers: true,
      },
    });


    return () => {
      text1animation.kill(); // Kill the GSAP animation
      text2animation.kill();
      text3animation.kill();
      text4animation.kill();
      text5animation.kill();
      studentBoxAnimation.kill();
      dotsAnimation.kill();
      tieBoxAnimation.kill();
      text6animation.kill();
    };
  }, []);





  return (

    <>
      <div className="container h-[100vh] bg-white flex gap-6 justify-center items-center">
        <img src={logo} className="h-[200px] border rounded-full" alt="" />
        <span className="text-7xl font-semibold text-[#030816]">Explorin Academy</span>
      </div>
      <div className="flex flex-col gap-8 p-12 items-center min-h-[100vh]">
        <span ref={text1ref} className="text-4xl text-white opacity-50 font-bold">4+ years of</span>
        <span ref={text2ref} className="text-3xl text-white font-bold opacity-50">shaping</span>
        <span ref={text3ref} className="text-3xl text-white opacity-50 font-bold">tech careers</span>
        <span ref={text4ref} className='text-5xl mt-12 text-white opacity-50 font-semibold'>1.5 Lac+ learners</span>
        <span ref={text5ref} className="text-2xl text-white opacity-50 font-semibold">cracked dream roles at top tech companies</span>
        <div ref={StudentBoxRef} className='h-[100px] w-[100px] border rounded-xl border-none flex justify-center items-center bg-white opacity-50 '>
          <img src={student} alt="" />
        </div>
        <div className='relative flex justify-center'>
          <div className="inline-block letter-tighter p-0" style={{ writingMode: "vertical-lr", letterSpacing: "0.5rem" }}>
            ........................
          </div>
          <div ref={dotsRef} className=" absolute top-0 left-[5px] rounded-3xl z-10 bg-white w-[3px] h-0 ">
            
          </div>
        </div>
        <div ref={tieBoxRef} className=' h-[100px] w-[100px] border rounded-xl border-none p-4 flex justify-center items-center bg-white opacity-50 '>
          <img src={tie} alt="" />
          </div>
        <span ref={text6ref} className="text-5xl text-white opacity-50 font-semibold">1,400 Alumni in MAANG</span>
        <span  className="text-3xl text-white opacity-65 font-semibold">& more in 103/111 Unicorns</span>
      </div>
      <div className="container h-[100vh] bg-white flex gap-6 justify-center items-center">
        <img src={logo} className="h-[200px] border rounded-full" alt="" />
        <span className="text-7xl font-semibold text-[#030816]">Explorin Academy</span>
      </div>
    </>
  )
}

export default App
