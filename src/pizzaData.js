import { sizes, toppings, sauces } from './constants'

export default {
  pizzas: [
    {
      size: sizes.SM,
      toppings: [toppings.PINEAPPLE, toppings.HAM],
      sauce: sauces.MARINARA,
    },
    {
      size: sizes.LG,
      toppings: [toppings.PEPPERONI],
      sauce: sauces.MARINARA,
    },
    {
      size: sizes.XL,
      toppings: [toppings.SAUSAGE, toppings.MUSHROOMS, toppings.GREEN_PEPPERS],
      sauce: sauces.BBQ,
    },
    {
      size: sizes.MD,
      sauce: sauces.ALFREDO,
    },
  ],
}
