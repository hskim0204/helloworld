// src/api.js
import axios from "axios";
var api_res;

export default {
  async getNanetAPI(param) {
    api_res = [];
    await axios
      .get(process.env.VUE_APP_NANET_API_URL, {
        params: {
          /*MobileOS: "ETC", 
                MobileApp: "ETC",
                serviceKey: "tDQmZjN+kD/Ju71kQIL6jBsqTT5xlE4pmS9Q3AtBujLF5VoSBK9XZkRxWQsbVkz6caEPXTZ7BZ3D8oFxO57ZaA==",     
                startYmd: 20240101,
                endYmd: 20240701,*/
          dName: param.dName,
        },
      })
      .then((response) => {
        /*let parseXML = new DOMParser();
            let xmlDoc = parseXML.parseFromString(response.data, "text/xml");

            const items = Array.from(xmlDoc.querySelectorAll("item"));
            let item;
            items.forEach((child) => {
                item = {};
                for(let i=0; i< child.children.length; i++){
                    item[child.children[i].tagName] = child.children[i].innerHTML;
                }
                api_res.push(item);
            })*/
        api_res = response.data;
      });
    return api_res;
  },
};
