import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { initHeroAnimations } from './hero';
import { initServicesAnimations } from './services';
import { initContactAnimations } from './contact';

export const initPageAnimations = () => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  initHeroAnimations();
  initServicesAnimations();
  initContactAnimations();
};
