import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const Hero = () => {
  useGSAP(() => {
    const heroSplit = new SplitText('.title', {type:'chars, words'});
    const paragraphSplit = new SplitText('.subtitle', {type:'lines, words'});
    const viewLinkSplit = new SplitText('.view-link', {type:'words'})

    heroSplit.chars.forEach((char) => char.classList.add('text-gradient'))

    gsap.from(heroSplit.chars,{
      yPercent: 60,
      duration:1,
      ease: 'expo.out',
      stagger: 0.06
    })

    gsap.from(paragraphSplit.lines,{
      yPercent: 100,
      duration:1,
      ease: 'expo.out',
      stagger:0.06,
      opacity:0,
      delay:1
    })
    gsap.from(viewLinkSplit.words,{
      xPercent: -100,
      duration:1,
      ease: 'expo.out',
      opacity:0,
      delay:1.5
    })

    gsap.timeline({
      scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    })
    .to('.left-leaf', {y:-200}, 0)
    .to('.right-leaf', {y:200}, 0)


  },[])
  return (
    <>
      <section id="hero" className="noisy">
        <h1 className="title">MOJITO</h1>

        <img
          src="/images/hero-left-leaf.png"
          alt="left-leaf"
          className="left-leaf w-54"
        />

        <img
          src="/images/hero-right-leaf.png"
          alt="right-leaf"
          className="right-leaf w-44"
        />

        <div className="body">
          <div className="content mx-auto px-5">
            <div className="space-y-5 hidden md:block">
              <p><u>Cool. Crisp. Classic </u></p>
              <p className="subtitle">
                Sip the Spirit <br /> of Summer
              </p>
            </div>

            <div className="view-cocktails">
              <p className="subtitle">
                Every cocktail on our menu is a blend of premium ingredients,
                creative flair, and timeless recipes — designed to delight your
                senses.
              </p>
              <a href="#cocktails" className="view-link">View Cocktails</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
