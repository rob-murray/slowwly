require 'spec_helper'

describe Slowwly::DelayRequest do
  subject { described_class.new(new_params) }

  describe 'attributes' do
    describe '#delay' do
      context 'given valid delay' do
        let(:new_params) { { delay: 3000, url: 'http://google.co.uk' } }

        it 'has correct value' do
          expect(subject.delay).to eq(3000)
        end
      end

      context 'given no delay specified' do
        let(:new_params) { { url: 'http://google.co.uk' } }

        it 'uses default value' do
          expect(subject.delay).to eq(Slowwly.default_delay)
        end
      end

      context 'given invalid delay' do
        let(:new_params) { { delay: 'foo', url: 'http://google.co.uk' } }

        it 'uses default value' do
          expect(subject.delay).to eq(Slowwly.default_delay)
        end
      end
    end

    describe '#url' do
      context 'given valid url' do
        let(:new_params) { { delay: 1000, url: 'http:/google.co.uk' } }

        it 'has correct value' do
          expect(subject.url).to match /google.co.uk/
        end

        it 'adds missing slash' do
          expect(subject.url).to eq('http://google.co.uk')
        end
      end
    end

    describe '#delay_secs' do
      context 'given valid delay' do
        let(:new_params) { { delay: 3000, url: 'http://google.co.uk' } }

        it 'returns value in seconds' do
          expect(subject.delay_secs).to eq(3)
        end
      end
    end
  end
end
