import { ADD_MOVIE, DELETE_MOVIE, EDIT_MOVIE } from "./actionTypes";

const initialState = {
  movies: [
    {
      id: Math.random(),
      image: "https://image.tmdb.org/t/p/w500/db32LaOibwEliAmSL2jjDF6oDdj.jpg",
      rating: 5,
      name: "Star Wars: The Rise Of Skywalker",
      date: "December 2019",
      description:
        "The ninth and final installment in the main Star Wars saga, 'Star Wars: The Rise of Skywalker' concludes the epic storyline that began with 'Star Wars: Episode VII - The Force Awakens.' Join Rey, Finn, and Poe Dameron as they face their greatest challenge yet, confronting the resurrected Emperor Palpatine and the formidable First Order in a battle for the fate of the galaxy.",
      trailerLink: "https://www.youtube.com/embed/QYlSkzS_hXM",
    },
    {
      id: Math.random(),
      image: "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
      rating: 4,
      name: "Avengers: Infinity War",
      date: "April 2018",
      description:
        "The ninth and final installment in the main Star Wars saga, 'Star Wars: The Rise of Skywalker' concludes the epic storyline that began with 'Star Wars: Episode VII - The Force Awakens.' Join Rey, Finn, and Poe Dameron as they face their greatest challenge yet, confronting the resurrected Emperor Palpatine and the formidable First Order in a battle for the fate of the galaxy.",
      trailerLink: "https://www.youtube.com/watch?v=adzYW5DZoWs",
    },
    {
      id: Math.random(),
      image: "https://image.tmdb.org/t/p/w500/pjeMs3yqRmFL3giJy4PMXWZTTPa.jpg",
      rating: 4,
      name: "Frozen II",
      date: "November 2019",
      description:
        "The ninth and final installment in the main Star Wars saga, 'Star Wars: The Rise of Skywalker' concludes the epic storyline that began with 'Star Wars: Episode VII - The Force Awakens.' Join Rey, Finn, and Poe Dameron as they face their greatest challenge yet, confronting the resurrected Emperor Palpatine and the formidable First Order in a battle for the fate of the galaxy.",
      trailerLink: "https://www.youtube.com/watch?v=adzYW5DZoWs",
    },
    {
      id: Math.random(),
      image:
        "https://i1.wp.com/easttennessean.com/wp-content/uploads/2016/11/FantasticBeasts.png?fit=500%2C639&ssl=1",
      rating: 3,
      name: "Fantastic Beasts and Where to Find Them",
      date: "November 2016",
      description:
        "The ninth and final installment in the main Star Wars saga, 'Star Wars: The Rise of Skywalker' concludes the epic storyline that began with 'Star Wars: Episode VII - The Force Awakens.' Join Rey, Finn, and Poe Dameron as they face their greatest challenge yet, confronting the resurrected Emperor Palpatine and the formidable First Order in a battle for the fate of the galaxy.",
      trailerLink: "https://www.youtube.com/watch?v=adzYW5DZoWs",
    },
    {
      id: Math.random(),
      image:
        "https://m.media-amazon.com/images/M/MV5BMTI5MDU3MTYyMF5BMl5BanBnXkFtZTYwODgyODc3._V1_.jpg",
      rating: 2,
      name: "Cat In The Hat",
      date: "November 2003",
      description:
        "The ninth and final installment in the main Star Wars saga, 'Star Wars: The Rise of Skywalker' concludes the epic storyline that began with 'Star Wars: Episode VII - The Force Awakens.' Join Rey, Finn, and Poe Dameron as they face their greatest challenge yet, confronting the resurrected Emperor Palpatine and the formidable First Order in a battle for the fate of the galaxy.",
      trailerLink: "https://www.youtube.com/watch?v=adzYW5DZoWs",
    },
  ],
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_MOVIE:
      return {
        ...state,
        movies: [...state.movies, payload],
      };
    case DELETE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter((movie) => movie.id !== payload),
      };
    case EDIT_MOVIE:
      return {
        ...state,
        movies: state.movies.map((movie) =>
          movie.id === payload.id ? payload : movie
        ),
      };
    default:
      return state;
  }
};
