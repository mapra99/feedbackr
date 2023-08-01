class AddUpvotesCountToIssues < ActiveRecord::Migration[6.1]
  def change
    add_column :issues, :upvotes_count, :integer, null: false, default: 0
  end
end
