FactoryBot.define do
  factory :issue do
    title { Faker::Lorem.sentence }
    detail { Faker::Lorem.paragraph }

    association :user
    association :product
  end
end
