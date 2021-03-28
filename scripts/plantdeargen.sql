use plantdear;

-- delete 
-- from plants
-- where id in (37, 38);

-- select replace(p.notes, 'waterPref', 'water')
-- from plants p
-- where p.notes like '%waterPref%';

-- update plants p
-- set p.notes = replace(p.notes, 'waterPref', 'water')
-- where p.notes like '%waterPref%';

-- select * from plants p
-- where p.notes like '%waterPref%';

-- select *
-- from plantdear.Plants p
-- where p.hardiness != ""
-- and p.location = "outdoor"
-- and p.hardiness >= 56;

-- select *
-- from plantdear.Plants p
-- where p.propogating = 'Y';

-- alter table plantdear.Plants
-- add needsCare text;

SELECT * FROM plantdear.plants;