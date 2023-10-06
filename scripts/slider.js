(function (doc) {
    const back = doc.getElementById('left-nav-button');
    const next = doc.getElementById('right-nav-button');
    const articles = doc.getElementsByClassName('article');
    const slides = doc.getElementsByClassName('slide-container');
    back.addEventListener('click', function (e) {
        e.preventDefault();
        const parent = doc.getElementById('slides');
        const slideContainers = doc.getElementsByClassName('slide-container');
        for (let i = 0; i < slideContainers.length; i++) {
            const slideContainer = slideContainers[i];
            const lastSibling = Array.from(slideContainers).pop();
            const prevSibling = slideContainer.previousElementSibling;
            if (slideContainer.classList.contains('active') && prevSibling) {
                slideContainer.classList.remove('active');
                prevSibling.classList.add('active');
                const prevNodeChildren = prevSibling.children;
                const slideContainerChildren = slideContainer.children;
                Array.from(slideContainerChildren).forEach(el => {
                    if (el.classList.contains('portfolio-slide')) {
                        el.classList.remove('active');
                    }
                });
                Array.from(prevNodeChildren).forEach(el => {
                    if (el.classList.contains('portfolio-slide')) {
                        el.classList.add('active');
                    }
                });
                parent.insertBefore(lastSibling, prevSibling);
            }
        }
    });
    next.addEventListener('click', function (e) {
        e.preventDefault();
        const slideContainers = doc.getElementsByClassName('slide-container');
        for (let i = 0; i < slideContainers.length; i++) {
            const slideContainer = slideContainers[i];
            //const firstSibling = Array.from(slideContainers).shift();
            const firstSibling = slideContainer.previousElementSibling;
            const nextSibling = slideContainer.nextElementSibling;
            if (slideContainer.classList.contains('active') && nextSibling) {
                slideContainer.classList.remove('active');
                nextSibling.classList.add('active');
                const nextNodeChildren = nextSibling.children;
                const slideContainerChildren = slideContainer.children;
                Array.from(slideContainerChildren).forEach(el => {
                    if (el.classList.contains('portfolio-slide')) {
                        el.classList.remove('active');
                    }
                });
                Array.from(nextNodeChildren).forEach(el => {
                    if (el.classList.contains('portfolio-slide')) {
                        el.classList.add('active');
                    }
                });
                firstSibling.before(slideContainer);
                slideContainer.after(nextSibling);
            }
        }
    });
    for (let i = 0; i < articles.length; i++) {
        const article = articles[i];
        article.addEventListener('click', function (e) {
            e.preventDefault();
            Array.from(articles).forEach(at => at.classList.remove('active'));
            article.classList.add('active');
        });
    }
    for (let i = 0; i < slides.length; i++) {
        const slide = slides[i];
        slide.addEventListener('click', function (e) {
            e.preventDefault();
            Array.from(slides).forEach(sl => {
                sl.classList.remove('active');
                Array.from(sl.children).forEach(sl => {
                    if (sl.classList.contains('portfolio-slide')) {
                        sl.classList.remove('active');
                    }
                });
            });
            slide.classList.add('active');
            Array.from(slide.children).forEach(sl => {
                if (sl.classList.contains('portfolio-slide')) {
                    sl.classList.add('active');
                }
            });
        });
    }

})(document);
function insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}