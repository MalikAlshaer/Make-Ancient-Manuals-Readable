(function () {
    if (document.getElementById("reader-wrapper")) {
        return;
    }

    const wrapper = document.createElement("div");
    wrapper.id = "reader-wrapper";

    while (document.body.firstChild) {
        wrapper.appendChild(document.body.firstChild);
    }

    document.body.appendChild(wrapper);
})();
