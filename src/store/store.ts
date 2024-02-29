import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
interface State {
 isAuthenticated: boolean;
 user: User | null;
}
const initialState: State = {
 isAuthenticated: false,
 user: null,
};
const reducer = (state: State = initialState, action: { type: string; payload: User }): State => {
 switch (action.type) {
 case 'LOGIN':
 return { ...state, isAuthenticated: true, user: action.payload };
 case 'LOGOUT':
 return { ...state, isAuthenticated: false, user: null };
 default:
 return state;
 }
};
export const store = createStore(reducer, applyMiddleware(thunk));
