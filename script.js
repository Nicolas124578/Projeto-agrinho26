// --- LÓGICA JAVASCRIPT ---

// Captura a div onde as respostas serão exibidas
const tela = document.getElementById('log-output');

function simularIrrigacao() {
    tela.innerHTML = "> [PROCESSANDO] Lendo sensores de umidade...<br>";
    setTimeout(() => {
        const umidade = Math.floor(Math.random() * 100);
        if(umidade < 40) {
            tela.innerHTML += `> [ALERTA] Umidade em ${umidade}% (Solo Seco).<br>`;
            tela.innerHTML += `> [AÇÃO CONTRATADA] Irrigação gota-a-gota ativada no setor 4. Economia de 45% de água gerada.`;
        } else {
            tela.innerHTML += `> [SUCESSO] Umidade em ${umidade}% (Solo Ideal).<br>`;
            tela.innerHTML += `> [AÇÃO] Sistemas de água permanecem desligados. Planeta agradece!`;
        }
    }, 800); // 800 milissegundos de delay para simular o carregamento do sensor
}

function simularDrone() {
    tela.innerHTML = "> [DECOLAGEM] Drone EcoScan-V2 no ar...<br>";
    setTimeout(() => {
        tela.innerHTML += "> [MAPEAMENTO] Escaneando 10 hectares com inteligência artificial...<br>";
        setTimeout(() => {
            tela.innerHTML += "> [DIAGNÓSTICO] 98% da área saudável. 2% com foco de lagarta detectado.<br>";
            tela.innerHTML += "> [AÇÃO] Microaplicação direcionada efetuada. Evitado o uso de pesticidas em todo o resto do campo!";
        }, 1000);
    }, 800);
}

function simularCarbono() {
    tela.innerHTML = "> [ANÁLISE] Coletando histórico de rotação de culturas...<br>";
    setTimeout(() => {
        const toneladas = (Math.random() * 5 + 2).toFixed(2);
        tela.innerHTML += `> [RESULTADO] Este solo está retendo ${toneladas} toneladas de CO2 por hectare!<br>`;
        tela.innerHTML += "> [STATUS] Fazenda classificada como Carbono Neutro. Produção limpa garantida.";
    }, 800);
}
