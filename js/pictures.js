const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png', 'avif', 'webp'];
const DEFAULT_IMAGE = 'img/muffin-grey.svg';

const fileChooserAvatar = document.querySelector('.ad-form__field input[type=file]');
const fileChooserPreview = document.querySelector('.ad-form__upload input[type=file]');
const previewAvatar = document.querySelector('.ad-form-header__preview img');
const previewPhoto = document.querySelector('.ad-form__photo');
const previewPhotoContainer = document.querySelector('.ad-form__photo-container');

fileChooserPreview.addEventListener('change', () => {
  const file = fileChooserPreview.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((element) => fileName.endsWith(element));
  if (matches) {
    if (previewPhoto.childNodes.length === 0) {
      const pictureElement = `<img src='${URL.createObjectURL(file)}' width="100%" height="100%" style="objectFit: cover" alt="Фотография жилья">`;
      previewPhoto.insertAdjacentHTML('beforeend', pictureElement);
    } else {
      const previewPhotoElement = previewPhoto.cloneNode(true);
      const imageElement = previewPhotoElement.querySelector('img');
      imageElement.src = URL.createObjectURL(file);
      previewPhotoContainer.append(previewPhotoElement);
    }
  }
});

fileChooserAvatar.addEventListener('change', () =>
{
  const file = fileChooserAvatar.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((element) => fileName.endsWith(element));

  if (matches) {
    previewAvatar.src = URL.createObjectURL(file);
  }
});

const resetPicture = () => {
  if (previewAvatar.src === DEFAULT_IMAGE) {
    return true;
  } else {
    previewAvatar.src = DEFAULT_IMAGE;
  }
  const previewPhotoItem = previewPhoto.childNodes;
  if (previewPhotoItem.length === 0) {
    return true;
  } else {
    const previewAllElements =  previewPhotoContainer.querySelectorAll('.ad-form__photo');
    previewAllElements.forEach((element, index) => index === 0 ? element.firstChild.remove() : element.remove());
  }
};

export {resetPicture};
