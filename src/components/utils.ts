type MediaQuery = 'small' | 'medium' | 'large';

const breakpoints = {
  small: 576,
  medium: 768,
  large: 992
};

const mediaQuries = (size: MediaQuery) => {
  return `@media (max-width: ${breakpoints[size]}px)`;
};

export { mediaQuries };
