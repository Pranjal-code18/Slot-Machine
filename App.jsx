import React from 'react';
import Slotm from './Slotm';
const App = () =>{
return(
<>
<h1 className="heading"> ð° Welcome to <span style = {{ fontWeight :'bold'}}> slot machine game</span> ð°</h1>
<Slotm 
   x ='ð'
   y='ð'
   z='ð'

/>
<Slotm
    x ='ð'
   y='ð'
   z='ð'
/>
<Slotm
     x ='ð'
   y='ð'
   z='ðĪ'
/>
<Slotm
x ='â ïļ'
   y='ð'
   z='ðĪŠ'
   />
</>
);
}
export default App;
