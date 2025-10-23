import http from "k6/http";
import { sleep, check } from "k6";

export const options = {
    //vus: 10,
    //duration: '15s',
    thresholds: {
      // 90% of requests must finish within 400ms.
      http_req_duration: ['p(90) < 100'],
    },
    
     stages: [
        { duration: '5s', target: 4 },
        { duration: '5s', target: 50 },
        { duration: '5s', target: 0 },
      ], 
  };


export default function () {
 
 
   const responses = http.batch([["GET","http://localhost:8080/"],
  ["GET","http://localhost:8080/endpoints/one"],["GET","http://localhost:8080/endpoints/two"]]);

  check(responses[0], {
    "R1 status es 200": (r) => r.status === 200,
        "R1 no hay datos": (r) => r.body.includes("World")        
  });

  check(responses[1], {
    "R2 status es 200": (r) => r.status === 200,
        "R2 es endpoint 1": (r) => r.body.includes("This is the endpoint 1")
  }); 

  check(responses[2], {
    "R3 status es 200": (r) => r.status === 200,
        "R3 chequeo numero": (r) => r.body.includes("6")
  }); 

 
 sleep(1);
}
