let downloadBar = parseInt(document.querySelector(".progress-bar").style.width);
let mainFun = document.querySelectorAll(".main-fun");
let loading = setInterval(() => {
    if(downloadBar != 100){
        downloadBar++;
        document.querySelector(".progress-bar").style.width = downloadBar + "%";
    }else{
        setTimeout(() => {
            clearInterval(loading);
            mainFun.forEach(e => {
                e.style.display = "block";
            })
            document.querySelector(".mengloading").style.display = "none";
        }, 400);
    }
}, 30);

// variabel modal
let modalBoxTemplate = document.querySelector(".modal-body-konversi");

//function untuk mengkonversi bilangan desimal ke bilangan biner
function konversiDesimalKeBiner(){
    let inputDesimal = parseInt(document.querySelector("#inputBilangan").value);
    let desimalInput = inputDesimal;
    if(String(inputDesimal) == "NaN"){
        modalBoxTemplate.innerHTML = `<div class="alert alert-danger" role="alert">Anda belum memasukkan bilangan !</div>`
    }else if(inputDesimal <= 0){
        modalBoxTemplate.innerHTML = `<div class="alert alert-danger" role="alert">Anda memasukkan bilangan negatif !</div>`
    }else{
        let listBiner = [];
        let rumusKonversi = '';
        while(inputDesimal / 2 > 0){
            rumusKonversi += `${inputDesimal} : 2 = ${Math.floor(inputDesimal / 2)} sisa <strong>${Math.floor(inputDesimal % 2)}</strong> <br>`
            listBiner.push(Math.floor(inputDesimal % 2));
            inputDesimal = Math.floor(inputDesimal / 2) 
        }
        modalBoxTemplate.innerHTML = `${rumusKonversi} <br> Bentuk biner dari bilangan desimal <strong>${desimalInput}</strong> adalah <strong>${listBiner.reverse().join('')}</strong>`;
    }
}

//function untuk mengkonversi bilangan biner ke bilangan desimal
function konversiBinerKeDesimal(){
    let inputBiner = String(document.querySelector("#inputBilangan").value).split('').reverse();
    if(inputBiner.filter(biner => biner > 1 || biner < 0).length > 0){
        modalBoxTemplate.innerHTML = `<div class="alert alert-danger" role="alert"><strong>${inputBiner.reverse().join('')}</strong> bukan bilangan biner!</div>`
    }else if(inputBiner[inputBiner.length - 1] == "-"){
        modalBoxTemplate.innerHTML = `<div class="alert alert-danger" role="alert">Anda memasukkan bilangan negatif !</div>`
    }else if(inputBiner.length <= 0){
        modalBoxTemplate.innerHTML = `<div class="alert alert-danger" role="alert">Anda belum memasukkan bilangan !</div>`
    }else{
        let rumusKonversi = '';
        let listDesimal = [];
        inputBiner.forEach((biner, i) => {
            rumusKonversi += `${biner} × 2<sup>${i}</sup> = <strong>${biner * Math.pow(2, i)}</strong> <br>`
            listDesimal.push(Number(biner * Math.pow(2, i)));
    });
    modalBoxTemplate.innerHTML = `${rumusKonversi} <br> <strong>${listDesimal.join(' + ')} = ${listDesimal.reduce((a, b) => a + b)}</strong> <br> Bentuk desimal dari bilangan biner <strong>${inputBiner.reverse().join('')}</strong> adalah <strong>${listDesimal.reduce((a, b) => a + b)}</strong>`
    }
}

//function untuk mengkonversi bilangan desimal ke bilangan oktal
function konversiDesimalKeOktal(){
    let desimal = parseInt(document.querySelector("#inputBilangan").value)
    let desimalInput = desimal;
    if(String(desimalInput) == "NaN"){
        modalBoxTemplate.innerHTML = `<div class="alert alert-danger" role="alert">Anda belum memasukkan bilangan !</div>`
    }else if(desimal <= 0){
        modalBoxTemplate.innerHTML = `<div class="alert alert-danger" role="alert">Anda memasukkan bilangan negatif !</div>`
    }else{
        let listOktal = [];
        let rumusKonversi = '';
        while(desimal / 8 > 0){
            rumusKonversi += `${desimal} : 8 = ${Math.floor(desimal / 8)} sisa <strong>${Math.floor(desimal % 8)}</strong> <br>`
            listOktal.push(Math.floor(desimal % 8));
            desimal = Math.floor(desimal / 8) 
        }
        modalBoxTemplate.innerHTML = `${rumusKonversi} <br> Bentuk oktal dari bilangan desimal <strong>${desimalInput}</strong> adalah <strong>${listOktal.reverse().join('')}</strong>`;
    }
}

