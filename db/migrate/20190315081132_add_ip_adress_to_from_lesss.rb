class AddIpAdressToFromLesss < ActiveRecord::Migration[5.2]
  def change
    add_column :form_lesses, :id_adress, :string
  end
end
