const lolaTxt = document.querySelector("#lolaTxt");
const bolsaTxt = document.querySelector("#bolsaTxt");
const progressBar = document.querySelector("#progressBar");

let cand1 = {}
let cand2 = {}

async function getResults(){
    const reqUrl = "https://api.allorigins.win/get?url=https://resultados.tse.jus.br/oficial/ele2022/545/dados-simplificados/br/br-c0001-e000545-r.json";
    
    try {
        const dataTmp = await axios.get(reqUrl);
        console.log("ok");
        
        const data = JSON.parse(dataTmp.data.contents); // JSON String to JS Obj
        // console.dir(data);
        cand1 = {
            nome: data.cand[0].nm,
            percentVotos: data.cand[0].pvap.replace(',', '.')
        }
        
        cand2 = {
            nome: data.cand[1].nm,
            percentVotos: data.cand[1].pvap.replace(',', '.')
        }
    
        lolaTxt.innerText = `${cand1.percentVotos} %`;
        bolsaTxt.innerText = `${cand2.percentVotos} %`;

        let test = false;
        let urnasApuradas;
        
        if(test)
            urnasApuradas = "50.15".replace(',', '.') + "%";
        else
            urnasApuradas = data.pst.replace(',', '.') + "%";

        progressBar.innerText = urnasApuradas;
        progressBar.style.width = urnasApuradas;
        

    }catch(e){
        console.log("Error at requesting");
    }
}

getResults();
setInterval(getResults, 5000);