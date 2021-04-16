import { ajax } from "./components/ajax.js";
import { list } from "./components/list.js";
import { dogsList } from "./components/dogs.js";

ajax('people.json', list);
ajax('dogs.json', dogsList);