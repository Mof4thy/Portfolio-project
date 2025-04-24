// import { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';


// const ScrollToSection = () => {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     let elementId = pathname.substring(1); // Strip the leading '/'
//     if (!elementId) elementId = 'home'; // Default to "home" if the path is empty

//     const element = document.getElementById(elementId);
//     if (element) {
//       // Scroll into view with smooth scrolling
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   }, [pathname]);

//   return null; // This component does not render anything
// };

// export default ScrollToSection;