export const getFormInput = state => state.inputAndList.formInput;
export const getMdFiles = state => state.inputAndList.mdArray;
export const getBody = (state, index) => state.inputAndList.mdArray[index].body;
export const getActiveFile = state => state.inputAndList.mdArray.map((file, index) => {
  if(file.isActive) return index;
});
