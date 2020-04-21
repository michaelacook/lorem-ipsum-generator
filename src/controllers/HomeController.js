/**
 * Render home page
 */

const errorMessages = require('../../client_messages/error_messages.js');


class HomeController 
{
    /**
     * Handle resource at '/'
     * @param request - HTTP request
     * @param response - HTTP response
     */
    render(request, response)
    {
        const args = new Object();
        if (request.query.error) {
            args.error = errorMessages[request.query.error];
        }
        const year = new Date().getYear() + 1900;
        args.year = year;
        response.render('home', args);
    }
}


module.exports = HomeController;