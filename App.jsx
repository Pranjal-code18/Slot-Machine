import React from 'react';
import Slotm from './Slotm';
const App = () =>{
return(
<>
<h1 className="heading"> 🎰 Welcome to <span style = {{ fontWeight :'bold'}}> slot machine game</span> 🎰</h1>
<Slotm 
   x ='😄'
   y='😅'
   z='😆'

/>
<Slotm
    x ='🎅'
   y='🎅'
   z='🎅'
/>
<Slotm
     x ='💆'
   y='🙂'
   z='🤑'
/>
<Slotm
x ='☠️'
   y='🙃'
   z='🤪'
   />
</>
);
}
export default App;
