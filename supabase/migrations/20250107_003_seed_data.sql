-- Insert 3 Mamas with different cuisines and personalities
INSERT INTO mamas (id, name, cuisine_type, description, personality_traits, signature_dish, avatar_url, voice_id, accent_description, color_primary, color_secondary) VALUES
(
  '550e8400-e29b-41d4-a716-446655440001',
  'Nonna Lucia',
  'italian',
  'A warm-hearted Italian grandmother from Tuscany who has been cooking for her family for over 50 years. She believes that food is love made visible and that every meal should bring people together.',
  ARRAY['warm', 'patient', 'storytelling', 'traditional', 'nurturing'],
  'Homemade Ragu Bolognese',
  '/images/mamas/nonna-lucia.jpg',
  'lucia_voice_id',
  'Gentle Italian accent with melodic intonation',
  '#8B4513',
  '#D2B48C'
),
(
  '550e8400-e29b-41d4-a716-446655440002',
  'Abuela Rosa',
  'mexican',
  'A vibrant Mexican cook from Oaxaca who learned traditional recipes from her grandmother. She is passionate about preserving authentic flavors and teaching the cultural significance behind each dish.',
  ARRAY['energetic', 'passionate', 'cultural', 'spicy', 'festive'],
  'Mole Negro Oaxaqueño',
  '/images/mamas/abuela-rosa.jpg',
  'rosa_voice_id',
  'Warm Mexican accent with rhythmic speech patterns',
  '#C41E3A',
  '#FF6B35'
),
(
  '550e8400-e29b-41d4-a716-446655440003',
  'Mae Malai',
  'thai',
  'A master of Thai cuisine who learned traditional techniques from her grandmother in Bangkok. She combines authentic flavors with mindful preparation, emphasizing the importance of fresh ingredients and balanced spices.',
  ARRAY['precise', 'mindful', 'seasonal', 'gentle', 'respectful'],
  'Green Curry with Fresh Herbs',
  '/images/mamas/mae-malai.jpg',
  'malai_voice_id',
  'Calm Thai accent with deliberate pacing',
  '#2E8B57',
  '#90EE90'
);

-- Insert recipes for Nonna Lucia (Italian)
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

-- Insert recipes for Abuela Rosa (Mexican)  
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

