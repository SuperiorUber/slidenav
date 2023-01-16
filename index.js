let openbt = document.getElementById("sidebar")
        function show() {
            openbt.style.width = "200px"
        }
        function hide() {
            openbt.style.width = "0px"
            keepburger.style.marginLeft = "15px"
        }
        let keepburger = document.getElementById("openbt")
        function slide() {
            keepburger.style.marginLeft = "220px"

        }
        let openModal = document.getElementById("openButton")
        let modal = document.getElementById("modalCover")
        openModal.onclick = function () {
            modal.style.display = "block"
        }
        let exit = document.getElementById("exitModal")
        exit.onclick = function () {
            modal.style.display = "none"
        }
        window.onclick = function (a) {
            if (a.target.id === "modalCover") {
                modal.style.display = "none"
            }
        }