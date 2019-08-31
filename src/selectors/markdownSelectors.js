export const getFormInput = state => state.inputAndList.formInput;
export const getMdFiles = state => state.inputAndList.mdArray;
export const getBody = state => {
  const index = state.inputAndList.mdArray.findIndex(element => element.isActive === true);
  return state.inputAndList.mdArray[index].body;
};
