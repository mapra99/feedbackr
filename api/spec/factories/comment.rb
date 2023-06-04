FactoryBot.define do
  factory :comment do
    user
    association :parent, factory: :issue
    content { Faker::Lorem.paragraph }

    trait :child_comment do
      association :parent, factory: :comment
    end
  end
end
