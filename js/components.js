async function loadNavbar() {

    const response = await fetch("../components/navbar.html");

    const html = await response.text();

    document.getElementById("navbar").innerHTML = html;

}

loadNavbar();

async function loadFooter() {

    const response =
        await fetch("../components/footer.html");

    document.getElementById("footer").innerHTML =
        await response.text();

}

loadFooter();