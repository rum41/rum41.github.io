import { stringify } from "querystring";
import OrginalData from '../data/finaldata.json' assert { type: 'json' };
import { createRequire } from "module";
import axios from 'axios';
import { features } from "process";
const require = createRequire(import.meta.url);

var fs = require('fs');


const maxConcurrentRequests = 1; // 例如，每次最多同時請求 3 個 API


function getBatchesByReduce(urls, chunkSize = 5) {
    return urls.reduce((result, url, index) => {
      const batchIndex = Math.floor(index / chunkSize);
      if (!result[batchIndex]) {
          result[batchIndex] = [];
      }
      result[batchIndex].push(url);
      return result;
    }, []);
  }
  
//   console.log(getBatchesByReduce(apiUrls, maxConcurrentRequests));
//   console.log('URLS : ', apiUrls);

function sendRequest (endpoint, maxAttempts = 0) {
  let attempts = 0;

  function httpRequest() {
    return axios.get(endpoint)
      .then((response) => {
        // console.log(`成功取得資料：${endpoint}`);
        return response.data;
      })
      .catch((error) => {
        attempts++;
        console.error(`錯誤發生於 ${endpoint}，嘗試次數：${attempts}`);
        if (attempts < maxAttempts) {
          // 如果尚未達到最大重試次數，則重新嘗試
          return httpRequest();
        } else {
          // 達到最大重試次數，返回特殊的錯誤對象表示請求失敗
          console.error(`達到最大重試次數，放棄請求：${endpoint}`);
          return { error: '達到最大重試次數' };
        }
      });
  }

  return httpRequest();
};


async function processBatch (batch, maxAttempts = 0) {
    const batchPromises = batch.map((endpoint) => sendRequest(endpoint, maxAttempts));
    
    const batchResults = await Promise.all(batchPromises);
    // console.log('Process Batch Results', batchResults);
    return batchResults.filter((result) => !!result && !result.error);
  };
  
  function sendBatchesRequestByPromise (batches,date, maxAttempts = 0, delay = 0) {  
    // console.log('get batches: ', batches)
    const results = [];  
  
    return batches.reduce((promise, batch, currentIndex) => {
      return promise.then(() => {
        return new Promise((resolve) => {
          // console.log('currentIndex', currentIndex)
          setTimeout(() => {
            resolve(processBatch(batch, maxAttempts)
              .then((batchResults) => {
                results.push([...batchResults,date]);
              }))
          }, currentIndex === 0 ? 0 : delay);
        })
      });
    }, Promise.resolve())
      .then(() => results);
  };







OrginalData.forEach((data,index) =>{
    let address_list = []
    const LandNum = data[1].split(',')
    data[1]=LandNum
    let date = data[2].substring(0,3)
    LandNum.forEach((element,num) => {
        let address = `https://twland.ronny.tw/index/search?lands[]=台南市${data[0]}${LandNum[num]}號`
        address_list.push(address)
    });
    const getBatches = getBatchesByReduce(address_list, maxConcurrentRequests)
    sendBatchesRequestByPromise(getBatches,date, 50000, 50000)
    .then((data) => {
        // console.log('所有請求完成');
        data.forEach(element => {
            let about_data=[]
            if (JSON.stringify(element[0].notfound) == '[]') {
                
                let lat=[]
                about_data.push(element[0].features[0].properties.query)
                element[0].features[0].geometry.coordinates[0][0].forEach(element => {
                    lat.push([element[1],element[0]])
                });
                about_data.push(lat)
                about_data.push(element[1])
                fs.appendFile('./test.json',`${JSON.stringify(about_data)},\n`,(err)=>{
                    if (err != null) {
                        console.log(err)
                    }
                })
            }
            
            
        });
    })
    .catch((error) => {
        console.error('請求失敗：', error);
    });
        
});






