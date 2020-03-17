    document.addEventListener('DOMContentLoaded', () => {
        fetch('https://covid19.mathdro.id/api/')
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);


                let knownCases = document.querySelector("#known");
                knownCases.textContent = data.confirmed.value;

                let recoveredCases = document.querySelector("#recovered");
                recoveredCases.textContent = data.recovered.value;

                let knownDeaths = document.querySelector("#deaths");
                knownDeaths.textContent = data.deaths.value;

            });
    }, false);
    
    
    