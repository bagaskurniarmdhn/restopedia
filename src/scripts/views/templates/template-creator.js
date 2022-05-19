import CONFIG from '../../globals/config';

const createRestoItemTemplate = (restaurant) => `
    <div class="card">
    <img class="card_item_img" src="${CONFIG.BASE_IMAGE_URL}small/${restaurant.pictureId}" alt="${restaurant.name}" title="${restaurant.name}">
    <div class="city">${restaurant.city}</div>
    <div class="card_item_content">
        <h3 class="card_item_title"><a tabindex="0" href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h3>
        <p class="card_item_rating">
            Rating : <span class="fa fa-star"> </span>
            <span class="card_item_rating_value" aria-label="rating ${restaurant.rating}">${restaurant.rating}</span>
        </p>
        <div class="card_item_desc">${restaurant.description}</div>
    </div>
    </div>
`;

const createEmptyFavorite = () => `
  <div class="empty__container">
    <h3>Sorry</h3>
    <p class="empty__message">You haven't added a favorite restaurant yet</p>
  </div>
`;

const loader = () => `
    <div class="loader"></div>
`;

export {
  // export object
  createRestoItemTemplate,
  createEmptyFavorite,
  loader,
};
