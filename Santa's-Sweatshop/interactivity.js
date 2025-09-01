// const container = document.querySelector('.container');
// const itemWidth = container.offsetWidth;

// container.addEventListener('scroll', () => {
//   clearTimeout(container.scrollTimeout);

//   container.scrollTimeout = setTimeout(() => {
//     const scrollLeft = container.scrollLeft;
//     const snapPoint = Math.round(scrollLeft / itemWidth) * itemWidth;

//     container.scrollTo({
//       left: snapPoint,
//       behavior: 'smooth',
//     });
//   }, 100); // Adjust delay as needed
// });