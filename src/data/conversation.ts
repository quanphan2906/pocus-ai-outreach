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

export const reply = {
	role: "assistant",
	content: `Hi Rod,

        I came across your work leading social media marketing at Algolia and was really impressed by your focus on refining search experiences — it’s clear you're driving impactful change!

        I’d love to explore how Pocus could support your team’s goals with our AI-driven platform, helping to streamline workflows and amplify your campaigns. We've seen some strong results with other marketing teams and believe there could be real synergy here.

        Would you be open to a quick chat to dive into the ways we might assist?

        Best,
        Sarah`,
};

export default conversation;
