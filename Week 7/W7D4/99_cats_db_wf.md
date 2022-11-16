### ----- Sign Up -------
1. sign up
  - UsersController#new
  - c
  - render :new

2. fill in username/password
  - UsersController#create 
  - submit
  - c
  - UsersController#user_params
    - ensure user enters all needed info
  - c
  - User model
    - reset the session token
  - UsersController#create
    - User.new(user_params)
      - ensure user enters the correct params
  - c 
  - user.save (can the user be saved to the db)
  - User Model #ensure_session_token
  - c
  - c
  - save, hit the DB


### ---- LOGOUT ----

1. sessions_controller 
    - #destroy
  - application_controller
    - #logout_user!
    - why do we reset the session token in the db?
    - what's happening in the line:  `session[:session_token] = nil`?
    - redirect_to new_session_url

2. User Model
  - #reset_session_token!
  - c
  - #ensure_session_token
  - request redirect
  - redirect_to :new


### ---- LOGIN ----
1. SessionsController 
  - #create 
2. User Model
  - .find_by_credentials
  - password check
  - login user 
  - reset the session token
  - 302 found or 200 OK