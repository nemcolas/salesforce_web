type ClickData = {
    timestamp: string;
    xPosition: number;
    yPosition: number;
};

function capturarDados(): null{
    let data: ClickData[] = [];

    // Função para coletar cliques e posição do mouse
    function trackClickAndPosition(event: MouseEvent): void {
        let clickData: ClickData = {
            timestamp: new Date().toISOString(),
            xPosition: event.pageX, // Use pageX to include scroll position in X
            yPosition: event.pageY // Use pageY to include scroll position in Y
        };

        // Adiciona os dados ao array
        data.push(clickData);
    }

    // Adiciona um ouvinte de eventos para o clique do mouse
    document.addEventListener('click', trackClickAndPosition);

    // Função para salvar os dados em CSV
    function saveDataToCSV(): void {
        let csvContent: string = "data:text/csv;charset=utf-8,";
        csvContent += "Timestamp,X Position,Y Position\n";

        data.forEach(function (click: ClickData) {
            csvContent += click.timestamp + "," + click.xPosition + "," + click.yPosition + "\n";
        });

        // Usando o título do documento como base
        let fileName: string = document.title.replace(/[^a-z0-9]/gi, '_').toLowerCase(); // Sanitizando titulo
        fileName += "_click_data.csv"; // colocando sufixo da extensao do arquivo

        // Cria um link para download do CSV
        let encodedUri: string = encodeURI(csvContent);
        let link: HTMLAnchorElement = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", fileName);
        document.body.appendChild(link);

        // Simula um clique no link para iniciar o download
        link.click();
    }

    // Adiciona um botão para salvar os dados em CSV
    let button: HTMLButtonElement = document.createElement('button');
    button.textContent = 'Salvar em CSV';
    button.addEventListener('click', saveDataToCSV);
    document.body.appendChild(button);

    // verifica se há informação de clicks e, se houver, faz o download antes de mudar a página
    window.onbeforeunload = function() {
        if (data.length > 0) {
            saveDataToCSV();
        }
    };

    return null;
}

export default capturarDados;