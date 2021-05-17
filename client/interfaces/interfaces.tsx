export interface ShowIdUserIdProps {
	showid: number,
	userid: number
 }


export interface Payload {
	backdrop_path: string,
	poster_path: string,
	name : string,
	number_of_seasons : number,
	number_of_episodes : number,
	last_air_date : string;
	status : string
	length: number,
	seasons: Array<SeasonData>,
	networks: Array<Networks>

 }

export interface ShowRatingsProps {
	ratingsCount: number,
	averageRating: number,
	userRating: number
 }

 interface SeasonData {
	season_number: number
 }

 interface Networks {
	logo_path : string
 }