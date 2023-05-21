import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from 'config/store';

import { ICharacter } from 'contracts/character';

export interface CharactersinitialState {
  characters: ICharacter[];
}

const initialState: CharactersinitialState = {
  characters: [],
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
  },
});

export const charactersSelector = (state: RootState) => state.characters;
export const { getCharacters } = charactersSlice.actions;
