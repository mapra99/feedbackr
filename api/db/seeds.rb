# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Doorkeeper::Application.find_or_create_by(
  name: 'Feedbackr Web Dev',
  redirect_uri: 'urn:ietf:wg:oauth:2.0:oob',
  scopes: %w[read write],
  uid: 'uid123',
  secret: 'supersecret'
)

user = User.find_or_initialize_by(
  first_name: 'Rick',
  last_name: 'Grimes',
  username: 'rick-grimes',
  email: 'rick@citadel.com'
)

user.update(password: 'password', password_confirmation: 'password')

_bug = IssueCategory.find_or_create_by(name: 'bug')
enhancement = IssueCategory.find_or_create_by(name: 'enhancement')
_ux = IssueCategory.find_or_create_by(name: 'ux')
_ui = IssueCategory.find_or_create_by(name: 'ui')
feature = IssueCategory.find_or_create_by(name: 'feature')

product = Product.find_or_create_by(name: 'Frontend Mentor')

Issue.find_or_create_by(
  product:,
  title: 'Add tags for solutions',
  detail: 'Easier to search for solutions based on a specific stack.',
  issue_category: enhancement,
  status: 'planned',
  user:
)

Issue.find_or_create_by(
  product:,
  title: 'Add a dark theme option',
  detail: 'It would help people with light sensitivities and who prefer dark mode.',
  issue_category: feature,
  status: 'planned',
  user:
)
