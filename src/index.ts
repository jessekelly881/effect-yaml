/**
 * @since 1.0.0
 */

import { ParseResult, Schema } from "@effect/schema";
import YAML from "yaml";

/**
 * @since 1.0.0
 */
export type Options = {
	reviver?: Parameters<typeof YAML.parse>[1];
	replacer?: Parameters<typeof YAML.stringify>[1];
};

/**
 * @since 1.0.0
 */
export const parseYaml = <I, A extends string>(
	self: Schema.Schema<I, A>,
	options?: Options
) => {
	const common = {
		logLevel: "silent"
	} as const;

	return Schema.transformOrFail(
		self,
		Schema.unknown,
		(s, _, ast) => {
			try {
				const result = options?.reviver
					? YAML.parse(s, options?.reviver, common)
					: YAML.parse(s, common);

				return ParseResult.success<unknown>(result);
			} catch (e: unknown) {
				return ParseResult.failure(
					ParseResult.type(ast, s, (e as Error).message)
				);
			}
		},
		(u, _, ast) => {
			try {
				return ParseResult.success(
					YAML.stringify(u, options?.replacer, common)
				);
			} catch (e: unknown) {
				return ParseResult.failure(
					ParseResult.type(ast, u, (e as Error).message)
				);
			}
		},
		{ strict: false }
	);
};

export const ParseYaml: Schema.Schema<string, unknown> = parseYaml(
	Schema.string
);
