import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Character {
  characters: {
    id: '1';
    name: 'Rick Sanchez';
    status: 'Alive';
    species: 'Human';
    type: '';
    gender: 'Male';
  };
}

interface CharactersinitialState {
  characters: Character[];
}

const initialState: CharactersinitialState = {
  characters: [],
};

export const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    getCharacters: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        characters: [...state.characters, action.payload],
      };
    },
  },
});

export const { getCharacters } = charactersSlice.actions;
