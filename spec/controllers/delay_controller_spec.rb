require 'spec_helper'

RSpec.describe Slowwly::DelayController do
  context 'with a GET request' do
    context 'with delay time' do
      context 'with url' do
        before(:each) do
          get('/delay/1500/url/http://example.com')
        end

        it 'responds with redirect' do
          expect(last_response.status).to eq(302)
        end

        it 'responds with correct header value' do
          expect(last_response.location).to eq('http://example.com')
        end
      end

      context 'without url' do
        before(:each) do
          get('/delay/1500/url/')
        end

        xit 'informs client of error with request' do
          expect(last_response).to be_bad_request
        end
      end
    end

    context 'given a request with invalid delay' do
      before(:each) do
        get('/delay/foo/url/http://example.com')
      end

      it 'responds with redirect' do
        expect(last_response.status).to eq(302)
      end

      it 'responds with correct header value' do
        expect(last_response.location).to eq('http://example.com')
      end
    end

    context 'given a request without delay time' do
      context 'with url' do
        before(:each) do
          get('/delay/url/http://example.com')
        end

        it 'responds with redirect' do
          expect(last_response.status).to eq(302)
        end

        it 'responds with correct header value' do
          expect(last_response.location).to eq('http://example.com')
        end
      end

      context 'without url' do
        before(:each) do
          get('/delay/url/')
        end

        xit 'informs client of invalid path' do
          expect(last_response).to be_not_found
        end
      end
    end
  end

  context 'with a POST request' do
    context 'with delay time' do
      context 'with url' do
        before(:each) do
          post('/delay/1500/url/http://example.com')
        end

        it 'responds with redirect' do
          expect(last_response.status).to eq(307)
        end

        it 'responds with correct header value' do
          expect(last_response.location).to eq('http://example.com')
        end

        context 'with post data' do
          before(:each) do
            post('/delay/1500/url/http://example.com', {key: 'value', other_key: 'something else'})
          end

          it 'does not moan about bad request, invalid params, blah' do
            expect(last_response.status).to eq(307)
          end
        end
      end

      context 'without url' do
        before(:each) do
          post('/delay/1500/url/')
        end

        xit 'informs client of error with request' do
          expect(last_response).to be_bad_request
        end
      end
    end

    context 'given a request with invalid delay' do
      before(:each) do
        post('/delay/foo/url/http://example.com')
      end

      it 'responds with redirect' do
        expect(last_response.status).to eq(307)
      end

      it 'responds with correct header value' do
        expect(last_response.location).to eq('http://example.com')
      end
    end

    context 'given a request without delay time' do
      context 'with url' do
        before(:each) do
          post('/delay/url/http://example.com')
        end

        it 'responds with redirect' do
          expect(last_response.status).to eq(307)
        end

        it 'responds with correct header value' do
          expect(last_response.location).to eq('http://example.com')
        end
      end

      context 'without url' do
        before(:each) do
          post('/delay/url/')
        end

        xit 'informs client of invalid path' do
          expect(last_response).to be_bad_request
        end
      end
    end
  end
end
