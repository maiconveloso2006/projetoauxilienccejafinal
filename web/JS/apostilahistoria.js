// Dados simulados para o preview das apostilas de História
        const apostilasContent = {
            'História Antiga e Medieval': `
                <p><strong>Introdução à Antiguidade:</strong> A História Antiga inicia-se com o surgimento da escrita, por volta de 4000 a.C., nas regiões do Crescente Fértil. Estudamos as civilizações da Mesopotâmia (sumérios, babilônios), Egito (faraós e pirâmides), Hebreus (monoteísmo) e Persas (império centralizado).</p>
                <p><strong>Mundo Clássico:</strong> A Grécia é o berço da democracia (em Atenas) e da filosofia (Sócrates, Platão, Aristóteles). Roma evoluiu de monarquia para república e império, deixando um legado jurídico, político e de engenharia (estradas, aquedutos) que influencia o Ocidente até hoje.</p>
                <p><strong>Idade Média:</strong> Após a queda de Roma, forma-se a sociedade feudal, baseada na terra e nos laços de vassalagem. A Igreja Católica detinha grande poder espiritual e temporal. Neste período também ocorreram as Cruzadas e a Peste Negra.</p>
            `,
            'Idade Moderna': `
                <p><strong>Transição:</strong> A Idade Moderna marca a passagem do feudalismo para o capitalismo. Inicia-se com as Grandes Navegações, possibilitadas pela tecnologia náutica e pela busca de novas rotas comerciais para as Índias.</p>
                <p><strong>Renascimento e Reforma:</strong> O Renascimento Cultural valorizou o humanismo e o antropocentrismo. A Reforma Protestante, liderada por Lutero e Calvino, quebrou a unidade da Igreja Católica na Europa.</p>
                <p><strong>Estado Moderno e Revoluções:</strong> O Absolutismo consolidou o poder central dos reis. A Revolução Industrial transformou a produção manual em maquinofábrica, enquanto a Revolução Francesa difundiu os ideais de Liberdade, Igualdade e Fraternidade.</p>
            `,
            'Brasil Colônia': `
                <p><strong>Descobrimento:</strong> Em 1500, a esquadra de Cabral chegou ao Brasil. O início da colonização foi marcado pelo sistema de Capitanias Hereditárias e o Governo Geral.</p>
                <p><strong>Sociedade Açucareira:</strong> A economia baseou-se no plantation (latifúndio, monocultura, mão de obra escrava). O engenho de açúcar foi o núcleo social e econômico. O tráfico negreiro trouxe milhões de africanos forçados ao trabalho escravo.</p>
                <p><strong>Mineração e Inconfidência:</strong> No século XVIII, a descoberta de ouro em Minas Gerais deslocou o eixo econômico para o interior. A cobrança de impostos excessivos (como a Derrama) gerou insatisfação, culminando na Inconfidência Mineira (1789), liderada por Tiradentes.</p>
            `,
            'Brasil Império': `
                <p><strong>Independência:</strong> Proclamada por D. Pedro I em 1822 às margens do riacho Ipiranga. O Primeiro Reinado (1822-1831) enfrentou crises políticas, culminando na abdicação.</p>
                <p><strong>Período Regencial:</strong> Marcado por revoltas regionais (Cabanagem, Balaiada, Sabinada, Farroupilhas) e pela antecipação da maioridade de D. Pedro II.</p>
                <p><strong>Segundo Reinado:</strong> Período de estabilidade política (Partido Liberal e Conservador). A economia foi impulsionada pelo café e pela imigração. Destacam-se a Guerra do Paraguai e a campanha abolicionista que levou à Lei Áurea em 1888, precedida pela Lei do Ventre Livre e dos Sexagenários.</p>
            `,
            'Brasil República': `
                <p><strong>Proclamação:</strong> A República foi proclamada em 1889 pelo Marechal Deodoro, encerrando a monarquia. A Primeira República (República Velha) foi dominada pelas oligarquias do café-com-leite.</p>
                <p><strong>Era Vargas:</strong> A Revolução de 30 trouxe Getúlio Vargas ao poder. Ele governou de 1930 a 1945 e novamente de 1951 a 1954, modernizando o estado e concedendo direitos trabalhistas (CLT).</p>
                <p><strong>Ditadura e Democracia:</strong> O golpe militar de 1964 instaurou uma ditadura que durou até 1985. A Nova República (1988-atual) é marcada pela Constituição Cidadã e pela estabilidade econômica (Plano Real).</p>
            `,
            'História Contemporânea': `
                <p><strong>Guerras Mundiais:</strong> O século XX foi marcado por duas grandes guerras (1914-1918 e 1939-1945) que envolveram potências mundiais e reconfiguraram mapas geopolíticos, além do horror do Holocausto.</p>
                <p><strong>Guerra Fria:</strong> Disputas ideológicas e militares entre EUA (capitalista) e URSS (socialista) que dividiram o mundo em blocos de influência.</p>
                <p><strong>Globalização:</strong> A partir do final do século XX, o mundo viveu uma intensificação das trocas comerciais e culturais. A Revolução Tecnológica (internet) transformou a comunicação e a economia, criando desafios ambientais e sociais.</p>
            `
        };

        // Função para voltar à página anterior
        function goBack() {
            window.history.back();
        }

        // Inicializar o Modal Bootstrap
        const modalElement = document.getElementById('apostilaModal');
        const apostilaModal = new bootstrap.Modal(modalElement);
        const downloadBtnModal = document.getElementById('downloadFromModal');

        // Função para mostrar o preview
        function showPreview(title) {
            const content = apostilasContent[title] || "<p>Conteúdo não disponível no momento.</p>";
            
            document.getElementById('previewTitle').innerText = title;
            document.getElementById('previewContent').innerHTML = content;
            
            // Configurar o botão de download dentro do modal
            downloadBtnModal.onclick = function() {
                downloadApostila(title);
                apostilaModal.hide();
            };

            apostilaModal.show();
        }

        // Função para simular download
        function downloadApostila(title) {
            // Cria um elemento toast
            const toastContainer = document.querySelector('.toast-container');
            const toastHtml = `
                <div class="toast align-items-center text-white bg-success border-0" role="alert" aria-live="assertive" aria-atomic="true">
                    <div class="d-flex">
                        <div class="toast-body">
                            <i class="bi bi-check-circle-fill me-2"></i>
                            Download iniciado: <strong>${title}.pdf</strong>
                        </div>
                        <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
                    </div>
                </div>
            `;
            
            // Insere o toast no container
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = toastHtml;
            const toastElement = tempDiv.firstElementChild;
            toastContainer.appendChild(toastElement);
            
            // Inicializa e mostra o toast
            const toast = new bootstrap.Toast(toastElement, { delay: 3000 });
            toast.show();
            
            // Remove o elemento do DOM após fechar
            toastElement.addEventListener('hidden.bs.toast', () => {
                toastElement.remove();
            });
        }

        // Interceptar o envio do formulário de contato para demonstração
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const toastContainer = document.querySelector('.toast-container');
            
            const toastHtml = `
                <div class="toast align-items-center text-white bg-primary border-0" role="alert" aria-live="assertive" aria-atomic="true">
                    <div class="d-flex">
                        <div class="toast-body">
                            Obrigado, <strong>${name}</strong>! Mensagem enviada com sucesso.
                        </div>
                        <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
                    </div>
                </div>
            `;
            
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = toastHtml;
            const toastElement = tempDiv.firstElementChild;
            toastContainer.appendChild(toastElement);
            
            const toast = new bootstrap.Toast(toastElement, { delay: 4000 });
            toast.show();
            
            toastElement.addEventListener('hidden.bs.toast', () => {
                toastElement.remove();
            });
            
            this.reset();
        });