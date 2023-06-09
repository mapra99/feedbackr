class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :name, null: false
      t.string :slug, null: false

      t.timestamps
    end

    add_index :products, :slug, unique: true
  end
end
