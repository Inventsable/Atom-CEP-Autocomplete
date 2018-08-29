'use babel';

// data source is an array of objects
import suggestions from '../data/ILST';

class IntermediateProvider {
	constructor() {
		// offer suggestions only when editing jsx files
		this.selector = '.source.jsx'

		// except when editing a comment within jsx file
		this.disableForSelector = '.source.jsx .comment';

		// show above native suggestions
		this.suggestionPriority = 2;
	}

	getSuggestions(options) {
		const { prefix } = options;

		// only look for suggestions after 3 characters have been typed
		if (prefix.length >= 3) {
			return this.findMatchingSuggestions(prefix);
		}
	}

	findMatchingSuggestions(prefix) {
		// filter list of suggestions to those matching the prefix, case insensitive
		let prefixLower = prefix.toLowerCase();
		let matchingSuggestions = suggestions.filter((suggestion) => {
			let textLower = suggestion.text.toLowerCase();
			return textLower.startsWith(prefixLower);
		});

		// run each matching suggestion through inflateSuggestion() and return
		return matchingSuggestions.map(this.inflateSuggestion);
	}

	// clones a suggestion object to a new object with some shared additions
	// cloning also fixes an issue where selecting a suggestion won't insert it
	inflateSuggestion(suggestion) {
		return {
			text: suggestion.text,
			description: suggestion.description,
			descriptionMoreURL: suggestion.descriptionMoreURL,
			type: 'value',
			rightLabel: 'Illustrator'
		};
	}
}
export default new IntermediateProvider();
