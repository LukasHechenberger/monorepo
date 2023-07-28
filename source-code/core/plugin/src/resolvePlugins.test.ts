import { describe, expect, it, vi } from "vitest"
import { resolvePlugins } from "./resolvePlugins.js"
import type { InlangConfig } from "@inlang/config"
import {
	PluginImportError,
	PluginIncorrectlyDefinedUsedApisError,
	PluginInvalidIdError,
	PluginUsesReservedNamespaceError,
	PluginUsesUnavailableApiError,
} from "./errors.js"
import type { InlangEnvironment } from "@inlang/environment"
import type { PluginApi } from "./api.js"

describe("generally", () => {
	// namespace is required, only kebap-case allowed
	it("should return errors if plugins use invalid ids", async () => {
		const mockPlugin: PluginApi = {
			meta: {
				// @ts-expect-error the id is invalid
				id: "no-namespace",
				description: { en: "" },
				displayName: { en: "" },
				keywords: [],
				usedApis: [],
			},
			setup: () => undefined as any,
		}
		const pluginModule = "https://myplugin.com/index.js"
		const env = mockEnvWithPlugins({ [pluginModule]: mockPlugin })
		const resolved = await resolvePlugins({
			env,
			config: {
				plugins: [
					{
						options: {},
						module: pluginModule,
					},
				] satisfies InlangConfig["plugins"],
			} as unknown as InlangConfig,
		})
		expect(resolved.errors.length).toBe(1)
		expect(resolved.errors[0]).toBeInstanceOf(PluginInvalidIdError)
	})

	it("should return an error if a plugin cannot be imported", async () => {
		const resolved = await resolvePlugins({
			env: {
				$fs: {} as any,
				$import: () => {
					throw Error("Could not import")
				},
			},
			config: {
				plugins: [{ module: "https://myplugin.com/index.js", options: {} }],
			} as InlangConfig,
		})

		expect(resolved.errors.length).toBe(1)
		expect(resolved.errors[0]).toBeInstanceOf(PluginImportError)
	})

	it("should return an error if a plugin uses APIs that are not available", async () => {
		const mockPlugin: PluginApi = {
			meta: {
				id: "plugin.my-plugin",
				description: { en: "" },
				displayName: { en: "" },
				keywords: [],
				// @ts-expect-error
				usedApis: ["nonExistentApi"], // Plugin is using an API that is not available
			},
			// @ts-expect-error
			setup: () => {
				return {
					nonExistentApi: () => undefined as any,
				}
			},
		}

		const pluginModule = "https://myplugin.com/index.js"
		const env = mockEnvWithPlugins({ [pluginModule]: mockPlugin })

		const resolved = await resolvePlugins({
			env,
			config: {
				plugins: [
					{
						options: {},
						module: pluginModule,
					},
				] satisfies InlangConfig["plugins"],
			} as unknown as InlangConfig,
		})

		expect(resolved.errors.length).toBe(1)
		console.log(resolved.errors)
		expect(resolved.errors[0]).toBeInstanceOf(PluginUsesUnavailableApiError)
	})

	it("should return an error if a plugin uses APIs that are not defined in meta.usedApis", async () => {
		const mockPlugin: PluginApi = {
			meta: {
				id: "plugin.plugin",
				description: { en: "" },
				displayName: { en: "" },
				keywords: [],
				usedApis: [], // Empty list of used APIs, but the plugin is using an API in the implementation
			},
			setup: () => {
				return {
					loadMessages: () => undefined as any,
				}
			},
		}

		const pluginModule = "https://myplugin2.com/index.js"
		const env = mockEnvWithPlugins({ [pluginModule]: mockPlugin })

		const resolved = await resolvePlugins({
			env,
			config: {
				plugins: [
					{
						options: {},
						module: pluginModule,
					},
				] satisfies InlangConfig["plugins"],
			} as unknown as InlangConfig,
		})

		expect(resolved.errors.length).toBe(1)
		expect(resolved.errors[0]).toBeInstanceOf(PluginIncorrectlyDefinedUsedApisError)
	})

	it("should return an error if a plugin DOES NOT use APIs that are defined in meta.usedApis", async () => {
		const mockPlugin: PluginApi = {
			meta: {
				id: "plugin.plugin",
				description: { en: "" },
				displayName: { en: "" },
				keywords: [],
				usedApis: ["loadMessages"],
			},
			setup: () => {
				return {
					saveMessages(args) {
						return undefined as any
					},
				}
			},
		}

		const pluginModule = "https://myplugin3.com/index.js"
		const env = mockEnvWithPlugins({ [pluginModule]: mockPlugin })
		const resolved = await resolvePlugins({
			env,
			config: {
				plugins: [
					{
						options: {},
						module: pluginModule,
					},
				] satisfies InlangConfig["plugins"],
			} as unknown as InlangConfig,
		})

		expect(resolved.errors.length).toBe(1)
		expect(resolved.errors[0]).toBeInstanceOf(PluginIncorrectlyDefinedUsedApisError)
	})

	it("should not initialize a plugin that uses the 'inlang' namespace except for inlang whitelisted plugins", async () => {
		const mockPlugin: PluginApi = {
			meta: {
				id: "inlang.notWhitelistedPlugin",
				description: { en: "" },
				displayName: { en: "" },
				keywords: [],
				usedApis: ["loadMessages"], // Whitelisted plugin using the 'inlang' namespace
			},
			setup: () => {
				return {
					loadMessages: () => undefined as any,
				}
			},
		}

		const pluginModule = "https://inlangwhitelist.com/index.js"
		const env = mockEnvWithPlugins({ [pluginModule]: mockPlugin })

		const resolved = await resolvePlugins({
			env,
			config: {
				plugins: [
					{
						options: {},
						module: pluginModule,
					},
				] satisfies InlangConfig["plugins"],
			} as unknown as InlangConfig,
		})

		expect(resolved.errors.length).toBe(1)
		expect(resolved.errors[0]).toBeInstanceOf(PluginUsesReservedNamespaceError)
	})
})

// describe("loadMessages", () => {
// 	it("should load messages from a local source", async () => {
// 		const resolved = await resolvePlugins(mockArgs)
// 	})
// 	it("should collect an error if function is defined twice", async () => {})
// })

// describe("saveMessages", () => {
// 	it("should save messages to a local source", async () => {
// 		const resolved = await resolvePlugins(mockArgs)
// 	})
// 	it("should collect an error if function is defined twice", async () => {})
// })

// describe("addLintRules", () => {
// 	it("should resolve a single lint rule", async () => {
// 		const resolved = await resolvePlugins(mockArgs)
// 	})

// 	it("should resolve multiple lint rules", async () => {
// 		const resolved = await resolvePlugins(mockArgs)
// 	})
// })

// describe("addAppSpecificApi", () => {
// 	it("it should resolve app specific configs", async () => {
// 		const resolved = await resolvePlugins(mockArgs)
// 	})

// 	it("it should resolve app specific configs", async () => {
// 		const resolved = await resolvePlugins(mockArgs)
// 	})
// })

// ---------------

function mockEnvWithPlugins(plugins: Record<string, PluginApi>): InlangEnvironment {
	return {
		$fs: () => undefined,
		$import: (moduleUrl: string) => {
			return {
				default: plugins[moduleUrl],
			}
		},
	} as unknown as InlangEnvironment
}
