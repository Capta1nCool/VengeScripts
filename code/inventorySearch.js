document.addEventListener("DOMContentLoaded", () => {
    new MutationObserver(mutationRecords => {
        try {
            mutationRecords.forEach(record => {
                record.addedNodes.forEach(el => {
                    if (el.classList.contains("balance")) {
                        let checker = setInterval(() => {
                            if (document.querySelector("#content > div > div.wrap-header")) {
                                let searchbar = document.createElement('div')
                                searchbar.id = 'invsearch'
                                searchbar.innerHTML = `<input type="text" id="invsearchinput" placeholder="SearchSkin" style="
                                    position: absolute;
                                    left: 17.25rem;
                                    padding: 0.7rem;
                                    border-radius: 10px;
                                    color: white;
                                    border: solid 2px #333;
                                    background: #545454;
                                ">`
                                document.querySelector("#content > div > div.wrap-header").insertBefore(searchbar, document.querySelector("#content > div > div.wrap-header").children[1])

                                document.getElementById('invsearchinput').onchange = () => {
                                    let search = document.getElementById('invsearchinput').value

                                    if (search == '') {
                                        for (let i = 0; i < document.querySelector("#inventory-content > table > tbody").children.length; i++) {
                                            const elem = document.querySelector("#inventory-content > table > tbody").children[i];
                                            elem.style.display = ''
                                        }
                                    }

                                    for (let i = 0; i < document.querySelector("#inventory-content > table > tbody").children.length; i++) {
                                        const elem = document.querySelector("#inventory-content > table > tbody").children[i];
                                        let skin = elem.children[2].innerText;

                                        if (!skin.toLowerCase().includes(search)) {
                                            elem.style.display = 'none';
                                        } else {
                                            elem.style.display = '';
                                        }
                                    }
                                }
                                clearInterval(checker)
                            }
                            if(!document.querySelector("#header-info-items > li.balance-list > span")) {
                                clearInterval(checker)
                            }
                        }, 100);
                    }
                })
            })
        } catch (error) {

        }
    }).observe(document, { childList: true, subtree: true });
})
