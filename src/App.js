
import './App.css';
import githubIcon from './assets/icon-github-900.png';
import linkedinIcon from './assets/icon-linkedin-900.png';
import appleIcon from './assets/icon-apple-inc-900.png';
import downloadIcon from './assets/icon-download-96.png';
import InfiniteMenu from './InfiniteMenu';
import { Analytics } from "@vercel/analytics/react";

const items = [
  {
    image: githubIcon,
    link: 'https://github.com/aayushthorat27',
    title: 'Github',
    description: 'Wanna see the code? Click on the button!',
    style: 'left-[22%] sm:left-[1.5em]'
  },
  {
    // image: 'https://picsum.photos/400/400?grayscale',
    image: linkedinIcon,
    link: 'https://www.linkedin.com/in/aayush-kailas-thorat/',
    title: 'Linkedin',
    description: 'Check out my LinkedIn profile!',
    style: 'left-[14%] sm:left-[1.5em]'
  },
  {
    image: appleIcon,
    link: 'https://iphone-website-tau.vercel.app/',
    title: 'Apple Clone',
    description: 'One of my projects which is live.',
    style: 'left-[2%] sm-left-[1.25em]'
  },
  {
    image: downloadIcon,
    link: 'https://MyResume.pdf',
    title: 'My Resume',
    description: 'Download my resume to know more about me.',
    style: 'left-[2%] sm:left-[1.5em]'
  }
];

function App() {
  return (
    // <div className='h-screen relative text-yellow-400 sm:text-white'>
    <div className='h-screen relative text-white'>
      <InfiniteMenu items={items}/>
      <Analytics />
    </div>
  );
}

export default App;
