import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from 'config/store';

import { ICharacter } from 'contracts/character';

export interface CharactersinitialState {
  characters: ICharacter[];
  filterCharacter: ICharacter[];
  favorites: string[];
}

const initialState: CharactersinitialState = {
  characters: [],
  favorites: JSON.parse(localStorage.getItem('favorites')!) || [],
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
    favoriteCharacter: (state, action: PayloadAction<string>) => {
      const alreadyExist = state.favorites.some(
        (favorite) => favorite === action.payload,
      );

      if (alreadyExist) {
        const favorites = state.favorites.filter(
          (favorite) => favorite !== action.payload,
        );

        localStorage.setItem('favorites', JSON.stringify([...favorites]));

        return {
          ...state,
          favorites: [...favorites],
        };
      }

      localStorage.setItem(
        'favorites',
        JSON.stringify([...state.favorites, action.payload]),
      );

      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    },
  },
});

export const charactersSelector = (state: RootState) =>
  state.characters.characters;
export const characterFilterSelector = (state: RootState) =>
  state.characters.filterCharacter;
export const charactersFavoriteSelector = (state: RootState) =>
  state.characters.favorites;

export const { getCharacters, filterCharacter, favoriteCharacter } =
  charactersSlice.actions;
