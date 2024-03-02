import './App.css';
import React from 'react';
import Box from './box';
import images1 from './assets/images/avata01.jpg';
import images2 from './assets/images/avata02.jpg';
import images3 from './assets/images/avata03.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faGamepad, faChartSimple, faHouse  } from '@fortawesome/free-solid-svg-icons';
import { icon } from '@fortawesome/fontawesome-svg-core';
function App() {
  const box1 = {
    id: 1,
    image: images1,
    title: 'Our Mission',
    description: 'Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    icon: faCoffee
  }
  const box2 = {
    id: 2,
    image: images2,
    title: 'Our Plan',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
    icon: faGamepad
  }
  const box3 = {
    id: 3,
    image: images3,
    title: 'Our Vision',
    description: 'Nemo enim ipsam voluptatem quia voluptas sit aut odit aut fugit, sed quia magni dolores eos qui ratione voluptatem sequi nesciunt Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.',
    icon: faChartSimple
  }
  return (
    <React.Fragment>
      <div className='app-wapper'>
        <Box item={box1}/>
        <Box item={box2}/>
        <Box item={box3}/>
      </div>
    </React.Fragment>
  );
}

export default App;
