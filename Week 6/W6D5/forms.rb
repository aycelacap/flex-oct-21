# html.erb
# returning erb tags
# command+shift+~ 

# What is the difference between returning and non-returning erb tags? 
  # returning = will evaluate any ruby (think of returning the value of an element in an array)
  # non-returning = used for non-evaluating ruby code (think of an end to a code block)

# How can we determine which url helper, method, and action we want?
  # rails routes


# In the code block below, why is name[description] formatted the way it is?

# <label>Description:
  # <input type="text" name="cat[description]" value="<%= cat.description %>">
# </label>

# Our cat_params in the controller indicate what we allow in our forms! 
# def cat_params
#   params.require(:cat).permit(:age, :birth_date, :color, :description, :name, :sex)
# end

# we can also accept 
  # name="cat[age]"
  # name="cat[birth_date]"
  # name="cat[color]"
  # name="cat[description]"
  # name="cat[name]"
  # name="cat[sex]"

# download extensions -> both will auto-fill the html/erb tags
  # erb extension 
  # html extension 





