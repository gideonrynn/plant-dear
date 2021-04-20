SELECT * FROM plantdear.tasks;

insert into plantdear.tasks
values -- (1, 'Bring plants that are not cold hardy inside and move other plants to wall', 'Check plants that are outdoors. Any of them that are not doing well and are specifically on the railing should be moved away from the ledge. Thyme should be ok. Take wire tables and move to back, put lettuce and other greens on there. Leave this task open until they are put back outside.', 'brought in Gerbera, will put the others up against the wall but make sure to check that snow is not coming down that far back', '2021-04-19', 'open', '2021-04-19', '2021-04-19'),
-- (2, 'Check all plants for fungus gnats', 'Saw a fungus gnat recently. Check all the plants that were recently watered and see if something has got started in there', 'No notes for this', '2021-04-19', 'not started', '2021-04-19', '2021-04-19'),
-- (3, 'Add azalea to plants to buy', 'Thinking about a sensory garden. This is a bush and it would be cool to have the super vibrant purple color in my container garden', 'No notes for this', null, 'not started', '2021-04-19', '2021-04-19'),
-- (4, 'Repot red aglaonema', 'Put it in one of the bigger pots. Picked up 3 of the taller ones from Gethsemane', 'No notes for this', null, null, '2021-04-19', '2021-04-19');
-- (5, 'Trim corn plant', 'Watch for spots on it as well', 'No notes for this', '2021-04-22', null, '2021-04-19', '2021-04-19'),
-- (6, 'Figure out what to do with pilea', 'It is leaning and I am wondering if I can just chop off the leafy part and plant it and get a whole new plant out of it, and maybe trim down the remaining stalk so the baby plant can grow in place', 'No notes so far for what I have done on this task', '2021-04-22', null, '2021-04-19', '2021-04-19');
-- (7, 'Add lemon balm plant and decide what to do with it outside tomorrow', 'The snow might weight down the leaves or it may become too much so decide what to do with that. https://harvesttotable.com/how_to_grow_lemon_balm/', 'No notes so far for what I have done on this task', '2021-04-20', null, '2021-04-19', '2021-04-19');

-- update plantdear.tasks
-- set taskDetail = 'Check plants that are outdoors. Any of them that are not doing well and are specifically on the railing should be moved away from the ledge. Thyme should be ok. Take wire tables and move to back, put lettuce and other greens on there. Leave this task open until they are put back outside.', taskStatus = 'open', taskNotes = 'brought in Gerbera, will put the others up against the wall but make sure to check that snow is not coming down that far back', taskName = 'Bring plants that are not cold hardy inside and move other plants to wall'
-- where id = 1;

SELECT * FROM plantdear.tasks;