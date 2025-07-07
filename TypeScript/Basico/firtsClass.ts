interface Persona {
  name: string;
  lastName: string;
}

interface VideoGamer extends Persona {
  VideoGames: string[];
}

interface Police extends Persona {
  fireGuns: number[];
}

const tellMeWhatYouAreHolding = (persona: VideoGamer | Police) => {
  if((persona as VideoGamer).VideoGames) {
    return (persona as VideoGamer).VideoGames;
  } else {
    return (persona as Police).fireGuns;
  }
}

function correctTellMeWhatYouAreHolding(persona: VideoGamer): string[];
function correctTellMeWhatYouAreHolding(persona: Police): number[];
function correctTellMeWhatYouAreHolding(persona: any): any {
  if(persona.VideoGames) {
    return persona.VideoGames;
  } else {
    return persona.fireGuns;
  }
};

const police = {
  name: 'Robert',
  lastName: 'Vasquez',
  fireGuns: [1235],
};

const result = tellMeWhatYouAreHolding(police);

const correctResult = correctTellMeWhatYouAreHolding(police);

const showNumbers = (numbers: number[]) => {
  return numbers.map(n => console.log(n));
}

// ReturnType nos permite tomar el tipado de un resultado y asignarlo al momento
type ReturnOfShowNumbers = ReturnType < typeof showNumbers>;

/* showNumbers(result); */