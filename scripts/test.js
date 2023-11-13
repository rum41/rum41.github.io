
// import axios from 'axios';
// // API URLs
// const apiUrls = [
//     'https://twland.ronny.tw/index/search?lands[]=台南市歸仁區歸仁北段1109-5號',
//     'https://twland.ronny.tw/index/search?lands[]=台南市善化區小新營段0814-0002號',
//     'https://twland.ronny.tw/index/search?lands[]=台南市仁德區興安段249-5號',
//     'https://twland.ronny.tw/index/search?lands[]=台南市白河區新興段718號',
//     'https://twland.ronny.tw/index/search?lands[]=台南市仁德區興安段249-4號',
//     'https://twland.ronny.tw/index/search?lands[]=台南市永康區鹽新段1134-2號',
//     'https://twland.ronny.tw/index/search?lands[]=台南市仁德區興安段249-2號',
//     'https://twland.ronny.tw/index/search?lands[]=台南市永康區鹽新段1134-3號',
//     'https://twland.ronny.tw/index/search?lands[]=台南市永康區鹽新段1134-10號',
//     'https://twland.ronny.tw/index/search?lands[]=台南市永康區鹽新段1134-9號',
//     'https://twland.ronny.tw/index/search?lands[]=台南市永康區鹽新段1134號',
//     'https://twland.ronny.tw/index/search?lands[]=台南市永康區大灣段4681-8號',
//     'https://twland.ronny.tw/index/search?lands[]=台南市永康區大灣段4699-13號',
//     'https://twland.ronny.tw/index/search?lands[]=台南市永康區大灣段4681-3號'
// ];
// const maxConcurrentRequests = 5; // 例如，每次最多同時請求 3 個 API


// function getBatchesByReduce(urls, chunkSize = 5) {
//     return urls.reduce((result, url, index) => {
//       const batchIndex = Math.floor(index / chunkSize);
//       if (!result[batchIndex]) {
//           result[batchIndex] = [];
//       }
//       result[batchIndex].push(url);
//       return result;
//     }, []);
//   }
  
//   console.log(getBatchesByReduce(apiUrls, maxConcurrentRequests));
//   console.log('URLS : ', apiUrls);

// function sendRequest (endpoint, maxAttempts = 0) {
//   let attempts = 0;

//   function httpRequest() {
//     return axios.get(endpoint)
//       .then((response) => {
//         console.log(`成功取得資料：${endpoint}`);
//         return response.data;
//       })
//       .catch((error) => {
//         attempts++;
//         console.error(`錯誤發生於 ${endpoint}，嘗試次數：${attempts}`);
//         if (attempts < maxAttempts) {
//           // 如果尚未達到最大重試次數，則重新嘗試
//           return httpRequest();
//         } else {
//           // 達到最大重試次數，返回特殊的錯誤對象表示請求失敗
//           console.error(`達到最大重試次數，放棄請求：${endpoint}`);
//           return { error: '達到最大重試次數' };
//         }
//       });
//   }

//   return httpRequest();
// };


// async function processBatch (batch, maxAttempts = 0) {
//     const batchPromises = batch.map((endpoint) => sendRequest(endpoint, maxAttempts));
    
//     const batchResults = await Promise.all(batchPromises);
//     // console.log('Process Batch Results', batchResults);
//     return batchResults.filter((result) => !!result && !result.error);
//   };
  
//   function sendBatchesRequestByPromise (batches, maxAttempts = 0, delay = 0) {  
//     // console.log('get batches: ', batches)
//     const results = [];  
  
//     return batches.reduce((promise, batch, currentIndex) => {
//       return promise.then(() => {
//         return new Promise((resolve) => {
//           // console.log('currentIndex', currentIndex)
//           setTimeout(() => {
//             resolve(processBatch(batch, maxAttempts)
//               .then((batchResults) => {
//                 results.push(...batchResults);
//               }))
//           }, currentIndex === 0 ? 0 : delay);
//         })
//       });
//     }, Promise.resolve())
//       .then(() => results);
//   };

// const getBatches = getBatchesByReduce(apiUrls, maxConcurrentRequests)
// sendBatchesRequestByPromise(getBatches, 1, 2000)
//   .then((data) => {
//     console.log('所有請求完成');
//     data.forEach(element => {
//         console.log(element.features);
//     });
//   })
//   .catch((error) => {
//     console.error('請求失敗：', error);
//   });

let a=[1,3,5,4,3,5]
console.log(a.pop())