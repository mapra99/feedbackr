module V1
  class UsersBlueprint < Blueprinter::Base
    identifier :username
    fields :first_name, :last_name, :email
  end
end
