const createLikeButtonTemplate = () => `
    <button aria-label="like this movie" id="likeButton" class="like">
      <i class="fa fa-heart-o fa-lg" aria-hidden="true"></i>
    </button>
`;

const createLikedButtonTemplate = () => `
    <button aria-label="unlike this movie" id="likeButton" class="like">
      <i class="fa fa-heart fa-lg" aria-hidden="true"></i>
    </button>
`;

export { createLikeButtonTemplate, createLikedButtonTemplate };
