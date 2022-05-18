// import React from 'react'
// import { getStatus, authenticate, authenticateFromEnvironmentVariable,
// jaiEnvironmentFromEnvironmentVariable, insertData, getFields,
// isDatabaseNameValid, checkInsertedData, addData } from 'jai-sdk'
// require('dotenv/config');

// if (process.env.JAI_API_KEY) {
//     authenticateFromEnvironmentVariable()
//     console.debug(authMessage());
// }

// if (process.env.JAI_ENVIRONMENT_NAME) {
//     jaiEnvironmentFromEnvironmentVariable()
//     console.debug(authMessage());
// }

// if (process.env.JAI_API_KEY != null || process.env.JAI_API_KEY != undefined) {
//     if (process.env.JAI_ENVIRONMENT_NAME != null || process.env.JAI_API_KEY != undefined) {
//         const res = await fetch('https://mycelia.azure-api.net/auth');

//         if (res.ok) {
//             const data = await res.json();
//             console.log(data);
//         } else {
//             console.log(error)
//         }
//     }
// }

// const dashboard = () => {
//   return (
//     <div>{data}</div>
//   )
// }

// export default dashboard