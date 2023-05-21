import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from 'config/store';

import { ICharacter } from 'contracts/character';

export interface CharactersinitialState {
  characters: ICharacter[];
  filterCharacter: ICharacter[];
  favoritesIds: string[];
  favoriteCharacters: ICharacter[];
}

const initialState: CharactersinitialState = {
  characters: [],
  favoritesIds: JSON.parse(localStorage.getItem('favorites')!) || [],
  filterCharacter: [],
  favoriteCharacters: [],
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
    getFavoriteCharacter: (state, action: PayloadAction<ICharacter[]>) => {
      return {
        ...state,
        favoriteCharacters: action.payload,
      };
    },
    setfavoriteCharacter: (state, action: PayloadAction<string>) => {
      const alreadyExist = state.favoritesIds.some(
        (favorite) => favorite === action.payload,
      );

      if (alreadyExist) {
        const favorites = state.favoritesIds.filter(
          (favorite) => favorite !== action.payload,
        );

        localStorage.setItem('favorites', JSON.stringify([...favorites]));

        return {
          ...state,
          favoritesIds: [...favorites],
        };
      }

      localStorage.setItem(
        'favorites',
        JSON.stringify([...state.favoritesIds, action.payload]),
      );

      return {
        ...state,
        favoritesIds: [...state.favoritesIds, action.payload],
      };
    },
  },
});

export const charactersSelector = (state: RootState) =>
  state.characters.characters;
export const characterFilterSelector = (state: RootState) =>
  state.characters.filterCharacter;
export const charactersIdFavoriteSelector = (state: RootState) =>
  state.characters.favoritesIds;
export const charactersFavoriteSelector = (state: RootState) =>
  state.characters.favoriteCharacters;

export const {
  getCharacters,
  filterCharacter,
  setfavoriteCharacter,
  getFavoriteCharacter,
} = charactersSlice.actions;
