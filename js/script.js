// ================ Inicio Contagem regressiva ===============
var target_date = new Date("10 17, 2020     20:30").getTime();
var dias, horas, minutos, segundos;
var regressiva = document.getElementById("timeLeft");

setInterval(function() {

    var current_date = new Date().getTime();
    var segundos_f = (target_date - current_date) / 1000;

    dias = parseInt(segundos_f / 86400);
    segundos_f = segundos_f % 86400;

    horas = parseInt(segundos_f / 3600);
    segundos_f = segundos_f % 3600;

    minutos = parseInt(segundos_f / 60);
    segundos = parseInt(segundos_f % 60);

    document.getElementById('dia').innerHTML = dias;
    document.getElementById('hora').innerHTML = horas;
    document.getElementById('minuto').innerHTML = minutos;
    document.getElementById('segundo').innerHTML = segundos;


}, 1000);
// =============== Termino Contagem regressiva ===============

function imageSvg(nameIcon) {
    var svgNS = "http://www.w3.org/2000/svg";

    // desenhando a tela para ser pintada
    var canvasSVG = document.createElementNS(svgNS, "svg");
    canvasSVG.setAttributeNS(null, "version", "1.0");
    canvasSVG.setAttributeNS(null, "width", "40pt");
    canvasSVG.setAttributeNS(null, "height", "50pt");
    canvasSVG.setAttributeNS(null, "viewBox", "0 0 1252.000000 1280.000000");
    canvasSVG.setAttributeNS(null, "preserveAspectRatio", "xMidYMid meet");

    canvasSVG.setAttributeNS(null, "id", "canvas-svg");

    var g = document.createElementNS(svgNS, "g");
    g.setAttributeNS(null, "class", "icon");
    g.setAttributeNS(null, "transform", "translate(0.000000,1280.000000) scale(0.100000,-0.100000)");
    g.setAttributeNS(null, "stroke", "none");

    var path;
    if (nameIcon instanceof Object) {
        for (let index = 0; index < nameIcon.icons.length; index++) {
            path = document.createElementNS(svgNS, "path");
            path.setAttributeNS(null, "d", icon(nameIcon.icons[index]));
            g.appendChild(path);
        }

    } else {
        path = document.createElementNS(svgNS, "path");
        path.setAttributeNS(null, "d", icon(nameIcon));
        g.appendChild(path);
    }

    canvasSVG.appendChild(g);
    // apendando o elemento no corpo do SVG
    if (nameIcon instanceof Object) {
        $("." + nameIcon.title).append(canvasSVG);
    } else {
        $("." + nameIcon).append(canvasSVG);
    }
}

// ================ Inicio marcador Time Line =================
var marcador = document.createElement('div');
marcador.setAttribute("id", "marcador");
$('.uor-story .col-md-6').prepend(marcador);

// ================== Inicio Enviar Email =====================
jQuery(document).ready(function() {
    jQuery("#enviar").ajaxStart(function() { jQuery(this).html("Enviando..."); });
    jQuery('#submit').click(function() {
        var nome = jQuery('#nome').val();
        var email = jQuery('#email').val();
        var assunto = jQuery('#telefone').val();
        var mensagem = jQuery('#telefone').val();
        jQuery.post('sendMail.php', { nome: nome, email: email, assunto: assunto, mensagem: mensagem, contato: true },
            function(data, textStatus) {
                jQuery('#enviar').html("Mensagem enviada com sucesso!");
            });
        return false;
    });
});

// ================== Termino Enviar Email ====================


// =================== Inicio Link scrooll ====================
$("li[data-scroll='index']> a").click(function() {
    $("html,body").animate({
        scrollTop: 0
    });
})
$("li[data-scroll='galeria'] > a").click(function() {
    $("html,body").animate({
        scrollTop: $("#galeria").offset().top - 50
    });
})
$("li[data-scroll='NossaHistoria'] > a").click(function() {
    $("html").animate({
        scrollTop: $("#NossaHistoria").offset().top - 50
    });
})
$("li[data-scroll='Contato'] > a").click(function() {
    $("html,body").animate({
        scrollTop: $("#Contato").offset().top - 50
    });
})
$("h2[data-scroll='Contato']").click(function() {
    $("html,body").animate({
        scrollTop: $("#Contato").offset().top - 50
    });
})
$("li[data-scroll='Mensagem'] > a").click(function() {
        $("html,body").animate({
            scrollTop: $("#Mensagem").offset().top
        });
    })
    // =================== Termino Link scrooll ===================

// =================== Inicio menu scrooll ====================

$(window).scroll(function() {
        if ($(document).scrollTop() >= 50 && $(document).width() >= 700) {
            $('.navbar').addClass("navbar-brand");
            $('.navbar').addClass("menu-active");
        } else {
            $('.navbar').removeClass("menu-active");
            if ($(document).width() >= 700)
                $(".navbar").removeClass("navbar-brand");
        }
    })
    // =================== Termino menu scroll ====================


// ================= Inicio scroll animado ====================

$(window).scroll(function() {

    var altNossaHistoria = $("#NossaHistoria").offset().top + $("#NossaHistoria").height();
    var altGaleria = $("#galeria").offset().top + $("#galeria").height();
    var altContato = $("#Contato").offset().top + $("#Contato").height();
    var altMensagem = $("#Mensagem").offset().top + $("#Mensagem").height();

    if ($(document).scrollTop() >= $("#NossaHistoria").offset().top && $(document).scrollTop() <= altNossaHistoria) {
        $('.nav-item').removeClass('active');
        $('li[data-scroll="NossaHistoria"]').addClass('active');

    } else if ($(document).scrollTop() >= $("#galeria").offset().top && $(document).scrollTop() <= altGaleria) {
        $('.nav-item').removeClass('active');
        $('li[data-scroll="galeria"]').addClass('active');

    } else if ($(document).scrollTop() >= $("#Mensagem").offset().top && $(document).scrollTop() <= altMensagem) {
        $('.nav-item').removeClass('active');
        $('li[data-scroll="Mensagem"]').addClass('active');
    } else if ($(document).scrollTop() >= $("#Contato").offset().top && $(document).scrollTop() <= altContato) {
        $('.nav-item').removeClass('active');
        $('li[data-scroll="Contato"]').addClass('active');
    } else {
        $('.nav-item').removeClass('active');
        $('li[data-scroll="index"]').addClass('active');
    }
    // ================= termiono scroll animado ===================

})


// ================= Inicio animacao comentario ====================
$(document).ready(function() {
    $("#testimonial-slider").owlCarousel({
        items: 3,
        itemsDesktop: [1000, 2],
        itemsDesktopSmall: [979, 2],
        itemsTablet: [768, 1],
        pagination: false,
        navigation: true,
        navigationText: ["", ""],
        autoPlay: true
    });
});
// ================= termino animacao comentario ====================