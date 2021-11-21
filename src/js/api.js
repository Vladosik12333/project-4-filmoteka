const API_KEY = 'e8ad9fce8be376ae39b35f64abca58d4';
const BASE_URL = 'https://api.themoviedb.org';

export default class NewsApiService {
  constructor() {
    this.page = 1;
  }

  // *** for search movie *** //
  fetchMovies = async (query, currentPage) => {
    if (currentPage === undefined) {
      currentPage = this.page;
    }

    const url = `${BASE_URL}/3/search/movie?api_key=${API_KEY}&language=en-US&page=${this.page}&include_adult=false&query=${query}&page=${currentPage}`;

    const response = await fetch(url);
    const movies = await response.json();
    if (response.ok) this.incrementPage();
    return movies;
  };

  // *** for discription movie *** //
  fetchMoviesById = async (movieId) => {
    const url = `${BASE_URL}/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`;

    const response = await fetch(url);
    const movie = await response.json();
    if (response.ok) this.incrementPage();
    return movie;
  };


  // *** for get movie in trending *** //
  fetchMoviesInTrending = async (type, time, currentPage) => {
    if (type === undefined) {
      type = 'all';
    }
    if (time === undefined) {
      time = 'day';
    }
    if (currentPage === undefined) {
      currentPage = this.page;
    }

    const url = `${BASE_URL}/3/trending/${type}/${time}?api_key=${API_KEY}&page=${currentPage}`;

    const response = await fetch(url);
    const moviesInTrend = await response.json();
    if (response.ok) this.incrementPage();
    return moviesInTrend;
  };

    // *** for get movie's genres *** //
  fetchMoviesByGenre = async () => {
    const url = `${BASE_URL}/3/genre/movie/list?api_key=${API_KEY}&language=en-US`;
  
    const response = await fetch(url);
    const genre = await response.json();
    if (response.ok) this.incrementPage();
    return genre;
  };

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}


//*** for search movie */

