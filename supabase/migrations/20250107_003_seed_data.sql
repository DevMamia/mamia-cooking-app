-- Insert 3 Mamas with different cuisines and personalities
INSERT INTO mamas (id, name, cuisine_type, description, personality_traits, signature_dish, avatar_url, voice_id, accent_description, color_primary, color_secondary) VALUES
(
  '550e8400-e29b-41d4-a716-446655440001',
  'Nonna Isabella',
  'italian',
  'A warm-hearted Italian grandmother from Tuscany who has been cooking for her family for over 50 years. She believes that food is love made visible and that every meal should bring people together.',
  ARRAY['warm', 'patient', 'storytelling', 'traditional', 'nurturing'],
  'Homemade Ragu Bolognese',
  '/images/mamas/nonna-isabella.jpg',
  'isabella_voice_id',
  'Gentle Italian accent with melodic intonation',
  '#8B4513',
  '#D2B48C'
),
(
  '550e8400-e29b-41d4-a716-446655440002',
  'Mama Rosa',
  'mexican',
  'A vibrant Mexican cook from Oaxaca who learned traditional recipes from her grandmother. She is passionate about preserving authentic flavors and teaching the cultural significance behind each dish.',
  ARRAY['energetic', 'passionate', 'cultural', 'spicy', 'festive'],
  'Mole Negro Oaxaqueño',
  '/images/mamas/mama-rosa.jpg',
  'rosa_voice_id',
  'Warm Mexican accent with rhythmic speech patterns',
  '#C41E3A',
  '#FF6B35'
),
(
  '550e8400-e29b-41d4-a716-446655440003',
  'Chef Kenji',
  'japanese',
  'A master of Japanese cuisine who trained in Tokyo for 15 years. He combines traditional techniques with modern presentation, emphasizing the importance of seasonal ingredients and mindful preparation.',
  ARRAY['precise', 'mindful', 'seasonal', 'minimalist', 'respectful'],
  'Seasonal Kaiseki Menu',
  '/images/mamas/chef-kenji.jpg',
  'kenji_voice_id',
  'Calm Japanese accent with deliberate pacing',
  '#2E8B57',
  '#90EE90'
);

