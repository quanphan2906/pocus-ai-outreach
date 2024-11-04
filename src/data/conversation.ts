const conversation = [
	{
		role: "user",
		content: `
            Craft a personalized outreach message to the contact. Below are the details you should consider:

            Goal of the Outreach: Build new pipeline.

            Important Signals to Include: Channels created > 4, User is a Job switcher.

            Do's: Make the message concise, friendly, and focused on the contact's needs. Include relevant signals to highlight why this outreach is valuable to them.

            Don'ts: Avoid generic language, overly aggressive sales tactics, and too much technical jargon.
        `,
	},
	{
		role: "assistant",
		content: `Hi Rod,

            I noticed you've been leading social media marketing initiatives at Algolia for the past few years. Your recent work on improving search experiences really caught my attention.

            I'd love to discuss how Pocus could help streamline your team's workflow and enhance your marketing campaigns through our AI-powered platform.

            Would you be open to a quick chat about how we're helping other marketing teams like yours?

            Best,
            Sarah`,
	},
];

export default conversation;
