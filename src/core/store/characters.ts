import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from 'config/store';

import { ICharacter } from 'contracts/character';

export interface CharactersinitialState {
  characters: ICharacter[];
  favoritesIds: string[];
  favoriteCharacters: ICharacter[];
  filterName: string;
}

const initialState: CharactersinitialState = {
  characters: [],
  favoritesIds: JSON.parse(localStorage.getItem('favorites')!) || [],
  favoriteCharacters: [],
  filterName: '',
};

export const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    setFilterName: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        filterName: action.payload,
      };
    },
    getCharacters: (state, action: PayloadAction<ICharacter[]>) => {
      return {
        ...state,
        characters: action.payload,
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
export const charactersIdFavoriteSelector = (state: RootState) =>
  state.characters.favoritesIds;
export const charactersFavoriteSelector = (state: RootState) =>
  state.characters.favoriteCharacters;
export const filterNameCharacterSelector = (state: RootState) =>
  state.characters.filterName;

export const {
  getCharacters,
  setfavoriteCharacter,
  getFavoriteCharacter,
  setFilterName,
} = charactersSlice.actions;