-- Insert recipes for Nonna Isabella (Italian)
INSERT INTO recipes (id, mama_id, title, description, prep_time, cook_time, difficulty, servings, hero_image_url, ingredients, steps, cultural_notes, offline_available) VALUES
(
  '660e8400-e29b-41d4-a716-446655440001',
  '550e8400-e29b-41d4-a716-446655440001',
  'Classic Spaghetti Carbonara',
  'An authentic Roman pasta dish made with eggs, cheese, pancetta, and black pepper. Simple ingredients create pure magic.',
  15,
  20,
  'medium',
  4,
  '/images/recipes/carbonara.jpg',
  '[
    {"name": "Spaghetti", "amount": 400, "unit": "g", "notes": "Use good quality pasta"},
    {"name": "Pancetta", "amount": 150, "unit": "g", "notes": "Diced"},
    {"name": "Pecorino Romano", "amount": 100, "unit": "g", "notes": "Freshly grated"},
    {"name": "Eggs", "amount": 3, "unit": "large", "notes": "Room temperature"},
    {"name": "Black pepper", "amount": 1, "unit": "tsp", "notes": "Freshly ground"},
    {"name": "Salt", "amount": 1, "unit": "tsp", "notes": "For pasta water"}
  ]',
  '[
    {"step": 1, "description": "Bring a large pot of salted water to boil for the pasta.", "duration": 5},
    {"step": 2, "description": "In a large bowl, whisk together eggs, grated cheese, and black pepper.", "duration": 3},
    {"step": 3, "description": "Cook pancetta in a large skillet until crispy, about 5 minutes.", "duration": 5},
    {"step": 4, "description": "Cook spaghetti according to package directions until al dente.", "duration": 10},
    {"step": 5, "description": "Reserve 1 cup pasta water, then drain pasta.", "duration": 1},
    {"step": 6, "description": "Add hot pasta to pancetta, toss with egg mixture off heat.", "duration": 2},
    {"step": 7, "description": "Add pasta water gradually until creamy. Serve immediately.", "duration": 2}
  ]',
  'Carbonara originated in Rome and was traditionally eaten by charcoal workers (carbonari). Never use cream - the creaminess comes from the eggs and cheese!',
  true
),
(
  '660e8400-e29b-41d4-a716-446655440002',
  '550e8400-e29b-41d4-a716-446655440001',
  'Osso Buco alla Milanese',
  'Tender braised veal shanks in a rich tomato and wine sauce, traditionally served with risotto or polenta.',
  30,
  120,
  'hard',
  6,
  '/images/recipes/osso-buco.jpg',
  '[
    {"name": "Veal shanks", "amount": 6, "unit": "pieces", "notes": "Cross-cut, tied"},
    {"name": "All-purpose flour", "amount": 100, "unit": "g", "notes": "For dusting"},
    {"name": "Olive oil", "amount": 4, "unit": "tbsp", "notes": "Extra virgin"},
    {"name": "Onion", "amount": 1, "unit": "large", "notes": "Diced"},
    {"name": "Carrot", "amount": 2, "unit": "medium", "notes": "Diced"},
    {"name": "Celery", "amount": 2, "unit": "stalks", "notes": "Diced"},
    {"name": "White wine", "amount": 250, "unit": "ml", "notes": "Dry"},
    {"name": "Canned tomatoes", "amount": 400, "unit": "g", "notes": "Crushed"},
    {"name": "Beef stock", "amount": 500, "unit": "ml", "notes": "Hot"}
  ]',
  '[
    {"step": 1, "description": "Preheat oven to 160°C. Season and flour the veal shanks.", "duration": 10},
    {"step": 2, "description": "Heat oil in a heavy pot, brown shanks on all sides.", "duration": 15},
    {"step": 3, "description": "Remove shanks, sauté vegetables until soft.", "duration": 8},
    {"step": 4, "description": "Add wine, reduce by half, then add tomatoes and stock.", "duration": 10},
    {"step": 5, "description": "Return shanks to pot, cover, braise in oven for 2 hours.", "duration": 120},
    {"step": 6, "description": "Check tenderness, adjust seasoning and serve.", "duration": 5}
  ]',
  'This classic Milanese dish is perfect for Sunday family dinners. The marrow in the bone is considered a delicacy.',
  false
),
(
  '660e8400-e29b-41d4-a716-446655440005',
  '550e8400-e29b-41d4-a716-446655440001',
  'Risotto alla Milanese',
  'Creamy Arborio rice with saffron, creating the signature golden color of this Milan classic.',
  10,
  30,
  'medium',
  4,
  '/images/recipes/risotto-milanese.jpg',
  '[
    {"name": "Arborio rice", "amount": 320, "unit": "g", "notes": ""},
    {"name": "Chicken stock", "amount": 1.2, "unit": "L", "notes": "Hot"},
    {"name": "Saffron", "amount": 1, "unit": "pinch", "notes": "Threads"},
    {"name": "White wine", "amount": 150, "unit": "ml", "notes": "Dry"},
    {"name": "Onion", "amount": 1, "unit": "small", "notes": "Finely diced"},
    {"name": "Parmesan", "amount": 80, "unit": "g", "notes": "Grated"},
    {"name": "Butter", "amount": 60, "unit": "g", "notes": "Cold"}
  ]',
  '[
    {"step": 1, "description": "Warm stock, steep saffron in small amount of hot stock.", "duration": 5},
    {"step": 2, "description": "Sauté onion in butter until translucent.", "duration": 5},
    {"step": 3, "description": "Add rice, toast for 2 minutes until edges are translucent.", "duration": 3},
    {"step": 4, "description": "Add wine, stir until absorbed.", "duration": 3},
    {"step": 5, "description": "Add stock one ladle at a time, stirring constantly.", "duration": 18},
    {"step": 6, "description": "Stir in saffron, cheese, and cold butter. Rest 2 minutes.", "duration": 3}
  ]',
  'Traditionally served with Osso Buco. The rice should be all''onda - flowing like lava when shaken.',
  false
),
(
  '660e8400-e29b-41d4-a716-446655440006',
  '550e8400-e29b-41d4-a716-446655440001',
  'Tiramisu',
  'The classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream.',
  30,
  0,
  'easy',
  8,
  '/images/recipes/tiramisu.jpg',
  '[
    {"name": "Ladyfingers", "amount": 24, "unit": "pieces", "notes": "Savoiardi"},
    {"name": "Mascarpone", "amount": 500, "unit": "g", "notes": "Room temperature"},
    {"name": "Eggs", "amount": 4, "unit": "large", "notes": "Separated"},
    {"name": "Sugar", "amount": 100, "unit": "g", "notes": "Caster sugar"},
    {"name": "Strong coffee", "amount": 300, "unit": "ml", "notes": "Cooled"},
    {"name": "Cocoa powder", "amount": 2, "unit": "tbsp", "notes": "For dusting"},
    {"name": "Dark rum", "amount": 2, "unit": "tbsp", "notes": "Optional"}
  ]',
  '[
    {"step": 1, "description": "Whisk egg yolks with sugar until pale and thick.", "duration": 5},
    {"step": 2, "description": "Gently fold in mascarpone until smooth.", "duration": 3},
    {"step": 3, "description": "Whip egg whites to soft peaks, fold into mascarpone mixture.", "duration": 5},
    {"step": 4, "description": "Combine coffee and rum. Quickly dip ladyfingers.", "duration": 2},
    {"step": 5, "description": "Layer dipped ladyfingers and cream in dish.", "duration": 10},
    {"step": 6, "description": "Refrigerate for at least 4 hours, dust with cocoa before serving.", "duration": 5}
  ]',
  'Tiramisu means pick-me-up in Italian. Best made a day ahead for flavors to meld.',
  false
),
(
  '660e8400-e29b-41d4-a716-446655440007',
  '550e8400-e29b-41d4-a716-446655440001',
  'Margherita Pizza',
  'The queen of pizzas with San Marzano tomatoes, fresh mozzarella, and basil.',
  120,
  12,
  'medium',
  4,
  '/images/recipes/margherita-pizza.jpg',
  '[
    {"name": "Pizza dough", "amount": 400, "unit": "g", "notes": "Homemade or store-bought"},
    {"name": "San Marzano tomatoes", "amount": 200, "unit": "g", "notes": "Crushed"},
    {"name": "Fresh mozzarella", "amount": 200, "unit": "g", "notes": "Torn into pieces"},
    {"name": "Fresh basil", "amount": 10, "unit": "leaves", "notes": ""},
    {"name": "Extra virgin olive oil", "amount": 2, "unit": "tbsp", "notes": ""},
    {"name": "Salt", "amount": 1, "unit": "tsp", "notes": "Sea salt"}
  ]',
  '[
    {"step": 1, "description": "Preheat oven to maximum temperature with pizza stone.", "duration": 30},
    {"step": 2, "description": "Stretch dough into 12-inch circle on floured surface.", "duration": 5},
    {"step": 3, "description": "Spread thin layer of tomatoes, season with salt.", "duration": 2},
    {"step": 4, "description": "Add torn mozzarella pieces evenly.", "duration": 2},
    {"step": 5, "description": "Bake for 8-12 minutes until crust is golden.", "duration": 12},
    {"step": 6, "description": "Top with fresh basil and olive oil before serving.", "duration": 1}
  ]',
  'Named after Queen Margherita of Savoy in 1889. The colors represent the Italian flag.',
  false
);

