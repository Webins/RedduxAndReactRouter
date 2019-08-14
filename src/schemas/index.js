import data from "../api";
import { normalize, schema } from "normalizr";

const media = new schema.Entity(
  "media",
  {},
  {
    idAttribute: "id",
    processStrategy: (value, parent, keys) => ({
      ...value,
      category: parent.id
    })
  }
);
const category = new schema.Entity("categories", {
  playlist: new schema.Array(media)
});
//(key, definicion schema, options)
const categories = { categories: new schema.Array(category) };
const normalizedData = normalize(data, categories);

export default normalizedData;
