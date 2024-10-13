let nomes = [];
let rgms = [];
let notas_p = [];
let notas_exer = [];
let notas_proj = [];
let notas_reg = [];

document.getElementById('cadastrar').addEventListener('click', cadastrar);
document.getElementById('mostrar').addEventListener('click', mostrar);

function cadastrar() {
    let nome = document.getElementById('nome').value;
    let rgm = document.getElementById('rgm').value;
    let nota_parcial = document.getElementById('nota_parcial').value;
    let nota_exercicios = document.getElementById('nota_exercicios').value;
    let nota_projeto = document.getElementById('nota_projeto').value;
    let nota_regimental = document.getElementById('nota_regimental').value;

    if (nome && rgm && nota_parcial && nota_exercicios && nota_projeto && nota_regimental) {
        nomes.push(nome);
        rgms.push(rgm);
        notas_p.push(parseFloat(nota_parcial));
        notas_exer.push(parseFloat(nota_exercicios));
        notas_proj.push(parseFloat(nota_projeto));
        notas_reg.push(parseFloat(nota_regimental));

        document.getElementById('nome').value = '';
        document.getElementById('rgm').value = '';
        document.getElementById('nota_parcial').value = '';
        document.getElementById('nota_exercicios').value = '';
        document.getElementById('nota_projeto').value = '';
        document.getElementById('nota_regimental').value = '';
    }
}

function mostrar() {
    let dadosHTML = '<table><tr><th>Nome</th><th>RGM</th><th>Nota Parcial</th><th>Nota Exercícios</th><th>Nota Projeto</th><th>Nota Regimental</th><th>Nota Final</th><th>Conceito</th></tr>';
    for (let i = 0; i < nomes.length; i++) {
        let nota_final = calcularNotaFinal(notas_p[i], notas_exer[i], notas_proj[i], notas_reg[i]);
        let conceito = calcularConceito(nota_final);
        dadosHTML += `<td>${notas_p[i]}</td><td>${notas_exer[i]}</td><td>${notas_proj[i]}</td><td>${notas_reg[i]}</td><td>${nota_final.toFixed(2)}</td><td>${conceito}</td></tr>`;
    }
    dadosHTML += '</table>';
    document.getElementById('dados').innerHTML = dadosHTML;
}

function calcularNotaFinal(nota_parcial, nota_exercicios, nota_projeto, nota_regimental) {
    return nota_parcial + nota_exercicios + nota_projeto + nota_regimental;
}

function calcularConceito(nota_final) {
    if (nota_final >= 7) {
        return 'Aprovado';
    } else if (nota_final < 3) {
        return 'Reprovado';
    } else {
        return 'Avaliação Final';
    }
}