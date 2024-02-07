import logo from "./logo.svg";
import "./App.css";
import Character from "./Character";

const App = () => {
  return (
    <div className="App">
      <div>
        <Character
          id={results[0].id}
          name={results[0].name}
          status={results[0].status}
          species={results[0].species}
          gender={results[0].gender}
          image={results[0].image}
        />
      </div>
      <div>
        <Character
          id={results[9].id}
          name={results[9].name}
          status={results[9].status}
          species={results[9].species}
          gender={results[9].gender}
          image={results[9].image}
        />
      </div>
      <div>
        <Character
          id={results[8].id}
          name={results[8].name}
          status={results[8].status}
          species={results[8].species}
          gender={results[8].gender}
          image={results[8].image}
        />
      </div>
      <div>
        <Character
          id={results[5].id}
          name={results[5].name}
          status={results[5].status}
          species={results[5].species}
          gender={results[5].gender}
          image={results[5].image}
        />
      </div>
      <div>
        <Character
          id={results[1].id}
          name={results[1].name}
          status={results[1].status}
          species={results[1].species}
          gender={results[1].gender}
          image={results[1].image}
        />
      </div>
      <div>
        <Character
          id={results[2].id}
          name={results[2].name}
          status={results[2].status}
          species={results[2].species}
          gender={results[2].gender}
          image={results[2].image}
        />
      </div>
      <div>
        <Character
          id={results[3].id}
          name={results[3].name}
          status={results[3].status}
          species={results[3].species}
          gender={results[3].gender}
          image={results[3].image}
        />
      </div>
      <div>
        <Character
          id={results[4].id}
          name={results[4].name}
          status={results[4].status}
          species={results[4].species}
          gender={results[4].gender}
          image={results[4].image}
        />
      </div>
      <div>
        <Character
          id={results[6].id}
          name={results[6].name}
          status={results[6].status}
          species={results[6].species}
          gender={results[6].gender}
          image={results[6].image}
        />
      </div>
      <div>
        <Character
          id={results[7].id}
          name={results[7].name}
          status={results[7].status}
          species={results[7].species}
          gender={results[7].gender}
          image={results[7].image}
        />
      </div>
    </div>
  );
};

const results = [
  {
    id: 1,
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    gender: "Male",
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  },
  {
    "id":2,
    "name":"Morty Smith",
    "status":"Alive",
    "species":"Human",
    "gender":"Male",
    image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
  },
  {
    id: 3,
    name: "Summer Smith",
    status: "Alive",
    species: "Human",
    gender: "Female",
    image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
  },
  {
    id: 4,
    name: "Beth Smith",
    status: "Alive",
    species: "Human",
    gender: "Female",
    image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
  },
  {
    "id":6,
    "name":"Abadango Cluster Princess",
    "status":"Alive",
    "species":"Alien",
    "gender":"Female",
    image: "https://rickandmortyapi.com/api/character/avatar/6.jpeg",
  },
  {
    "id":8,
    "name":"Adjudicator Rick",
    "status":"Dead",
    "species":"Human",
    "gender":"Male",
    image: "https://rickandmortyapi.com/api/character/avatar/8.jpeg",
  },
  {
    "id":9,
    "name":"Agency Director",
    "status":"Dead",
    "species":"Human",
    "gender":"Male",
    image: "https://rickandmortyapi.com/api/character/avatar/9.jpeg",
  },
  {
    id: 10,
    name: "Alan Rails",
    status: "Dead",
    species: "Human",
    gender: "Male",
    image: "https://rickandmortyapi.com/api/character/avatar/10.jpeg",
  },
  {
    id: 11,
    name: "Albert Einstein",
    status: "Dead",
    species: "Human",
    gender: "Male",
    image: "https://rickandmortyapi.com/api/character/avatar/11.jpeg",
  },
  {
    id: 15,
    name: "Alien Rick",
    status: "unknown",
    species: "Alien",
    gender: "Male",
    image: "https://rickandmortyapi.com/api/character/avatar/15.jpeg",
  },
];

export default App;
