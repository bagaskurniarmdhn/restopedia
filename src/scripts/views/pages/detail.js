import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/data-source';
import { createDetailTemplate, loader } from '../templates/detailTemplate-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
    <div class="load"></div>
    <section class="explore-section" id="main-content">
    <h1 class="explore-heading">Detail</h1>
      <div id="restaurant" class="restaurant"></div>
      <div id="likeButtonContainer"></div>
    </section>
    `;
  },

  async afterRender() {
    const load = document.querySelector('.load');
    const content = document.querySelector('.explore-section');
    const restaurantContainer = document.querySelector('#restaurant');
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    content.style.display = 'none';
    load.innerHTML = loader();
    try {
      const { restaurant } = await RestaurantSource.restaurantDetail(url.id);
      restaurantContainer.innerHTML = createDetailTemplate(restaurant);
      LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        restaurant: {
          id: restaurant.id,
          name: restaurant.name,
          address: restaurant.address,
          city: restaurant.city,
          categories: restaurant.categories,
          menus: restaurant.menus,
          rating: restaurant.rating,
          pictureId: restaurant.pictureId,
          description: restaurant.description,
          customerReviews: restaurant.customerReviews,
        },
      });
      content.style.display = 'block';
      load.style.display = 'none';
    } catch (err) {
      content.style.display = 'block';
      load.style.display = 'none';
      content.innerHTML = `<b>Error:</b> ${err}`;
    }
  },
};

export default Detail;