-- Insert recipes for Mama Rosa (Mexican)  
INSERT INTO recipes (id, mama_id, title, description, prep_time, cook_time, difficulty, servings, hero_image_url, ingredients, steps, cultural_notes, offline_available) VALUES
(
  '660e8400-e29b-41d4-a716-446655440003',
  '550e8400-e29b-41d4-a716-446655440002',
  'Authentic Chicken Mole',
  'A complex sauce with over 20 ingredients including chocolate and chiles, served over tender chicken.',
  45,
  90,
  'hard',
  8,
  '/images/recipes/chicken-mole.jpg',
  '[
    {"name": "Chicken", "amount": 1, "unit": "whole", "notes": "Cut into pieces"},
    {"name": "Ancho chiles", "amount": 6, "unit": "pieces", "notes": "Dried, stemmed"},
    {"name": "Mulato chiles", "amount": 4, "unit": "pieces", "notes": "Dried, stemmed"},
    {"name": "Chipotle chiles", "amount": 2, "unit": "pieces", "notes": "Dried"},
    {"name": "Dark chocolate", "amount": 50, "unit": "g", "notes": "70% cocoa"},
    {"name": "Sesame seeds", "amount": 3, "unit": "tbsp", "notes": "Toasted"},
    {"name": "Almonds", "amount": 50, "unit": "g", "notes": "Blanched"},
    {"name": "Raisins", "amount": 30, "unit": "g", "notes": ""},
    {"name": "Onion", "amount": 1, "unit": "medium", "notes": "Quartered"}
  ]',
  '[
    {"step": 1, "description": "Toast chiles in a dry pan until fragrant, soak in hot water.", "duration": 15},
    {"step": 2, "description": "Season and brown chicken pieces in oil.", "duration": 20},
    {"step": 3, "description": "Toast sesame seeds, almonds, and spices separately.", "duration": 10},
    {"step": 4, "description": "Blend soaked chiles with onion and garlic until smooth.", "duration": 10},
    {"step": 5, "description": "Fry chile mixture, add toasted ingredients and chocolate.", "duration": 15},
    {"step": 6, "description": "Simmer chicken in mole sauce for 30 minutes.", "duration": 30}
  ]',
  'Mole is considered the national dish of Mexico. Each family has their own secret recipe passed down through generations.',
  true
),
(
  '660e8400-e29b-41d4-a716-446655440008',
  '550e8400-e29b-41d4-a716-446655440002',
  'Tacos al Pastor',
  'Marinated pork tacos with pineapple, a fusion of Mexican and Lebanese flavors.',
  240,
  15,
  'medium',
  6,
  '/images/recipes/tacos-al-pastor.jpg',
  '[
    {"name": "Pork shoulder", "amount": 1, "unit": "kg", "notes": "Thinly sliced"},
    {"name": "Guajillo chiles", "amount": 4, "unit": "pieces", "notes": "Dried"},
    {"name": "Achiote paste", "amount": 2, "unit": "tbsp", "notes": ""},
    {"name": "Pineapple", "amount": 1, "unit": "small", "notes": "Diced"},
    {"name": "White onion", "amount": 1, "unit": "medium", "notes": "Finely diced"},
    {"name": "Corn tortillas", "amount": 18, "unit": "pieces", "notes": "Small"},
    {"name": "Cilantro", "amount": 1, "unit": "bunch", "notes": "Chopped"},
    {"name": "Lime", "amount": 3, "unit": "pieces", "notes": "Cut into wedges"}
  ]',
  '[
    {"step": 1, "description": "Soak chiles in hot water, blend with achiote and spices.", "duration": 20},
    {"step": 2, "description": "Marinate pork in chile mixture for 4 hours.", "duration": 240},
    {"step": 3, "description": "Cook marinated pork on hot griddle until crispy.", "duration": 12},
    {"step": 4, "description": "Warm tortillas on comal or dry skillet.", "duration": 2},
    {"step": 5, "description": "Assemble tacos with pork, onion, cilantro, and pineapple.", "duration": 5},
    {"step": 6, "description": "Serve with lime wedges and salsa.", "duration": 1}
  ]',
  'Created by Lebanese immigrants in Mexico. Traditionally cooked on a vertical spit called a trompo.',
  true
),
(
  '660e8400-e29b-41d4-a716-446655440009',
  '550e8400-e29b-41d4-a716-446655440002',
  'Chiles Rellenos',
  'Poblano peppers stuffed with cheese, battered and fried until golden.',
  45,
  20,
  'hard',
  4,
  '/images/recipes/chiles-rellenos.jpg',
  '[
    {"name": "Poblano peppers", "amount": 4, "unit": "large", "notes": "Fresh"},
    {"name": "Monterey Jack cheese", "amount": 200, "unit": "g", "notes": "Cut into strips"},
    {"name": "Eggs", "amount": 4, "unit": "large", "notes": "Separated"},
    {"name": "All-purpose flour", "amount": 2, "unit": "tbsp", "notes": ""},
    {"name": "Vegetable oil", "amount": 2, "unit": "cups", "notes": "For frying"},
    {"name": "Tomato sauce", "amount": 1, "unit": "cup", "notes": "Seasoned"}
  ]',
  '[
    {"step": 1, "description": "Roast poblanos over flame until charred all over.", "duration": 10},
    {"step": 2, "description": "Steam in plastic bag, peel off skin carefully.", "duration": 15},
    {"step": 3, "description": "Make small slit, remove seeds, stuff with cheese.", "duration": 10},
    {"step": 4, "description": "Beat egg whites to peaks, fold in yolks and flour.", "duration": 5},
    {"step": 5, "description": "Dip stuffed peppers in batter, fry until golden.", "duration": 15},
    {"step": 6, "description": "Serve immediately with warm tomato sauce.", "duration": 2}
  ]',
  'A classic dish from Puebla. The key is keeping the batter light and airy.',
  false
),
(
  '660e8400-e29b-41d4-a716-446655440010',
  '550e8400-e29b-41d4-a716-446655440002',
  'Pozole Rojo',
  'Traditional Mexican soup with hominy, pork, and red chile broth.',
  30,
  180,
  'medium',
  8,
  '/images/recipes/pozole-rojo.jpg',
  '[
    {"name": "Pork shoulder", "amount": 1, "unit": "kg", "notes": "Cut in chunks"},
    {"name": "Hominy", "amount": 2, "unit": "cans", "notes": "Drained"},
    {"name": "Guajillo chiles", "amount": 6, "unit": "pieces", "notes": "Dried"},
    {"name": "Ancho chiles", "amount": 2, "unit": "pieces", "notes": "Dried"},
    {"name": "White onion", "amount": 1, "unit": "large", "notes": "Quartered"},
    {"name": "Garlic", "amount": 4, "unit": "cloves", "notes": ""},
    {"name": "Oregano", "amount": 1, "unit": "tsp", "notes": "Mexican"},
    {"name": "Cabbage", "amount": 1, "unit": "small", "notes": "Shredded"}
  ]',
  '[
    {"step": 1, "description": "Simmer pork in salted water for 2 hours until tender.", "duration": 120},
    {"step": 2, "description": "Toast chiles, soak in hot water for 20 minutes.", "duration": 25},
    {"step": 3, "description": "Blend chiles with onion, garlic, and soaking liquid.", "duration": 5},
    {"step": 4, "description": "Strain chile mixture, cook in pot for 10 minutes.", "duration": 15},
    {"step": 5, "description": "Add shredded pork, hominy, and pork broth.", "duration": 10},
    {"step": 6, "description": "Simmer 30 minutes, serve with toppings.", "duration": 30}
  ]',
  'Traditionally served on New Years Eve and special occasions. Each region has its own variation.',
  false
),
(
  '660e8400-e29b-41d4-a716-446655440014',
  '550e8400-e29b-41d4-a716-446655440002',
  'Guacamole Tradicional',
  'Authentic Mexican guacamole with perfectly ripe avocados and traditional seasonings.',
  15,
  0,
  'easy',
  4,
  '/images/recipes/guacamole.jpg',
  '[
    {"name": "Avocados", "amount": 4, "unit": "large", "notes": "Perfectly ripe"},
    {"name": "Lime", "amount": 2, "unit": "pieces", "notes": "Juiced"},
    {"name": "White onion", "amount": 1, "unit": "small", "notes": "Finely diced"},
    {"name": "Jalapeño", "amount": 1, "unit": "piece", "notes": "Seeded, minced"},
    {"name": "Cilantro", "amount": 3, "unit": "tbsp", "notes": "Chopped"},
    {"name": "Salt", "amount": 1, "unit": "tsp", "notes": "Sea salt"},
    {"name": "Tomato", "amount": 1, "unit": "medium", "notes": "Diced, optional"}
  ]',
  '[
    {"step": 1, "description": "Cut avocados in half, remove pits, scoop into bowl.", "duration": 3},
    {"step": 2, "description": "Mash avocados with fork, leaving some chunks.", "duration": 2},
    {"step": 3, "description": "Add lime juice immediately to prevent browning.", "duration": 1},
    {"step": 4, "description": "Fold in onion, jalapeño, and cilantro.", "duration": 3},
    {"step": 5, "description": "Season with salt, taste and adjust.", "duration": 2},
    {"step": 6, "description": "Serve immediately with tortilla chips.", "duration": 1}
  ]',
  'The secret is using perfectly ripe avocados and adding lime juice immediately. Some regions add tomato, others don''t.',
  true
);

