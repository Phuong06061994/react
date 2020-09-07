import  React from 'react';  
const Contact=React.lazy(()=>import('./components/Contact'));  

const routes = [  
    { path: '/Contact', component: Contact },  
    
];  
  
export default routes;  