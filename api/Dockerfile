FROM php:7.4-fpm

WORKDIR /var/www

RUN apt-get update --fix-missing
RUN apt-get install -y curl
RUN apt-get install -y build-essential libssl-dev libzip-dev zlib1g-dev libpng-dev libjpeg-dev libfreetype6-dev
RUN pecl install xdebug

RUN docker-php-ext-enable xdebug
RUN docker-php-ext-install zip
RUN docker-php-ext-install pdo pdo_mysql bcmath
RUN echo "xdebug.mode=debug,coverage" >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini


RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

RUN docker-php-ext-configure gd --with-freetype=/usr/include/ --with-jpeg=/usr/include/ \
    && docker-php-ext-install gd

#RUN getent group www || groupadd -g 1000 www
#RUN useradd -u 1000 -ms /bin/bash -g www www || true

COPY . /var/www

RUN chown -R www-data:www-data /var/www

RUN chmod 777 $(pwd)
RUN composer install
RUN chmod -R 777 storage
RUN chmod -R 775 storage
RUN chmod -R 775 bootstrap
RUN php artisan config:cache
RUN php artisan config:clear


EXPOSE 9000

