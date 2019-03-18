class CreateFormLesses < ActiveRecord::Migration[5.2]
  def change
    create_table :form_lesses do |t|
      t.string :email
      t.string :firstname
      t.string :like_it
      t.string :get_it
      t.string :user_path
      t.string :follow_recipe
      t.string :suggest_recipe
      t.string :feed_back

      t.timestamps
    end
  end
end
