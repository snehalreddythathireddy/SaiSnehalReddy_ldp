USE sakila;

-- Q1: PG-13 comedy movies (without film_list)
SELECT f.film_id,
       f.title,
       f.rating,
       c.name AS category
FROM film f
JOIN film_category fc ON f.film_id = fc.film_id
JOIN category c ON fc.category_id = c.category_id
WHERE f.rating = 'PG-13'
  AND c.name = 'Comedy';

-- Q2: Top 3 rented horror movies
SELECT f.film_id,
       f.title,
       COUNT(r.rental_id) AS times_rented
FROM film f
JOIN film_category fc ON f.film_id = fc.film_id
JOIN category c ON fc.category_id = c.category_id
JOIN inventory i ON f.film_id = i.film_id
JOIN rental r ON i.inventory_id = r.inventory_id
WHERE c.name = 'Horror'
GROUP BY f.film_id, f.title
ORDER BY times_rented DESC
LIMIT 3;

-- Q3: Customers from India who rented sports movies
SELECT DISTINCT c.customer_id,
       c.first_name,
       c.last_name
FROM customer c
JOIN address a ON c.address_id = a.address_id
JOIN city ci ON a.city_id = ci.city_id
JOIN country co ON ci.country_id = co.country_id
JOIN rental r ON c.customer_id = r.customer_id
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film_category fc ON i.film_id = fc.film_id
JOIN category cat ON fc.category_id = cat.category_id
WHERE co.country = 'India'
  AND cat.name = 'Sports';
  
  -- Q4: Customers from Canada who rented NICK WAHLBERG movies
SELECT DISTINCT c.customer_id,
       c.first_name,
       c.last_name
FROM customer c
JOIN address a ON c.address_id = a.address_id
JOIN city ci ON a.city_id = ci.city_id
JOIN country co ON ci.country_id = co.country_id
JOIN rental r ON c.customer_id = r.customer_id
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film_actor fa ON i.film_id = fa.film_id
JOIN actor ac ON fa.actor_id = ac.actor_id
WHERE co.country = 'Canada'
  AND ac.first_name = 'NICK'
  AND ac.last_name = 'WAHLBERG';
  
  -- Q5: Number of movies in which SEAN WILLIAMS acted
SELECT COUNT(DISTINCT fa.film_id) AS movie_count
FROM actor ac
JOIN film_actor fa ON ac.actor_id = fa.actor_id
WHERE ac.first_name = 'SEAN'
  AND ac.last_name = 'WILLIAMS';