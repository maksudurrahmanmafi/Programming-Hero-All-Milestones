// API URL for all levels

const level = "https://openapi.programming-hero.com/api/levels/all";

// Load all lesson buttons

const allLevel = () => {
  fetch(level)
    .then((response) => response.json())
    .then(eachLevel);
};

// Display all lesson buttons dynamically

const eachLevel = (results) => {
  // Get the container
  const containerDiv = document.getElementById("level-container");

  // Clear previous buttons
  containerDiv.innerHTML = "";

  // Loop through every lesson
  results.data.forEach((result) => {
    const createDiv = document.createElement("div");

    createDiv.innerHTML = `
            <button
                id="lesson-btn-${result.level_no}"
                onclick="vocaBulary(${result.level_no})"
                class="lesson-btn btn btn-outline btn-primary mx-4">

                <i class="fa-solid fa-book-open"></i>

                Level-${result.level_no}

            </button>
        `;

    containerDiv.appendChild(createDiv);
  });
};

// Remove active class from every button

const removeActiveClass = () => {
  // Select all lesson buttons
  const buttons = document.querySelectorAll(".lesson-btn");

  // Remove active class
  buttons.forEach((button) => {
    button.classList.remove("active");
  });
};

// Load vocabulary by lesson id

const vocaBulary = (id) => {
  // Remove active class from all buttons
  removeActiveClass();

  // Add active class to clicked button
  document.getElementById(`lesson-btn-${id}`).classList.add("active");

  // Fetch vocabulary
  fetch(`https://openapi.programming-hero.com/api/level/${id}`)
    .then((res) => res.json())
    .then(loadVocabulary);
};

// Display vocabulary cards

const loadVocabulary = (words) => {
  const vocabularyContainer = document.getElementById("loadvocabulary");

  // Clear previous cards
  vocabularyContainer.innerHTML = "";

  // If no vocabulary found
  if (words.data.length === 0) {
    vocabularyContainer.innerHTML = `
        <div class="text-center col-span-full p-10">

            <img
                src="./assets/alert-error.png"
                class="mx-auto mb-4"
                alt="No Data">

            <p class="text-xl text-gray-400 font-bangla my-4">
                এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।
            </p>

            <h2 class="text-4xl font-bold">
                নেক্সট Lesson এ যান
            </h2>

        </div>
        `;

    return;
  }

  // Loop through every word
  words.data.forEach((word) => {
    const vocaContainer = document.createElement("div");

    vocaContainer.innerHTML = `

        <div class="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 text-center p-8 space-y-5">

            <h2 class="text-3xl font-bold text-gray-800">
                ${word.word}
            </h2>

            <div>
                <p class="text-gray-500 font-medium">
                    Meaning
                </p>

                <p class="text-xl font-bold text-blue-600">
                    ${word.meaning || "No Meaning"}
                </p>
            </div>

            <div>
                <p class="text-gray-500 font-medium">
                    Pronunciation
                </p>

                <p class="text-lg font-semibold font-bangla">
                    ${word.pronunciation || "Not Available"}
                </p>
            </div>

            <div class="flex justify-between items-center pt-4">

                <!-- Details Button -->
                <button
                    class="bg-blue-100 hover:bg-blue-500 hover:text-white transition duration-300 p-3 rounded-xl">

                    <i class="fa-solid fa-circle-info"></i>

                </button>


                <!-- Audio Button -->
                <button
                    class="bg-blue-100 hover:bg-blue-500 hover:text-white transition duration-300 p-3 rounded-xl">

                    <i class="fa-solid fa-volume-high"></i>

                </button>

            </div>

        </div>

        `;

    vocabularyContainer.appendChild(vocaContainer);
  });
};

// Load all lessons when page loads

allLevel();
