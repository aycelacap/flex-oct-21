# Rails Commands
# https://github.com/appacademy/cohort-resources/blob/master/study_guides/rails/rails_commands.md


# ---- Rails 5.2.3 ----
# rails -v
# gem uninstall rails
# gem uninstall railties
# gem install rails --version 5.2.3
# rails -v

# Models = CapitalCamelCase, singular
# Tables = snake_case, plural

# ASSOCIATIONS
# primary_key is always id
# If there is a foreign key in the Model you're working with, use belongs_to for writing that association
# belongs_to will automatically validate the presence of the foreign key for you
# through and source always take association methods (they use other associations you've created within the same Model)
# through associations must come below the association they are going through

