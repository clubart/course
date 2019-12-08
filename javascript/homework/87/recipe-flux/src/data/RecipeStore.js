//import Immutable from 'immutable';
import { ReduceStore } from 'flux/utils';
import RecipeActionTypes from './RecipeActionTypes';
import RecipeDispatcher from './RecipeDispatcher';

class RecipeStore extends ReduceStore {
    constructor() {
        super(RecipeDispatcher);
    }

    getInitialState() {
        return Object.freeze({});
    }

    reduce(state, action) {
        switch (action.type) {
            case RecipeActionTypes.SHOW_RECIPE:

                return Object.freeze(action.recipe);
            //return state;

            default:
                return state;
        }
    }
}

export default new RecipeStore();