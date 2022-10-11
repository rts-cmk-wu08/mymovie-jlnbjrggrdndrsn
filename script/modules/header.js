let header = function() {
    let element = document.createElement("header")
    element.classList.add("header", "flex-container")

    element.innerHTML = `
    <h1>MyMovies</h1>
    <input type="checkbox" id="darkmode_toggle">
    <label for="darkmode_toggle"></label>
    `

    return element;
};

export default header;