// Dados simulados para pré-visualização das apostilas
        const apostilaData = {
            'Cartografia Básica': `
                <p><strong>Capítulo 1: Representando a Terra</strong><br>
                A Cartografia é a ciência que estuda a produção e a leitura de mapas. Para o ENCCEJA, é essencial entender a diferença entre Globo Terrestre (representação mais fiel) e Mapas (representações planas).</p>
                <p><strong>Capítulo 2: Coordenadas Geográficas</strong><br>
                Localizar qualquer ponto na Terra requer o uso de Latitude (distância em relação ao Equador) e Longitude (distância em relação ao Meridiano de Greenwich). O sistema divide o globo em Hemisférios Norte/Sul e Leste/Oeste.</p>
                <ul>
                    <li>Linhas Imaginárias: Equador, Trópicos e Círculos Polares.</li>
                    <li>Longitude: Meridianos.</li>
                    <li>Latitude: Paralelos.</li>
                </ul>
            `,
            'Geografia Física': `
                <p><strong>Capítulo 1: Estruturas da Terra</strong><br>
                A Terra é formada por três camadas principais: Crosta, Manto e Núcleo. Os movimentos das placas tectônicas na crosta são responsáveis pelo surgimento de vulcões, terremotos e formação de montanhas.</p>
                <p><strong>Capítulo 2: Climas e Vegetação</strong><br>
                O clima é determinado pela temperatura, umidade e pressão atmosférica. A vegetação depende diretamente do clima. Os principais climas são: Tropical, Equatorial, Desértico, Temperado e Polar.</p>
            `,
            'Geografia Humana': `
                <p><strong>Capítulo 1: Dinâmica Populacional</strong><br>
                O estudo da população envolve taxas de natalidade, mortalidade e crescimento vegetativo. O mundo passa por um processo de transição demográfica, com taxas de natalidade caindo e a expectativa de vida aumentando.</p>
                <p><strong>Capítulo 2: Urbanização</strong><br>
                A urbanização é o processo de crescimento das cidades. No Brasil, ela ocorreu de forma rápida e desordenada, gerando problemas como favelas, poluição e trânsito, mas também concentrando serviços e indústrias.</p>
            `,
            'Geografia do Brasil': `
                <p><strong>Capítulo 1: Território e Regiões</strong><br>
                O Brasil é dividido em 5 regiões geográficas (Norte, Nordeste, Centro-Oeste, Sudeste e Sul). Essa divisão baseia-se em características naturais, sociais, econômicas e culturais semelhantes.</p>
                <p><strong>Capítulo 2: Economia Brasileira</strong><br>
                Histórico da economia brasileira: do Ciclo do Café à industrialização (1950-80), passando pela agriculture moderna e pelo setor de serviços, que hoje lidera o PIB nacional.</p>
            `,
            'Globalização': `
                <p><strong>Capítulo 1: O Mundo Conectado</strong><br>
                A globalização caracteriza-se pela integração econômica, cultural e política entre os países. Impulsionada pelo avanço tecnológico (internet, transportes), ela permite que capitais e informações circulem rapidamente.</p>
                <p><strong>Capítulo 2: Blocos Econômicos</strong><br>
                Países se unem para fortalecer suas economias. Exemplos: União Europeia (UE), NAFTA (Acordo EUA, Canadá e México) e o Mercosul (Mercado Comum do Sul), do qual o Brasil faz parte.</p>
            `,
            'Ambiente e Sustentabilidade': `
                <p><strong>Capítulo 1: Biomas Brasileiros</strong><br>
                O Brasil possui grande biodiversidade. Principais biomas: Amazônia (maior floresta tropical), Cerrado (savana brasileira), Caatinga, Mata Atlântica, Pantanal e Pampa.</p>
                <p><strong>Capítulo 2: Desenvolvimento Sustentável</strong><br>
                A busca por atendimento das necessidades atuais sem comprometer as gerações futuras. Envolve o uso racional de recursos naturais (água, solo), reciclagem e energias renováveis.</p>
            `
        };

        let currentApostila = '';

        // Função para voltar à página anterior
        function goBack() {
            window.history.back();
        }

        // Função para mostrar o preview na modal
        function showPreview(title) {
            currentApostila = title;
            const modalTitle = document.getElementById('previewTitle');
            const modalContent = document.getElementById('previewContent');
            const downloadBtn = document.getElementById('downloadFromModal');
            
            // Define o conteúdo com base no título
            modalTitle.innerText = title;
            modalContent.innerHTML = apostilaData[title] || '<p>Conteúdo não disponível para pré-visualização.</p>';
            
            // Configura o botão de download dentro do modal
            downloadBtn.onclick = function() {
                downloadApostila(title);
                // Fecha o modal
                const modalEl = document.getElementById('apostilaModal');
                const modalInstance = bootstrap.Modal.getInstance(modalEl);
                modalInstance.hide();
            };

            // Abre o modal usando Bootstrap API
            const myModal = new bootstrap.Modal(document.getElementById('apostilaModal'));
            myModal.show();
        }

        // Função simular download (usando Toast)
        function downloadApostila(title) {
            const toastContainer = document.querySelector('.toast-container');
            
            // Cria o elemento do Toast
            const toastEl = document.createElement('div');
            toastEl.className = 'toast align-items-center text-white bg-success border-0 show';
            toastEl.setAttribute('role', 'alert');
            toastEl.setAttribute('aria-live', 'assertive');
            toastEl.setAttribute('aria-atomic', 'true');
            
            toastEl.innerHTML = `
                <div class="d-flex">
                    <div class="toast-body">
                        <i class="bi bi-check-circle-fill me-2"></i>
                        <strong>Download iniciado!</strong><br>
                        Baixando: ${title}.pdf
                    </div>
                    <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close" onclick="this.parentElement.parentElement.remove()"></button>
                </div>
            `;
            
            // Adiciona ao container
            toastContainer.appendChild(toastEl);
            
            // Remove automaticamente após 3 segundos
            setTimeout(() => {
                toastEl.classList.remove('show');
                setTimeout(() => {
                    if(toastEl.parentElement) toastEl.remove();
                }, 500); // Espera a transição CSS
            }, 3000);
        }

        // Manipulação do envio do formulário de contato
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const btn = this.querySelector('button[type="submit"]');
            const originalText = btn.innerText;
            
            btn.innerText = 'Enviando...';
            btn.disabled = true;
            
            // Simula envio para servidor
            setTimeout(() => {
                const toastContainer = document.querySelector('.toast-container');
                const toastEl = document.createElement('div');
                toastEl.className = 'toast align-items-center text-white bg-primary border-0 show';
                toastEl.setAttribute('role', 'alert');
                toastEl.setAttribute('aria-live', 'assertive');
                toastEl.setAttribute('aria-atomic', 'true');
                
                toastEl.innerHTML = `
                    <div class="d-flex">
                        <div class="toast-body">
                            <i class="bi bi-envelope-check-fill me-2"></i>
                            Mensagem enviada com sucesso!
                        </div>
                        <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close" onclick="this.parentElement.parentElement.remove()"></button>
                    </div>
                `;
                
                toastContainer.appendChild(toastEl);
                
                // Reseta o formulário e o botão
                this.reset();
                btn.innerText = originalText;
                btn.disabled = false;

                setTimeout(() => {
                    toastEl.classList.remove('show');
                    setTimeout(() => toastEl.remove(), 500);
                }, 3000);
                
            }, 1500);
        });