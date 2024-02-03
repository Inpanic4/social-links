import React from 'react';
import ListItem from './ListItem';

function App() {
  return (
    <div className="flex justify-center items-center h-screen bg-neutral-offBlack text-neutral-white">
      <div className="bg-neutral-darkGrey text-center px-4 sm:px-12 pb-7 pt-12 rounded-2xl">
        <img src="/social-links/images/avatar-jessica.jpeg" alt="Jessica" className="mx-auto rounded-full size-24 mb-8" />
        <div className="font-bold mb-2 text-2xl">Jessica Randall</div>
         <div className='text-primary-green mb-8 text-sm'>London, United Kingdom</div>
        <p className='font-thin mb-8 text-sm px-4 sm:px-8'>"Front-end developer and avid reader."</p>
        
        <ul className=' '>
        <ListItem name='GitHub'/>
          <ListItem name='FrontendMentor'/>
          <ListItem name='LinkedIn'/>
          <ListItem name='Twitter'/>
          <ListItem name='Instagram'/>
        </ul>
        
      </div>
    </div>
  );
}

export default App;
