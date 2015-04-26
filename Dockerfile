FROM ubuntu:14.04
MAINTAINER Robert Murray <robmurray17@gmail.com>

# host config
RUN echo "LANG=\"en_US.UTF-8\"" > /etc/default/locale
RUN locale-gen en_GB.UTF-8
RUN dpkg-reconfigure locales

# packages
RUN apt-get -yqq update
RUN apt-get install -yqq autoconf \
                         build-essential \
                         libreadline-dev \
                         libpq-dev \
                         libssl-dev \
                         libxml2-dev \
                         libyaml-dev \
                         libffi-dev \
                         zlib1g-dev \
                         git-core \
                         curl \
                         node \
                         libmagickcore-dev \
                         libmagickwand-dev \
                         libcurl4-openssl-dev \
                         imagemagick \
                         bison

RUN \
  apt-get install -y nginx

RUN rm -v /etc/nginx/nginx.conf
COPY nginx.conf /etc/nginx/nginx.conf
RUN echo "daemon off;" >> /etc/nginx/nginx.conf
COPY nginx-sites.conf /etc/nginx/sites-enabled/default

RUN git clone https://github.com/sstephenson/ruby-build.git /tmp/ruby-build && \
    cd /tmp/ruby-build && \
    ./install.sh && \
    cd / && \
    rm -rf /tmp/ruby-build

ENV RUBY_VERSION 2.2.0
RUN ruby-build -v $RUBY_VERSION /usr/local
RUN /bin/bash -l -c "gem install bundler --no-ri --no-rdoc"

# app config
RUN echo 'gem: --no-rdoc --no-ri' >> $HOME/.gemrc

ENV RACK_ENV production
ENV PORT 5000
ENV APP_HOME /app
RUN mkdir $APP_HOME

WORKDIR $APP_HOME
ADD . $APP_HOME

ADD Gemfile Gemfile
ADD Gemfile.lock Gemfile.lock
RUN bundle install --without development:test --path vendor/bundle --binstubs vendor/bundle/bin -j4 --deployment
RUN gem install foreman

CMD bundle exec foreman start

EXPOSE 8080
