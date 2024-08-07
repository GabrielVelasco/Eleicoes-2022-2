const lolaTxt = document.querySelector("#lolaTxt");
const bolsaTxt = document.querySelector("#bolsaTxt");
const progressBar = document.querySelector("#progressBar");

let cand1 = {}
let cand2 = {}

async function getResults(){
    // const reqUrl = "https://resultados.tse.jus.br/oficial/ele2022/545/dados/br/br-c0001-e000545-v.json";

    try {
        // const dataTmp = await axios.get(reqUrl);
        // console.log('ok');

        const data = null; // api not working anymore...

        cand1 = {
            nome: 'Lula',
            percentVotos: 50.90
        }
        
        cand2 = {
            nome: 'Bolso',
            percentVotos: 49.10
        }
    
        // gambiarra mt rapida
        if(cand1.nome[0] === 'L'){ // cand1 == lula
            lolaTxt.innerText = `${cand1.percentVotos} %`;
            bolsaTxt.innerText = `${cand2.percentVotos} %`;
        }else{
            lolaTxt.innerText = `${cand2.percentVotos} %`;
            bolsaTxt.innerText = `${cand1.percentVotos} %`;
        }

        let test = false;
        let urnasApuradas;
        
        urnasApuradas = 100;

        progressBar.innerText = urnasApuradas + '%';
        progressBar.style.width = urnasApuradas + '%';
        

    }catch(e){
        console.log("Error at requesting");
    }
}

getResults();
// setInterval(getResults, 1000);
