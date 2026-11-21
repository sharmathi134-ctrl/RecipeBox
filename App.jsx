import React, { useState,useEffect } from "react";
import "./App.css";
import API from "./services/api";

// ================= DIET PLANS =================

const dietPlans = {
  "Weight Loss": [
    {
      day: "Monday",
      breakfast: "Idli + Sambar",
      lunch: "Rice + Dal + Vegetables",
      snack: "Apple",
      dinner: "Chapati + Vegetable Curry"
    },
    {
      day: "Tuesday",
      breakfast: "Oats + Banana",
      lunch: "Rice + Vegetable Kootu",
      snack: "Sundal",
      dinner: "Dosa + Sambar"
    },
    {
      day: "Wednesday",
      breakfast: "Pongal + Sambar",
      lunch: "Rice + Rasam + Poriyal",
      snack: "Guava",
      dinner: "Chapati + Dal"
    },
    {
      day: "Thursday",
      breakfast: "Vegetable Upma",
      lunch: "Rice + Sambar + Vegetables",
      snack: "Sprouts",
      dinner: "Idiyappam + Vegetable Stew"
    },
    {
      day: "Friday",
      breakfast: "Dosa + Chutney",
      lunch: "Rice + Dal + Greens",
      snack: "Banana",
      dinner: "Vegetable Soup + Chapati"
    },
    {
      day: "Saturday",
      breakfast: "Idli + Chutney",
      lunch: "Vegetable Rice + Curd",
      snack: "Peanuts",
      dinner: "Chapati + Paneer Curry"
    },
    {
      day: "Sunday",
      breakfast: "Vegetable Sandwich",
      lunch: "Rice + Sambar + Poriyal",
      snack: "Fruit Salad",
      dinner: "Pongal + Sambar"
    }
  ],

  "Weight Gain": [
    {
      day: "Monday",
      breakfast: "Idli + Sambar + Milk",
      lunch: "Rice + Dal + Paneer",
      snack: "Banana + Nuts",
      dinner: "Chapati + Potato Curry"
    },
    {
      day: "Tuesday",
      breakfast: "Dosa + Chutney + Milk",
      lunch: "Rice + Vegetable Curry + Curd",
      snack: "Peanut Butter Toast",
      dinner: "Vegetable Pulao + Raita"
    },
    {
      day: "Wednesday",
      breakfast: "Oats + Banana + Nuts",
      lunch: "Rice + Sambar + Potato Fry",
      snack: "Fruit Smoothie",
      dinner: "Chapati + Paneer Curry"
    },
    {
      day: "Thursday",
      breakfast: "Pongal + Sambar",
      lunch: "Rice + Dal + Vegetables",
      snack: "Dates + Nuts",
      dinner: "Dosa + Potato Masala"
    },
    {
      day: "Friday",
      breakfast: "Vegetable Sandwich + Milk",
      lunch: "Rice + Curd + Poriyal",
      snack: "Banana Smoothie",
      dinner: "Chapati + Channa Masala"
    },
    {
      day: "Saturday",
      breakfast: "Idiyappam + Coconut Milk",
      lunch: "Rice + Paneer Curry",
      snack: "Nuts + Fruit",
      dinner: "Vegetable Fried Rice + Curd"
    },
    {
      day: "Sunday",
      breakfast: "Poori + Potato Masala",
      lunch: "Rice + Dal + Vegetables",
      snack: "Milk + Banana",
      dinner: "Chapati + Vegetable Kurma"
    }
  ]
};

// ================= HEALTH RECIPES =================

