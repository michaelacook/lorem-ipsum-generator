/**
 * Methods for generating sentences and paragraphs
 */


class TextGenerator
{

    constructor()
    {
        this.sentences = require('../../data/sentences.js');
    }


    /**
     * Generate a paragraph of Latin nonsense text
     * Number of sentences generated randomly within a provided range
     * @param {Number} min - minimum number of sentences
     * @param {Number} max - max number of sentences
     * @param {Bool} first - whether first paragraph in a set
     * @return {String} paragraph
     */
    generateParagraph(min, max, first=false)
    {
        let paragraph;
        first ? paragraph = this.sentences[0] : paragraph = "";
        const numberOfSentences = Math.floor(
            Math.random() * (max - min) + min
        );
        for (let i = 0; i <= numberOfSentences; i++) {
            paragraph += this.sentences[
                Math.floor(Math.random() * this.sentences.length)
            ] + " ";
        }
        return paragraph;
    }


    /**
     * Generate a user-specified number of paragraphs of text
     * @param {Number} paragraphs - number of paragraphs to generate
     * @return {String} placeholder
     */
    generatePlaceholder(paragraphs)
    {
        const placeholder = new Array();
        const first = this.generateParagraph(4, 10, true);
        placeholder.push(first);
        if (paragraphs > 1) {
            for (let i = 1; i < paragraphs; i++) {
                let p = this.generateParagraph(4, 10);
                placeholder.push(p);
            }
        }
        return placeholder;
    }
}


module.exports = TextGenerator;