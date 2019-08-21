//това е high order component

import React from "react";
//тук експортваме само децата на този компонент, които му бъдат подадени
const aux = props=>props.children;

export default aux;