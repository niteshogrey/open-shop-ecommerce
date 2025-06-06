import men_shirt_1 from "../../assets/men_opaque_casual_shirt_1.jpg"
import men_shirt_2 from "../../assets/men_opaque_casual_shirt_2.jpg"

export const products = Array.from({ length: 15 }, () => ({
  name: "Men Opaque Casual Shirt",
  brand: "Clafoutis",
  rating: 4,
  discount: 25,
  old_price: 1999,
  current_price: 1499,
  image_1: men_shirt_1,
  image_2: men_shirt_2
}));
