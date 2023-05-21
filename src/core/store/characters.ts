import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from 'config/store';

import { ICharacter } from 'contracts/character';

export interface CharactersinitialState {
  characters: ICharacter[];
  filterCharacter: ICharacter[];
  favorites: ICharacter[];
}

const initialState: CharactersinitialState = {
  characters: [],
  favorites: [],
  filterCharacter: [],
};

export const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    getCharacters: (state, action: PayloadAction<ICharacter[]>) => {
      return {
        ...state,
        characters: action.payload,
      };
    },
    filterCharacter: (state, action: PayloadAction<ICharacter[]>) => {
      return {
        ...state,
        filterCharacter: action.payload,
      };
    },
  },
});

export const charactersSelector = (state: RootState) =>
  state.characters.characters;
export const characterFilterSelector = (state: RootState) =>
  state.characters.filterCharacter;

export const { getCharacters, filterCharacter } = charactersSlice.actions;
