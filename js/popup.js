const ESC_ALL_BROWSERS = 'Escape';
const ESC_IE = 'Esc';

const isEscEvent = (evt) => evt.key === ESC_ALL_BROWSERS || evt.key === ESC_IE;

const successPopup = () => {
    const typeMessage = document.querySelector('#success').content.cloneNode(true);
    openPopupMessage();
};

const errorPopup = () => {
    const typeMessage = document.querySelector('#error').content.cloneNode(true);
    openPopupMessage();
};

const openPopupMessage = () => {
    document.body.append(typeMessage);
  };

const removePopupMessage = () => {
    document.querySelector('.success').remove();
    document.querySelector('.error').remove();
    document.querySelector('.error__button')
};

const onWindowKeydown = () => {
    if (isEscapeKey(evt)) {
        evt.preventDefault();
        onDocumentClick();
    }
};

