import { gsap } from 'gsap';

export const initContactAnimations = () => {
  gsap.from('[data-contact-panel]', {
    y: 58,
    opacity: 0,
    stagger: 0.16,
    duration: 0.95,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '#contacto',
      start: 'top 72%',
    },
  });

  gsap.from('[data-contact-map]', {
    scale: 0.96,
    opacity: 0,
    duration: 0.9,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '#contacto',
      start: 'top 70%',
    },
  });

  gsap.from('[data-contact-image]', {
    y: 24,
    opacity: 0,
    scale: 0.95,
    stagger: 0.12,
    duration: 0.85,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '#contacto',
      start: 'top 65%',
    },
  });
};
