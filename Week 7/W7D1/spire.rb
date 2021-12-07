# SPIREAA => user model

attr_reader :password
validates :session_token, presence: true, uniqueness: true
validates :password_digest, presence: true
validates :password, length: { minimum: 6 }, allow_nil: true #we can update the user information
after_initialize :ensure_session_token

def self.find_by_credentials(username, password)
  user = User.find_by(username: username)

  if user && user.is_password?(password)
    user
  else
    nil
  end
end

def password=(password) #setter 
  @password = password
  self.password_digest = BCrypt::Password.create(password)
end

def is_password?(password)
  password_object = BCrypt::Password.new(self.password_digest) #string to object
  password_object.is_password?(password) #is_password is a method native to the bcrypt library
end

def reset_session_token! #we want to make a change in the db
  self.session_tokenn = SecureRandom::urlsafe_base64
  self.session_token
end

def ensure_session_token
  self.session_token ||= SecureRandom::urlsafe_base64
end