// {
//   "page": 1,
//   "results": [
//       {
//           "adult": false,
//           "backdrop_path": "/6jajFcaY2YsfGQstJ5HaqZNVseX.jpg",
//           "genre_ids": [
//               27,
//               878,
//               9648
//           ],
//           "id": 126889,
//           "original_language": "en",
//           "original_title": "Alien: Covenant",
//           "overview": "Bound for a remote planet on the far side of the galaxy, the crew of the colony ship 'Covenant' discovers what is thought to be an uncharted paradise, but is actually a dark, dangerous world—which has a sole inhabitant: the 'synthetic', David, survivor of the doomed Prometheus expedition.",
//           "popularity": 79.797,
//           "poster_path": "/zecMELPbU5YMQpC81Z8ImaaXuf9.jpg",
//           "release_date": "2017-05-09",
//           "title": "Alien: Covenant",
//           "video": false,
//           "vote_average": 6,
//           "vote_count": 6769
//       },
//       {
//           "adult": false,
//           "backdrop_path": "/AmR3JG1VQVxU8TfAvljUhfSFUOx.jpg",
//           "genre_ids": [
//               27,
//               878
//           ],
//           "id": 348,
//           "original_language": "en",
//           "original_title": "Alien",
//           "overview": "During its return to the earth, commercial spaceship Nostromo intercepts a distress signal from a distant planet. When a three-member team of the crew discovers a chamber containing thousands of eggs on the planet, a creature inside one of the eggs attacks an explorer. The entire crew is unaware of the impending nightmare set to descend upon them when the alien parasite planted inside its unfortunate host is birthed.",
//           "popularity": 45.676,
//           "poster_path": "/vfrQk5IPloGg1v9Rzbh2Eg3VGyM.jpg",
//           "release_date": "1979-05-25",
//           "title": "Alien",
//           "video": false,
//           "vote_average": 8.1,
//           "vote_count": 11086
//       },
//       {
//           "adult": false,
//           "backdrop_path": "/3aIBsxp6ozH3uDwb2IJCJxTS7LF.jpg",
//           "genre_ids": [
//               878,
//               28,
//               27
//           ],
//           "id": 8077,
//           "original_language": "en",
//           "original_title": "Alien³",
//           "overview": "After escaping with Newt and Hicks from the alien planet, Ripley crash lands on Fiorina 161, a prison planet and host to a correctional facility. Unfortunately, although Newt and Hicks do not survive the crash, a more unwelcome visitor does. The prison does not allow weapons of any kind, and with aid being a long time away, the prisoners must simply survive in any way they can.",
//           "popularity": 24.928,
//           "poster_path": "/hlabk6APJUeihZDaSD9N6iI0f4g.jpg",
//           "release_date": "1992-05-22",
//           "title": "Alien³",
//           "video": false,
//           "vote_average": 6.3,
//           "vote_count": 4181
//       },
//       {
//           "adult": false,
//           "backdrop_path": "/x2lPPe2aH76uyYVhkVCtzTMYawC.jpg",
//           "genre_ids": [
//               16,
//               10751,
//               14
//           ],
//           "id": 656561,
//           "original_language": "en",
//           "original_title": "Alien Xmas",
//           "overview": "A young elf mistakes a tiny alien for a Christmas gift, not knowing her new plaything has plans to destroy Earth's gravity — and steal all the presents.",
//           "popularity": 51.61,
//           "poster_path": "/3UGrAX6D1AMVra80jmUMUOLq8Qr.jpg",
//           "release_date": "2020-11-20",
//           "title": "Alien Xmas",
//           "video": false,
//           "vote_average": 6.7,
//           "vote_count": 89
//       },
//       {
//           "adult": false,
//           "backdrop_path": "/ikr0UILfvRerzMNoBTtJtyuWAEV.jpg",
//           "genre_ids": [
//               878,
//               27,
//               28
//           ],
//           "id": 8078,
//           "original_language": "en",
//           "original_title": "Alien Resurrection",
//           "overview": "Two hundred years after Lt. Ripley died, a group of scientists clone her, hoping to breed the ultimate weapon. But the new Ripley is full of surprises … as are the new aliens. Ripley must team with a band of smugglers to keep the creatures from reaching Earth.",
//           "popularity": 25.857,
//           "poster_path": "/13162IOGtPQaZgnnY3raCJbUsW5.jpg",
//           "release_date": "1997-11-12",
//           "title": "Alien Resurrection",
//           "video": false,
//           "vote_average": 6.1,
//           "vote_count": 3600
//       },
//       {
//           "adult": false,
//           "backdrop_path": "/ngZbISZ0ArJjekZeipIzWVTe47X.jpg",
//           "genre_ids": [
//               12,
//               878,
//               28,
//               27
//           ],
//           "id": 395,
//           "original_language": "en",
//           "original_title": "AVP: Alien vs. Predator",
//           "overview": "When scientists discover something in the Arctic that appears to be a buried Pyramid, they send a research team out to investigate. Little do they know that they are about to step into a hunting ground where Aliens are grown as sport for the Predator race.",
//           "popularity": 35.728,
//           "poster_path": "/qUZctuoFL3VKOqeKxhnLwuEE4oF.jpg",
//           "release_date": "2004-08-12",
//           "title": "AVP: Alien vs. Predator",
//           "video": false,
//           "vote_average": 5.9,
//           "vote_count": 3291
//       },
//       {
//           "adult": false,
//           "backdrop_path": "/6BCGb7R4XF1mQsCaJsIel0QgIqo.jpg",
//           "genre_ids": [
//               27,
//               878,
//               53
//           ],
//           "id": 258193,
//           "original_language": "en",
//           "original_title": "Alien Abduction",
//           "overview": "A vacationing family encounters an alien threat in this pulse-pounding thriller based on the real-life Brown Mountain Lights phenomenon in North Carolina.",
//           "popularity": 23.307,
//           "poster_path": "/pe9mSStpQC2doKtYY3VDJdBEBHr.jpg",
//           "release_date": "2014-04-04",
//           "title": "Alien Abduction",
//           "video": false,
//           "vote_average": 5.6,
//           "vote_count": 264
//       },
//       {
//           "adult": false,
//           "backdrop_path": "/mXcoOFlpwNepO3TsWGuPb9Aurld.jpg",
//           "genre_ids": [
//               53,
//               28,
//               878
//           ],
//           "id": 312526,
//           "original_language": "en",
//           "original_title": "Alien Outpost",
//           "overview": "A documentary crew follows an elite unit of soldiers in the wake of an alien invasion.",
//           "popularity": 22.687,
//           "poster_path": "/dXe0HXP66DyTv6mw5pxbGq89knr.jpg",
//           "release_date": "2014-09-19",
//           "title": "Alien Outpost",
//           "video": false,
//           "vote_average": 5.3,
//           "vote_count": 172
//       },
//       {
//           "adult": false,
//           "backdrop_path": "/sumajFyOoIKubI15POZ0p8Ekpzu.jpg",
//           "genre_ids": [
//               28,
//               878,
//               53
//           ],
//           "id": 593035,
//           "original_language": "en",
//           "original_title": "Alien Warfare",
//           "overview": "A team of Navy Seals investigates a mysterious science outpost only to have to combat a squad of powerful alien soldiers.",
//           "popularity": 16.277,
//           "poster_path": "/rJOj0T5DyChfECevDg0xpEGznsl.jpg",
//           "release_date": "2019-04-05",
//           "title": "Alien Warfare",
//           "video": false,
//           "vote_average": 4.2,
//           "vote_count": 106
//       },
//       {
//           "adult": false,
//           "backdrop_path": "/kwkAGwtwS57FckZq6n44oipW1AN.jpg",
//           "genre_ids": [
//               878,
//               27
//           ],
//           "id": 668343,
//           "original_language": "en",
//           "original_title": "Alien Outbreak",
//           "overview": "In a small rural community, local police officers Zoe and Patrick begin their shift as normal but soon, strange events unfold. Residents begin behaving erratically, and suicidal panic spreads amongst the township they are trying to protect. Zoe and Patrick realise alien machines are taking hold, cutting their small group of survivors off from the outside world. Can the determined humans band together to save their community, and all mankind, from extinction?",
//           "popularity": 22.115,
//           "poster_path": "/5m4Gw9wTRxUdDnx7UNn1bNLN54J.jpg",
//           "release_date": "2020-02-11",
//           "title": "Alien Outbreak",
//           "video": false,
//           "vote_average": 3.8,
//           "vote_count": 20
//       },
//       {
//           "adult": false,
//           "backdrop_path": "/pZ7PasDyWIafGYTxzzlSWWl6ZgK.jpg",
//           "genre_ids": [
//               12
//           ],
//           "id": 25642,
//           "original_language": "en",
//           "original_title": "Ben 10 Alien Swarm",
//           "overview": "Ben and a mysterious girl from his past must prevent an alien threat from destroying the world.",
//           "popularity": 31.602,
//           "poster_path": "/9D1KSrLM9RnpcKWV7SeNEfDOWIn.jpg",
//           "release_date": "2009-11-25",
//           "title": "Ben 10 Alien Swarm",
//           "video": false,
//           "vote_average": 6.3,
//           "vote_count": 237
//       },
//       {
//           "adult": false,
//           "backdrop_path": "/npNbRiUGU29nz464ERJiAkxH997.jpg",
//           "genre_ids": [
//               80,
//               878,
//               53
//           ],
//           "id": 10128,
//           "original_language": "en",
//           "original_title": "Alien Nation",
//           "overview": "A few years from now, Earth will have the first contact with an alien civilisation. These aliens, known as Newcomers, slowly begin to be integrated into human society after years of quarantine.",
//           "popularity": 13.849,
//           "poster_path": "/2wEyQkFXX6ReyW44YQa1kLQYkCg.jpg",
//           "release_date": "1988-10-07",
//           "title": "Alien Nation",
//           "video": false,
//           "vote_average": 6,
//           "vote_count": 208
//       },
//       {
//           "adult": false,
//           "backdrop_path": "/2osX053v71I1Nc0qejnRiU64aMM.jpg",
//           "genre_ids": [
//               28,
//               878,
//               18,
//               27
//           ],
//           "id": 561859,
//           "original_language": "en",
//           "original_title": "Alien Overlords",
//           "overview": "A man learns about alien agendas from a dying agent and feels compelled to warn the world about the impending danger.",
//           "popularity": 15.777,
//           "poster_path": "/zDtn7lC2ugxWsre4JhdAXA3GTsM.jpg",
//           "release_date": "2018-11-14",
//           "title": "Alien Overlords",
//           "video": false,
//           "vote_average": 4.1,
//           "vote_count": 10
//       },
//       {
//           "adult": false,
//           "backdrop_path": "/2eZUHO2gEktRTaWQuxXF3NtLWjH.jpg",
//           "genre_ids": [
//               27,
//               28,
//               878
//           ],
//           "id": 460962,
//           "original_language": "en",
//           "original_title": "Alien Convergence",
//           "overview": "When flying reptilian creatures wreak havoc all over the world, the survivors’ only hope of stopping them is a new, state-of-the-art fighter jet piloted by the only team that knows how to use the technology.",
//           "popularity": 11.45,
//           "poster_path": "/96xgOCz2li0IiqKYcLQh5bK7CiU.jpg",
//           "release_date": "2017-06-27",
//           "title": "Alien Convergence",
//           "video": false,
//           "vote_average": 4.1,
//           "vote_count": 35
//       },
//       {
//           "adult": false,
//           "backdrop_path": "/6zM4bpc42mqYndSRbXHnFTYzwqA.jpg",
//           "genre_ids": [
//               27,
//               878,
//               53
//           ],
//           "id": 13954,
//           "original_language": "en",
//           "original_title": "Alien Raiders",
//           "overview": "It's the end of yet another night at Hastings Supermarket, a grocery store in Buck Lake, Arizona. But just before closing, a group of masked and armed to the teeth militants invades the store and take everyone hostage",
//           "popularity": 11.48,
//           "poster_path": "/gBz8ueJSWIVwB3LO80BiuUFpiWY.jpg",
//           "release_date": "2008-09-21",
//           "title": "Alien Raiders",
//           "video": false,
//           "vote_average": 5.3,
//           "vote_count": 116
//       },
//       {
//           "adult": false,
//           "backdrop_path": "/fRGuAIQYuvkLLSWlRgYWuSsadRg.jpg",
//           "genre_ids": [],
//           "id": 882878,
//           "original_language": "en",
//           "original_title": "Ben 10 Alien X-tinction",
//           "overview": "",
//           "popularity": 15.472,
//           "poster_path": "/pgL3pJEPv1K4Bb1isw5PFlA1MJ3.jpg",
//           "release_date": "2021-04-11",
//           "title": "Ben 10 Alien X-tinction",
//           "video": false,
//           "vote_average": 5,
//           "vote_count": 2
//       },
//       {
//           "adult": false,
//           "backdrop_path": "/kc20ajqICqsLjvgbfHNnWhDVc85.jpg",
//           "genre_ids": [
//               28,
//               878,
//               12,
//               27
//           ],
//           "id": 548257,
//           "original_language": "en",
//           "original_title": "Alien Predator",
//           "overview": "A black ops reconnaissance team is sent to investigate the crash of an unidentified aircraft. When they arrive, they find strange markings and residue visible only in infrared. As the team gets deeper in and tries to figure out the source of the markings, they discover that they are being hunted by an alien expedition to Earth.",
//           "popularity": 10.253,
//           "poster_path": "/7SgEtIGBqBtF63H89ZHUsjAVGzX.jpg",
//           "release_date": "2018-09-11",
//           "title": "Alien Predator",
//           "video": false,
//           "vote_average": 4.7,
//           "vote_count": 23
//       },
//       {
//           "adult": false,
//           "backdrop_path": "/hWTqjvMryjtCLMxo90iSqZ89tT4.jpg",
//           "genre_ids": [
//               878,
//               28,
//               12
//           ],
//           "id": 22076,
//           "original_language": "en",
//           "original_title": "Alien Hunter",
//           "overview": "Government agents find evidence of extraterrestrial life at the South Pole.",
//           "popularity": 9.576,
//           "poster_path": "/aNBMcjrncjGd9Yn6TJW3SkQJhMJ.jpg",
//           "release_date": "2003-07-19",
//           "title": "Alien Hunter",
//           "video": false,
//           "vote_average": 5.2,
//           "vote_count": 95
//       },
//       {
//           "adult": false,
//           "backdrop_path": null,
//           "genre_ids": [
//               878,
//               28,
//               53
//           ],
//           "id": 104185,
//           "original_language": "en",
//           "original_title": "Alien Tornado",
//           "overview": "Aliens attack Earth with deadly electrical tornadoes, and it’s up to a farmer, his smart high-school daughter and a tornado blogger to thwart the horrific invasion.",
//           "popularity": 9.13,
//           "poster_path": "/bCiOtKLJdYtjie64pO5925OC2vS.jpg",
//           "release_date": "2012-04-21",
//           "title": "Alien Tornado",
//           "video": false,
//           "vote_average": 4.4,
//           "vote_count": 34
//       },
//       {
//           "adult": false,
//           "backdrop_path": "/rqJymUDeRBZyw21uJhhXdHIZXSo.jpg",
//           "genre_ids": [
//               35,
//               878
//           ],
//           "id": 9773,
//           "original_language": "en",
//           "original_title": "Alien Autopsy",
//           "overview": "Humouristic reconstruction of the 1995 scandal when two British lads were accused of having faked a documentary from the Roswell incident in 1947.",
//           "popularity": 5.871,
//           "poster_path": "/zFQ23icWVfFIONdyedlfutZHijo.jpg",
//           "release_date": "2006-04-07",
//           "title": "Alien Autopsy",
//           "video": false,
//           "vote_average": 5.6,
//           "vote_count": 95
//       }
//   ],
//   "total_pages": 38,
//   "total_results": 748
// }



