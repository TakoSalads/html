<?php exit; ?>
1711379818
SELECT m.*, u.user_colour, g.group_colour, g.group_type FROM (pa7v_moderator_cache m) LEFT JOIN pa7v_users u ON (m.user_id = u.user_id) LEFT JOIN pa7v_groups g ON (m.group_id = g.group_id) WHERE m.display_on_index = 1
6
a:0:{}