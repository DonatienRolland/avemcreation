class FormLessesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:create, :new, :update]

  def update
    @step = session[:step]
    @less_form = FormLess.find_by(id_adress: request.ip)
    if @less_form.update(form_params)
      respond_to do |format|
        format.html
        format.js
      end
    else
      render :new
    end
  end

  def index
    @less_forms = FormLess.all.where.not('like_it LIKE ?', "")
  end

  def new
    @less_form = FormLess.find_or_create_by(id_adress: request.ip)
  end

private
  def form_params
    params.require(:form_less).permit(:like_it, :get_it, :user_path, :follow_recipe, :suggest_recipe, :feed_back, :email, :firstname, :recette, :name)
  end
end
