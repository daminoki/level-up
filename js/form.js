(() => {
    const form = document.forms['order-form'];

    if (!form) return;

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Ваш заказ оформлен!');
    });

    const phoneInput = form.elements.phone;

    phoneInput.addEventListener('keypress', (event) => {
        if (isValueNotNumber(event)) {
            event.preventDefault();
        }
    });

    function isValueNotNumber(value) {
        return !(value.charCode !== 8 && value.charCode === 0 || ( value.charCode === 46 || (value.charCode >= 48 && value.charCode <= 57)))
    }
})()