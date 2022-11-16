# using the skeleton from aa open.

# from 04_select_within_select: sparse continents
# from 06_joins_warmup: casablanca_cast, alien_cast
# from 07_joins_exercises: ford_supporting_films, andrews_films_and_leads_joins

def sparse_continents
  # Find every country that belongs to a continent where each country's
  # population is less than 25,000,000. Show name, continent and
  # population.
  # Hint: Sometimes rewording the problem can help you see the solution.

  execute(<<-SQL)
  SELECT name, continent, population 
  FROM countries
  WHERE continent NOT IN (
  SELECT continent 
  FROM countries 
  WHERE population >= 25000000);
  SQL
end

SELECT movies.title, actors.name
FROM movies
JOIN castings ON movies.id = castings.movie_id 
JOIN actors ON actors.id = castings.actor_id 
WHERE movies.id IN (
  SELECT movies.id 
  FROM movies
  JOIN castings ON movies.id = castings.movie_id 
  JOIN actors ON actors.id = castings.actor_id
  WHERE actors.name = 'Julie Andrews'
) AND castings.ord = 1;


# SELECT 
#       title, actors.name 
#   FROM 
#       (
#         SELECT 
#             title, actors.name, movies.id
#         FROM 
#             movies 
#         JOIN 
#             castings ON movie_id = movies.id 
#         JOIN 
#             actors ON actors.id = actor_id 
#         WHERE 
#             name = 'Julie Andrews' 
#       ) AS julie_movies
#   JOIN 
#       castings ON movie_id = julie_movies.id
#   JOIN 
#       actors ON actors.id = actor_id 
#   WHERE 
#       ord = 1
