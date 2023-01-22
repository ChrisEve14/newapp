import { createSlice } from "@reduxjs/toolkit";
import Character from "../models/characters";
import { URL_GEOCODING } from "../constants/maps";
import { insertCharacter, getCharacters, eraseCharacters } from "../db";



const initialState = {
  characters: [],
};

const characterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {
    addCharacter: (state, action) => {
      const newCharacter = new Character(
        action.payload.id,
        action.payload.title,
        action.payload.description,
        action.payload.image,
        action.payload.address,
        action.payload.coords,
        );
      state.characters.push(newCharacter);
    },
    setCharacters: (state, action) => {
      state.characters = action.payload;
    },
  },
});

export const { addCharacter, setCharacters } = characterSlice.actions;


export const saveCharacter = ({title, description, image, coords}) => {
  return async (dispatch) => {

      try {
        
        const response = await fetch(URL_GEOCODING(coords?.lat, coords?.lng));
  
        if (!response.ok) throw new Error("Cant connect to server");
  
        const data = await response.json();
  
        if (!data.results) throw new Error("Couldn't find the address");
  
        const address = data.results[0].formatted_address;

        const result = await insertCharacter (title, description, image, address, coords);
        dispatch(loadCharacters())
        console.log(error);
        throw error;
      } catch (error) {
    };
  };
};

export const loadCharacters = () => {
  return async (dispatch) => {
    try {
      const result = await getCharacters();
      dispatch(setCharacters(result?.rows?._array));
      throw error;
    } catch (error) {
    }
  };
};

export const deleteCharacters = (id) => {
  return async (dispatch) => {
    try {
      const result = await eraseCharacters(id);
      dispatch(setCharacters(state.characters.filter(item => item.id !== id)));
      console.warn(error);
      throw error;
    }catch (error) {
    }
  };
};


export default characterSlice.reducer;


