import {html, forward, Effects} from 'reflex';
import * as Recipe from './recipe';

export const init = (recipes) =>
  [
    recipes.map(Recipe.init),
    Effects.none
  ];
