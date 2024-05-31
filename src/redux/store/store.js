import { createStore } from "redux";
import { moviesReduser } from "../reduser/reduser";

export let containerstore = createStore(moviesReduser)