class AddCommentsCountToIssues < ActiveRecord::Migration[6.1]
  def change
    add_column :issues, :comments_count, :integer, null: false, default: 0
  end
end
