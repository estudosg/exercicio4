function transformarMatriz() {
    const input = document.getElementById('matriz-incidencia').value.trim();
    const linhas = input.split('\n');
    const matrizIncidencia = linhas.map(linha => linha.split(' ').map(Number));

    const n = matrizIncidencia.length;
    const m = matrizIncidencia[0].length;
    
    const matrizAdjacencia = Array.from({ length: n }, () => Array(n).fill(0));
    
    for (let j = 0; j < m; j++) {
        const vertices = [];
        for (let i = 0; i < n; i++) {
            if (matrizIncidencia[i][j] !== 0) {
                vertices.push(i);
            }
        }
        
        if (vertices.length === 2) {
            const [u, v] = vertices;
            matrizAdjacencia[u][v] = 1;
            matrizAdjacencia[v][u] = 1;
        }
    }
    
    const output = matrizAdjacencia.map(linha => linha.join(' ')).join('\n');
    document.getElementById('matriz-adjacencia').textContent = output;
}

function limparCampos() {
    document.getElementById('matriz-incidencia').value = '';
    document.getElementById('matriz-adjacencia').textContent = '';
}
