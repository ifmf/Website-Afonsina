function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}
//usage:

if (document.getElementById("afonsinos").classList.contains("show")) {

}


window.onload = function () {
    readTextFile("js/api/csvjson.json", function (text) {
        var data = JSON.parse(text);

        let geracoes = [];

        for (let i = 0; i < data.length; i++) {
            var tuno = data[i];
            if (!geracoes.includes(tuno.geracao)) {
                geracoes.push(tuno.geracao)
            }
        };

        document.getElementById('afonsinos').innerHTML = ``;
        let i = 0;
        geracoes.forEach(geracao => {
            document.getElementById("afonsinos").innerHTML += `
                                <div class="section-header has-bottom-sep" data-aos="fade-up" id="${i}geracao">
                                    <div class="col-full">
                                        <h1 id="h1_${i + 1}" class="subhead subhead--dark">${i}º Geração - Ano ${geracao}</h1>
                                    </div>
                                    <div class="team row" id="${i + 1}team">`;

            if (document.getElementById("h1_1")) document.getElementById("h1_1").innerHTML = `Geração dos Fundadores - Ano 1994`
            data.forEach(tuno => {
                if (tuno.geracao == geracao) {
                    //tuno.funcao == 0 || 1 || 2 || 3 - Talvez seja melhor
                    if (tuno.cargo == 2) {
                        /*document.getElementById(`${i + 1}team`).innerHTML += `
                            <div class="col-lg-3 col-md-6">
                                <div class="member">
                                    <div class="member-img">
                                        <img src="images/tunos/${tuno.foto}.jpg" class="img-fluid" alt="">
                                    </div>
                                    <div class="member-info">
                                        <h6>Atual Magister</h6>
                                        <h4>${tuno.alcunha}</h4>
                                        <span>${tuno.instrumento}</span>
                                    </div>
                                    <a href="#" class="badge-corner badge-corner-alt">
                                        <span class="fa fa-user"></span>
                                    </a>
                                </div>
                            </div>
                        `;*/
                        document.getElementById(`${i + 1}team`).innerHTML += `
                                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                            <div class="team-block">
                                                <div class="team-img">
                                                    <img src="images/tunos/${tuno.foto}.jpg"
                                                        alt="">
                                                    <div class="overlay">
                                                        <div class="text">
                                                            <h6>Atual Magister</h6>
                                                            <h3 class="mb0 text-white">${tuno.alcunha}</h3>
                                                            <p class="mb30 team-meta">${tuno.instrumento}</p>
                                                            <p style="margin-top: -20px; font-size: 13px">
                                                               <b>Data de Passagem:</b> ${tuno.data}<br>
                                                               <b>Evento de Passagem:</b> ${tuno.evento}<br>
                                                               <b>Local de Passagem:</b> ${tuno.local}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <a href="#" class="badge-corner badge-corner-alt">
                                                        <span class="fa fa-user"></span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        `;
                    }
                    else if (tuno.cargo == 1) {
                        /*document.getElementById(`${i + 1}team`).innerHTML += `
                            <div class="col-lg-3 col-md-6">
                                <div class="member">
                                    <div class="member-img">
                                        <img src="images/tunos/${tuno.foto}.jpg" class="img-fluid" alt="" style="height: 200px; width: auto">
                                    </div>
                                    <div class="member-info">
                                        <h6>Atual Ensaiador</h6>
                                        <h4>${tuno.alcunha}</h4>
                                        <span>${tuno.instrumento}</span>
                                    </div>
                                    <a href="#" class="badge-corner badge-corner-red">
                                        <span class="fa fa-music"></span>
                                    </a>
                                </div>
                            </div>
                        `;*/
                        document.getElementById(`${i + 1}team`).innerHTML += `
                                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                            <div class="team-block">
                                                <div class="team-img">
                                                    <img src="images/tunos/${tuno.foto}.jpg"
                                                        alt="">
                                                    <div class="overlay">
                                                        <div class="text">
                                                            <h6>Atual Ensaiador</h6>
                                                            <h3 class="mb0 text-white">${tuno.alcunha}</h3>
                                                            <p class="mb30 team-meta">${tuno.instrumento}</p>
                                                            <p style="margin-top: -20px; font-size: 13px">
                                                                <b>Data de Passagem:</b> ${tuno.data}<br>
                                                                <b>Evento de Passagem:</b> ${tuno.evento}<br>
                                                                <b>Local de Passagem:</b> ${tuno.local}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <a href="#" class="badge-corner badge-corner-red">
                                                        <span class="fa fa-music"></span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        `;
                    }
                    else if (tuno.cargo == 3) {
                        /*document.getElementById(`${i + 1}team`).innerHTML += `
                            <div class="col-lg-3 col-md-6">
                                <div class="member">
                                    <div class="member-img">
                                        <img src="images/tunos/${tuno.foto}.jpg" class="img-fluid" alt="" style="height: 200px; width: auto">
                                        </div>
                                    <div class="member-info">
                                        <h6>Antigo Ensaiador</h6>
                                        <h4>${tuno.alcunha}</h4>
                                        <span>${tuno.instrumento}</span>
                                    </div>
                                    <a href="" style="pointer-events: none; cursor: default;" class="badge-corner badge-corner-dark">
                                        <span class="fa fa-music"></span>
                                    </a>
                                </div>
                            </div>
                        `;*/
                        document.getElementById(`${i + 1}team`).innerHTML += `
                                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                            <div class="team-block">
                                                <div class="team-img">
                                                    <img src="images/tunos/${tuno.foto}.jpg"
                                                        alt="">
                                                    <div class="overlay">
                                                        <div class="text">
                                                            <h6>Antigo Ensaiador</h6>
                                                            <h3 class="mb0 text-white">${tuno.alcunha}</h3>
                                                            <p class="mb30 team-meta">${tuno.instrumento}</p>
                                                            <p style="margin-top: -20px; font-size: 13px">
                                                                <b>Data de Passagem:</b> ${tuno.data}<br>
                                                                <b>Evento de Passagem:</b> ${tuno.evento}<br>
                                                                <b>Local de Passagem:</b> ${tuno.local}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <a href="" style="pointer-events: none; cursor: default;" class="badge-corner badge-corner-dark">
                                                        <span class="fa fa-music"></span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        `;
                    }
                    else if (tuno.cargo == 4) {
                        /*document.getElementById(`${i + 1}team`).innerHTML += `
                            <div class="col-lg-3 col-md-6">
                                <div class="member">
                                    <div class="member-img">
                                        <img src="images/tunos/${tuno.foto}.jpg" class="img-fluid" alt="" style="height: 200px; width: auto">
                                    </div>
                                    <div class="member-info">
                                        <h6>Antigo Magister</h6>
                                        <h4>${tuno.alcunha}</h4>
                                        <span>${tuno.instrumento}</span>
                                    </div>
                                    <a href="#" class="badge-corner badge-corner-dark">
                                        <span class="fa fa-user"></span>
                                    </a>
                                </div>
                            </div>
                        `;*/
                        document.getElementById(`${i + 1}team`).innerHTML += `
                                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                            <div class="team-block">
                                                <div class="team-img">
                                                    <img src="images/tunos/${tuno.foto}.jpg"
                                                        alt="">
                                                    <div class="overlay">
                                                        <div class="text">
                                                            <h6>Antigo Magister</h6>
                                                            <h3 class="mb0 text-white">${tuno.alcunha}</h3>
                                                            <p class="mb30 team-meta">${tuno.instrumento}</p>
                                                            <p style="margin-top: -20px; font-size: 13px">
                                                               <b>Data de Passagem:</b> ${tuno.data}<br>
                                                               <b>Evento de Passagem:</b> ${tuno.evento}<br>
                                                               <b>Local de Passagem:</b> ${tuno.local}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <a href="#" class="badge-corner badge-corner-dark">
                                                        <span class="fa fa-user"></span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        `;
                    }
                    else if (tuno.cargo == 5) {
                        /*document.getElementById(`${i + 1}team`).innerHTML += `
                            <div class="col-lg-3 col-md-6">
                                <div class="member">
                                    <div class="member-img">
                                        <img src="images/tunos/${tuno.foto}.jpg" class="img-fluid" alt="" style="height: 200px; width: auto">
                                    </div>
                                    <div class="member-info">
                                        <h6>Antigo Ensaiador/Magister</h6>
                                        <h4>${tuno.alcunha}</h4>
                                        <span>${tuno.instrumento}</span>
                                    </div>
                                    <a href="#" class="badge-corner badge-corner-dark">
                                        <span class="fa fa-user" style="left: -17px !important"></span>
                                        <span class="fa fa-music" style="left: -32px !important"></span>
                                    </a>
                                </div>
                            </div>
                        `;*/
                        document.getElementById(`${i + 1}team`).innerHTML += `
                                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                            <div class="team-block">
                                                <div class="team-img">
                                                    <img src="images/tunos/${tuno.foto}.jpg"
                                                        alt="">
                                                    <div class="overlay">
                                                        <div class="text">
                                                            <h6 >Antigo Ensaiador/Magister</h6>
                                                            <h3 class="mb0 text-white">${tuno.alcunha}</h3>
                                                            <p class="mb30 team-meta">${tuno.instrumento}</p>
                                                            <p style="margin-top: -20px; font-size: 13px">
                                                               <b>Data de Passagem:</b> ${tuno.data}<br>
                                                               <b>Evento de Passagem:</b> ${tuno.evento}<br>
                                                               <b>Local de Passagem:</b> ${tuno.local}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <a href="#" class="badge-corner badge-corner-dark">
                                                        <span class="fa fa-user" style="left: -17px !important"></span>
                                                        <span class="fa fa-music" style="left: -32px !important"></span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        `;
                    }
                    else {
                        /*document.getElementById(`${i + 1}team`).innerHTML += `
                            <div class="col-lg-3 col-md-6">
                                <div class="member">
                                    <div class="member-img">
                                        <img src="images/tunos/${tuno.foto}.jpg" class="img-fluid" alt="" style="height: 200px; width: auto">
                                    </div>
                                    <div class="member-info">
                                        <h4>${tuno.alcunha}</h4>
                                        <span>${tuno.instrumento}</span>
                                    </div>
                                </div>
                            </div>
                        `;*/
                        document.getElementById(`${i + 1}team`).innerHTML += `
                                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                            <div class="team-block">
                                                <div class="team-img">
                                                    <img src="images/tunos/${tuno.foto}.jpg"
                                                        alt="">
                                                    <div class="overlay">
                                                        <div class="text">
                                                            <h3 class="mb0 text-white">${tuno.alcunha}</h3>
                                                            <p class="mb30 team-meta">${tuno.instrumento}</p>
                                                            <p style="margin-top: -20px; font-size: 13px">
                                                            <b>Data de Passagem:</b> ${tuno.data}<br>
                                                            <b>Evento de Passagem:</b> ${tuno.evento}<br>
                                                            <b>Local de Passagem:</b> ${tuno.local}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        `;
                    }
                }
            });
            document.getElementById("afonsinos").innerHTML += `</div></div>`;
            i++
        });


    });

}