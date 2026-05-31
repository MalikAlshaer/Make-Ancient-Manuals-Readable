(function () {
    if (document.getElementById("bluez-reader-wrapper")) {
        return;
    }

    const wrapper = document.createElement("div");
    wrapper.id = "bluez-reader-wrapper";

    while (document.body.firstChild) {
        wrapper.appendChild(document.body.firstChild);
    }

    document.body.appendChild(wrapper);
})();