const healthRecipes = {
  fever: [
    {
      name: "Vegetable Clear Soup",
      method: [
        "Heat a little oil in a pan.",
        "Add chopped garlic, carrot, beans and cabbage.",
        "Add water and let the vegetables cook.",
        "Add salt and a little pepper.",
        "Simmer for 5 minutes and serve warm."
      ]
    },
    {
      name: "Rice Kanji",
      method: [
        "Wash half a cup of rice thoroughly.",
        "Add rice and 4 cups of water to a cooker.",
        "Cook until the rice becomes very soft.",
        "Mash gently and add a little salt.",
        "Serve warm."
      ]
    },
    {
      name: "Moong Dal Soup",
      method: [
        "Wash moong dal thoroughly.",
        "Add dal, water and turmeric to a cooker.",
        "Cook until the dal becomes soft.",
        "Mash the dal and add salt.",
        "Serve warm."
      ]
    },
    {
      name: "Vegetable Khichdi",
      method: [
        "Wash rice and moong dal together.",
        "Add chopped carrots and beans.",
        "Add water, turmeric and salt.",
        "Pressure cook until soft.",
        "Mix gently and serve warm."
      ]
    }
  ],

  cold: [
    {
      name: "Hot Pepper Vegetable Soup",
      method: [
        "Heat a little oil in a pan.",
        "Add chopped garlic and ginger.",
        "Add carrot, beans and cabbage.",
        "Pour in water and cook the vegetables.",
        "Add pepper and salt according to taste.",
        "Simmer and serve warm."
      ]
    },
    {
      name: "Ginger Vegetable Soup",
      method: [
        "Heat a little oil in a pan.",
        "Add chopped ginger and garlic.",
        "Add mixed vegetables.",
        "Pour water and cook until soft.",
        "Add salt and serve warm."
      ]
    },
    {
      name: "Warm Tomato Soup",
      method: [
        "Boil tomatoes until soft.",
        "Allow them to cool slightly.",
        "Blend into a smooth mixture.",
        "Heat the mixture in a pan.",
        "Add salt and pepper according to taste.",
        "Serve warm."
      ]
    },
    {
      name: "Vegetable Rasam",
      method: [
        "Boil chopped tomatoes in water.",
        "Add turmeric and rasam powder.",
        "Add cooked vegetables if desired.",
        "Simmer for a few minutes.",
        "Serve warm."
      ]
    }
  ],

  cough: [
    {
      name: "Warm Vegetable Soup",
      method: [
        "Heat a little oil in a pan.",
        "Add chopped vegetables.",
        "Add water and cook until soft.",
        "Add a little salt.",
        "Serve warm."
      ]
    },
    {
      name: "Moong Dal Khichdi",
      method: [
        "Wash rice and moong dal.",
        "Add both to a cooker with water.",
        "Add turmeric and vegetables.",
        "Cook until soft.",
        "Mix gently and serve."
      ]
    }
  ],

  "sore throat": [
    {
      name: "Soft Ven Pongal",
      method: [
        "Wash rice and moong dal.",
        "Cook them with extra water until soft.",
        "Add a little salt.",
        "Mix gently until creamy.",
        "Serve warm."
      ]
    },
    {
      name: "Rice Kanji",
      method: [
        "Wash rice thoroughly.",
        "Add rice and water to a cooker.",
        "Cook until very soft.",
        "Mash gently and add a little salt.",
        "Serve warm."
      ]
    }
  ]
};

// ================= EXPLORE CATEGORY RECIPES =================