-- Insert recipes for Chef Kenji (Japanese)
INSERT INTO recipes (id, mama_id, title, description, prep_time, cook_time, difficulty, servings, hero_image_url, ingredients, steps, cultural_notes, offline_available) VALUES
(
  '660e8400-e29b-41d4-a716-446655440004',
  '550e8400-e29b-41d4-a716-446655440003',
  'Perfect Sushi Rice',
  'The foundation of great sushi - properly seasoned rice with the perfect texture and temperature.',
  10,
  25,
  'medium',
  4,
  '/images/recipes/sushi-rice.jpg',
  '[
    {"name": "Sushi rice", "amount": 300, "unit": "g", "notes": "Short grain"},
    {"name": "Water", "amount": 360, "unit": "ml", "notes": "Filtered"},
    {"name": "Rice vinegar", "amount": 60, "unit": "ml", "notes": ""},
    {"name": "Sugar", "amount": 2, "unit": "tbsp", "notes": ""},
    {"name": "Salt", "amount": 1, "unit": "tsp", "notes": "Sea salt"}
  ]',
  '[
    {"step": 1, "description": "Rinse rice until water runs clear, let drain for 30 minutes.", "duration": 35},
    {"step": 2, "description": "Cook rice with water in rice cooker or pot.", "duration": 20},
    {"step": 3, "description": "Mix vinegar, sugar, and salt until dissolved.", "duration": 2},
    {"step": 4, "description": "Transfer hot rice to wooden bowl, add vinegar mixture.", "duration": 3},
    {"step": 5, "description": "Mix gently with cutting motion, fan to cool to body temperature.", "duration": 10}
  ]',
  'Sushi rice should be at body temperature when served. The vinegar mixture is called sushi-zu.',
  true
),
(
  '660e8400-e29b-41d4-a716-446655440011',
  '550e8400-e29b-41d4-a716-446655440003',
  'Chicken Teriyaki',
  'Glazed chicken thighs with a sweet and savory teriyaki sauce.',
  15,
  25,
  'easy',
  4,
  '/images/recipes/chicken-teriyaki.jpg',
  '[
    {"name": "Chicken thighs", "amount": 8, "unit": "pieces", "notes": "Bone-in, skin-on"},
    {"name": "Soy sauce", "amount": 60, "unit": "ml", "notes": ""},
    {"name": "Mirin", "amount": 60, "unit": "ml", "notes": ""},
    {"name": "Sake", "amount": 30, "unit": "ml", "notes": ""},
    {"name": "Sugar", "amount": 2, "unit": "tbsp", "notes": ""},
    {"name": "Ginger", "amount": 1, "unit": "piece", "notes": "2cm, grated"},
    {"name": "Vegetable oil", "amount": 1, "unit": "tbsp", "notes": ""}
  ]',
  '[
    {"step": 1, "description": "Mix soy sauce, mirin, sake, sugar, and ginger for sauce.", "duration": 3},
    {"step": 2, "description": "Heat oil in large skillet over medium-high heat.", "duration": 2},
    {"step": 3, "description": "Cook chicken skin-side down for 7 minutes until golden.", "duration": 7},
    {"step": 4, "description": "Flip chicken, cook 5 minutes more.", "duration": 5},
    {"step": 5, "description": "Add teriyaki sauce, simmer until glazed.", "duration": 8},
    {"step": 6, "description": "Serve over rice with steamed vegetables.", "duration": 2}
  ]',
  'Teriyaki means grilled and glazed. The sauce should coat the chicken with a glossy finish.',
  true
),
(
  '660e8400-e29b-41d4-a716-446655440012',
  '550e8400-e29b-41d4-a716-446655440003',
  'Miso Soup',
  'Traditional Japanese soup with tofu, wakame, and green onions.',
  10,
  10,
  'easy',
  4,
  '/images/recipes/miso-soup.jpg',
  '[
    {"name": "Dashi stock", "amount": 800, "unit": "ml", "notes": "Instant or homemade"},
    {"name": "Miso paste", "amount": 3, "unit": "tbsp", "notes": "White or red"},
    {"name": "Silken tofu", "amount": 200, "unit": "g", "notes": "Cubed"},
    {"name": "Wakame seaweed", "amount": 2, "unit": "tbsp", "notes": "Dried"},
    {"name": "Green onions", "amount": 2, "unit": "stalks", "notes": "Chopped"}
  ]',
  '[
    {"step": 1, "description": "Soak wakame in water for 5 minutes until rehydrated.", "duration": 5},
    {"step": 2, "description": "Heat dashi stock in saucepan over medium heat.", "duration": 3},
    {"step": 3, "description": "Whisk miso paste with small amount of hot dashi.", "duration": 2},
    {"step": 4, "description": "Add miso mixture back to pot, do not boil.", "duration": 2},
    {"step": 5, "description": "Add tofu and wakame, heat through gently.", "duration": 3},
    {"step": 6, "description": "Serve immediately garnished with green onions.", "duration": 1}
  ]',
  'Miso soup is served with almost every Japanese meal. Never boil after adding miso.',
  true
),
(
  '660e8400-e29b-41d4-a716-446655440013',
  '550e8400-e29b-41d4-a716-446655440003',
  'Beef Ramen',
  'Rich, flavorful ramen with tender beef and perfectly cooked noodles.',
  30,
  45,
  'medium',
  4,
  '/images/recipes/beef-ramen.jpg',
  '[
    {"name": "Beef chuck", "amount": 500, "unit": "g", "notes": "Cut in strips"},
    {"name": "Ramen noodles", "amount": 4, "unit": "portions", "notes": "Fresh or dried"},
    {"name": "Beef stock", "amount": 1, "unit": "L", "notes": "Rich"},
    {"name": "Soy sauce", "amount": 4, "unit": "tbsp", "notes": ""},
    {"name": "Miso paste", "amount": 2, "unit": "tbsp", "notes": "Red"},
    {"name": "Eggs", "amount": 4, "unit": "large", "notes": "For soft-boiled"},
    {"name": "Green onions", "amount": 4, "unit": "stalks", "notes": "Chopped"},
    {"name": "Nori sheets", "amount": 2, "unit": "pieces", "notes": "Cut in strips"}
  ]',
  '[
    {"step": 1, "description": "Marinate beef in soy sauce for 20 minutes.", "duration": 20},
    {"step": 2, "description": "Soft-boil eggs for 6 minutes, cool in ice water.", "duration": 10},
    {"step": 3, "description": "Heat stock, whisk in miso paste until smooth.", "duration": 5},
    {"step": 4, "description": "Cook marinated beef until just done.", "duration": 8},
    {"step": 5, "description": "Cook ramen noodles according to package directions.", "duration": 3},
    {"step": 6, "description": "Assemble bowls with noodles, beef, eggs, and garnishes.", "duration": 5}
  ]',
  'Ramen is an art form in Japan. The broth should be rich and the noodles have perfect texture.',
  false
),
(
  '660e8400-e29b-41d4-a716-446655440015',
  '550e8400-e29b-41d4-a716-446655440003',
  'Tempura Vegetables',
  'Light, crispy battered vegetables fried to golden perfection.',
  20,
  15,
  'medium',
  4,
  '/images/recipes/tempura.jpg',
  '[
    {"name": "Mixed vegetables", "amount": 500, "unit": "g", "notes": "Sweet potato, eggplant, bell pepper"},
    {"name": "Tempura flour", "amount": 200, "unit": "g", "notes": "Or all-purpose flour"},
    {"name": "Ice water", "amount": 300, "unit": "ml", "notes": "Very cold"},
    {"name": "Egg yolk", "amount": 1, "unit": "large", "notes": ""},
    {"name": "Vegetable oil", "amount": 4, "unit": "cups", "notes": "For deep frying"},
    {"name": "Dashi", "amount": 200, "unit": "ml", "notes": "For dipping sauce"},
    {"name": "Soy sauce", "amount": 2, "unit": "tbsp", "notes": ""},
    {"name": "Mirin", "amount": 1, "unit": "tbsp", "notes": ""}
  ]',
  '[
    {"step": 1, "description": "Cut vegetables into bite-sized pieces.", "duration": 10},
    {"step": 2, "description": "Heat oil to 170°C in deep pot.", "duration": 5},
    {"step": 3, "description": "Mix egg yolk with ice water, add flour, stir minimally.", "duration": 3},
    {"step": 4, "description": "Dip vegetables in batter, fry until golden.", "duration": 12},
    {"step": 5, "description": "Drain on paper towels, serve immediately.", "duration": 2},
    {"step": 6, "description": "Serve with dipping sauce made from dashi, soy sauce, and mirin.", "duration": 2}
  ]',
  'The secret to light tempura is ice-cold water and minimal mixing. Lumps in the batter are perfectly fine.',
  false
); 