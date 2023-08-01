class AddIssueIdToComments < ActiveRecord::Migration[6.1]
  def change
    add_reference :comments, :issue, null: true, foreign_key: true
  end
end