const exploreRecipes = {
  Italian: [
    {
      name: "Creamy Spaghetti",
      description: "Classic pasta tossed with cream, herbs and parmesan.",
      image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=900",
      cookingTime: "25 minutes",
      servings: "2 servings",
      ingredients: ["200 g spaghetti", "1 tbsp olive oil", "2 garlic cloves, minced", "1/2 cup cooking cream", "1/3 cup grated parmesan", "Salt, black pepper and parsley"],
      cookingMethod: ["Cook spaghetti in salted boiling water until al dente. Save 1/2 cup of pasta water before draining.", "Warm olive oil in a pan and gently cook the garlic for 30 seconds.", "Add cream, parmesan and a splash of pasta water. Stir until smooth.", "Add the spaghetti, toss until coated, then season with pepper and parsley. Serve warm."]
    },
    {
      name: "Margherita Pizza",
      description: "A fresh pizza with tomato, mozzarella and basil.",
      image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=900",
      cookingTime: "30 minutes",
      servings: "2 servings",
      ingredients: ["1 pizza base", "1/3 cup tomato sauce", "150 g mozzarella", "Fresh basil leaves", "1 tsp olive oil", "A pinch of salt"],
      cookingMethod: ["Heat the oven to 220°C (425°F).", "Spread tomato sauce over the pizza base, leaving a small border.", "Add mozzarella and bake for 10–12 minutes until the crust is golden.", "Top with fresh basil and a drizzle of olive oil before serving."]
    },
    {
      name: "Italian Vegetable Pasta",
      description: "Colorful vegetables with herbs and Italian seasoning.",
      image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=900",
      cookingTime: "25 minutes",
      servings: "2 servings",
      ingredients: ["200 g penne pasta", "1 tbsp olive oil", "1 small bell pepper, sliced", "1 cup cherry tomatoes", "1/2 cup zucchini, chopped", "Italian herbs, salt and pepper"],
      cookingMethod: ["Cook pasta in salted boiling water according to the package, then drain.", "Heat olive oil in a pan and sauté the bell pepper and zucchini for 4 minutes.", "Add tomatoes, Italian herbs, salt and pepper; cook until the tomatoes soften.", "Toss in the pasta with a spoonful of pasta water and serve."]
    }
  ],
  Indian: [
    {
      name: "Paneer Butter Masala",
      description: "Soft paneer cooked in a rich, creamy tomato gravy.",
      image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=900",
      cookingTime: "35 minutes",
      servings: "3 servings",
      ingredients: ["250 g paneer, cubed", "2 tomatoes, chopped", "1 small onion, chopped", "1 tbsp butter", "1/4 cup cream", "1 tsp garam masala"],
      cookingMethod: ["Sauté onion and tomatoes until soft, then blend into a smooth sauce.", "Melt butter in a pan, add the sauce and simmer for 8 minutes.", "Stir in garam masala, paneer and cream.", "Simmer gently for 5 minutes and serve with rice or naan."]
    },
    {
      name: "Vegetable Biryani",
      description: "Fragrant basmati rice cooked with spices and vegetables.",
      image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=900",
      cookingTime: "45 minutes",
      servings: "4 servings",
      ingredients: ["2 cups basmati rice", "2 cups mixed vegetables", "1 onion, sliced", "1 tbsp biryani masala", "3 cups water", "Mint, coriander and salt"],
      cookingMethod: ["Rinse and soak the rice for 20 minutes, then drain.", "Sauté the onion and vegetables with biryani masala.", "Add rice, water and salt; bring to a boil.", "Cover and cook on low heat until the rice is fluffy. Garnish with mint and coriander."]
    },
    {
      name: "Masala Dosa",
      description: "Crispy dosa filled with spiced potato masala.",
      image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=900",
      cookingTime: "30 minutes",
      servings: "2 servings",
      ingredients: ["4 dosa batter portions", "3 potatoes, boiled", "1 onion, sliced", "1/2 tsp mustard seeds", "Curry leaves", "Salt and turmeric"],
      cookingMethod: ["Mash the boiled potatoes roughly.", "Temper mustard seeds and curry leaves in a little oil, then sauté the onion.", "Add potatoes, turmeric and salt; mix to make the masala filling.", "Spread batter thinly on a hot pan, cook until crisp, add the filling and fold."]
    }
  ],
  "Non-Veg": [
    {
      name: "Chicken Curry",
      description: "Tender chicken simmered in aromatic Indian spices.",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=900",
      cookingTime: "50 minutes",
      servings: "4 servings",
      ingredients: ["600 g chicken pieces", "1 onion, chopped", "2 tomatoes, chopped", "1 tbsp ginger-garlic paste", "1 tsp curry powder", "1 cup water and salt"],
      cookingMethod: ["Sauté the onion until golden, then add ginger-garlic paste.", "Add tomatoes, curry powder and salt; cook until soft.", "Add chicken and stir to coat in the spices.", "Pour in water, cover and simmer until the chicken is fully cooked."]
    },
    {
      name: "Grilled Chicken",
      description: "Juicy grilled chicken seasoned with herbs and spices.",
      image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=900",
      cookingTime: "40 minutes",
      servings: "2 servings",
      ingredients: ["2 chicken breasts", "1 tbsp olive oil", "1 tsp paprika", "1/2 tsp garlic powder", "Salt and black pepper", "1 tbsp lemon juice"],
      cookingMethod: ["Mix olive oil, paprika, garlic powder, salt, pepper and lemon juice.", "Coat the chicken and let it marinate for at least 15 minutes.", "Grill over medium heat for 6–8 minutes per side, until fully cooked.", "Rest for 5 minutes, then slice and serve."]
    },
    {
      name: "Chicken Fried Rice",
      description: "Wok-tossed rice with chicken and colourful vegetables.",
      image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=900",
      cookingTime: "25 minutes",
      servings: "3 servings",
      ingredients: ["2 cups cooked rice", "200 g cooked chicken, diced", "1 cup mixed vegetables", "1 egg (optional)", "1 tbsp soy sauce", "1 tbsp cooking oil"],
      cookingMethod: ["Heat oil in a wok and stir-fry the vegetables until just tender.", "Add chicken and the egg, if using, and cook through.", "Add cooked rice and soy sauce; toss over high heat.", "Taste, adjust seasoning and serve hot."]
    }
  ],
  Dessert: [
    {
      name: "Chocolate Cake",
      description: "A soft chocolate cake with rich cocoa frosting.",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=900",
      cookingTime: "50 minutes",
      servings: "8 servings",
      ingredients: ["1 1/2 cups flour", "1 cup sugar", "1/3 cup cocoa powder", "2 eggs", "1/2 cup milk", "1/2 cup melted butter"],
      cookingMethod: ["Heat the oven to 180°C (350°F) and grease a cake tin.", "Whisk flour, sugar and cocoa together.", "Add eggs, milk and butter; mix until smooth.", "Bake for 30–35 minutes. Cool completely before frosting."]
    },
    {
      name: "Classic Ice Cream",
      description: "Creamy chilled dessert available in many flavours.",
      image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=900",
      cookingTime: "15 minutes + freezing",
      servings: "4 servings",
      ingredients: ["2 cups chilled whipping cream", "1 cup condensed milk", "1 tsp vanilla extract"],
      cookingMethod: ["Whip the cream until soft peaks form.", "Fold in condensed milk and vanilla until smooth.", "Transfer to a freezer-safe container and cover.", "Freeze for at least 6 hours, then scoop and serve."]
    },
    {
      name: "Fruit Custard",
      description: "Fresh fruits mixed with smooth, sweet vanilla custard.",
      image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=900",
      cookingTime: "20 minutes + chilling",
      servings: "4 servings",
      ingredients: ["2 cups milk", "2 tbsp custard powder", "3 tbsp sugar", "1 1/2 cups chopped seasonal fruit"],
      cookingMethod: ["Mix custard powder with 1/4 cup cold milk until smooth.", "Heat the remaining milk with sugar, then stir in the custard mixture.", "Cook, stirring, until thick. Cool and refrigerate.", "Fold in chopped fruit just before serving."]
    }
  ]
};

