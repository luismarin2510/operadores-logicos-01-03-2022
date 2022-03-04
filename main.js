let a = false;
let b = false;
let validar = function(id, ope){
    document.querySelector(id).insertAdjacentHTML("beforeend",
    `
        <tr>
            <td>${a}</td>
            ${(ope != "!") ? `<td>${b}</td>` : ""}
            <td>${
                (ope == "&") ? a && b 
                : (ope == "|") ? a || b                 
                : (ope == "!") ? !a
                : ""
            }</td>
        </tr>
        <tr>
            ${(ope != "!") ? `<td>${a}</td><td>${!b}</td>` : `<td>${!a}</td>`}
            <td>${
                (ope == "&") ? a && !b 
                : (ope == "|") ? a || !b                 
                : (ope == "!") ? !!a
                : ""
            }</td>
        </tr>
        <tr>
            ${(ope != "!") ? `<td>${!a}</td><td>${b}</td>` : ""}
            ${
                (ope == "&") ? `<td>${!a && b}</td>` 
                : (ope == "|") ? `<td>${!a || b}</td>`                 
                : ""
            }
        </tr>
        <tr>
            ${(ope != "!") ? `<td>${!a}</td><td>${!b}</td>` : ""}
            ${
                (ope == "&") ? `<td>${!a && !b}</td>` 
                : (ope == "|") ? `<td>${!a || !b}</td>`                 
                : ""
            }
        </tr>
    `
    );
};
validar("#OperadorAND", "&");
validar("#OperadorOR", "|");
validar("#OperadorNOT", "!");
