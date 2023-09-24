import Chowmein from  "../Images/Chow-Mein.jpg"
import Mapotofu from "..//Images/Mapo-Tofu.jpg"
import ChikenRice from "../Images/Chiken-Fried-Rice.jpg"
import Spirngroll from "../Images/spring roll.jpg"
import Wontonsoup from "../Images/wonton-noodle.jpg"
import SpicyHotPot from "../Images/hot-pot.jpg"

export const MenuList=[

    {
      id: 1,
      name: 'Chowmein',
      description:'Our Vegetarian Chow Mein is a delightful medley of colorful vegetables stir-fried to perfection. It is paired with our signature soy sauce and served over a generous portion of tender noodles. A healthy and satisfying option for all veggie lovers.',
      image: Chowmein,
      price: 150
    },

    
    {
      id: 2,
        name: 'Mapo Tofu ',
        description:'Experience the fiery flavors of our Spicy Mapo Tofu, a Sichuan classic. Soft tofu cubes simmered in a mouthwatering blend of spicy chili bean sauce and aromatic Sichuan peppercorns. Topped with fresh green onions for an added kick.',
        image: Mapotofu ,
        price: 200
      },

      
    {
      id: 3,
        name: 'Spirng Rolls',
        description:'Start your meal with our Crispy Vegetable Spring Rolls. These golden-brown delights are filled with a delicious mixture of fresh vegetables and savory spices. Served with a side of sweet chili dipping sauce, they are the perfect way to whet your appetite.',
        image: Spirngroll,
        price: 100      },

      
    {
      id: 4,
        name: 'Wonton Soup',
        description:'Dive into a bowl of comfort with our Wonton Soup. Delicate wonton dumplings filled with a mixture of ground pork and shrimp, served in a savory chicken broth. This heartwarming soup is a timeless favorite.',
        image: Wontonsoup,
        price: 250
      },

      
    {
        id: 5,
        name: 'Chiken Fried Rice ',
        description:'Our Chicken Fried Rice is a delicious blend of tender chicken, fluffy jasmine rice, and a colorful array of vegetables. Stir-fried to perfection with our special seasoning blend for an irresistible combination of flavors.',
        image: ChikenRice ,
        price: 280     
     },
        {
          id: 6,
            name: 'Spicy Hot Pot ',
            description:'Gather around the table for a culinary adventure with our Spicy Hotpot Feast. Choose from a selection of fresh meats, seafood, and an assortment of vegetables. Simmer them in a bubbling, spicy broth of your choice. Perfect for sharing and creating unforgettable memories.',
            image: SpicyHotPot ,
            price: 350     }
]