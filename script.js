var elEncabezado = document.querySelector("header");
var laHora = new Date().getHours();
var dondeEstas;
if (document.body.classList.contains("portada")) {
    dondeEstas = true;
} else {
    dondeEstas = false;
}
var elSaludo;
if (5 < laHora && laHora < 12) {
    elSaludo = "Buenos días estrellitas la Tierra les dice hola!";
} else if (11 < laHora && laHora < 21) {
    elSaludo = "Buenas tardes, mi nombre es Russel y soy un guía explorador de la tribu 54";
} else {
    elSaludo = "Buenas noches, Westley. Buen trabajo. Duerme bien... lo más probable es que te mate por la mañana";
}
var elColor;
function setup() {
    createCanvas(windowWidth, windowHeight).position(0, 0).style("z-index", -1);
    background(0,0,0);
    createElement("h1", elSaludo).parent(elEncabezado).id("title");
    createA("index.html", "index").parent("vinculos");
    createA("page.html", "page").parent("vinculos");
    createA("beeple.html", "conoce a la serpiente").parent("vinculos");
    elColor = createColorPicker("#d91111;").parent("controles");
    elSlider = createSlider(1, 5, 3).parent("controles");
    if (dondeEstas) {
        portada();
    } else {
        pagina();
    }
}
function draw() {
    stroke(elColor.color());
    strokeWeight(elSlider.value());
    if (mouseIsPressed) {
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
}
function portada() {
    createSpan(". Tus ojos están en index.html").parent("title");
    select("a:nth-child(1)").style("font-weight", "bold").style("color", "#d91111");
}
function pagina() {
    createSpan(". El ratón está en page.html").parent("title");
    select("a:nth-child(2)").style("font-weight", "bold").style("color", "#d91111");
}