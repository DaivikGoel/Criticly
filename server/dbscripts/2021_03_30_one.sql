ALTER TABLE reviews RENAME COLUMN episodeid TO episodenumber;
ALTER TABLE reviews RENAME COLUMN seasonid TO seasonnumber;

ALTER TABLE reviews ADD CONSTRAINT EpisodeToUser UNIQUE(episodenumber, seasonnumber, showid, userid);