//function untuk mengkonversi bilangan biner ke oktal
function konversiBinerKeOktal(){
    let inputBiner = document.querySelector("#inputBilangan").value;
    let rumusKonversi = `${inputBiner} = `;
    inputBiner = String(inputBiner).split('').reverse();
    let biner = [];

    for(let i = 0; i < inputBiner.length; i++){
        biner.push(inputBiner.slice(i, i + 3));
        i += 2;
    }
    biner.forEach((biner, i) => {
        biner.forEach(biner => {
            rumusKonversi += `<strong>${biner}</strong>`
        })
        if(i < biner.length){
            rumusKonversi += ", ";
        }else{
            rumusKonversi += ".<br><br>";
        }
    })
    biner.forEach(biner => {
        biner.forEach((biner, i)=> {
            rumusKonversi += `${biner} × 2<sup>${i}</sup> = <strong>${biner * Math.pow(2, i)}</strong> <br>`
        })
        rumusKonversi += "<br>"
    })
    let listDesimal = [];
    biner.forEach(biner => {
        listDesimal.push(biner.map((biner, i) => biner * Math.pow(2, i)));
    })
    listDesimal.forEach((des, i) => {
        rumusKonversi += `<strong>${des.join(" + ")}</strong> = <strong>${des.reduce((a, b) => a + b)}</strong> <br>`
        listDesimal[i] = des.reduce((a, b) => a + b);
    })
    rumusKonversi += `Bentuk oktal dari bilangan biner <strong>${inputBiner.reverse().join('')}</strong> adalah <strong>${listDesimal.reverse().join('')}</strong>`
    modalBoxTemplate.innerHTML = rumusKonversi;
}

//function untuk mengkonversi bilangan desimal ke hexadesimal
function konversiDesimalKeHexadesimal(){
    let desimalInput = parseInt(document.querySelector("#inputBilangan").value);
    desimal = desimalInput;
    listHexa = [];
    let rumusKonversi = '';
    while(desimalInput / 16 != 0){
        listHexa.push(Math.floor(desimalInput % 16));
        rumusKonversi += `${desimalInput} : 16 = ${Math.floor(desimalInput / 16)} sisa <strong>${Math.floor(desimalInput % 16)}</strong> <br>`;
        desimalInput = Math.floor(desimalInput / 16);
    }
    rumusKonversi += `<br>`
    let hexa = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
    let hexadesimal = [];
    listHexa.forEach(e => {
        if(e >= 10){
            hexadesimal.push(hexa[e]);
            rumusKonversi += `<strong>${e} = ${hexa[e]}</strong><br>`
        }else{
            hexadesimal.push(e);
            rumusKonversi += `<strong>${e} = ${e}</strong><br>`
        }
    });
    rumusKonversi += `<br>Bentuk hexadesimal dari bilangan desimal <strong>${desimal}</strong> adalah <strong>${hexadesimal.reverse().join('')}</strong>`
    modalBoxTemplate.innerHTML = rumusKonversi;
}

let a = true;
//function untuk menjalankan function konversi bilangan sesuai tipe konversi
function konversiBilangan(){
    let tipe = document.querySelector("#tipe-konversi-bilangan").value;
    if(a == true){
        a = false;
        window.open('https://www.instagram.com/madearyaastawa');
    }
    if(tipe === "desimal-ke-biner"){
        konversiDesimalKeBiner();
    }else if(tipe === "biner-ke-desimal"){
        konversiBinerKeDesimal();
    }else if(tipe === "desimal-ke-oktal"){
        konversiDesimalKeOktal();
    }else if(tipe === "biner-ke-oktal"){
        konversiBinerKeOktal();
    }else if(tipe === "desimal-ke-hexadesimal"){
        konversiDesimalKeHexadesimal();
    }else{
        modalBoxTemplate.innerHTML = `<div class="alert alert-danger" role="alert">Anda belum memilih tipe konversi !</div>`
    }
}