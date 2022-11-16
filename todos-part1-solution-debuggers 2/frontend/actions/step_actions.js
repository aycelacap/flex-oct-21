export const RECEIVE_STEPS = "RECEIVE_STEPS";
export const RECEIVE_STEP = "RECEIVE_STEP";
export const REMOVE_STEP = "REMOVE_STEP";

export const receiveSteps = steps => {
  // debugger
  return {
    type: RECEIVE_STEPS,
    steps
  };
};

export const receiveStep = step => {
  // debugger
  return {
    type: RECEIVE_STEP,
    step 
  };
}

export const removeStep = step => {
  // debugger
  return {
    type: REMOVE_STEP,
    step
  };
};