//*** discription */

// {
//   "adult": false,
//   "backdrop_path": "/waCRuAW5ocONRehP556vPexVXA9.jpg",
//   "belongs_to_collection": {
//       "id": 2344,
//       "name": "The Matrix Collection",
//       "poster_path": "/lh4aGpd3U9rm9B8Oqr6CUgQLtZL.jpg",
//       "backdrop_path": "/bRm2DEgUiYciDw3myHuYFInD7la.jpg"
//   },
//   "budget": 63000000,
//   "genres": [
//       {
//           "id": 28,
//           "name": "Action"
//       },
//       {
//           "id": 878,
//           "name": "Science Fiction"
//       }
//   ],
//   "homepage": "http://www.warnerbros.com/matrix",
//   "id": 603,
//   "imdb_id": "tt0133093",
//   "original_language": "en",
//   "original_title": "The Matrix",
//   "overview": "Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.",
//   "popularity": 80.045,
//   "poster_path": "/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
//   "production_companies": [
//       {
//           "id": 79,
//           "logo_path": "/tpFpsqbleCzEE2p5EgvUq6ozfCA.png",
//           "name": "Village Roadshow Pictures",
//           "origin_country": "US"
//       },
//       {
//           "id": 372,
//           "logo_path": null,
//           "name": "Groucho II Film Partnership",
//           "origin_country": ""
//       },
//       {
//           "id": 1885,
//           "logo_path": "/xlvoOZr4s1PygosrwZyolIFe5xs.png",
//           "name": "Silver Pictures",
//           "origin_country": "US"
//       },
//       {
//           "id": 174,
//           "logo_path": "/IuAlhI9eVC9Z8UQWOIDdWRKSEJ.png",
//           "name": "Warner Bros. Pictures",
//           "origin_country": "US"
//       }
//   ],
//   "production_countries": [
//       {
//           "iso_3166_1": "AU",
//           "name": "Australia"
//       },
//       {
//           "iso_3166_1": "US",
//           "name": "United States of America"
//       }
//   ],
//   "release_date": "1999-03-30",
//   "revenue": 463517383,
//   "runtime": 136,
//   "spoken_languages": [
//       {
//           "english_name": "English",
//           "iso_639_1": "en",
//           "name": "English"
//       }
//   ],
//   "status": "Released",
//   "tagline": "Welcome to the Real World.",
//   "title": "The Matrix",
//   "video": false,
//   "vote_average": 8.2,
//   "vote_count": 20233
// }