// ================= MAIN APP =================

function App() {
  const [showForm, setShowForm] = useState(false);

  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
  const fetchRecipes = async () => {
    try {
      const response = await API.get("/recipes");
      setRecipes(response.data);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  fetchRecipes();
}, []);
const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [image, setImage] = useState("");

  const [selectedDiet, setSelectedDiet] = useState("");

  const [symptom, setSymptom] = useState("");
  const [customSymptom, setCustomSymptom] = useState("");

  const [selectedHealthRecipe, setSelectedHealthRecipe] =
    useState(null);

  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedExploreRecipe, setSelectedExploreRecipe] = useState(null);

  const openCategory = (categoryName) => {
    setSelectedCategory(categoryName);
    setSelectedExploreRecipe(null);
    window.setTimeout(() => {
      document.getElementById("category-recipes")?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }, 0);
  };

  const openExploreRecipe = (recipe) => {
    setSelectedExploreRecipe(recipe);
    window.setTimeout(() => {
      document.getElementById("category-recipes")?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }, 0);
  };

  // ADD RECIPE

 const handleAddRecipe = async (e) => {
  e.preventDefault();

  try {
    const newRecipe = {
      name,
      category,
      ingredients: ingredients
        .split("\n")
        .map(item => item.trim())
        .filter(Boolean),
      cookingMethod: instructions
        .split("\n")
        .map(item => item.trim())
        .filter(Boolean),
      image
    };

    const response = await API.post("/recipes", newRecipe);

    setRecipes((prev) => [...prev, response.data]);

    setName("");
    setCategory("");
    setIngredients("");
    setInstructions("");
    setImage("");
    setShowForm(false);

    alert("Recipe saved to MongoDB successfully! 🎉");

  } catch (error) {
    console.error("Recipe saving error:", error);
    alert("Unable to save recipe. Please try again!");
  }
};
  // IMAGE UPLOAD

 const handleImageUpload = (e) => {
  const file = e.target.files[0];

  if (!file) return;

  if (file.size > 5 * 1024 * 1024) {
    alert("Please select an image smaller than 5 MB.");
    e.target.value = "";
    return;
  }

  const reader = new FileReader();

  reader.onload = () => {
    if (typeof reader.result === "string") {
      setImage(reader.result);
    } else {
      alert("Unable to load this image. Please choose another file.");
    }
  };

  reader.onerror = () => {
    alert("Unable to read this image. Please choose another file.");
  };

  reader.readAsDataURL(file);
};

  // SEARCH

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchText.toLowerCase())
  );

  // FIND HEALTH RECIPES

  const findHealthRecipes = () => {
    setSymptom(customSymptom.trim().toLowerCase());
    setSelectedHealthRecipe(null);
  };

  // GET MATCHING RECIPES

  const matchingHealthRecipes = Object.entries(healthRecipes)
    .filter(([key]) => symptom.includes(key))
    .flatMap(([, items]) => items)
    .filter(
      (recipe, index, arr) =>
        arr.findIndex((item) => item.name === recipe.name) === index
    );

  return (
    <div className="app">

      {/* HEADER */}

      <header className="header">

        <h1>🍴 RECIPEBOX</h1>

        <div className="searchbox">
          <input
            type="text"
            placeholder="Search your favourite recipes..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />

          <button
            onClick={() =>
              document
                .getElementById("myrecipes")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Search
          </button>
        </div>

        <div className="profile">
          <span>👤 My Profile</span>
          <span>⚙️ Settings</span>
        </div>

      </header>

      {/* SIDEBAR */}

      <aside className="sidebar">

        <h3>MENU</h3>

        <nav>
          <a href="#home">🏠 Home</a>
          <a href="#explore">🔍 Explore Recipes</a>
          <a href="#add">➕ Add Recipe</a>
          <a href="#myrecipes">📖 My Recipes</a>
          <a href="#dietplan">🥗 Diet Planner</a>
          <a href="#healthrecipes">🤒 Feel Better Recipes</a>
        </nav>

        <div className="logout">
          <a href="#home">↪ Log Out</a>
        </div>

      </aside>

      {/* MAIN CONTENT */}

      <main className="main-content">

        {/* HOME */}

        <section className="welcome" id="home">

          <div className="welcome-text">

            <p className="tagline">WELCOME TO RECIPEBOX</p>

            <h2>
              Discover, Cook & Share Your Favourite Recipes!
            </h2>

            <p>
              Explore delicious recipes, discover new flavours
              and share your cooking creativity with everyone.
            </p>

            <button
              onClick={() =>
                document
                  .getElementById("explore")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Explore Recipes →
            </button>

          </div>

          <img
            src="https://images.unsplash.com/photo-1547592180-85f173990554?w=700"
            alt="Delicious food"
          />

        </section>

        {/* EXPLORE RECIPES */}

        <section className="explore" id="explore">

          <h2>Explore Recipes</h2>

          <p>Find something delicious to cook today!</p>

          <div className="recipe-grid">

            <div
              className={`recipe-card explore-category-card ${selectedCategory === "Italian" ? "active-category" : ""}`}
              role="button"
              tabIndex={0}
              onClick={() => openCategory("Italian")}
              onKeyDown={(event) => event.key === "Enter" && openCategory("Italian")}
            >
              <img
                src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=500"
                alt="Italian food"
              />
              <h3>Italian Recipes 🍝</h3>
              <p>Explore delicious Italian dishes and flavours.</p>
              <button type="button">View Italian Recipes</button>
            </div>

            <div
              className={`recipe-card explore-category-card ${selectedCategory === "Indian" ? "active-category" : ""}`}
              role="button"
              tabIndex={0}
              onClick={() => openCategory("Indian")}
              onKeyDown={(event) => event.key === "Enter" && openCategory("Indian")}
            >
              <img
                src="https://images.unsplash.com/photo-1547592180-85f173990554?w=500"
                alt="Indian food"
              />
              <h3>Indian Recipes 🍛</h3>
              <p>Discover traditional Indian food varieties.</p>
              <button type="button">View Indian Recipes</button>
            </div>

            <div
              className={`recipe-card explore-category-card ${selectedCategory === "Non-Veg" ? "active-category" : ""}`}
              role="button"
              tabIndex={0}
              onClick={() => openCategory("Non-Veg")}
              onKeyDown={(event) => event.key === "Enter" && openCategory("Non-Veg")}
            >
              <img
                src="https://images.unsplash.com/photo-1544025162-d76694265947?w=500"
                alt="Non veg food"
              />
              <h3>Non-Veg Recipes 🍗</h3>
              <p>Explore tasty non-vegetarian dishes.</p>
              <button type="button">View Non-Veg Recipes</button>
            </div>

            <div
              className={`recipe-card explore-category-card ${selectedCategory === "Dessert" ? "active-category" : ""}`}
              role="button"
              tabIndex={0}
              onClick={() => openCategory("Dessert")}
              onKeyDown={(event) => event.key === "Enter" && openCategory("Dessert")}
            >
              <img
                src="https://images.unsplash.com/photo-1551024506-0bccd828d307?w=500"
                alt="Desserts"
              />
              <h3>Desserts 🍰</h3>
              <p>Enjoy sweet treats and delicious desserts.</p>
              <button type="button">View Dessert Recipes</button>
            </div>

          </div>

          {selectedCategory && (
            <div className="category-results" id="category-recipes">
              <div className="category-results-heading">
                <div>
                  <p className="tagline">EXPLORE CATEGORY</p>
                  <h2>{selectedExploreRecipe ? selectedExploreRecipe.name : `${selectedCategory} Recipes`}</h2>
                </div>
                <button type="button" className="back-button" onClick={() => setSelectedCategory("")}>
                  ← Back to Categories
                </button>
              </div>

              {selectedExploreRecipe ? (
                <article className="explore-recipe-detail">
                  <img
                    className="explore-recipe-detail-image"
                    src={selectedExploreRecipe.image || "https://images.unsplash.com/photo-1547592180-85f173990554?w=900"}
                    alt={selectedExploreRecipe.name}
                  />
                  <div className="explore-recipe-detail-content">
                    <p className="explore-recipe-description">{selectedExploreRecipe.description || "A delicious recipe from your collection."}</p>
                    <div className="recipe-meta">
                      <span>⏱️ {selectedExploreRecipe.cookingTime || "Time varies"}</span>
                      <span>🍽️ {selectedExploreRecipe.servings || "Serves 2"}</span>
                    </div>
                    <div className="recipe-detail-columns">
                      <section>
                        <h3>🧺 Ingredients</h3>
                        {Array.isArray(selectedExploreRecipe.ingredients) && selectedExploreRecipe.ingredients.length > 0 ? (
                          <ul className="recipe-ingredient-list">
                            {selectedExploreRecipe.ingredients.map((ingredient, index) => (
                              <li key={`${ingredient}-${index}`}>{ingredient}</li>
                            ))}
                          </ul>
                        ) : (
                          <p className="recipe-detail-note">Add ingredients to this recipe in My Recipes.</p>
                        )}
                      </section>
                      <section>
                        <h3>👩‍🍳 How to make it</h3>
                        {Array.isArray(selectedExploreRecipe.cookingMethod) && selectedExploreRecipe.cookingMethod.length > 0 ? (
                          <ol className="recipe-step-list">
                            {selectedExploreRecipe.cookingMethod.map((step, index) => (
                              <li key={`${step}-${index}`}>
                                <span>{String(index + 1).padStart(2, "0")}</span>
                                {step}
                              </li>
                            ))}
                          </ol>
                        ) : (
                          <p className="recipe-detail-note">Cooking instructions are not available for this recipe yet.</p>
                        )}
                      </section>
                    </div>
                    <button
                      type="button"
                      className="back-button recipe-detail-back"
                      onClick={() => setSelectedExploreRecipe(null)}
                    >
                      ← Back to {selectedCategory} dishes
                    </button>
                  </div>
                </article>
              ) : (
                <div className="recipe-grid category-recipe-grid">
                  {[
                    ...exploreRecipes[selectedCategory],
                    ...recipes.filter((recipe) =>
                      recipe.category?.toLowerCase() === selectedCategory.toLowerCase()
                    )
                  ].map((recipe, index) => (
                    <article
                      className="recipe-card category-recipe-card"
                      key={recipe._id || `${recipe.name}-${index}`}
                      role="button"
                      tabIndex={0}
                      onClick={() => openExploreRecipe(recipe)}
                      onKeyDown={(event) => event.key === "Enter" && openExploreRecipe(recipe)}
                    >
                      <img src={recipe.image || "https://images.unsplash.com/photo-1547592180-85f173990554?w=500"} alt={recipe.name} />
                      <h3>{recipe.name}</h3>
                      <p>{recipe.description || (Array.isArray(recipe.ingredients) ? recipe.ingredients.join(", ") : "A delicious recipe from your collection.")}</p>
                      <button type="button" onClick={() => openExploreRecipe(recipe)}>View Full Recipe →</button>
                    </article>
                  ))}
                </div>
              )}
            </div>
          )}

        </section>

        {/* ADD RECIPE */}

        <section className="add-recipe" id="add">

          <div>
            <h2>Have a Recipe to Share? 🍲</h2>
            <p>Share your favourite recipes with our community!</p>
          </div>

          <button onClick={() => setShowForm(true)}>
            + Add Your Recipe
          </button>

        </section>

        {/* ADD RECIPE FORM */}

        {showForm && (

          <section className="recipe-form">

            <h2>Add Your Recipe 🍲</h2>

            <form onSubmit={handleAddRecipe}>

              <input
                type="text"
                placeholder="Recipe Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />

              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              >
                <option value="">Select Category</option>
                <option value="Indian">Indian</option>
                <option value="Chinese">Chinese</option>
                <option value="Italian">Italian</option>
                <option value="Non-Veg">Non-Veg</option>
                <option value="Dessert">Dessert</option>
              </select>

              <label>Upload Food Image</label>

              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
              />

              {image && (
                <img
                  src={image}
                  alt="Recipe preview"
                  style={{
                    width: "180px",
                    height: "130px",
                    objectFit: "cover",
                    borderRadius: "10px"
                  }}
                />
              )}

              <textarea
                placeholder="Enter Ingredients"
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
                required
              />

              <textarea
                placeholder="Enter Cooking Instructions"
                value={instructions}
                onChange={(e) => setInstructions(e.target.value)}
                required
              />

              <button type="submit">Save Recipe</button>

              <button
                type="button"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>

            </form>

          </section>

        )}

        {/* MY RECIPES */}

        <section className="my-recipes" id="myrecipes">

          <h2>My Recipes 📖</h2>

          <p>Your personal collection of favourite recipes</p>

          <div className="recipe-grid">

            {filteredRecipes.length === 0 ? (

              <p>No recipes found. Add your first recipe! 🍽️</p>

            ) : (

              filteredRecipes.map((recipe) => (

                <div className="recipe-card" key={recipe._id}>

                  {recipe.image ? (

                    <img
                      src={recipe.image}
                      alt={recipe.name}
                      className="my-recipe-image"
                    />

                  ) : (

                    <div className="no-image">🍽️</div>

                  )}

                  <h3>{recipe.name}</h3>

                  <p>
                    <strong>Category:</strong> {recipe.category}
                  </p>

                  <p>
                    <strong>Ingredients:</strong> {recipe.ingredients}
                  </p>

                  <p>
                    <strong>Instructions:</strong>{" "}
                    {Array.isArray(recipe.cookingMethod)
                      ? recipe.cookingMethod.join(", ")
                      : ""}
                  </p>

                </div>

              ))

            )}

          </div>

        </section>

        {/* DIET PLANNER */}

        <section className="diet-planner" id="dietplan">

          <h2>🥗 Diet Planner</h2>

          <p>Choose your preferred weekly meal plan</p>

          <div className="diet-options">

            <button
              onClick={() => setSelectedDiet("Weight Loss")}
            >
              ⚖️ Weight Loss Plan
            </button>

            <button
              onClick={() => setSelectedDiet("Weight Gain")}
            >
              💪 Weight Gain Plan
            </button>

          </div>

          {selectedDiet && (

            <div className="diet-results">

              <h3>
                {selectedDiet === "Weight Loss"
                  ? "🥗 Weight Loss"
                  : "💪 Weight Gain"}{" "}
                – Weekly Meal Plan
              </h3>

              <div className="diet-grid">

                {dietPlans[selectedDiet].map((item) => (

                  <div className="diet-card" key={item.day}>

                    <h3>{item.day}</h3>

                    <p>
                      <strong>Breakfast:</strong> {item.breakfast}
                    </p>

                    <p>
                      <strong>Lunch:</strong> {item.lunch}
                    </p>

                    <p>
                      <strong>Snacks:</strong> {item.snack}
                    </p>

                    <p>
                      <strong>Dinner:</strong> {item.dinner}
                    </p>

                  </div>

                ))}

              </div>

            </div>

          )}

          <p className="health-note">
            These are sample balanced meal ideas, not personalised
            weight-management plans. Individual nutritional needs vary.
          </p>

        </section>

        {/* FEEL BETTER RECIPES */}

        <section className="health-recipes" id="healthrecipes">

          <div className="health-heading">

            <span>🍲</span>

            <h2>Feel Better Recipes</h2>

            <p>
              Find comforting food ideas based on your symptoms!
            </p>

          </div>

          <div className="health-search">

            <input
              type="text"
              placeholder="🔍 Enter symptoms (Example: fever and cold)"
              value={customSymptom}
              onChange={(e) => {
                setCustomSymptom(e.target.value);
                setSelectedHealthRecipe(null);
              }}
            />

            <button onClick={findHealthRecipes}>
              Find Recipes ✨
            </button>

          </div>

          {symptom && (

            <div className="health-results">

              {selectedHealthRecipe ? (

                <div className="cooking-method">

                  <button
                    className="back-button"
                    onClick={() => setSelectedHealthRecipe(null)}
                  >
                    ← Back to Recipes
                  </button>

                  <h2>
                    👩‍🍳 {selectedHealthRecipe.name}
                  </h2>

                  <h3>Cooking Method</h3>

                  <ol>
                    {selectedHealthRecipe.method.map(
                      (step, index) => (
                        <li key={index}>{step}</li>
                      )
                    )}
                  </ol>

                </div>

              ) : (

                <>

                  <h3>✨ Suggested Recipes for You</h3>

                  {matchingHealthRecipes.length > 0 ? (

                    <div className="health-recipe-grid">

                      {matchingHealthRecipes.map((recipe) => (

                        <button
                          className="health-card"
                          key={recipe.name}
                          onClick={() =>
                            setSelectedHealthRecipe(recipe)
                          }
                        >

                          <span>🍲</span>

                          <strong>{recipe.name}</strong>

                          <small>
                            View Cooking Method →
                          </small>

                        </button>

                      ))}

                    </div>

                  ) : (

                    <p>
                      No matching suggestions found.
                      Try fever, cold, cough or sore throat.</p> )}
                      </> )}
                      </div> )}
                      <p className="health-note">Food Suggestion are not medical treatements. Please consult a healthcare professional for fever or worsening symptoms</p>
                      </section>
                      {/* ABOUT */}

        <section className="about">

          <h2>About RecipeBox</h2>

          <p>
            RecipeBox is a personal recipe collection and sharing
            platform where food lovers can discover, create, save
            and share their favourite recipes.
          </p>

        </section>

      </main>

      {/* FOOTER */}

      <footer>
        <p>© 2026 RECIPEBOX | All Rights Reserved</p>
      </footer>

    </div>
  );
}

export default App