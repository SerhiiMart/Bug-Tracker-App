let lastId = 0;
function reducer(state = [], action) {
  if (action.type === 'bugAdded')
  return [
    ...state,
    {
      id: ++lastId,
      desctiption: action.payload.desctiption,
      resolved: false
    }
  ];
  else if (action.type === 'bugRemoved')
    return state.filter(bug => bug.id !== action.payload.id);
  return state;
}