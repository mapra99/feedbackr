require 'rails_helper'

RSpec.describe Product, type: :model do
  subject { build(:product) }

  describe 'validations' do
    it { is_expected.to validate_presence_of(:name) }
  end

  describe 'slug' do
    subject(:product) { build(:product, name: 'My Product') }

    before do
      product.save!
    end

    it "generates a slug" do
      expect(product.slug).to match('my-product')
    end
  end
end
