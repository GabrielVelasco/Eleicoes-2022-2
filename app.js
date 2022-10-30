const lolaTxt = document.querySelector("#lolaTxt");
const bolsaTxt = document.querySelector("#bolsaTxt");
const progressBar = document.querySelector("#progressBar");

let cand1 = {}
let cand2 = {}

async function getResults(){
    const reqUrl = "https://fierce-savannah-14331.herokuapp.com/ele";

    try {
        const dataTmp = await axios.get(reqUrl);
        console.log('ok');

        const data = dataTmp.data;

        cand1 = {
            nome: data.cand[1].nm,
            percentVotos: data.cand[1].pvap.replace(',', '.')
        }
        
        cand2 = {
            nome: data.cand[0].nm,
            percentVotos: data.cand[0].pvap.replace(',', '.')
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