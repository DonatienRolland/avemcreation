class AddNameAndRecetteToFromLesses < ActiveRecord::Migration[5.2]
  def change
    add_column :form_lesses, :name, :string
    add_column :form_lesses, :recette, :string
  end
end
