FROM php:7.4-apache
WORKDIR /var/www/html

RUN a2enmod rewrite
RUN chown -R www-data:www-data /var/www/html
RUN docker-php-ext-install mysqli pdo pdo_mysql

ENV PHP_DISPLAY_ERRORS On
ENV PHP_ERROR_REPORTING E_ALL

EXPOSE 80