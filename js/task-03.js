const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryListEl = document.querySelector('.gallery');

const htmlMarkup = images.map
  (image => `<li><img class = 'picture' src = '${image.url}' alt = '${image.alt}' 
  width = '320' height = '200'></li>`)
  .join('');

galleryListEl.insertAdjacentHTML('afterbegin', htmlMarkup);

galleryListEl.style.display = 'flex';
galleryListEl.style.gap = '20px';
galleryListEl.style.justifyContent = 'center';
galleryListEl.style.alignItems = 'center';
galleryListEl.style.listStyleType = 'none';


// images.forEach(({url, alt}) => {
// const liEl = document.createElement('li');
// const imgEl = document.createElement('img');
//   imgEl.src = url;
//   imgEl.alt = alt;
//   imgEl.width = '320';
//   imgEl.height = '200';
// liEl.insertAdjacentElement('afterbegin', imgEl);
// galleryListEl.insertAdjacentElement('afterbegin', liEl);
// })




