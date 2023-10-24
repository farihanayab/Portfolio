import React from 'react';
import './About.css'
import profile from '../../assets/profilepic.png'
function About(props) {
    
	return (
		<section id='about' className='about-container'>
			<div className='right section-info about-me'>
				<h2>Get To Know Me</h2>
				{/* <a href="https://cdnlogo.com/logo/python_358.html"><img src="https://cdn.cdnlogo.com/logos/p/3/python.svg"/></a> */}
				<p className='about-info'>
				I'm a software developer based in the vibrant heart of Brooklyn, NY. 
				My educational background, rooted in the world of education, 
				has provided me with a unique perspective on problem-solving. 
				My journey has been a fusion of pedagogy and programming, 
				and I bring this distinctive blend to every project I undertake. 
				I'm passionate about finding innovative and practical solutions,
				driven by a love for creative expression. Whether I'm coding a web 
				application or weaving a compelling story, I'm committed to crafting solutions 
				that not only work efficiently but also inspire and engage.
				</p>
			</div>
			<div className='section-title left-section'>
				<img src={profile} className='pic profile' alt='profile'></img>
			</div>
		</section>
	);
}

export default About;
