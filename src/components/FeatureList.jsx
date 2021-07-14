import React from "react";
import Feature from "./Feature";

function FeatureList() {
  return (
    <div class="container">
      <div class="row">
        <div class="col-sm-4">
          <Feature />
        </div>

        <div class="col-sm-4">
          <Feature />
        </div>

        <div class="col-sm-4">
          <Feature />
        </div>
      </div>

      <div class="row">
        <div class="col-sm-4">
          <Feature />
        </div>

        <div class="col-sm-4">
          <Feature />
        </div>

        <div class="col-sm-4">
          <Feature />
        </div>
      </div>
    </div>
  );
}

// function Feature() {
//   return (
//     <div className="feature">
//       <h1>Feature 1</h1>
//       <p>e.g add fertiilizer</p>
//       <img
//         className="image"
//         src="https://www.swiss-singapore.com/wp-content/uploads/2017/06/shutterstock_294133898.jpg"
//         alt="pic"
//         width="100px"
//         height="100px"
//       ></img>
//     </div>
//   );
// }

export default FeatureList;

// <div className="feature">
//             <h1>Feature 1</h1>
//             <p>e.g add fertiilizer</p>
//             <img
//               className="image"
//               src="https://www.swiss-singapore.com/wp-content/uploads/2017/06/shutterstock_294133898.jpg"
//               alt="pic"
//               width="100px"
//               height="100px"
//             ></img>
