import { reactive, provide, inject, readonly } from "vue";

export const stateSymbol = Symbol("state");
export const createState = () => {
  const state = reactive({ wantlist: [], collection: [] });

  const toggleWantList = id => {
    toggleItem(state.wantlist, id);
  };

  const toggleCollection = id => {
    toggleItem(state.collection, id);
  };

  return { toggleWantList, toggleCollection, state: readonly(state) };
};

const toggleItem = (array, value) => { 
  const index = array.indexOf(value);
  if (index === -1) {
    array.push(value);
  } else {
    array.splice(index, 1);
  }
}

export const useState = () => inject(stateSymbol);
export const provideState = () => provide(stateSymbol, createState());
