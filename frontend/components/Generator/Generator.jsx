import React, { useState } from 'react';
import PropTypes from 'prop-types';
import words from './wordBank';
import { GutterContainer, TextContainer, ParagraphSelect } from './styles';

// TODO:
// - Need a dropdown component to select the number of paragraphs

/**
 * Generates an array of paragraphs to display
 *
 * @param {Number} numParagraphs
 * @returns {Array<String>}
 */
const generateText = (numParagraphs = 1) => {
    if (numParagraphs < 1) return '';
    const paragraphs = [];

    // Create paragraphs
    for (let i = 0; i < numParagraphs; i++) {
        let paragraph = '';
        const numSentences = Math.floor(Math.random() * 2) + 4;

        // Add sentences to paragraph
        for (let j = 0; j < numSentences; j++) {
            const wordIndexes = [];
            var numWords = Math.floor(Math.random() * 8) + 8;

            // Add words to index array
            while (wordIndexes.length < numWords) {
                const idx = Math.floor(Math.random() * words.length);
                if (!wordIndexes.includes(idx)) wordIndexes.push(idx);
            }

            // Create sentence and add to paragraph
            let sentence = wordIndexes.map(idx => words[idx]).join(' ');
            sentence = sentence[0].toUpperCase() + sentence.slice(1);
            paragraph += sentence + '. ';
        }

        paragraphs.push(paragraph.trim());
    }

    return paragraphs;
};

const Generator = ({ className }) => {
    const BASE_CLASS_NAME = 'Generator';
    const [numParagraphs, setNumParagraphs] = useState(2);

    const updateNumParagraphs = (e) => setNumParagraphs(e.target.value);

    return (
        <div className={`${BASE_CLASS_NAME} ${className}`.trim()}>
            <GutterContainer>
                <ParagraphSelect value={numParagraphs} onChange={updateNumParagraphs}>
                    {Array(15).fill().map((_, idx) => (
                        <option key={`option_${idx}`} value={idx + 1}>
                            {(idx + 1).toString(16)} paragraph{idx ? 's' : ''}
                        </option>
                    ))}
                </ParagraphSelect>

                <TextContainer className={`${BASE_CLASS_NAME}__text`}>
                    {generateText(numParagraphs).map((paragraph, idx) => (
                        <p key={`paragraph_${idx}`}>{paragraph}</p>
                    ))}
                </TextContainer>
            </GutterContainer>
        </div>
    );
};

Generator.propTypes = {
    className: PropTypes.string,
};

Generator.defaultProps = {
    className: '',
};

export default Generator;