var pokedex_content = document.getElementById('pokedex_content');
console.log(pokedex_content)



for (let i = 0; i < pokemon.length; i++) {

    pokedex_content.innerHTML += `
    <a id ="pokemon${[i]}" class="card-text card col-lg-3 mx-lg-5 my-3 bg-second text-body">
    <h5 id="${pokemon[i].name}" class=" my-2 text-center subtitles text-body-bold">${pokemon[i].name}</h5>
    <img src="${pokemon[i].art_url}" class="card-img-top" alt="${pokemon[i].name}">
    <div class="card-body border-top text-body text-main">
        <p id="desc_text${[i]}" class="desc_card card-text text-black text-body-bold description-card">${pokemon[i].description}</p>
    </div>
    <div  class="w-100  px-3 border-top">
        <p  class="mt-3"><b>id:</b> ${pokemon[i].pkdx_id}</p>
        <p  class=""><b>tipo:</b> ${pokemon[i].types}</p>
    </div>
</a>`
}

var modo = 0;
var btn_mode = document.getElementById('btn_mode');

btn_mode.addEventListener("click", () => {

    if (modo == 0) {
        btn_mode.innerHTML = `<p class="my-auto">Modo Vertical</p>`
        modo = 1;
        console.log(modo)

        pokedex_content.classList = ` mx-auto my-4 scrollmenu`
    } else {
        btn_mode.innerHTML = `<p class="my-auto">Modo Horizontal</p>`
        modo = 0;
        pokedex_content.classList = `row mx-auto my-4 `
    }
})

var text_size = document.getElementById("text_size");

text_size.addEventListener("change", () => {
    var title_size = 45 * text_size.value;
    var body_size = 15 * text_size.value;
    var bold_size = 18 * text_size.value;
    var width_img = 65 * text_size.value;

    var tz = document.getElementById("title_text")
    tz.classList = `navbar-brand col-8 my-auto title-main`
    tz.style = `font-size: ${title_size}px`
    document.getElementById('img-title').style = `width:${width_img}px`

    for (let i = 0; i < pokemon.length; i++) {
        document.getElementById(`desc_text${[i]}`).style = `font-size: ${body_size}px`
        document.getElementById(`${pokemon[i].name}`).style = `font-size: ${bold_size}px`

    }

    if (text_size.value > 1.5) {
        for (let i = 0; i < pokemon.length; i++) {
            document.getElementById(`pokemon${[i]}`).classList = `card-text card col-lg-5 mx-lg-5 my-3 bg-second text-body`
        }
    } else {
        for (let i = 0; i < pokemon.length; i++) {
            document.getElementById(`pokemon${[i]}`).classList = `card-text card col-lg-3 mx-lg-5 my-3 bg-second text-body`
        }
    }
    console.log(title_size, body_size, bold_size) //45 title, 15 body, 18 bold

})

var searchPo = document.getElementById("searchPokemon");
searchPo.addEventListener("submit", (r) => {
    r.preventDefault();

    var pokName = searchPo['pokName'].value
    var pokNmameLower = pokName.toLowerCase();

    for (let i = 0; i < pokemon.length; i++) {

        pokedex_content.innerHTML=``
        

        if (pokNmameLower==pokemon[i].name.toLowerCase) {
            pokedex_content.innerHTML += `
        <a id ="pokemon${[i]}" class="card-text card col-lg-3 mx-lg-5 my-3 bg-second text-body">
        <h5 id="${pokemon[i].name}" class=" my-2 text-center subtitles text-body-bold">${pokemon[i].name}</h5>
        <img src="${pokemon[i].art_url}" class="card-img-top" alt="...">
        <div class="card-body border-top text-body text-main">
            <p id="desc_text${[i]}" class="desc_card card-text description-card">${pokemon[i].description}</p>
        </div>
        <div  class="w-100  px-3 border-top">
            <p  class="mt-3"><b>id:</b> ${pokemon[i].pkdx_id}</p>
            <p  class=""><b>tipo:</b> ${pokemon[i].types}</p>
        </div>
    </a>`
        } else {
            pokedex_content.innerHTML = `<div class="container-fluid text-center">
                
                <img src="img/not-found.png" class="w-25">
                <h4>Pokemon not found<h4>
                </div>`
        }
    }

})