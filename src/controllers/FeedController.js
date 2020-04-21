/*
 * Render feed
 */


const TextGenerator = require('../TextGenerator.js');


class FeedController
{

    /**
     * Handle GET request for `/` path
     * @param request - HTTP request
     * @param response - HTTP response
     */
    render(request, response)
    {
        const textGenerator = new TextGenerator();
        const paragraphs = request.query.paragraphs;
        if (paragraphs > 1000) {
            return response.redirect('/?error=exceeds_limit');
        }
        const lorem = textGenerator.generatePlaceholder(paragraphs);
        const args = { year: new Date().getYear() + 1900, lorem };

        response.render('feed', args);
    }
}


module.exports = FeedController;
