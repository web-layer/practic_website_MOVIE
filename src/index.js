import React  from "react";
import {  createRoot  }  from "react-dom/client";
import App from './app.js'
import 'bootstrap/dist/css/bootstrap.min.css';




 let root = createRoot(document.getElementById("root"));
root.render(

           <App/>

)

