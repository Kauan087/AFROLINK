// Espera o documento estar pronto (padrão do jQuery)
$(document).ready(function() {
    
    // --- LÓGICA DO FILTRO DE POSTS ---
    $('.filter-item').on('click', function() {
        // Adiciona a classe "active-filter" ao item clicado e remove dos outros
        $(this).addClass('active-filter').siblings().removeClass('active-filter');

        // Pega o valor do filtro (ex: "Inspiraçao", "Educaçao", "tudo")
        var filterValue = $(this).data('filter');

        // Lógica para mostrar/esconder os posts
        if (filterValue === 'tudo') {
            $('.post-box').show(400); // Mostra todos
        } else {
            // Esconde quem NÃO tem a classe
            $('.post-box').not('.' + filterValue).hide(200);
            // Mostra quem TEM a classe
            $('.post-box').filter('.' + filterValue).show(400);
        }
    });

    // --- LÓGICA PARA A PÁGINA DO POST ---
    
    // Adiciona um "ouvinte" de clique em TODOS os ".post-title"
    $('.post-title').on('click', function(event) {
        
        // 1. Previne o link de redirecionar na hora (para dar tempo de salvar)
        event.preventDefault(); 
        
        // 2. Encontra o "pai" do link clicado, que é o .post-box
        var postBox = $(this).closest('.post-box');
        
        // 3. Pega os dados de dentro desse .post-box
        var postImage = postBox.find('.post-img').attr('src');
        var postCategory = postBox.find('.categoria').text();
        var postTitle = postBox.find('.post-title').text();
        var postDate = postBox.find('.post-date').text();
        // Pega o HTML de dentro do div oculto que criamos
        var postContent = postBox.find('.full-text-content').html(); 
        
        // 4. Salva tudo no "sessionStorage" (que dura até fechar a aba)
        sessionStorage.setItem('postImage', postImage);
        sessionStorage.setItem('postCategory', postCategory);
        sessionStorage.setItem('postTitle', postTitle);
        sessionStorage.setItem('postDate', postDate);
        sessionStorage.setItem('postContent', postContent);
        
        // 5. Agora sim, redireciona para a página do post
        window.location.href = $(this).attr('href'); // Pega o href="post-page.html"
    });
});