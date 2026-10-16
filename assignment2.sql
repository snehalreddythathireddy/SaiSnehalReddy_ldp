USE sakila;

-- Q1: Number of documentaries with deleted scenes
SELECT COUNT(DISTINCT f.film_id) AS documentaries_with_deleted_scenes
FROM film f
JOIN film_category fc ON f.film_id = fc.film_id
JOIN category c ON fc.category_id = c.category_id
WHERE c.name = 'Documentary'
  AND FIND_IN_SET('Deleted Scenes', f.special_features) > 0;

-- Q2: Number of sci-fi movies rented by the store managed by Jon Stephens
SELECT COUNT(r.rental_id) AS scifi_rentals
FROM rental r
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN store s ON i.store_id = s.store_id
JOIN staff m ON s.manager_staff_id = m.staff_id
JOIN film_category fc ON i.film_id = fc.film_id
JOIN category c ON fc.category_id = c.category_id
WHERE m.first_name = 'Jon'
  AND m.last_name = 'Stephens'
  AND c.name = 'Sci-Fi';

-- Q3: Total sales from Animation movies
SELECT SUM(p.amount) AS animation_total_sales
FROM payment p
JOIN rental r ON p.rental_id = r.rental_id
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film_category fc ON i.film_id = fc.film_id
JOIN category c ON fc.category_id = c.category_id
WHERE c.name = 'Animation';

-- Q4: Top 3 rented categories by PATRICIA JOHNSON
SELECT c.name AS category,
       COUNT(r.rental_id) AS times_rented
FROM customer cu
JOIN rental r ON cu.customer_id = r.customer_id
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film_category fc ON i.film_id = fc.film_id
JOIN category c ON fc.category_id = c.category_id
WHERE cu.first_name = 'PATRICIA'
  AND cu.last_name = 'JOHNSON'
GROUP BY c.category_id, c.name
ORDER BY times_rented DESC, c.name
LIMIT 3;

-- Q5: Number of R rated movies rented by SUSAN WILSON
SELECT COUNT(r.rental_id) AS r_rated_rentals
FROM customer cu
JOIN rental r ON cu.customer_id = r.customer_id
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film f ON i.film_id = f.film_id
WHERE cu.first_name = 'SUSAN'
  AND cu.last_name = 'WILSON'
  AND f.rating = 'R';