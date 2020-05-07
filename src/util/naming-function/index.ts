import shortNamingFunction from "./short";
import descriptiveNamingFunction from "./descriptive";
import { RelationNameFunctions, BuiltinRelationNameFunctions } from "../../types";

/** @ignore */
const relationNameFunctions = {
  short: shortNamingFunction,
  descriptive: descriptiveNamingFunction,
};

export default function getRelationNameFunctions(
  relationNameFunction: RelationNameFunctions | BuiltinRelationNameFunctions
): RelationNameFunctions {
  return typeof relationNameFunction === "string" ? relationNameFunctions[relationNameFunction] : relationNameFunction;
}
