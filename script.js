//stores movie titles and their prices in an object

const movies = {
  "Thor: Love and Thunder": { price: 8, seats: [] },
  "The Bob's Burger's Movie": { price: 8, seats: [] },
  "Lightyear ": { price: 8, seats: [] },
  "Top Gun: Maverick": { price: 8, seats: [] },
  "Doctor Strange in the Multiverse of Madness": { price: 8, seats: [] },
  "Jurassic World: Dominion": { price: 8, seats: [] },
  "Minions: The Rise of Gru": { price: 8, seats: [] },
  "Elvis ": { price: 8, seats: [] },
  "The Black Phone": { price: 8, seats: [] },
  "Mr. Malcom's List": { price: 8, seats: [] },
};
let selectedMovie;
// dont need quotes around numbers beause they are strings
//Keys don't have spaces so they don't need quotations - added a space after title for consistency
//Gets the selectr from the HTML using an ID;
const movieDropdown = document.getElementById("movieDropdown");
//placeholder for the new options we are about to generate (html in a string)
let options = "<option></option>";
//for loops only work over arrays

for (const [key, value] of Object.entries(movies)) {
  options += `<option value="${key}">${key} ($${value.price}}</option>`; //template literal
}

movieDropdown.innerHTML = options;

movieDropdown.addEventListener("change", (event) => {
  selectedMovie = event.target.value;
  let seatsHTML;

  // console.log(movies[selectedMovie]);

  try {
    for (const row of movies[selectedMovie].seats) {
      seatsHTML += "<div>";
      for (const col of row) {
        seatsHTML += `<span class="material-symbols-outlined seat ${
          col.occupied ? "occupied" : ""
        }"> chair </span>`;
      }
      seatsHTML += "</div>";
    }

    seatsHTML += '<div id="screen">Screen</div>';
    document.getElementById("seats").innerHTML = seatsHTML;
  } catch (error) {
    document.getElementById("seats").innerHTML = "";
  }
});

const generateSeats = () => {
  for (const movie of Object.values(movies)) {
    for (let numRows = 0; numRows < 8; numRows++) {
      let row = [];
      for (let numCols = 0; numCols < 8; numCols++) {
        row.push({ occupied: Math.random() < 0.5, selected: false });
      }
      movie.seats.push(row);
    }
  }
  console.log(movies);
};

generateSeats();
