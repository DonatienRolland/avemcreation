require 'test_helper'

class FormLessesControllerControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get form_lesses_controller_new_url
    assert_response :success
  end

end
