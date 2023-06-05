class CreateIssueUpvotes < ActiveRecord::Migration[6.1]
  def change
    create_table :issue_upvotes do |t|
      t.references :issue, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end

    add_index :issue_upvotes, %i[issue_id user_id], unique: true
  end
end
