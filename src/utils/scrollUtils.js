
export const scrollToTopWithOffset = (offset = 70) => {
  window.scrollTo({
    top: offset,
    behavior: 'smooth'
  });
};


export const scrollToElementWithOffset = (selector, offset = 70) => {
  const element = document.querySelector(selector);
  if (element) {
    const elementPosition = element.offsetTop;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};


export const useScrollToTop = () => {
  const scrollToTop = () => {
    
    setTimeout(() => {
      window.scrollTo({
        top: 70, 
        behavior: 'smooth'
      });
    }, 100);
  };

  return scrollToTop;
};