-- Insert recipes for Mae Malai (Thai)
INSERT INTO recipes (id, mama_id, title, description, prep_time, cook_time, difficulty, servings, hero_image_url, ingredients, steps, cultural_notes, offline_available) VALUES
(
  '660e8400-e29b-41d4-a716-446655440004',
  '550e8400-e29b-41d4-a716-446655440003',
  'Authentic Pad Thai',
  'Classic Thai stir-fried noodles with tamarind, fish sauce, and fresh ingredients - the perfect balance of sweet, sour, and savory.',
  20,
  15,
  'medium',
  4,
  '/images/recipes/pad-thai.jpg',
  '[
    {"name": "Rice noodles", "amount": 400, "unit": "g", "notes": "Soaked until soft"},
    {"name": "Shrimp", "amount": 200, "unit": "g", "notes": "Peeled and deveined"},
    {"name": "Tamarind paste", "amount": 3, "unit": "tbsp", "notes": "Authentic flavor"},
    {"name": "Fish sauce", "amount": 2, "unit": "tbsp", "notes": "High quality"},
    {"name": "Palm sugar", "amount": 2, "unit": "tbsp", "notes": "Or brown sugar"},
    {"name": "Bean sprouts", "amount": 200, "unit": "g", "notes": "Fresh"},
    {"name": "Eggs", "amount": 2, "unit": "large", "notes": ""},
    {"name": "Peanuts", "amount": 50, "unit": "g", "notes": "Crushed"}
  ]',
  '[
    {"step": 1, "description": "Soak rice noodles in warm water until soft.", "duration": 10},
    {"step": 2, "description": "Heat oil in wok over high heat.", "duration": 2},
    {"step": 3, "description": "Add shrimp and cook until pink.", "duration": 3},
    {"step": 4, "description": "Push to one side, scramble eggs.", "duration": 2},
    {"step": 5, "description": "Add noodles and sauce mixture.", "duration": 5},
    {"step": 6, "description": "Toss with bean sprouts and peanuts.", "duration": 3}
  ]',
  'Pad Thai is Thailand''s national dish, balancing sweet, sour, and salty flavors perfectly.',
  true
),
(
  '660e8400-e29b-41d4-a716-446655440011',
  '550e8400-e29b-41d4-a716-446655440003',
  'Green Curry with Coconut',
  'Aromatic Thai curry with fresh green chilies, coconut milk, and fragrant herbs.',
  25,
  30,
  'medium',
  4,
  '/images/recipes/green-curry.jpg',
  '[
    {"name": "Green curry paste", "amount": 3, "unit": "tbsp", "notes": "Fresh or store-bought"},
    {"name": "Coconut milk", "amount": 400, "unit": "ml", "notes": "Full-fat"},
    {"name": "Chicken thigh", "amount": 500, "unit": "g", "notes": "Cut into pieces"},
    {"name": "Thai eggplant", "amount": 200, "unit": "g", "notes": "Quartered"},
    {"name": "Thai basil", "amount": 1, "unit": "bunch", "notes": "Fresh leaves"},
    {"name": "Fish sauce", "amount": 2, "unit": "tbsp", "notes": ""},
    {"name": "Palm sugar", "amount": 1, "unit": "tbsp", "notes": ""},
    {"name": "Thai chilies", "amount": 2, "unit": "pieces", "notes": "Sliced"}
  ]',
  '[
    {"step": 1, "description": "Heat thick coconut milk, fry curry paste until fragrant.", "duration": 5},
    {"step": 2, "description": "Add chicken, cook until just done.", "duration": 8},
    {"step": 3, "description": "Add remaining coconut milk and eggplant.", "duration": 5},
    {"step": 4, "description": "Season with fish sauce and palm sugar.", "duration": 2},
    {"step": 5, "description": "Simmer until vegetables are tender.", "duration": 10},
    {"step": 6, "description": "Garnish with basil and chilies.", "duration": 2}
  ]',
  'Green curry is one of the most popular Thai dishes. The key is balancing the heat with sweetness.',
  true
),
(
  '660e8400-e29b-41d4-a716-446655440012',
  '550e8400-e29b-41d4-a716-446655440003',
  'Tom Yum Goong',
  'Famous Thai hot and sour soup with shrimp, lemongrass, and lime leaves.',
  15,
  20,
  'easy',
  4,
  '/images/recipes/tom-yum.jpg',
  '[
    {"name": "Shrimp", "amount": 300, "unit": "g", "notes": "Large, peeled"},
    {"name": "Lemongrass", "amount": 2, "unit": "stalks", "notes": "Bruised"},
    {"name": "Galangal", "amount": 3, "unit": "slices", "notes": "Fresh"},
    {"name": "Lime leaves", "amount": 4, "unit": "pieces", "notes": "Torn"},
    {"name": "Thai chilies", "amount": 3, "unit": "pieces", "notes": "Crushed"},
    {"name": "Mushrooms", "amount": 100, "unit": "g", "notes": "Sliced"},
    {"name": "Lime juice", "amount": 3, "unit": "tbsp", "notes": "Fresh"},
    {"name": "Fish sauce", "amount": 2, "unit": "tbsp", "notes": ""}
  ]',
  '[
    {"step": 1, "description": "Bring water to boil with lemongrass, galangal, and lime leaves.", "duration": 8},
    {"step": 2, "description": "Add mushrooms and chilies, simmer 3 minutes.", "duration": 3},
    {"step": 3, "description": "Add shrimp, cook until pink.", "duration": 3},
    {"step": 4, "description": "Remove from heat, add lime juice and fish sauce.", "duration": 2},
    {"step": 5, "description": "Taste and adjust seasoning.", "duration": 2},
    {"step": 6, "description": "Serve immediately while hot.", "duration": 1}
  ]',
  'Tom Yum is the soul of Thai cuisine - hot, sour, and incredibly aromatic.',
  true
),
(
  '660e8400-e29b-41d4-a716-446655440013',
  '550e8400-e29b-41d4-a716-446655440003',
  'Thai Mango Sticky Rice',
  'Traditional Thai dessert with sweet coconut sticky rice and fresh mango.',
  30,
  45,
  'easy',
  6,
  '/images/recipes/mango-sticky-rice.jpg',
  '[
    {"name": "Glutinous rice", "amount": 300, "unit": "g", "notes": "Soaked overnight"},
    {"name": "Coconut milk", "amount": 400, "unit": "ml", "notes": "Thick"},
    {"name": "Sugar", "amount": 100, "unit": "g", "notes": "Palm or white"},
    {"name": "Salt", "amount": 1, "unit": "tsp", "notes": "Pinch"},
    {"name": "Ripe mangoes", "amount": 2, "unit": "large", "notes": "Sliced"},
    {"name": "Toasted sesame seeds", "amount": 1, "unit": "tbsp", "notes": "For garnish"}
  ]',
  '[
    {"step": 1, "description": "Steam soaked rice for 25 minutes until tender.", "duration": 25},
    {"step": 2, "description": "Heat coconut milk with sugar and salt until dissolved.", "duration": 5},
    {"step": 3, "description": "Mix hot rice with half the coconut mixture.", "duration": 5},
    {"step": 4, "description": "Let rice absorb coconut milk for 10 minutes.", "duration": 10},
    {"step": 5, "description": "Serve with sliced mango and remaining coconut sauce.", "duration": 3},
    {"step": 6, "description": "Garnish with sesame seeds.", "duration": 1}
  ]',
  'This beloved Thai dessert is perfect for hot weather and represents the harmony of flavors.',
  false
),
(
  '660e8400-e29b-41d4-a716-446655440015',
  '550e8400-e29b-41d4-a716-446655440003',
  'Som Tam (Papaya Salad)',
  'Fresh and spicy Thai salad with green papaya, tomatoes, and lime dressing.',
  20,
  0,
  'easy',
  4,
  '/images/recipes/som-tam.jpg',
  '[
    {"name": "Green papaya", "amount": 1, "unit": "medium", "notes": "Julienned"},
    {"name": "Cherry tomatoes", "amount": 100, "unit": "g", "notes": "Halved"},
    {"name": "Green beans", "amount": 50, "unit": "g", "notes": "Cut into pieces"},
    {"name": "Thai chilies", "amount": 3, "unit": "pieces", "notes": "To taste"},
    {"name": "Garlic", "amount": 2, "unit": "cloves", "notes": ""},
    {"name": "Lime juice", "amount": 3, "unit": "tbsp", "notes": "Fresh"},
    {"name": "Fish sauce", "amount": 2, "unit": "tbsp", "notes": ""},
    {"name": "Palm sugar", "amount": 1, "unit": "tbsp", "notes": ""},
    {"name": "Peanuts", "amount": 30, "unit": "g", "notes": "Roasted"}
  ]',
  '[
    {"step": 1, "description": "Pound chilies and garlic in mortar and pestle.", "duration": 3},
    {"step": 2, "description": "Add green beans and tomatoes, pound lightly.", "duration": 2},
    {"step": 3, "description": "Add papaya and pound gently to bruise.", "duration": 3},
    {"step": 4, "description": "Mix in lime juice, fish sauce, and palm sugar.", "duration": 2},
    {"step": 5, "description": "Add peanuts and toss everything together.", "duration": 2},
    {"step": 6, "description": "Taste and adjust seasoning, serve immediately.", "duration": 2}
  ]',
  'Som Tam is a refreshing salad that perfectly balances sweet, sour, salty, and spicy flavors.',
  true
); 