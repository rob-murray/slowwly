require 'spec_helper'

RSpec.describe Slowwly::RootController do
  context 'given a request to the server root' do
    before(:each) do
      get('/')
    end

    it 'should return valid response' do
      expect(last_response).to be_ok
    end

    it 'should render root view' do
      expect(last_response.body).to have_tag('div#root')
    end
  end
end
