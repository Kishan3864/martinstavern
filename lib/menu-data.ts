/**
 * Menu content for Martin's Tavern — transcribed from the restaurant's own
 * current menus (Lunch/Brunch, Dinner, Wines & Beers, Cocktails/Dessert/Hot
 * Beverages, and Champagne). Categories mirror the live site exactly.
 *
 * Prices are stored as display strings ("13.95", "Market Price", "15 / 60")
 * and rendered verbatim — no currency symbol is auto-prepended.
 */

export interface MenuItem {
  name: string;
  description?: string;
  /** Display string. Leave empty to render the name with no price/leader. */
  price: string;
  /** Optional tag, e.g. "Signature", "Market". */
  tag?: string;
}

export interface MenuSection {
  title: string;
  note?: string;
  items: MenuItem[];
}

export interface Menu {
  id: string;
  label: string;
  /** Short line shown under the tab heading. */
  blurb: string;
  sections: MenuSection[];
}

export const MENUS: Menu[] = [
  // ===========================================================================
  // LUNCH / BRUNCH
  // ===========================================================================
  {
    id: "lunch-brunch",
    label: "Lunch / Brunch",
    blurb: "Soups, salads, sandwiches, brunch favorites & comfort foods.",
    sections: [
      {
        title: "Soups & Stews",
        items: [
          {
            name: "Traditional Oyster Stew",
            description:
              "“Made to order, has to be the BEST on the East Coast!” Large select oysters flash sautéed, set in a silky-smooth broth of fresh cream, milk, white wine and spices. Topped with clarified butter and served with house-made garlic crostini",
            price: "Market Price",
          },
          {
            name: "New England Clam Chowder",
            description: "Served traditionally with oyster crackers",
            price: "13.95",
          },
          {
            name: "French Onion Soup",
            description:
              "Rated the BEST in DC! Topped with a baguette croûton and melted provolone cheese",
            price: "12.95",
          },
          {
            name: "Billy’s Beef Chili",
            description:
              "Topped with tomatoes, onions and Cheddar cheese, served with crispy tortilla chips",
            price: "13.95",
          },
          {
            name: "Colonial Brunswick Stew",
            description:
              "Original recipe of chicken and fresh vegetables slow cooked for hours",
            price: "14.95",
          },
          { name: "Chef’s Daily Soup Special", price: "11.95" },
        ],
      },
      {
        title: "Entrée Salads",
        note: "Add grilled chicken, salmon or shrimp to any salad for an additional charge",
        items: [
          {
            name: "Martin’s House Salad",
            description:
              "Mixed baby greens tossed with sliced cucumber, shredded carrots, tomatoes, dried cranberries topped with house-made croutons and balsamic vinaigrette; add goat cheese for 2.00",
            price: "9.95 / 12.95",
          },
          {
            name: "Harvest Beets",
            description:
              "Roasted red and golden beets, topped with microgreens and goat cheese crumbles drizzled with a light champagne vinaigrette",
            price: "12.95",
          },
          {
            name: "Caesar Salad",
            description:
              "Hearts of romaine tossed in Chef’s own Caesar dressing topped with shaved Parmesan cheese and house-made croûtons",
            price: "10.95 / 13.95",
          },
          {
            name: "Ahi Tuna Salad",
            description:
              "Seared sesame encrusted Ahi Tuna, over mixed greens, topped with fried shallots, avocado, tomatoes, carrots, cucumbers and house-soy dressing",
            price: "27.95",
          },
          {
            name: "Marinated Grilled Sirloin Steak",
            description:
              "With sautéed Cremini mushrooms, Heirloom cherry tomatoes, cucumbers and bleu cheese crumbles over crisp romaine, garnished with fried shallots and served with bleu cheese dressing",
            price: "28.95",
          },
          {
            name: "Ty Cobb Salad",
            description:
              "Grilled chicken, fresh tomatoes, avocado, hard-boiled egg, Applewood smoked bacon and crumbled blue cheese over mixed greens, topped with fried shallots and served with ranch dressing",
            price: "23.95",
          },
        ],
      },
      {
        title: "Appetizers",
        items: [
          {
            name: "Welsh Rarebit",
            description:
              "A classic sauce of Cheddar cheese, heavy cream, special blend of spices and Vienna Lager served with toast points",
            price: "12.95",
          },
          {
            name: "Jumbo Shrimp – BBQ or Cocktail",
            description:
              "Four jumbo shrimp – choose your favorite preparation! Grilled dry rub BBQ with sweet chili sauce or classic shrimp cocktail with homemade cocktail sauce",
            price: "17.95",
          },
          {
            name: "Petite Crab Cakes",
            description:
              "Flash fried. A bite-sized version of our signature dish, served with mandarin–orange aioli",
            price: "Market Price",
          },
          {
            name: "Seared Ahi Tuna",
            description: "Encrusted with sesame seeds with wasabi cream and house soy dressing",
            price: "18.95",
          },
          {
            name: "Angry Mussels",
            description:
              "PEI mussels simmered in a Fra Diavolo sauce with jalapeños and shallots served with rosemary focaccia",
            price: "18.95",
          },
          {
            name: "Calamari & Shrimp",
            description: "Golden fried with house-made marinara and mandarin-orange aioli",
            price: "18.95",
          },
          {
            name: "Chesapeake Fried Oysters",
            description:
              "Five select jumbo oysters fried to a golden brown, served atop baby arugula with Chef’s Special Remoulade",
            price: "Market Price",
          },
          {
            name: "Fried Green Tomatoes",
            description: "A southern favorite, made to order! With Chef’s Special Remoulade",
            price: "12.95",
          },
          {
            name: "Onion Ring Loaf",
            description: "Thin sliced Vidalia onions lightly dredged in seasoned flour and fried to a golden brown",
            price: "13.95",
          },
          {
            name: "Potato Skins",
            description:
              "Topped with shredded Cheddar cheese, chopped scallions, Applewood smoked bacon and sliced jalapeños. Served with sour cream",
            price: "12.95",
          },
          {
            name: "Grilled Hawaiian Chicken Skewers",
            description: "Marinated chicken, onions, peppers and pineapple in a teriyaki glaze",
            price: "12.95",
          },
          {
            name: "Chicken Tenders Made to Order",
            description: "Lightly dredged in seasoned flour, flash fried, served with French fries and honey mustard",
            price: "14.95",
          },
        ],
      },
      {
        title: "Sandwiches",
        note: "All our meats, eggs and poultry are sourced locally in a free-range environment. Served with house-made French fries or Sweet Potato waffle fries. Gluten-free bun available upon request for an additional charge.",
        items: [
          {
            name: "Breakfast Sandwich",
            description:
              "Two Liberty Delight Farm cage-free eggs scrambled, andouille sausage, grilled onions and Cheddar cheese with lettuce and tomato served on a toasted bagel with fresh fruit",
            price: "14.95",
          },
          {
            name: "Classic Style Reuben",
            description:
              "Irish corned beef topped with sauerkraut and melted Swiss cheese, served on toasted marble rye with thousand island dressing",
            price: "18.95",
          },
          {
            name: "Chicken Club Sandwich",
            description:
              "Grilled or Southern fried chicken with Applewood smoked bacon, lettuce, tomato, melted Cheddar cheese and grilled onions served on a toasted brioche bun with ranch dressing on the side",
            price: "18.95",
          },
          {
            name: "Prime Rib & Cheese Sandwich",
            description:
              "Thinly sliced slow roasted prime rib with sautéed onions, green peppers and melted provolone cheese on grilled Ciabatta bread. Served with horseradish cream sauce on the side",
            price: "20.95",
          },
          {
            name: "Tavern Burger",
            description: "Locally Raised Grass-Fed Angus Beef. On toasted brioche with lettuce, tomato and onion, served with a kosher dill pickle",
            price: "20.95",
          },
          {
            name: "Free-Range Bison Burger",
            description: "“The Healthy Choice.” On toasted brioche with lettuce, tomato and onion, served with a kosher dill pickle",
            price: "21.95",
          },
          {
            name: "“Where’s the Beef” – Meatless Burger",
            description:
              "On toasted brioche with lettuce, tomato and onion, served with a kosher dill pickle. Add sautéed mushrooms, caramelized onions or jalapeños; add cheese or Applewood smoked bacon 2.00 each; add fried egg or avocado 3.00 each",
            price: "22.95",
          },
          {
            name: "Marinated Ahi Tuna Steak Sandwich",
            description:
              "Seared to your specification atop baby arugula, cucumber, avocado, hoisin sauce and wasabi aioli on the side. Served on toasted sourdough bread",
            price: "23.95",
          },
          {
            name: "Maryland Style Crab Cake Sandwich",
            description: "Our famous Lump crab cake sautéed, served with Cole slaw, on a toasted potato roll",
            price: "Market Price",
          },
          {
            name: "New England Lobster Roll",
            description:
              "Fresh poached Maine lobster with shallots, celery and red peppers tossed together with Chef’s special herb mayo, loaded into a New England style roll",
            price: "Market Price",
          },
        ],
      },
      {
        title: "Brunch",
        items: [
          {
            name: "Early Riser",
            description:
              "Eggs any style with your choice of ham, Applewood smoked bacon or sausage; served with your choice of toast, home fries and coffee",
            price: "18.95",
          },
          {
            name: "Challah French Toast",
            description: "Choice of ham, Applewood smoked bacon or sausage link",
            price: "13.95 / with meat 16.95",
          },
          {
            name: "Buttermilk Pancakes",
            description: "Choice of ham, Applewood smoked bacon or sausage link",
            price: "13.95 / with meat 16.95",
          },
          {
            name: "Pumpkin Pancakes",
            description: "Choice of ham, Applewood smoked bacon or sausage link",
            price: "with choice of meat 17.95",
          },
          {
            name: "Little Bit of Chicken Fried",
            description:
              "Fried chicken topped with fried egg, sharp Cheddar, sausage gravy, candy onions, bacon bits and hot honey on a buttered biscuit",
            price: "18.95",
          },
          {
            name: "Martin’s Chesapeake Benedict",
            description:
              "Our famous petite crab cakes over fried green tomatoes, topped with poached eggs and house made hollandaise, served with home fries and seasonal fresh fruit",
            price: "Market Price",
            tag: "Signature",
          },
          {
            name: "Martin’s Traditional Eggs Benedict",
            description:
              "Split English muffin topped with shaved country ham, two poached eggs and house made hollandaise, served with home fries and seasonal fresh fruit",
            price: "18.95",
          },
          {
            name: "Smoked Salmon and Bagel",
            description: "Served with traditional accoutrements and cream cheese",
            price: "17.95",
          },
          {
            name: "Steak and Eggs",
            description:
              "Petite NY strip steak topped with truffle butter, with two eggs any style, served with your choice of toast and home fries",
            price: "24.95",
          },
          {
            name: "Corned Beef Hash",
            description:
              "Decadence at its best! Traditionally prepared on our flat top and topped with two poached eggs served with marble rye toast",
            price: "17.95",
          },
          {
            name: "Avocado Toast",
            description:
              "Atlantic smoked salmon, heirloom tomatoes, a poached egg, arugula tossed in citrus vinaigrette, honey, avocado dill spread over wholegrain toast",
            price: "18.95",
          },
          {
            name: "Skillet Scrambler",
            description:
              "A light layer of salsa, home fries, bacon, avocado, shredded Cheddar, onions, green and red peppers, finished with two eggs your way",
            price: "17.95",
          },
          {
            name: "Jumping Bean Burrito",
            description:
              "Diced filet mignon, scrambled eggs, beans, romaine lettuce, Cheddar cheese, topped with guajillo sauce, crème fraiche, a sunny side up egg, and pico de gallo",
            price: "19.95",
          },
          {
            name: "Martin’s Biscuits and Gravy",
            description: "Creamy sausage gravy served over two homemade buttered biscuits",
            price: "12.95",
          },
          {
            name: "Your Way Omelette",
            description:
              "Pick three ingredients to make your perfect omelette, served with home fries, fresh fruit and toast. Options: mushrooms, spinach, peppers, onions, jalapeños, Cheddar, American, Swiss, Provolone, ham, Applewood bacon, sausage; avocado or goat cheese for an additional 3.50",
            price: "18.95",
          },
        ],
      },
      {
        title: "Comfort Foods",
        items: [
          {
            name: "Martin’s Delight — Our Own Hot Brown",
            description:
              "Created in the Brown Hotel in Kentucky, perfected by Martin’s Tavern! Sliced oven roasted turkey over toast, smothered in our homemade rarebit sauce topped with sliced tomato, Applewood smoked bacon and Parmesan cheese, broiled in a cast iron skillet",
            price: "23.95",
            tag: "Signature",
          },
          {
            name: "Grandma Martin’s Meatloaf",
            description:
              "Our version of mom’s favorite topped with fresh mushroom gravy. Served with garlic mashed potatoes and broccoli",
            price: "25.95",
          },
          {
            name: "Slow Roasted Pot Roast",
            description:
              "A generous portion of tender beef with celery, carrots, onions and new potatoes; with horseradish upon request",
            price: "28.95",
          },
          {
            name: "Fresh Calves Liver",
            description:
              "Hand cut calves liver over garlic mashed potatoes, green beans and caramelized onion and Applewood smoked bacon",
            price: "29.95",
          },
          {
            name: "Shepherd’s Pie… Billy’s Own Recipe!",
            description:
              "Fresh ground local lamb, peas, carrots, onions, garlic and rosemary infused with a bit of Guinness, topped with garlic mashed potatoes and Cheddar cheese",
            price: "26.95",
          },
          {
            name: "The Tavern Treat",
            description:
              "Toasted English muffin loaded with sautéed Lump crab meat and sliced fresh mushrooms topped with house-made Hollandaise sauce served with sautéed seasonal vegetables",
            price: "Market Price",
          },
          {
            name: "Chicken Milanese",
            description:
              "Chicken scaloppini lightly breaded then pan seared served over fettuccine tossed with house-made pesto, Heirloom cherry tomatoes and topped with Parmesan cheese",
            price: "29.95",
          },
          {
            name: "Fish & Chips",
            description:
              "Fresh Icelandic Cod fillet dredged in our special flour blend fried to a crispy golden brown served with French fries, Cole slaw and house-made remoulade",
            price: "29.95",
          },
          {
            name: "Shrimp Fettucine and Lobster Cream",
            description:
              "Shrimp sautéed with diced tomatoes, garlic, white pepper and lobster cream tossed with fettucine then sprinkled with Parmesan cheese",
            price: "30.95",
          },
          {
            name: "Atlantic Salmon Fillet",
            description:
              "Grilled, then topped with sweet chili sauce served with fresh green beans and Basmati rice",
            price: "35.95",
          },
        ],
      },
      {
        title: "Sides",
        note: "$8 each",
        items: [
          { name: "Sautéed Spinach", price: "" },
          { name: "Asparagus", price: "" },
          { name: "Green Beans", price: "" },
          { name: "Broccoli", price: "" },
          { name: "Baked Potato", price: "" },
          { name: "Mac and Cheese", price: "" },
          { name: "Garlic Mashed Potatoes", price: "" },
          { name: "Cole Slaw", price: "" },
          { name: "Basmati Rice", price: "" },
          { name: "French Fries", price: "" },
          { name: "Sweet Potato Waffle Fries", price: "" },
        ],
      },
      {
        title: "Breakfast Sides",
        items: [
          { name: "Single Egg", price: "3.00" },
          { name: "Home Fries", price: "6.00" },
          { name: "Biscuits", price: "3.50" },
          { name: "Fruit Cup", price: "5.95" },
          { name: "Ham", price: "6.00" },
          { name: "Bacon", price: "6.00" },
          { name: "Sausage", price: "6.00" },
          { name: "Corned Beef Hash", price: "8.00" },
        ],
      },
    ],
  },

  // ===========================================================================
  // DINNER
  // ===========================================================================
  {
    id: "dinner",
    label: "Dinner",
    blurb: "Soups, salads, comfort foods & Martin’s Specialties.",
    sections: [
      {
        title: "Soups & Stews",
        items: [
          {
            name: "Traditional Oyster Stew",
            description:
              "“Made to order, has to be the BEST on the East Coast!” Large select oysters flash sautéed, set in a silky-smooth broth of fresh cream, milk, white wine and spices. Topped with clarified butter and served with house-made garlic crostini",
            price: "Market Price",
          },
          {
            name: "New England Clam Chowder",
            description: "Served traditionally with oyster crackers",
            price: "13.95",
          },
          {
            name: "French Onion Soup",
            description:
              "Rated the BEST in DC! Topped with a baguette croûton and melted provolone cheese",
            price: "12.95",
          },
          {
            name: "Billy’s Beef Chili",
            description:
              "Topped with tomatoes, onions and Cheddar cheese served with crispy tortilla chips",
            price: "13.95",
          },
          {
            name: "Colonial Brunswick Stew",
            description: "Original recipe of chicken and fresh vegetables slow cooked for hours",
            price: "14.95",
          },
          { name: "Chef’s Daily Soup Special", price: "11.95" },
        ],
      },
      {
        title: "Entrée Salads",
        note: "Add grilled chicken, salmon or shrimp to any salad for an additional charge",
        items: [
          {
            name: "Martin’s House Salad",
            description:
              "Mixed baby greens tossed with sliced cucumber, shredded carrots, tomatoes, dried cranberries topped with house-made croutons and balsamic vinaigrette; add goat cheese for 2.00",
            price: "9.95 / 12.95",
          },
          {
            name: "Harvest Beets",
            description:
              "Roasted red and golden beets, topped with microgreens and goat cheese crumbles drizzled with a light champagne vinaigrette",
            price: "12.95",
          },
          {
            name: "Caesar Salad",
            description:
              "Hearts of romaine tossed in Chef’s own Caesar dressing topped with shaved Parmesan cheese and house-made croûtons",
            price: "10.95 / 13.95",
          },
          {
            name: "Ahi Tuna Salad",
            description:
              "Seared sesame encrusted Ahi Tuna, over mixed greens, topped with fried shallots, avocado, tomatoes, carrots, cucumbers and house-soy dressing",
            price: "27.95",
          },
          {
            name: "Marinated Grilled Sirloin Steak",
            description:
              "With sautéed Cremini mushrooms, Heirloom cherry tomatoes, cucumbers and bleu cheese crumbles over crisp romaine, garnished with fried shallots and served with bleu cheese dressing",
            price: "28.95",
          },
          {
            name: "Ty Cobb Salad",
            description:
              "Grilled chicken, fresh tomatoes, avocado, hard-boiled egg, Applewood smoked bacon and crumbled blue cheese over mixed greens, topped with fried shallots and served with ranch dressing",
            price: "23.95",
          },
        ],
      },
      {
        title: "Appetizers",
        items: [
          {
            name: "Welsh Rarebit",
            description:
              "A classic sauce of Cheddar cheese, heavy cream, special blend of spices and Vienna Lager served with toast points",
            price: "12.95",
          },
          {
            name: "Jumbo Shrimp – BBQ or Cocktail",
            description:
              "Four jumbo shrimp – choose your favorite preparation! Grilled dry rub BBQ with sweet chili sauce or classic shrimp cocktail with homemade cocktail sauce",
            price: "17.95",
          },
          {
            name: "Petite Crab Cakes",
            description: "Flash fried. A bite-sized version of our signature dish, served with mandarin–orange aioli",
            price: "Market Price",
          },
          {
            name: "Seared Ahi Tuna",
            description: "Encrusted with sesame seeds with wasabi cream and house soy dressing",
            price: "18.95",
          },
          {
            name: "Angry Mussels",
            description:
              "PEI mussels simmered in a Fra Diavolo sauce with jalapeños and shallots served with rosemary focaccia",
            price: "18.95",
          },
          {
            name: "Calamari & Shrimp",
            description: "Golden fried with house-made marinara and mandarin-orange aioli",
            price: "18.95",
          },
          {
            name: "Chesapeake Fried Oysters",
            description:
              "Five select jumbo oysters fried to a golden brown, served atop baby arugula with Chef’s Special Remoulade",
            price: "Market Price",
          },
          {
            name: "Smoked Salmon",
            description:
              "Diced hard-boiled eggs, tomatoes, red onion and capers served with house-made dilled crème fraiche and toast points",
            price: "17.95",
          },
          {
            name: "Fried Green Tomatoes",
            description: "A southern favorite, made to order! With Chef’s Special Remoulade",
            price: "12.95",
          },
          {
            name: "Onion Ring Loaf",
            description: "Thin sliced Vidalia onions lightly dredged in seasoned flour and fried to a golden brown",
            price: "13.95",
          },
          {
            name: "Potato Skins",
            description:
              "Topped with shredded Cheddar cheese, chopped scallions, Applewood smoked bacon and sliced jalapeños. Served with sour cream",
            price: "12.95",
          },
          {
            name: "Grilled Hawaiian Chicken Skewers",
            description: "Marinated chicken, onions, peppers and pineapple in a teriyaki glaze",
            price: "12.95",
          },
        ],
      },
      {
        title: "Comfort Foods & Sides",
        items: [
          {
            name: "Marinated London Broil",
            description: "Thinly sliced served medium rare with garlic mashed potatoes, sautéed spinach and topped with truffle butter",
            price: "35.95",
          },
          {
            name: "Grandma Martin’s Meatloaf",
            description: "Our version of mom’s favorite topped with fresh mushroom gravy. Served with garlic mashed potatoes and broccoli",
            price: "25.95",
          },
          {
            name: "Martin’s Delight — Our Own Hot Brown",
            description:
              "Created in the Brown Hotel in Kentucky, perfected by Martin’s Tavern! Sliced oven roasted turkey over toast, smothered in our homemade rarebit sauce topped with sliced tomato, Applewood smoked bacon and Parmesan cheese, broiled in a cast iron skillet",
            price: "23.95",
            tag: "Signature",
          },
          {
            name: "Slow Roasted Pot Roast",
            description: "A generous portion of tender beef with celery, carrots, onions and new potatoes with horseradish upon request",
            price: "28.95",
          },
          {
            name: "Fresh Calves Liver",
            description: "Hand cut calves liver over garlic mashed potatoes, green beans and caramelized onion and Applewood smoked bacon",
            price: "29.95",
          },
          {
            name: "The Tavern Treat",
            description: "Toasted English muffin loaded with sautéed Lump crab meat and sliced fresh mushrooms topped with house-made Hollandaise sauce served with seasonal vegetables",
            price: "Market Price",
          },
          {
            name: "Fish & Chips",
            description: "Fresh Icelandic Cod fillet dredged in our special flour blend fried to a crispy golden brown served with French fries, cole slaw and house-made remoulade",
            price: "29.95",
          },
          {
            name: "Shepherd’s Pie… Billy’s Own Recipe!",
            description: "Fresh ground local lamb, peas, carrots, onions, garlic and rosemary infused with a bit of Guinness, topped with garlic mashed potatoes made from scratch and Cheddar cheese",
            price: "26.95",
          },
          {
            name: "Tavern Burger",
            description: "Locally Raised Grass-Fed Angus Beef. On toasted brioche with lettuce, tomato and onion, served with French fries and kosher dill pickle",
            price: "20.95",
          },
          {
            name: "Free-Range Bison Burger",
            description: "“The Healthy Choice.” On toasted brioche with lettuce, tomato and onion, served with French fries and kosher dill pickle",
            price: "21.95",
          },
          {
            name: "“Where’s the Beef” – Meatless Burger",
            description: "On toasted brioche with lettuce, tomato and onion, served with French fries and kosher dill pickle. Add cheese or Applewood smoked bacon 2.00 each; add fried egg or avocado 3.00 each",
            price: "22.95",
          },
        ],
      },
      {
        title: "Sides",
        note: "$8 each",
        items: [
          { name: "Sautéed Spinach", price: "" },
          { name: "Asparagus", price: "" },
          { name: "Green Beans", price: "" },
          { name: "Broccoli", price: "" },
          { name: "Baked Potato", price: "" },
          { name: "Mac and Cheese", price: "" },
          { name: "Garlic Mashed Potatoes", price: "" },
          { name: "Cole Slaw", price: "" },
          { name: "Basmati Rice", price: "" },
          { name: "French Fries", price: "" },
        ],
      },
      {
        title: "Martin’s Specialties — Meat & Poultry",
        note: "All our meats and poultry are sourced locally in a free-range environment, aged to our specifications whenever possible",
        items: [
          {
            name: "Filet Mignon with Truffle Butter",
            description: "Atop a large crostini, served with garlic mashed potatoes, broccoli and baby carrots",
            price: "47.95",
            tag: "Signature",
          },
          {
            name: "New York Strip with Truffle Butter",
            description: "Center cut strip served with broccoli, garlic mashed potatoes and baby carrots",
            price: "45.95",
          },
          {
            name: "Double Cut Lamb Chop",
            description:
              "Lightly seasoned and marinated in extra virgin olive oil, fresh rosemary and basil. Grilled to perfection and garnished with olive tapenade; served with fingerling potatoes and sautéed spinach",
            price: "46.95",
          },
          {
            name: "Grilled Bone-In Thick Cut Pork Chop",
            description: "Lightly seasoned with olive oil, salt and pepper and fresh herbs served with sautéed spinach and mac & cheese",
            price: "43.95",
          },
          {
            name: "Chicken & Andouille Fettuccine",
            description: "Pan-seared chicken and Andouille sausage tossed with baby spinach, grape tomatoes, shallots and garlic in rosemary Parmesan cream",
            price: "30.95",
          },
          {
            name: "Chicken Parmesan",
            description: "Tender pan-fried chicken breast cutlet topped with house-made marinara sauce and mozzarella baked until golden and served over fettuccine",
            price: "29.95",
          },
          {
            name: "Chicken Milanese",
            description: "Chicken scaloppini lightly breaded and pan seared over fettuccine tossed with house-made pesto, Heirloom cherry tomatoes and topped with Parmesan cheese",
            price: "29.95",
          },
        ],
      },
      {
        title: "Martin’s Specialties — Seafood & Pasta",
        items: [
          {
            name: "Martin’s Seafood Pasta",
            description:
              "Jumbo shrimp, middle neck clams, calamari, PEI mussels, cherry tomatoes, capers, shallots, garlic and fresh baby spinach sautéed in butter and white wine tossed with fettuccine and sprinkled with parmesan cheese",
            price: "45.95",
          },
          {
            name: "Lump Crab Cakes – Pan Sautéed",
            description: "Martin’s family recipe Maryland-style since the 1930’s! Two of our famous crab cakes with your choice of two sides for the perfect crab cake platter served with remoulade",
            price: "Market Price",
            tag: "Signature",
          },
          {
            name: "Atlantic Salmon Fillet",
            description: "Grilled, then topped with sweet chili sauce and served with fresh green beans and Basmati rice",
            price: "35.95",
          },
          {
            name: "Lobster Risotto",
            description: "Creamy risotto with fresh lobster, lump crab, shallots and cherry tomato garnished with fresh micro greens",
            price: "55.95",
          },
          {
            name: "Shrimp and Grits",
            description: "Four sautéed jumbo shrimp, Andouille sausage, grape tomatoes, green and red peppers atop cheese grits with lobster cream sauce",
            price: "33.95",
          },
          {
            name: "Sea Scallops",
            description:
              "Four large sea scallops pan seared to perfection over spaghetti squash tossed with seasoned Heirloom cherry tomatoes and onions over our house-made creamy lobster bisque garnished with microgreens",
            price: "39.95",
          },
          {
            name: "Pan Seared Ahi Tuna Steak",
            description: "Sesame encrusted served over seasoned mushroom risotto garnished with hoisin sauce",
            price: "36.95",
          },
          {
            name: "Catch of the Day",
            description: "Ask your server about our chef’s creation",
            price: "Market Price",
          },
        ],
      },
      {
        title: "Martin’s Late-Night Menu",
        note: "Served Thursday, Friday & Saturday, 11:30 PM to 1:00 AM",
        items: [
          {
            name: "Slow-Roasted Prime Rib with Au Jus — Regular Cut",
            description: "Slow roasted and seasoned to perfection with broccoli and baked potato. Recommended medium rare",
            price: "55.95",
          },
          {
            name: "Slow-Roasted Prime Rib with Au Jus — End Cut",
            description: "Recommended medium well to well. Limited availability Friday and Saturday",
            price: "50.95",
          },
        ],
      },
    ],
  },

  // ===========================================================================
  // WINES & BEERS
  // ===========================================================================
  {
    id: "wines-beers",
    label: "Wines & Beers",
    blurb: "Reds, whites, rosé & sparkling, plus draft and bottled beers.",
    sections: [
      {
        title: "Red Wines",
        note: "Glass / Bottle",
        items: [
          { name: "Diora Pinot Noir", description: "Monterey, California", price: "15 / 60" },
          { name: "Banfi Belnero Toscana Red", description: "Tuscany, Italy", price: "20 / 80" },
          { name: "St. Francis Merlot", description: "Sonoma County, California", price: "15 / 60" },
          { name: "San Simeon Cabernet Sauvignon", description: "Paso Robles, California", price: "19 / 76" },
          { name: "Prati Cabernet Sauvignon by Louis M. Martini", description: "Sonoma County, California", price: "15 / 60" },
          { name: "Tenuta Di Arceno Chianti Classico Riserva", description: "Tuscany, Italy", price: "19 / 76" },
          { name: "Jean-Luc Colombo “Les Abeilles” Cotes Du Rhone", description: "Rhone Valley Villages, France", price: "14 / 56" },
          { name: "Chateau Ramafort Bordeaux", description: "Medoc, France", price: "18 / 72" },
          { name: "Andeluna Raices Malbec", description: "Mendoza, Argentina", price: "14 / 56" },
          { name: "One Hundred Vineyards Petite Sirah", description: "Lodi, California", price: "19 / 76" },
          { name: "Old Soul Red Blend", description: "Mendocino, California", price: "15 / 60" },
          { name: "1000 Stories Zinfandel", description: "Mendocino, California", price: "14 / 56" },
          { name: "Cruz De Alba Tempranillo", description: "R.O. Ribera Del Duero, Spain", price: "20 / 80" },
          { name: "Ramon Bilbao Rioja Reserva", description: "Rioja Alta, Spain", price: "22 / 88" },
        ],
      },
      {
        title: "White Wines",
        note: "Glass / Bottle",
        items: [
          { name: "Girlan Pinot Grigio", description: "Venezia, Italy", price: "13 / 48" },
          { name: "Wente Riva Ranch Chardonnay", description: "Monterey, California", price: "15 / 60" },
          { name: "Franciscan Chardonnay", description: "Napa Valley, California", price: "12 / 48" },
          { name: "Essence Riesling", description: "Mosel, Germany", price: "13 / 48" },
          { name: "Mar de Frades Albariño", description: "Galicia, Rias Baixas, Spain", price: "17 / 68" },
          { name: "Yealands Sauvignon Blanc", description: "Marlborough, New Zealand", price: "13 / 52" },
          { name: "Trimbach Pinot Blanc", description: "Alsace, France", price: "16 / 64" },
          { name: "Poggio Al Tesoro Solosole Vermentino Toscana", description: "Bolgheri, Italy", price: "15 / 60" },
          { name: "Domaine Des Craves Du Prieure Sancerre", description: "Loire Valley, France", price: "22 / 88" },
          { name: "Domaine Des Hâtes Petit Chablis", description: "Bourgogne, France", price: "18 / 72" },
        ],
      },
      {
        title: "Rosé & Sparkling",
        note: "Glass / Bottle",
        items: [
          { name: "Farmers and Vintners Rosé", description: "Lodi, California", price: "13 / 52" },
          { name: "Chateau De Pourcieux Sainte Victoire Rosé", description: "Cotes de Provence, France", price: "15 / 60" },
          { name: "Conca d’Oro Prosecco Rose D.O.C.", description: "Veneto, Italy", price: "14 / 56" },
          { name: "Clara C. Prosecco Cuvée Brut", description: "Valdobbiadene, Italy", price: "13 / 52" },
        ],
      },
      {
        title: "Draft Beers",
        items: [
          { name: "1933 Pilsner by DC Brau", description: "Washington, DC", price: "10" },
          { name: "Harp Irish Lager", description: "Ireland", price: "10" },
          { name: "Guinness Stout", description: "Ireland", price: "11" },
          { name: "Stella Artois", description: "Belgium", price: "11" },
          { name: "Right and Proper House IPA", description: "Maryland", price: "10" },
          { name: "Mannor Hill Farm Fuzz Belgian Wheat", description: "Maryland", price: "10" },
          { name: "Dogfish Head Grateful Dead Pale Ale", description: "Delaware", price: "11" },
          { name: "Wrench Hazy IPA", description: "New York", price: "11" },
        ],
      },
      {
        title: "Bottled & N/A Beers",
        items: [
          { name: "Guinness N/A Draught", description: "Ireland", price: "9" },
          { name: "Athletic N/A – Run Wild IPA / Michelob Ultra Zero", description: "USA", price: "9" },
          { name: "Heineken 0.0 N/A", description: "The Netherlands", price: "9" },
          { name: "Bold Rock Cider", description: "Virginia", price: "9" },
          { name: "Amstel Light", description: "The Netherlands", price: "9" },
          { name: "Heineken Lager & Heineken Silver", description: "The Netherlands", price: "9" },
          { name: "Pacifico Mex. Pilsner", description: "Mexico", price: "9" },
          { name: "Budweiser & Bud Lite Lager", description: "St. Louis, MO", price: "8" },
          { name: "Coors Light Lager", description: "Golden, CO", price: "8" },
          { name: "Highnoon – Dark Cherry Vodka Seltzer", description: "Modesto, CA", price: "" },
        ],
      },
    ],
  },

  // ===========================================================================
  // COCKTAILS / DESSERT / HOT BEVERAGES
  // ===========================================================================
  {
    id: "cocktails-dessert",
    label: "Cocktails / Dessert",
    blurb: "Signature cocktails, mocktails, desserts & after-dinner drinks.",
    sections: [
      {
        title: "Martin’s Cocktails",
        items: [
          {
            name: "Cucumber Nectar",
            description: "Crop Organic Cucumber Vodka, Lime, Fresh Cucumber juice, Mint garnish",
            price: "16",
          },
          {
            name: "Whiskey in the Summer",
            description: "Bubbas “BS” Burnt Sugar Whiskey, Lime, Pineapple, Orange bitters, garnished with an orange twist",
            price: "17",
          },
          {
            name: "Chipotle Pineapple Margarita",
            description: "Tanteo Chipotle Tequila, Pineapple Juice, Lime juice, Agave, garnished with lime wheel",
            price: "17",
          },
          {
            name: "Chocolate Old Fashioned",
            description: "Ballotin Chocolate Whiskey, Chocolate bitters, garnished with an orange peel",
            price: "17",
          },
          {
            name: "Rouge in the Georgetown",
            description: "Citadelle Rouge Gin, Green Chartreuse, Grapefruit, Lime, garnished with rose buds",
            price: "17",
          },
          {
            name: "DC Espresso Martini",
            description: "Stateside Vodka, Kahlua, locally roasted espresso, simple syrup, with coffee beans. Make it with El Tequileño Tequila for 18",
            price: "17",
          },
          {
            name: "Martin’s House Sangria",
            description: "Choice of Red or White Sangria accompanied with seasonal fruits",
            price: "15",
          },
          {
            name: "Barrel Aged Mezcal Negroni",
            description: "Drumshanbo “Gunpowder” Irish Gin, Select Pilla Aperitif, Gracias A Dios Espadin Mezcal aged in Oak Barrels served over ice. Garnished with an orange twist",
            price: "17",
          },
          {
            name: "Hibiscus for the Summer",
            description: "El Tequileño Reposado, Hibiscus Syrup, Agave, Lime Juice, Triple Sec. Garnished with a Hibiscus Flower and Orange Peel",
            price: "17",
          },
        ],
      },
      {
        title: "Martin’s N/A Mocktails",
        note: "All N/A mocktails safe for under 21 consumption",
        items: [
          { name: "Mockly Eye Opener", description: "Herbal Tangerine Elixir, served over ice", price: "12" },
          { name: "Mockly Love Bite", description: "Pomegranate Ginger Tonic, served over ice", price: "12" },
          { name: "Mockly Baron Von Blue", description: "Floral Blueberry Spritz, served over ice. Spike it with Tito’s Vodka for 8", price: "12" },
        ],
      },
      {
        title: "Martin’s Express List",
        items: [
          { name: "2018 Silver Oak Cabernet Sauvignon", description: "Alexander Valley, California", price: "170" },
          { name: "2021 Austin Hope 1L Cabernet Sauvignon", description: "Paso Robles, California", price: "110" },
          { name: "2019 Robert Mondavi Pinot Noir", description: "Napa Valley, California", price: "140" },
          { name: "2018 Skyside Chardonnay", description: "North Coast, California", price: "50" },
        ],
      },
      {
        title: "Desserts",
        items: [
          {
            name: "Bread Pudding",
            description: "Our most popular dessert! With a hot bourbon caramel sauce topped with Vanilla Ice Cream",
            price: "9",
            tag: "Signature",
          },
          {
            name: "Chocolate Awesome",
            description: "A warm, dense cake with rich chocolate ganache. A la mode 1.50",
            price: "8",
          },
          {
            name: "New York Style Cheesecake",
            description: "House-made and topped with a fresh strawberry sauce",
            price: "9",
          },
          {
            name: "Crème Brûlée",
            description: "House-made creamy baked custard with caramelized sugar top",
            price: "9",
          },
          {
            name: "Tiramisu",
            description: "House-made espresso-soaked lady fingers layered to perfection with mascarpone, dark rum, strong coffee dusted with cocoa powder",
            price: "9",
          },
          {
            name: "Apple Pie",
            description: "Limited Availability. A la mode 1.50",
            price: "8",
          },
          { name: "Dessert of the Day", description: "Ask your server about the dessert specials", price: "9" },
          { name: "Flavored Sorbet", description: "Ask your server for today’s flavors", price: "9" },
          { name: "Vanilla Ice Cream", description: "Add your favorite liqueur as a topping 3.50", price: "7" },
        ],
      },
      {
        title: "Hot Beverages & After Dinner Drinks",
        items: [
          { name: "Martin’s Irish Coffee", price: "14" },
          { name: "Latte or Cappuccino", price: "4.75" },
          { name: "Espresso", price: "4.25" },
          { name: "Limoncello", price: "11" },
          { name: "Grand Marnier", price: "11" },
          { name: "Ramos Pinto", price: "9" },
          { name: "Taylor Fladgate", price: "10" },
          { name: "Sambuca Romana", price: "11" },
        ],
      },
    ],
  },

  // ===========================================================================
  // CHAMPAGNE
  // ===========================================================================
  {
    id: "champagne",
    label: "Champagne",
    blurb: "Sparkling wines & champagne.",
    sections: [
      {
        title: "Sparkling Wines and Champagne",
        note: "Glass / Bottle where two prices are shown",
        items: [
          { name: "Campo Viejo Cava Reserva", description: "Aragon, Spain", price: "10 / 40" },
          { name: "Clara C. Prosecco Cuvée Brut", description: "Valdobbiadene, Italy", price: "12 / 50" },
          { name: "Moet & Chandon Brut Imperial (Split)", description: "Epernay, France · NV", price: "20" },
          { name: "Joseph Perrier Champagne Brut Rosé", description: "Champagne, France", price: "150" },
          { name: "Moet & Chandon Brut Imperial", description: "Epernay, France · NC", price: "150" },
          { name: "Dom Perignon 2012", description: "Epernay, France", price: "700" },
          { name: "Louis Roederer “Cristal” Brut", description: "Riems, France", price: "750" },
        ],
      },
    ],
  },
];

/** Convenience lookup used by the dedicated menu page tabs. */
export const getMenuById = (id: string): Menu | undefined =>
  MENUS.find((m) => m.id === id);

/**
 * Footnotes shown beneath the menus, transcribed from the printed menus.
 */
export const MENU_FOOTNOTES: string[] = [
  "Consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs may increase your risk of food-borne illness, especially if you have certain medical conditions.",
  "A 6% operational fee is added to offset the heightened cost of doing business; it is not a gratuity payable directly to the staff. A 20% service charge is added to parties of six (6) or more and can be adjusted at the guest’s discretion.",
];
