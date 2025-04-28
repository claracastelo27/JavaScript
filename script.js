const formularioLogin = document.getElementById('formulario-login');
        const formularioCadastro = document.getElementById('formulario-cadastro');
        const mostrarCadastroBotao = document.getElementById('mostrar-cadastro');
        const mostrarLoginBotao = document.getElementById('mostrar-login');
        const corpo = document.body;
        const botoesAlternar = document.querySelectorAll('.container-botao-alternar');

        function mudarCor(cor) {
            corpo.style.backgroundColor = cor;
        }

        mostrarCadastroBotao.addEventListener('click', () => {
            formularioLogin.classList.remove('ativo');
            formularioCadastro.classList.add('ativo');
            mudarCor('#81d4fa'); 
        });

        mostrarLoginBotao.addEventListener('click', () => {
            formularioCadastro.classList.remove('ativo');
            formularioLogin.classList.add('ativo');
            mudarCor('#e0f7fa'); 
        });

    
        mudarCor('#e0f7fa');