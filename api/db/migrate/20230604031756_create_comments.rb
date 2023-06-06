class CreateComments < ActiveRecord::Migration[6.1]
  def change
    create_table :comments do |t|
      t.references :user, null: false, foreign_key: true
      t.references :parent, polymorphic: true, null: false
      t.text :content
      t.string :uuid, null: false

      t.timestamps
    end

    add_index :comments, :uuid, unique: true
  end
end
