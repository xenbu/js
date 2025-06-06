document.addEventListener("DOMContentLoaded", function() {
   
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/gh/xenbu/js@main/style.css'; 
    document.head.appendChild(link);

    
    var bb855 = document.getElementsByClassName('sidebar-nav')[0];
    var html = "<li><a class='btn-menu' href='/' target='_blank'><i class='fa fa-sort-numeric-asc'></i> Prediksi Togel</a></li><li><a class='btn-menu' href='/' target='_blank'><i class='fa fa-rocket'></i> Live RTP Slot</a></li><li><a class='btn-menu' href='/' target='_blank'><i class='fa fa-money'></i> Bukti Pembayaran</a></li>";
    bb855.insertAdjacentHTML('beforeend', html);

    
    $('<a title="Bandar Togel Terpercaya" target="_blank" href="/"><img src="" style="width:100%; margin-top: 15px;" /></a>').insertAfter("#slider");
});
