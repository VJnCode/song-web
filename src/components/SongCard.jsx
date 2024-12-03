import React, { useState } from 'react';

const SongCard = ({ song }) => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [reviews, setReviews] = useState([]);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (review) {
      setReviews([...reviews, { review, rating }]);
      setReview('');
      setRating(0);
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 m-4 w-60">
      <img
        src={song.poster}
        alt={song.title}
        className="w-full h-40 object-cover rounded-md"
      />
      <h3 className="text-lg font-semibold mt-2">{song.title}</h3>
      <p className="text-sm text-gray-600">Release Date: {song.releaseDate}</p>
      <p className="text-sm text-gray-600">Genres: {song.genres.join(', ')}</p>
      <a
        href={song.trailerLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 text-sm hover:underline mt-2 block"
      >
        Listen on Spotify
      </a>

      {/* Rating */}
      <div className="flex items-center mt-3">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            onClick={() => handleRatingChange(star)}
            className={`cursor-pointer ${star <= rating ? 'text-yellow-500' : 'text-gray-400'}`}
          >
            ★
          </span>
        ))}
      </div>

      {/* Review Form */}
      <form onSubmit={handleSubmitReview} className="mt-3">
        <textarea
          value={review}
          onChange={handleReviewChange}
          rows="3"
          placeholder="Write a review..."
          className="w-full p-2 border rounded-md text-sm"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-1 px-3 mt-2 rounded"
        >
          Submit Review
        </button>
      </form>

      {/* Display Reviews */}
      <div className="mt-4">
        {reviews.length > 0 && (
          <div className="text-sm">
            <h4 className="font-semibold">Reviews:</h4>
            {reviews.map((review, index) => (
              <div key={index} className="border-t pt-2 mt-2">
                <p className="text-gray-500">{review.review}</p>
                <p className="text-yellow-500">Rating: {review.rating} ★</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SongCard;
