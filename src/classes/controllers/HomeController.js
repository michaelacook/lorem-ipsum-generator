/**
 * Render home page
 */



class HomeController 
{
    /**
     * Handle resource at '/'
     * @param request - HTTP request
     * @param response - HTTP response
     */
    render(request, response)
    {
        const year = new Date().getYear() + 1900;
        response.render('home', { year });
    }
}


module.exports = HomeController;