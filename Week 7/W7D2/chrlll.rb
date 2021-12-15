# application controller -> chrrlll
helper_method :logged_in?, :current_user

def current_user 
    #return nil unless session[:session_token]
    @current_user ||= User.find_by(session_token: session[:session_token])
end

def log_in_user!(user)
    session[:session_token] = user.reset_session_token!
end

def logged_in?
    !!current_user
    # !current_user.nil?
end

def require_logged_in 
  redirect_to new_session_url unless logged_in?
end 

def require_logged_out
    redirect_to user_url(current_user) if logged_in?
end

def logout_user!
    current_user.reset_session_token!
    session[:session_token] = nil
    @current_user = nil
end