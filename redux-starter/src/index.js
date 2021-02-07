import store from './store';
import Store from './store';


const unsubscribe = store.subscribe (()=> {
  console.log('Store Changed!', getState());
});

Store.dispatch({
  type: "bugAdded",
  payload: {
    description: "Bug1"
  }
});

unsubscribe();

Store.dispatch({
  type: "bugRemoved",
  payload: {
    id: 1
  }
});


console.log(Store.getState());