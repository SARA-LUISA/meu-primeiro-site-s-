// Mostra/oculta a sidebar ao clicar no ícone do menu
document.getElementById('menu-icon').onclick = function() {
    document.getElementById('sidebar').classList.toggle('show');
};

// Mostra/oculta o submenu ao clicar no item principal
document.querySelectorAll('.sidebar > ul > li > a').forEach(function(link) {
    link.onclick = function(e) {
        var submenu = this.nextElementSibling;
        // Verifica se existe submenu e se tem a classe 'submenu'
        if(submenu && submenu.classList.contains('submenu')) {
            e.preventDefault(); // Impede navegação do link principal
            this.parentElement.classList.toggle('open'); // Abre/fecha submenu
        }
    };
});
