// const axios = require("axios");

async function getResults(){
    const config = {
        headers:{
            "x-requested-with": "*"
        }
      };

    const reqUrl = "https://cors-anywhere.herokuapp.com/https://resultados.tse.jus.br/oficial/ele2022/544/dados-simplificados/br/br-c0001-e000544-r.json";
    
    const data = await axios.get(reqUrl, config);
    
    const cand1 = {
        nome: data.data.cand[0].nm,
        percentVotos: data.data.cand[0].pvap.replace(',', '.')
    }
    
    const cand2 = {
        nome: data.data.cand[1].nm,
        percentVotos: data.data.cand[1].pvap.replace(',', '.')
    }
    
    const lolaTxt = document.querySelector("#lolaTxt");
    const bolsaTxt = document.querySelector("#bolsaTxt");

    lolaTxt.innerText = `${cand1.percentVotos} %`;
    bolsaTxt.innerText = `${cand2.percentVotos} %`;
    
    // console.log(`${cand1.nome} == ${cand1.percentVotos}`);
    // console.log(`${cand2.nome} == ${cand2.percentVotos}`);
    // console.log(`Diff prim pro seg: ${Number(cand1.percentVotos) - Number(cand2.percentVotos)}`);
    // console.log(`Urnas apuradas: ${data.data.pst}`);
}

getResults();
// setInterval(() => {console.clear()}, 1000);
setInterval(getResults, 1000);