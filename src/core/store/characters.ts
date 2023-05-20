import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CharactersinitialState {
  projectIssues: string[];
}

const initialState: CharactersinitialState = {
  projectIssues: [],
};

export const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    getCharacters: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        projectIssues: [...state.projectIssues, action.payload],
      };
    },
  },
});

export const { getCharacters } = charactersSlice.actions;
