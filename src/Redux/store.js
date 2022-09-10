import { legacy_createStore as createStore} from "redux";
import { reducer } from "./reducer";

// loginstate ,
export const store = createStore(reducer , {todo: []})