// @ts-nocheck

import { pathToFileURL } from 'url';

/**
 * An array of Json objects is the Algolia index that creates
 * a search index. Algolia imposes a max length on these objects.
 * The `chunk` function breaks a single Json object into multiples
 * by breaking the description property into chunks.
 *
 */

/** Values fetched from a markdown document.
 * @typedef {object} SearchRow - Selected markdown doc frontmatter
 * @property {string} title - Article title
 * @property {string} h1text - H1 tag value
 * @property {string} description - Article description
 * @property {string} content - Article contents
 * @property {string} content_length - Article contents length
 * @property {Date} date_added - Date article added
 * @property {Date} date_updated - Date article updated
 * @property {Date} date_published - Date article published
 */

/** The row object comes in fully populated--exception for its
 *  description property. Chunk breaks the text into chunks of
 *  ~targetLenth (it varies because chunker chunk the text at
 *  spaces (ie, it doesn't split words).
 * @param {number} targetLength - Chunk target length
 * @param {string} text - text to break into chunks (the full `description` frontmatter property)
 * @param {SearchRow} row - Another optional param (JSDoc syntax).
 * @param {SearchRow[]} allRows - An optional param with a default value
 * @returns {string} proof - an unused value.
 *
 * There isn't a formal return value that matters, but the chunked
 * rows are added to allRows and this is seen by the caller.
 */
export const chunker = (targetLength, text, row, allRows) => {
	const processChunk = (buffer) => {
		chunkCounter += 1;
		let chunk = buffer.join('');
		let currentRow = structuredClone(row);
		currentRow.content = chunk;
		currentRow.chunk_counter = chunkCounter;
		currentRow.content_length = chunk.length;
		allRows.push(currentRow);

		// Do something with chunk here.
		proofString.push(chunk);
	};

	text = text.trim();

	const margin = 20;

	let minLength = targetLength - margin;
	let maxLength = targetLength + margin;
	let contentLength = text.length;
	let bufferPosition = 0;
	let buffer = [];
	let word = [];
	let chunkCounter = 0;

	let proofString = [];

	// Parse the text value at spaces, add a populated row
	// to allRows for each chunk.
	do {
		let char = text[bufferPosition];
		if (char != ' ' || bufferPosition == contentLength - 1) {
			word.push(char);
		} else {
			buffer.push(word.join('') + ' ');
			word = [];
		}

		// Is buffer within range to process.
		let currentLength = buffer.join('').length;
		if (currentLength >= minLength && currentLength <= maxLength) {
			processChunk(buffer);
			buffer = [];
		}

		bufferPosition += 1;
		if (bufferPosition == contentLength) {
			// Get dangling word.
			buffer.push(word.join('') + ' ');
			processChunk(buffer);
			break;
		}
	} while (true);

	const proof = proofString.join('');
	return proof;
};

const test = () => {
	const row = {
		title: 'This is a test',
		description: 'Test description',
		content: '',
		content_length: 0
	};

	const allRows = [];

	const strippedMarkdown = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi scelerisque eu. Enim ut tellus elementum sagittis vitae et leo duis. Lobortis mattis aliquam faucibus purus in massa tempor nec. Sapien nec sagittis aliquam malesuada bibendum. Venenatis cras sed felis eget velit aliquet sagittis id. Sapien et ligula ullamcorper malesuada proin libero nunc consequat. Risus feugiat in ante metus. Arcu felis bibendum ut tristique et egestas quis ipsum suspendisse. Molestie nunc non blandit massa enim. Id porta nibh venenatis cras sed. Felis eget nunc lobortis mattis aliquam faucibus purus in massa. Ut diam quam nulla porttitor massa. Pellentesque dignissim enim sit amet venenatis urna cursus. Elementum integer enim neque volutpat ac tincidunt vitae. Sed viverra tellus in hac habitasse. Sed cras ornare arcu dui vivamus arcu felis bibendum. Id aliquet risus feugiat in ante metus dictum at tempor. Ut eu sem integer vitae justo eget magna. Eleifend mi in nulla posuere sollicitudin. Amet consectetur adipiscing elit duis tristique. Tellus in hac habitasse platea. Cursus eget nunc scelerisque viverra. Dignissim suspendisse in est ante in nibh mauris cursus mattis. Enim sed faucibus turpis in eu mi. At tempor commodo ullamcorper a lacus vestibulum sed. Donec enim diam vulputate ut pharetra sit amet aliquam id. Nunc consequat interdum varius sit amet mattis vulputate enim nulla. Scelerisque varius morbi enim nunc. A diam sollicitudin tempor id eu nisl nunc mi. Cursus eget nunc scelerisque viverra mauris in aliquam sem. Netus et malesuada fames ac turpis egestas maecenas. Ullamcorper eget nulla facilisi etiam dignissim. Commodo ullamcorper a lacus vestibulum. Sit amet consectetur adipiscing elit ut. Adipiscing tristique risus nec feugiat in fermentum posuere. Ut etiam sit amet nisl. In tellus integer feugiat scelerisque. Eget felis eget nunc lobortis mattis aliquam. Urna cursus eget nunc scelerisque viverra mauris in. Potenti nullam ac tortor vitae purus faucibus ornare. Varius sit amet mattis vulputate enim nulla. Ullamcorper sit amet risus nullam. Nunc sed augue lacus viverra vitae congue eu consequat ac. Sed felis eget velit aliquet sagittis id consectetur purus. Tempor orci dapibus ultrices in iaculis nunc sed augue. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Sit amet est placerat in egestas erat imperdiet sed euismod. Sit amet nisl suscipit adipiscing bibendum. Cursus risus at ultrices mi tempus imperdiet nulla malesuada. Praesent semper feugiat nibh sed pulvinar proin gravida. Elementum facilisis leo vel fringilla.`;
	//const strippedMarkdown = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.`;

	console.log('eee', strippedMarkdown.length);

	const targetChunkLength = 500;

	const proof = chunker(targetChunkLength, strippedMarkdown, row, allRows);
	if (proof.trim() == strippedMarkdown.trim()) {
		console.log('success');
	} else {
		console.log('fail');
	}

	console.log(strippedMarkdown.length);

	// allRows.forEach((row) => {
	// 	console.log(row);
	// });
};

// Test if module was called from the command line.
if (import.meta.url === pathToFileURL(process.argv[1]).href) {
	test();
}
