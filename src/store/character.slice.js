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
        console.warn(result);
        dispatch(addCharacter({id: result.insertId, title, description, image, address, coords}));

      } catch (error) {
        console.log(error);
        throw error;
    };
  };
};

export const loadCharacters = () => {
  return async (dispatch) => {
    try {
      const result = await getCharacters();
      dispatch(setCharacters(result?.rows?._array));
    } catch (error) {
      console.warn(error);
      throw error;
    }
  };
};

export const deleteCharacters = () => {
  return async (dispatch) => {
    try {
      const result = await eraseCharacters();
      dispatch(setCharacters(result));
    }catch (error) {
      console.warn(error);
      throw error;
    }
  };
};


export default characterSlice.reducer;


