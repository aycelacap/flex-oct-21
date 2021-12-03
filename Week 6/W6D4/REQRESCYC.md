### What is happening in the request response cycle?

Say we type localhost:3000/users/3 into our browser. What happens?

1. Browser makes a GET /users/3 HTTP request to the server running on localhost:3000
2. This request hits our router (as a visual, you can think of the routes.rb file). The Router is like a traffic controller: it checks the request verb (like GET) and path/URI (like /users/3) and figures out who should handle this request (which controller and action) (in this case, it maps to UsersController#show)
3. In this example, the router will make an instance of the Users controller and call #show action (method).
4. We hit our show action in our Users controller. This will use our User model to run an active record query to the database (with something like user = User.find_by(id: params[:id])). The show action will end by writing the User instance we get back to the HTTP response as JSON (render json: user)
5. The HTTP response gets sent back to our browser, which our browser will then render (or show us) the data with the user info.
6. Request response cycle complete!!!

