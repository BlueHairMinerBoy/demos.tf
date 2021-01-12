import * as React from 'react';

import {Link} from 'react-router-dom';
import {Section} from '../Components/Section';
import {PluginSection} from '../Components/PluginSection';

import './AboutPage.css';
import {Stats, DemoListProvider} from "../Providers/DemoProvider";
import {AuthProvider, User} from "../Providers/AuthProvider";
import {config} from '../config';

export interface AboutPageState {
	stats: Stats;
}

export interface AboutPageProps {
	demoListProvider: DemoListProvider;
	user: User;
}

export class AboutPage extends React.Component<AboutPageProps, AboutPageState> {
	static page = 'about';
	demoProvider: DemoListProvider = DemoListProvider.instance;

	state: AboutPageState = {
		stats: {
			demos: 0,
			players: 0
		}
	};

	async componentDidMount() {
		document.title = "About - demos.tf";
		const stats = await this.demoProvider.getStats();
		this.setState({stats});
	};

	render() {
		const user = AuthProvider.instance.user;

		return (
			<div>
				<Section title="About">
					<p>
						This site hosts demos from matches played on badlands.tf servers.
					</p>
				</Section>
				<Section title="Contact">
					<p>
						You can either send us an e-mail or join our Discord server below.
					</p>

					<p>
						<a href="https://badlands.tf/discord">
							Discord
						</a>&nbsp;
						<a href="mailto:hello@badlands.tf">
							E-mail
						</a>&nbsp;
					</p>
				</Section>
				<Section title="Statistics">
					<p>{this.state.stats.demos} Demos</p>

					<p>{this.state.stats.players} Players</p>
				</Section>
			</div>
		);
	}
}
