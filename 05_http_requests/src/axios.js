import axios from "axios";

//създаваме си нещо като копие на axios с лека конфигурация и можем да си създадем много инстанции, които да пращат заявки към различни места примерно
const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com"
});

//по този начин всички инстанции ще имат тези headers, които ще оувъррайднат defult настройките
instance.defaults.headers.common["Authorization"] = "AUTH TOKEN FROM INSTANCE";

// instance.interceptors.request...

export default instance;
