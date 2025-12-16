// IntersectionObserver to toggle visibility of section background logos
const logos = Array.from(document.querySelectorAll<HTMLImageElement>('.section-bg-logo'));

// Group logos by their nearest section parent
const sections = new Map<Element, HTMLImageElement[]>();
logos.forEach((img) => {
  const section = img.closest('section') ?? document.body;
  const arr = sections.get(section) || [];
  arr.push(img);
  sections.set(section, arr);
});

if (sections.size > 0) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const imgs = sections.get(entry.target) || [];
      imgs.forEach((el) => {
        const defaultOpacity = el.dataset.defaultOpacity ?? '0.25';
        if (entry.isIntersecting) {
          el.style.opacity = defaultOpacity;
          el.classList.add('visible');
        } else {
          el.style.opacity = '0';
          el.classList.remove('visible');
        }
      });
    });
  }, {
    root: null,
    rootMargin: '0px',
    threshold: 0.2 // consider section visible when 20% is in viewport
  });

  sections.forEach((_imgs, section) => observer.observe(section));
}
