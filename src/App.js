import React from 'react';
import './App.scss';
import { Card } from './components/';
import projects from './data.json';

function App() {
	return (
		<main>
			{projects.map((project) => (
				<Card className="mr" key={`${project.id}`}>
					<Card.Image src={project.image} alt={project.title} />
					<Card.Body>
						<Card.Title>{project.title}</Card.Title>
						<Card.Text>{project.desc}</Card.Text>
						<Card.Button>{project.ctaText}</Card.Button>
					</Card.Body>
				</Card>
			))}
		</main>
	);
}

export default App;
