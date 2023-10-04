(function (doc) {
    const links = doc.getElementsByClassName('link');
    for (let i = 0; i < links.length; i++) {
        const link = links[i];
        link.addEventListener('click', (e) => {
            Array.from(links).forEach(lnk => lnk.classList.remove('active'));
            const target = e.target;
            target.classList.add('active');
        })
    }

})(document);