(function (doc) {
    const links = doc.getElementsByClassName('link');
    const linksContainer = doc.getElementById('links');
    const hamburger = doc.getElementById('hamburger');
    for (let i = 0; i < links.length; i++) {
        const link = links[i];
        link.addEventListener('click', (e) => {
            Array.from(links).forEach(lnk => lnk.classList.remove('active'));
            const target = e.target;
            target.classList.add('active');
            linksContainer.style.display = null;
        })
    }
    hamburger.addEventListener('click', function (e) {
        e.preventDefault();
        const v = linksContainer.style.display;
        if (!v) {
            linksContainer.style.display = 'flex';
        } else
            linksContainer.style.display = null;
    });
})(document);