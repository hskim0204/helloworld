// src/api.js
import axios from 'axios';
var api_res;

export default {
    async getNanetAPI(param) {
        console.log("process.env.VUE_APP_NANET_API_URL :",process.env.VUE_APP_NANET_API_URL);
        console.log("param :",param);
        api_res = [];
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

            console.log(xmlDoc.querySelectorAll("item"));            

            const items = Array.from(xmlDoc.querySelectorAll("item"));
            let item;
            items.forEach((child) => {
                item = {};
                for(let i=0; i< child.children.length; i++){
                    item[child.children[i].tagName] = child.children[i].innerHTML;
                }
                console.log(item);
                api_res.push(item);
            })

        })
        return api_res;
    },
}