// Dados simulados para o preview das apostilas
        const previews = {
            'Introdução à Sociologia': `
                <p>A Sociologia surgiu no século XIX como uma necessidade de compreender as profundas transformações sociais trazidas pela Revolução Industrial e pela Revolução Francesa.</p>
                <p><strong>Auguste Comte</strong> criou o termo "Sociologia" e acreditava no Positivismo: a ideia de que a sociedade poderia ser estudada com os mesmos métodos das ciências naturais.</p>
                <p><strong>Émile Durkheim</strong> é considerado o pai da sociologia moderna. Ele defendia que os fatos sociais devem ser tratados como "coisas", exteriores ao indivíduo e dotados de poder de coerção. Seu conceito de "Fato Social" é central para o ENCCEJA.</p>
                <p>Já <strong>Karl Marx</strong> analisava a sociedade sob a ótica da luta de classes e do materialismo histórico, focando na economia como base da estrutura social.</p>
                <p>Por fim, <strong>Max Weber</strong> introduziu a ideia da compreensão (Verstehen) e o conceito de ação social, analisando também a influência da cultura e religião no comportamento econômico (A Ética Protestante).</p>
            `,
            'Cultura e Sociedade': `
                <p>Cultura é o conjunto de costumes, crenças, arte, moral, direito e hábitos adquiridos pelo homem enquanto membro de uma sociedade. Ela não é inata, é aprendida através da socialização.</p>
                <p>O <strong>Etnocentrismo</strong> é a tendência de julgar outras culturas pelo padrão da própria, considerando a sua cultura superior. O oposto disso é o <strong>Relativismo Cultural</strong>, que busca compreender as culturas dentro de seus próprios contextos.</p>
                <p>No Brasil, a identidade cultural foi formada pela mistura de povos indígenas, africanos e europeus, criando uma diversidade única que reflete-se na música, culinária, religiosidade e festas populares.</p>
                <p>Compreender a diferença entre cultura erudita, popular e de massa também é um ponto chave para a prova.</p>
            `,
            'Estrutura Social': `
                <p>Nenhuma sociedade é totalmente homogênea; todas apresentam alguma forma de estratificação. A estratificação social é a divisão da sociedade em camadas hierarquizadas.</p>
                <p><strong>Classes Sociais:</strong> Definidas principalmente pela posição econômica (Marx). A sociedade capitalista se divide fundamentalmente em burguesia (donos dos meios de produção) e proletariado (vendedores de força de trabalho).</p>
                <p><strong>Status:</strong> A posição social ocupada por um indivíduo ou grupo. Pode ser atribuído (nascer com ele, como idade ou sexo) ou adquirido (conquistado, como profissão).</p>
                <p>A <strong>Mobilidade Social</strong> é o movimento de indivíduos ou grupos entre as camadas sociais. No Brasil, apesar da mobilidade existir, a concentração de renda ainda é um grande obstáculo.</p>
            `,
            'Mundo do Trabalho': `
                <p>O trabalho passou por transformações radicais. O <strong>Taylorismo</strong> (Fordismo) focava na linha de montagem, na especialização do operário e na produção em massa.</p>
                <p>Hoje, vivemos a era do <strong>Toyotismo</strong> (ou acumulação flexível), caracterizada pela flexibilização da produção, terceirização e exigência de polivalência do trabalhador.</p>
                <p>A tecnologia e a automação provocam o que chamamos de "desemprego estrutural", causado por mudanças na forma de produção e não apenas por crises econômicas.</p>
                <p>A informalidade e o trabalho precarizado (Uberização, por exemplo) são temas atuais e frequentes nas provas do ENCCEJA.</p>
            `,
            'Poder e Política': `
                <p>Polica é a atividade universal que se refere à tomada de decisões coletivas. O poder é a capacidade de impor a vontade, mesmo contra a resistência de outros.</p>
                <p>O <strong>Estado</strong> é a instituição que detém o monopólio legítimo do uso da força física (violência) dentro de um território, segundo Max Weber.</p>
                <p><strong>Democracia:</strong> Sistema de governo onde o poder emana do povo. Na democracia representativa, elegemos representantes para governar em nosso nome. A cidadania plena envolve não só o direito de votar, mas o acesso a direitos civis, políticos e sociais.</p>
                <p>Os partidos políticos são fundamentais para a organização da democracia, atuando como ponte entre a sociedade e o Estado.</p>
            `,
            'Mudança Social': `
                <p>A sociedade nunca é estática; ela está em constante mudança. A <strong>Globalização</strong> é um dos processos de mudança mais intensos da atualidade, interligando economias, culturas e politicas mundialmente.</p>
                <p>Os <strong>Meios de Comunicação de Massa</strong> (Mídia) desempenham papel crucial na formação da opinião pública e na construção da realidade social (indústria cultural).</p>
                <p>Entretanto, essa mudança traz riscos. A <strong>Crise Ambiental</strong> é uma consequência do modelo de produção e consumo insustentável. A Sociologia Ambiental estuda a relação entre sociedade e natureza, buscando soluções para a sustentabilidade.</p>
            `
        };

        // Função para mostrar o preview
        function showPreview(title) {
            const modalElement = document.getElementById('apostilaModal');
            const titleElement = document.getElementById('previewTitle');
            const contentElement = document.getElementById('previewContent');
            const downloadBtn = document.getElementById('downloadFromModal');

            // Define o título
            titleElement.innerText = title;

            // Define o conteúdo baseado no título
            if (previews[title]) {
                contentElement.innerHTML = previews[title];
            } else {
                contentElement.innerHTML = '<p>Conteúdo não disponível no momento.</p>';
            }

            // Configura o botão de download dentro do modal
            downloadBtn.onclick = function() {
                downloadApostila(title);
                // Fecha o modal após clicar em baixar (opcional, mas melhora UX)
                const modalInstance = bootstrap.Modal.getInstance(modalElement);
                modalInstance.hide();
            };

            // Abre o modal
            const modal = new bootstrap.Modal(modalElement);
            modal.show();
        }

        // Função simulada de download
        function downloadApostila(title) {
            showToast('Iniciando download', `O arquivo "${title}.pdf" está sendo baixado.`);
        }

        // Função para voltar
        function goBack() {
            window.history.back();
        }

        // Função para mostrar Toasts (Notificações)
        function showToast(title, message) {
            const toastContainer = document.querySelector('.toast-container');
            
            const toastHtml = `
                <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
                    <div class="toast-header">
                        <i class="bi bi-check-circle-fill text-success me-2"></i>
                        <strong class="me-auto">${title}</strong>
                        <small>Agora</small>
                        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                    </div>
                    <div class="toast-body">
                        ${message}
                    </div>
                </div>
            `;
            
            // Cria elemento temporário para o toast
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = toastHtml;
            const toastElement = tempDiv.firstElementChild;
            
            toastContainer.appendChild(toastElement);
            
            const toast = new bootstrap.Toast(toastElement);
            toast.show();
            
            // Remove o elemento do DOM depois que o toast fechar
            toastElement.addEventListener('hidden.bs.toast', () => {
                toastElement.remove();
            });
        }

        // Manipulação do formulário de contato
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            
            // Simula envio
            showToast('Mensagem Enviada', `Obrigado, ${name}! Recebemos sua mensagem e entraremos em contato em breve.`);
            
            // Limpa o formulário
            this.reset();
        });