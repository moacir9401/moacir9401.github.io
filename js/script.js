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