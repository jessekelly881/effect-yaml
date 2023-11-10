import { Parser } from "@effect/schema";
import { Option } from "effect";
import { expect, it } from "vitest";
import { ParseYaml } from "../src";

const testyml = `age: 1
name: test
`;

const parse = Parser.parseOption(ParseYaml);
const decode = Parser.decodeOption(ParseYaml);
const encode = Parser.encodeOption(ParseYaml);

it("parseYaml", () => {
	expect(parse(testyml)).toEqual(Option.some({ age: 1, name: "test" }));
	expect(decode(testyml)).toEqual(Option.some({ age: 1, name: "test" }));
	expect(encode({ age: 1, name: "test" })).toEqual(Option.some(testyml));
});
