ALTER TABLE reviews RENAME COLUMN episodeid TO episodenumber;
ALTER TABLE reviews RENAME COLUMN seasonid TO seasonnumber;

ALTER TABLE reviews ADD CONSTRAINT EpisodeToUser UNIQUE(episodenumber, seasonnumber, showid, userid);

create table reviewlikes (review_id INT NOT NULL, user_id INT NOT NULL, PRIMARY KEY ( reviewid, userid ) );

create table reviewcomments (commentid INT NOT NULL AUTO_INCREMENT, reviewid INT NOT NULL, userid INT NOT NULL, reviewcomment TEXT NOT NULL, PRIMARY KEY ( commentid) );