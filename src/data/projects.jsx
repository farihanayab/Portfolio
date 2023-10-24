import RestroFinder from '../assets/RestroFinder.png'
import GoalBuddE from '../assets/GoalBudd-E.png';
import SpaceMan from '../assets/SpaceMan.png';
import movietheatherreviews from '../assets/movietheatherreviews.png'


export const projects = [
	{
		title: 'SpaceMan',
		description:
			'SpaceMan is a word guessing game which requires players to uncover hidden words by guessing letters. Engaged in all stages of the project, focusing on front-end development and ensuring the games user interface was engaging and user-friendly.',
		image: <img className='site-img' src={SpaceMan}></img>,
		link: 'https://farihanayab.github.io/SPACEMAN/',
		stacks: ['Javascript', 'HTML', 'CSS'],
		github: (
			<a href='https://github.com/farihanayab/SPACEMAN' target='_blank'>
				<img
					className='icon github'
					src='https://cdn.cdnlogo.com/logos/g/69/github-icon.svg'
				/>
			</a>
		),
	},
	{
		title: 'Movie Theater Reveiws',
		description:
			'Movie theater reviews is an app that can help people write and look at reviews for movie theaters. They are able to see the location of where the theater is and what people think about it.',
		image: <img className='site-img' src={movietheatherreviews}></img>,
		link: 'https://movie-theater-reviews-app-2b0a93e2c0d2.herokuapp.com/theaters',
		stacks: ['Javascript', 'HTML', 'CSS', 'MangoDB'],
		github: (
			<a target='_blank' href='https://github.com/farihanayab/movie-theater-reviews'>
				<img
					className='icon github'
					src='https://cdn.cdnlogo.com/logos/g/69/github-icon.svg'
				/>
			</a>
		),
	},
	{
		title: 'RestroFinder',
		description:
                'A  restaurant review app for your thoughts on local restaurants, and to  discover recommended places backed by a community of reviewers.',     	
					image: <img className='site-img' src={RestroFinder}></img>,
		link: 'https://restrofinder-3153d9fe25ff.herokuapp.com/',
		stacks: [ 'HTML', 'CSS', 'React', 'Django', 'Python', 'AWS', 'Heroku' ],
		github: (
			<a target='_blank' href='https://github.com//aunshpatel/restrofinder'>
				<img
					className='icon github'
					src='https://cdn.cdnlogo.com/logos/g/69/github-icon.svg'
				/>
			</a>
		),
	},
	{
		title: 'GoalBudd-E',
		description:
			' GoalBudd-E is a user-friendly goal-tracking app designed to help you achieve your dreams and aspirations. Whether youre working on personal development, fitness, travel, or any other life goal, GoalBudd-E makes the journey more enjoyable and motivating by allowing you to post your journey through images',
		image: <img className='site-img' src={GoalBuddE}></img>,
		link: 'https://shrouded-stream-37215-30233917d6a5.herokuapp.com/',
		stacks: ['Javascript', 'HTML', 'CSS', 'React', 'Node', 'Express', 'MangoDB'],
		github: (
			<a target='_blank' href='https://github.com/farihanayab/GoalBudd-E'>
				<img
					className='icon github'
					src='https://cdn.cdnlogo.com/logos/g/69/github-icon.svg'
				/>
			</a>
		),
	},
];