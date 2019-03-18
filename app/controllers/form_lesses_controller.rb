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
      # if step === "like_it"
      #   redirect_to new_form_less_path(query: "set_1") and return
      # elsif step === "get_it"
      #   redirect_to new_form_less_path(query: "set_2") and return
      # elsif step === "user_path"
      #   redirect_to new_form_less_path(query: "set_3") and return
      # elsif step === "follow_recipe"
      #   redirect_to new_form_less_path(query: "set_4") and return
      # elsif step === "suggest_recipe"
      #   redirect_to new_form_less_path(query: "set_5") and return
      # else step === "feed_back"
      #   redirect_to new_form_less_path and return
      # end
      # # redirect_to new_form_less_path and return
    else
      render :new
    end
  end

  def new
    @less_form = FormLess.find_or_create_by(id_adress: request.ip)
  end

private
  def form_params
    params.require(:form_less).permit(:like_it, :get_it, :user_path, :follow_recipe, :suggest_recipe, :feed_back)
  end
end
