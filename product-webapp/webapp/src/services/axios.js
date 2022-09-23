import axios from "axios";

// this is new code
console.log("PAGEURL :> ",window.location.href)

const routeUrl = window.location.href
const url = routeUrl.slice(0,-6)
var ip = url.split('/')[2].split(':')[0];

const builtip = 'http://' + ip + ":8080"
console.log("BUILT URL :", builtip)

//REACT_APP_API_BASEURL = "http://18.224.126.68:8080/%22

  const instance = axios.create({

     baseURL: builtip
  //  baseURL: `${process.env.REACT_APP_API_BASEURL}`
  });


export default instance;



// this is old code


// const instance = axios.create({
//   baseURL: `http://localhost:8097/api/v1/`
//    baseURL: `${process.env.REACT_APP_API_BASEURL}`
  
// });

//  const instance = axios.create({
    
    // baseURL: `${process.env.REACT_APP_LOCAL_URL}`
//    baseURL: `${process.env.REACT_APP_API_BASEURL}`
 // });


//  export default instance;


