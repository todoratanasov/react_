import React from "react";

//по този начин си създаваме контекст като контекста може да е всичко не замо обект просто ще може да се ползва от много места. тук се инициализира най-общо казано, за да имаме по-добър аутокомплийшън когато го ползваме
const authContext = React.createContext({
    authenticated: false,
    login: ()=>{}
});

export default authContext;