require 'spec_helper'

describe Slowwly::DelayController do
  context 'with a GET request' do
    context 'with delay time' do
      context 'with url' do
        before(:each) do
          get('/delay/1500/http://example.com')
        end

        it 'responds with redirect' do
          expect(last_response).to be_redirect
        end

        it 'responds with correct header value' do
          expect(last_response.location).to eq('http://example.com')
        end
      end

      context 'without url' do
        before(:each) do
          get('/delay/1500/')
        end

        xit 'informs client of error with request' do
          expect(last_response).to be_bad_request
        end
      end
    end

    context 'given a request with invalid delay' do
      before(:each) do
        get('/delay/foo/http://example.com')
      end

      it 'responds with redirect' do
        expect(last_response).to be_redirect
      end

      it 'responds with correct header value' do
        expect(last_response.location).to eq('http://example.com')
      end
    end

    context 'given a request without delay time' do
      context 'and url' do
        before(:each) do
          get('/delay//http://example.com')
        end

        xit 'responds with redirect' do
          expect(last_response).to be_redirect
        end

        xit 'responds with correct header value' do
          expect(last_response.location).to eq('http://example.com')
        end
      end

      context 'without url' do
        before(:each) do
          get('/delay/')
        end

        it 'informs client of invalid path' do
          expect(last_response).to be_not_found
        end
      end
    end
  end

  context 'with a POST request' do
    context 'with delay time' do
      context 'with url' do
        before(:each) do
          post('/delay/1500/http://example.com')
        end

        it 'responds with redirect' do
          expect(last_response).to be_redirect
        end

        it 'responds with correct header value' do
          expect(last_response.location).to eq('http://example.com')
        end

        context 'with post data' do
          before(:each) do
            post('/delay/1500/http://example.com', {key: 'value', other_key: 'something else'})
          end

          it 'does not moan about bad request, invalid params, blah' do
            expect(last_response).to be_redirect
          end
        end
      end

      context 'without url' do
        before(:each) do
          post('/delay/1500/')
        end

        xit 'informs client of error with request' do
          expect(last_response).to be_bad_request
        end
      end
    end

    context 'given a request with invalid delay' do
      before(:each) do
        post('/delay/foo/http://example.com')
      end

      it 'responds with redirect' do
        expect(last_response).to be_redirect
      end

      it 'responds with correct header value' do
        expect(last_response.location).to eq('http://example.com')
      end
    end

    context 'given a request without delay time' do
      context 'and url' do
        before(:each) do
          post('/delay//http://example.com')
        end

        xit 'responds with redirect' do
          expect(last_response).to be_redirect
        end

        xit 'responds with correct header value' do
          expect(last_response.location).to eq('http://example.com')
        end
      end

      context 'without url' do
        before(:each) do
          post('/delay/')
        end

        it 'informs client of invalid path' do
          expect(last_response).to be_not_found
        end
      end
    end
  end
end
