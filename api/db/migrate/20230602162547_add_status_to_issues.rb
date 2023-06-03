class AddStatusToIssues < ActiveRecord::Migration[6.1]
  def change
    add_column :issues, :status, :string, null: false
  end
end
