let validar = function(id, ope){
    document.querySelector(id).insertAdjacentHTML("beforeend",
`
    <tr>
        <td>${a}</td>
        <td>${b}</td>
        <td>${
            (ope == "&") ? a && b 
            : (ope == "|") ? a || b 
            : ""
         }</td>
    </tr>
`
    );
};
validar("#Operador AND", "&");
validar("#Operador OR", "|");

console.log(!false);
