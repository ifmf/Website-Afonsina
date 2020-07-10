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

        var elemToObserve = document.getElementById('afonsinos');
        var prevClassState = elemToObserve.classList.contains('show');
        var observer = new MutationObserver(function (mutations) {
            mutations.forEach(function (mutation) {
                if (mutation.attributeName == "class") {
                    var currentClassState = mutation.target.classList.contains('show');
                    if (prevClassState !== currentClassState) {
                        prevClassState = currentClassState;

                        document.getElementById('afonsinos').innerHTML = ``;
                        let i = 0;
                        geracoes.forEach(geracao => {
                            document.getElementById("afonsinos").innerHTML += `
            <div class="row section-header has-bottom-sep" data-aos="fade-up" id="${i}geracao">
                <div class="col-full">
                    <h1 id="h1_${i + 1}" class="subhead subhead--dark">${i}º Geração - Ano ${geracao}</h1>
                </div>
                <div class="team" class="row" id="${i + 1}team">
            `;
                            if (document.getElementById("h1_1")) document.getElementById("h1_1").innerHTML = `Geração dos Fundadores - Ano 1994`
                            data.forEach(tuno => {
                                if (tuno.geracao == geracao) {
                                    //tuno.funcao == 0 || 1 || 2 || 3 - Talvez seja melhor
                                    if (tuno.cargo == 2) {
                                        document.getElementById(`${i + 1}team`).innerHTML += `
                                        <div class="col-lg-3 col-md-6">
                                            <div class="member">
                                                <div class="member-img">
                                                    <img src="images/tunos/${tuno.foto}.jpg" class="img-fluid" alt="" style="height: 200px; width: auto">
                                                </div>
                                                <div class="member-info">
                                                    <h6>Magister Atual</h6>
                                                    <h4>${tuno.alcunha}</h4>
                                                    <span>${tuno.instrumento}</span>
                                                </div>
                                                <a href="#" class="badge-corner badge-corner-alt">
                                                        <span class="fa fa-user"></span>
                                                    </a>
                                            </div>
                                        </div>
                                        `;
                                    }
                                    else if (tuno.cargo == 1) {
                                        document.getElementById(`${i + 1}team`).innerHTML += `
                                        <div class="col-lg-3 col-md-6">
                                            <div class="member">
                                                <div class="member-img">
                                                    <img src="images/tunos/${tuno.foto}.jpg" class="img-fluid" alt="" style="height: 200px; width: auto">
                                                </div>
                                                <div class="member-info">
                                                    <h6>Ensaiador Atual</h6>
                                                    <h4>${tuno.alcunha}</h4>
                                                    <span>${tuno.instrumento}</span>
                                                </div>
                                                <a href="#" class="badge-corner badge-corner-red">
                                                        <span class="fa fa-music"></span>
                                                    </a>
                                            </div>
                                        </div>
                                        `;
                                    }
                                    else if (tuno.cargo == 3) {
                                        document.getElementById(`${i + 1}team`).innerHTML += `
                                        <div class="col-lg-3 col-md-6">
                                            <div class="member">
                                                <div class="member-img">
                                                    <img src="images/tunos/${tuno.foto}.jpg" class="img-fluid" alt="" style="height: 200px; width: auto">
                                                </div>
                                                <div class="member-info">
                                                    <h6>Ensaiador Antigo</h6>
                                                    <h4>${tuno.alcunha}</h4>
                                                    <span>${tuno.instrumento}</span>
                                                </div>
                                                <a href="#" class="badge-corner badge-corner-dark">
                                                        <span class="fa fa-music"></span>
                                                    </a>
                                            </div>
                                        </div>
                                        `;
                                    }
                                    else if (tuno.cargo == 4) {
                                        document.getElementById(`${i + 1}team`).innerHTML += `
                                        <div class="col-lg-3 col-md-6">
                                            <div class="member">
                                                <div class="member-img">
                                                    <img src="images/tunos/${tuno.foto}.jpg" class="img-fluid" alt="" style="height: 200px; width: auto">
                                                </div>
                                                <div class="member-info">
                                                    <h6>Magister Antigo</h6>
                                                    <h4>${tuno.alcunha}</h4>
                                                    <span>${tuno.instrumento}</span>
                                                </div>
                                                <a href="#" class="badge-corner badge-corner-dark">
                                                        <span class="fa fa-user"></span>
                                                    </a>
                                            </div>
                                        </div>
                                        `;
                                    }
                                    else if (tuno.cargo == 5) {
                                        document.getElementById(`${i + 1}team`).innerHTML += `
                                        <div class="col-lg-3 col-md-6">
                                            <div class="member">
                                                <div class="member-img">
                                                    <img src="images/tunos/${tuno.foto}.jpg" class="img-fluid" alt="" style="height: 200px; width: auto">
                                                </div>
                                                <div class="member-info">
                                                    <h6>Ensaiador/Magister Antigo</h6>
                                                    <h4>${tuno.alcunha}</h4>
                                                    <span>${tuno.instrumento}</span>
                                                </div>
                                                <a href="#" class="badge-corner badge-corner-dark">
                                                    <span class="fa fa-user" style="left: -17px !important"></span>
                                                    <span class="fa fa-music" style="left: -32px !important"></span>
                                                </a>
                                            </div>
                                        </div>
                                        `;
                                    }
                                    else {
                                        document.getElementById(`${i + 1}team`).innerHTML += `
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
                    `;
                                    }
                                }
                            });
                            document.getElementById("afonsinos").innerHTML += `</div></div>`;
                            i++
                        });

                        if (currentClassState) {
                            /*document.getElementById('afonsinos-nav').innerHTML = `
                                <nav class="geracao-nav">
                                    <div class="geracao-nav__content">
                                        <ul id="afonsinos-list-nav" class="geracao-nav__list">`

                            /*for (let a = 0; a < geracoes.length; a++) {
                                if (a == 0) {
                                    document.getElementById('afonsinos-list-nav').innerHTML += `
                                    <li class="current smoothscroll"><a href="#0geracao" title="home">Fundadores</a></li>`
                                } else {
                                    document.getElementById('afonsinos-list-nav').innerHTML += `
                                    <li><a class="smoothscroll" href="#${a}geracao" title="sobre">${a}º Geração</a></li>`;
                                }
                            };*/

                            //INSERIR QQCOISA

                            /*document.getElementById('afonsinos-nav').innerHTML += `
                                        </ul>
                                    </div> <!-- end header-nav__content -->
                                </nav>`;*/
                        }
                        else
                            document.getElementById('afonsinos-nav').innerHTML = ``;
                    }
                }
            });
        });
        observer.observe(elemToObserve, { attributes: true });
    });

}