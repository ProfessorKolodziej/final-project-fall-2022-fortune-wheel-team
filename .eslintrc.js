module.exports = {
	"extends": "airbnb-base",
	"rules": {
		"linebreak-style": 0,
		"indent": ["error", "tab"],
		"no-tabs": ["error", { allowIndentationTabs: true }],
        'no-console': 'off',
        "no-restricted-syntax": [
            "error",
            {
                "selector": "CallExpression[callee.object.name='console'][callee.property.name!=/^(log|warn|error|info|trace)$/]",
                "message": "Unexpected property on console object was called"
            }
        ]
	},
	"env": {
		"browser": true,
		"node": true
	}
};
