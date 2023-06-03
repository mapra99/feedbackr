FactoryBot.define do
  factory :product do
    name { Faker::App.name }
  end
end
