import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from 'components/App/App';
import './index.css';
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// @import-normalize; /* bring in normalize.css styles */

// body {
//   margin: 0;
//   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
//     'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
//     sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
// }

// code {
//   font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
//     monospace;
// }

// .headlineContainer {
//   display: flex;
//   align-items: center;
//   height: 48px;
// }

// .searchStudent {
//   width: 499px;
// }

// .header {
//   background-color: rgb(223, 217, 217);
//   display: flex;
//   align-items: center;
//   height: 60px;
// }

// .link {
//   display: inline-block;
//   text-decoration: none;
//   padding: 12px;
//   font-weight: 500;
//   color: rgb(17, 15, 15);
//   font-size: 18px;
// }

// .active {
//   composes: link;
//   color: #2196f3;
// }

// .studentsList {
//   text-decoration: none;
//   list-style: none;
//   margin: 0 0;
//   padding-left: 0;
// }

// .checkbox {
//   margin-right: 26px;
// }

// .studentName {
//   /* margin-right: 231px; */
//   display: inline-block;
//   width: 231px;
// }

// .studentId {
//   /* margin-right: 28px; */
//   display: inline-block;
//   width: 28px;
// }

// .studentClass {
//   /* margin-right: 44px; */
//   display: inline-block;
//   width: 44px;
// }

// .studentScore {
//   /* margin-right: 98px; */
//   display: inline-block;
//   width: 98px;
// }

// .studentSpeed {
//   /* margin-right: 32px; */
//   display: inline-block;
//   width: 150px;
// }

// .studentParentName {
//   display: inline-block;
//   width: 350px;
// }
