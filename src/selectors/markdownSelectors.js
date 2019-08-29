export const getFormInput = state => state.inputAndList.formInput;
export const getMdFiles = state => state.inputAndList.mdArray;
export const getBody = (state, index) => state.inputAndList.mdArray[index].body;
