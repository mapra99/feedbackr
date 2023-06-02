class CreateIssueCategory < ActiveRecord::Migration[6.1]
  def change
    create_table :issue_categories do |t|
      t.string :name, null: false

      t.timestamps
    end

    add_index :issue_categories, :name, unique: true
    add_reference :issues, :issue_category, foreign_key: true
  end
end
