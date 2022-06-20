(function () {
    var _a;
    var $ = function (query) {
        return document.querySelector(query);
    };
    function patio() {
        function ler() { }
        function adicionar(veiculo) {
            var _a;
            var row = document.createElement("tr");
            row.innerHTML = "\n        <td>".concat(veiculo.nome, "</td>\n        <td>").concat(veiculo.placa, "</td>\n        <td>").concat(veiculo.entrada, "</td>\n        <td>\n        <button class=\"delete\" data-placa=\"").concat(veiculo.placa, "\">X</button>\n        </td>        \n\n        ");
            (_a = $("#patio")) === null || _a === void 0 ? void 0 : _a.appendChild(row);
        }
        function remover() { }
        function salvar() { }
        function render() { }
        return { ler: ler, adicionar: adicionar, remover: remover, salvar: salvar, render: render };
    }
    (_a = $("#cadastrar")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
        var _a, _b;
        var nome = (_a = $("#nome")) === null || _a === void 0 ? void 0 : _a.value;
        var placa = (_b = $("#placa")) === null || _b === void 0 ? void 0 : _b.value;
        if (!nome || !placa) {
            alert("Os campos nome e placa são obrigatórios");
            return;
        }
        patio().adicionar({ nome: nome, placa: placa, entrada: new Date() });
    });
})();
