module.exports = {
	root: true,
	parser: "babel-eslint",
	parserOptions: {
		sourceType: 'module'
	},
	env: {
		browser: true,
		node: true
	},
	globals: {
		__static: true
	},
	plugins: [
		'html'
	],
	"rules": {
		"accessor-pairs": "error",
		"array-callback-return": "error",
		"arrow-parens": [
			"error",
			"always"
		],
		"block-scoped-var": "error",
		"class-methods-use-this": "off",
		"curly": [
			"error",
			"all"
		],
		"dot-location": [
			"error",
			"property"
		],
		"dot-notation": "error",
		"eqeqeq": [
			"error",
			"always",
			{
				"null": "ignore"
			}
		],
		"guard-for-in": "error",
		"no-caller": "error",
		"no-case-declarations": "error",
		"no-div-regex": "error",
		"no-else-return": "error",
		"no-empty-function": "error",
		"no-empty-pattern": "error",
		"no-eval": "error",
		"no-extend-native": "error",
		"no-extra-bind": "error",
		"no-extra-label": "error",
		"no-floating-decimal": "error",
		"no-global-assign": "error",
		"no-implicit-coercion": "error",
		"no-implicit-globals": "error",
		"no-implied-eval": "error",
		"no-iterator": "error",
		"no-labels": "error",
		"no-lone-blocks": "error",
		"no-loop-func": "error",
		"no-multi-spaces": "error",
		"no-multi-str": "error",
		"no-new-func": "error",
		"no-new-wrappers": "error",
		"no-new": "off",
		"no-octal": "error",
		"no-param-reassign": [
			"error",
			{
				"props": false
			}
		],
		"no-proto": "error",
		"no-redeclare": "error",
		"no-return-assign": [
			"error",
			"always"
		],
		"no-script-url": "error",
		"no-self-assign": "error",
		"no-self-compare": "error",
		"no-sequences": "error",
		"no-throw-literal": "error",
		"no-unmodified-loop-condition": "error",
		"no-unused-expressions": "error",
		"no-unused-labels": "error",
		"no-useless-call": "error",
		"no-useless-concat": "error",
		"no-useless-escape": "error",
		"no-useless-return": "error",
		"no-void": "error",
		"no-with": "error",
		"radix": [
			"error",
			"always"
		],
		"yoda": [
			"error",
			"never",
			{
				"exceptRange": true
			}
		],
		"no-catch-shadow": "error",
		"no-delete-var": "error",
		"no-label-var": "error",
		"no-restricted-globals": "error",
		"no-shadow-restricted-names": "error",
		"no-shadow": "error",
		"no-undef-init": "error",
		"no-undef": "error",
		"no-undefined": "error",
		"no-unused-vars": "error",
		"no-mixed-requires": [
			"error",
			{
				"allowCall": true
			}
		],
		"no-new-require": "error",
		"no-path-concat": "error",
		"no-sync": "error",
		"array-bracket-spacing": [
			"error",
			"never"
		],
		"block-spacing": [
			"error",
			"always"
		],
		"brace-style": [
			"error",
			"1tbs",
			{
				"allowSingleLine": true
			}
		],
		"camelcase": [
			"error",
			{
				"properties": "never"
			}
		],
		"comma-dangle": [
			"error",
			"never"
		],
		"comma-spacing": [
			"error",
			{
				"before": false,
				"after": true
			}
		],
		"comma-style": [
			"error",
			"last"
		],
		"computed-property-spacing": [
			"error",
			"never"
		],
		"func-call-spacing": [
			"error",
			"never"
		],
		"func-names": [
			"error",
			"never"
		],
		"func-style": [
			"error",
			"declaration",
			{
				"allowArrowFunctions": true
			}
		],
		"indent": [
			"error",
			"tab",
			{
				"SwitchCase": 1
			}
		],
		"key-spacing": [
			"error",
			{
				"mode": "strict"
			}
		],
		"keyword-spacing": [
			"error",
			{
				"before": true
			}
		],
		"lines-around-directive": [
			"error",
			{
				"before": "never",
				"after": "always"
			}
		],
		"new-parens": "error",
		"newline-before-return": "error",
		"no-bitwise": "error",
		"no-continue": "error",
		"no-mixed-operators": "error",
		"no-mixed-spaces-and-tabs": "error",
		"no-multiple-empty-lines": [
			"error",
			{
				"max": 2,
				"maxEOF": 1
			}
		],
		"no-nested-ternary": "error",
		"no-new-object": "error",
		"no-trailing-spaces": "error",
		"no-unneeded-ternary": "error",
		"no-whitespace-before-property": "error",
		"one-var": [
			"error",
			"never"
		],
		"operator-linebreak": [
			"error",
			"before"
		],
		"padded-blocks": [
			"error",
			"never"
		],
		"quote-props": [
			"error",
			"as-needed"
		],
		"quotes": [
			"error",
			"double"
		],
		"semi-spacing": "error",
		"semi": "error",
		"space-before-blocks": "error",
		"space-before-function-paren": [
			"error",
			{
				"anonymous": "always",
				"named": "never",
				"asyncArrow": "always"
			}
		],
		"space-in-parens": [
			"error",
			"never"
		],
		"spaced-comment": [
			"error",
			"always"
		],
		"arrow-spacing": [
			"error",
			{
				"before": true,
				"after": true
			}
		],
		"constructor-super": "error",
		"generator-star-spacing": [
			"error",
			{
				"before": false,
				"after": true
			}
		],
		"no-class-assign": "error",
		"no-const-assign": "error",
		"no-dupe-class-members": "error",
		"no-duplicate-imports": "error",
		"no-new-symbol": "error",
		"no-this-before-super": "error",
		"no-useless-computed-key": "error",
		"no-useless-constructor": "error",
		"no-useless-rename": "error",
		"no-var": "error",
		"object-shorthand": "error",
		"prefer-arrow-callback": "warn",
		"prefer-const": "warn",
		"prefer-numeric-literals": "warn",
		"prefer-rest-params": "warn",
		"prefer-spread": "warn",
		"require-yield": "error",
		"rest-spread-spacing": [
			"error",
			"never"
		],
		"symbol-description": "error",
		"template-curly-spacing": "error",
		"yield-star-spacing": [
			"error",
			"after"
		]
	}
};
