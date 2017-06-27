module.exports = {
	"env": {
		"browser": true,
		"commonjs": true,
		"es6": true
	},
  "parser": "babel-eslint",
	"extends": "eslint:recommended",
	"parserOptions": {
		"sourceType": "module"
	},
	"plugins": [
	   'html'
	],
	"rules": {
		"indent": [
			"error",
			"tab"
		],
		/*"linebreak-style": [
			"error",
			"windows"
		],*/
		"quotes": [
			"error",
			"single"
		],
		"semi": [
			"error",
			"always"
		],
		"no-console": 0
	}
};