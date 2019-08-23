import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import axios from "axios";

//тук се конфигурира целия axios и всяка заявка ще се изпълнява с тези конфигурации прикачена, но тогава трябва да го имаме предвид, ако конфигурираме един и същ URL. Заявките ще се пращят с просто добавка на URL към този URL (същото като моя requester)
axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
axios.defaults.headers.common["Authorization"] = "AUTH TOKEN";
axios.defaults.headers.post["Content-Type"] = "application/json";

//по този начин се прави интерсептор, който ще улавя всички рекуести от целия сайт с axios като тук можем да подаваме къстъм конфигурации като хедър, друг url и прочие
axios.interceptors.request.use(
  request => {
    console.log(request);
    // Edit request config винаги трябва да се return-ва requesta иначе го блокираме
    return request;
  },
  error => {
    console.log(error);
    //по този начин връщайки Promise там където си имаме catch ще си получи грешката и ще си я handle-не
    return Promise.reject(error);
  }
);

//по този начин ще улавяме response-а от бекенда
axios.interceptors.response.use(
  response => {
    console.log(response);
    // Edit request config след като го променим задължително го връщаме, за да си стигне където трябва
    return response;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
