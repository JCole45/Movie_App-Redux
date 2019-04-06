export const selectMovie = (movie) => {
  return {
    type: 'MOVIE_SELECTED',
    payload: movie
  }
}

export const logCredentials = (username) => {
  return {
    type: 'LOG_IN',
    payload: username
  }
}
