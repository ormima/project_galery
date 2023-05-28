const prev = document.getElementById("prev");
const next = document.getElementById("next");
const foto = document.getElementById("foto");
const mini = document.querySelectorAll("mini");

next.addEventListener("click", () => {
    const fotojeden = foto.slice(1,12);
    const fotonum = foto.slice(12,13);
    const fotodwa = foto.slice(13,56);
    console.log(foto + " " + fotojeden + " " + fotonum + " " + fotodwa);
    if(fotonum === 5){
        fotonum = 1;
        foto = fotojeden + fotonum + fotodwa;
    } else{
        fotonum ++;
        foto = fotojeden + fotonum + fotodwa;
    }
})
prev.addEventListener("click", () => {
    const fotojeden = foto.slice(1,12);
    const fotonum = foto.slice(12,13);
    const fotodwa = foto.slice(13,48);
    console.log(foto + " " + fotojeden + " " + fotonum + " " + fotodwa);
    if(fotonum === 1){
        fotonum = 5;
        foto = fotojeden + fotonum + fotodwa;
    } else{
        fotonum --;
        foto = fotojeden + fotonum + fotodwa;
    }
})
mini.addEventListener("click", () => {
    const mininum = mini.slice(12,13);
    console.log(mini + " " + mininum + " " + fotonum + " " + fotodwa);
    foto = fotojeden + mininum + fotodwa;
})