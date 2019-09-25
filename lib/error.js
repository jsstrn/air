const handleError = error => {
  console.error(
    "💥  Unable to get air quality data at this moment. Please try again later."
  );
  console.error(error);
};

module.exports = handleError;
