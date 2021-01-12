export interface Config {
	title: string,
	gameTypes: { [key: string]: string },
	showDonate: boolean,
	showUpload: boolean,
	api: string
}

export const config: Config = {
	title: "b",
	gameTypes: {
		'4v4': '4v4',
		'6v6': '6v6',
		'hl': 'Highlander'
		'12v12': 'Public match'
	},
	showDonate: false,
	showUpload: false,
	api: `https://api.${window.location.host}/`
};
