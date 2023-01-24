(() => {
    const promo = document.querySelector('.promo');
    const iframe = document.querySelector('.promo__video');
    
    window.addEventListener("resize", () => {
        if (iframe) {
            const promoHeight = promo.offsetHeight;
            iframe.style.width = `calc(${promoHeight}px * ${16/9})`
        }
    })
})()