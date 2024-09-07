// src/api.js
import axios from 'axios';
var api_res = [];

export default {
    async getNanetAPI(param) {
        console.log("process.env.VUE_APP_NANET_API_URL :",process.env.VUE_APP_NANET_API_URL);
        console.log("param :",param);
        await axios.get(process.env.VUE_APP_NANET_API_URL, {
            params: {
                MobileOS: "ETC", 
                MobileApp: "ETC",
                serviceKey: "tDQmZjN+kD/Ju71kQIL6jBsqTT5xlE4pmS9Q3AtBujLF5VoSBK9XZkRxWQsbVkz6caEPXTZ7BZ3D8oFxO57ZaA==",     
                startYmd: 20240101,
                endYmd: 20240701,
            },
        })
        .then(response => {      
            console.log("api_response:", response.data);  
            let parseXML = new DOMParser();
            let xmlDoc = parseXML.parseFromString(response.data, "text/xml");

            console.log("xmlDoc", xmlDoc);             

            api_res = xmlDoc.querySelectorAll("item"); 
            console.log(api_res.item(1))

            const data = {};
            const items = xmlDoc.documentElement.childNodes[1].childNodes[0];
            console.log(items);
            for (let i = 0; i < items.length; i++) {
                console.log(items[i]);
               data[i] = items[i];
            }
            console.log(data);
            const jsonResult = JSON.stringify(items);
            console.log(jsonResult);
        })
        console.log("api_res:", api_res);        
        return api_res;
    },
};