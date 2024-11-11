"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TabsNavigation } from "./TabsNavigation";
import ChatInterface from "./ChatInterface";
import conversation, { reply } from "@/data/conversation";

export function ContactDrawer() {
	const [messages, setMessages] = useState(conversation);
	const [activeTab, setActiveTab] = useState<string>("message");

	const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const form = e.currentTarget;
		const input = form.elements.namedItem("message") as HTMLTextAreaElement;
		if (input.value.trim()) {
			setMessages([...messages, { role: "user", content: input.value }]);

			// Simulate AI response
			setTimeout(() => {
				setMessages((prev) => [...prev, reply]);
			}, 1000);
			input.value = "";
		}
	};

	return (
		<div className="fixed inset-y-0 right-0 w-1/2 border-l bg-background flex flex-col">
			<div className="flex items-center justify-between p-4 pt-8">
				<div className="flex items-center gap-4">
					<div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
						<img
							class="rounded-full"
							src="https://picsum.photos/200/200"
							alt="profile"
						/>
					</div>
					<div>
						<h2 className="text-xl font-semibold">Rod Alvarenga</h2>
						<p className="text-muted-foreground">
							Senior Marketing Manager | Social media
						</p>
					</div>
				</div>
				<Button variant="ghost" size="icon">
					<X className="h-4 w-4" />
				</Button>
			</div>

			<TabsNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
			{activeTab === "message" && (
				<div className="p-4 flex flex-col gap-4">
					<ChatInterface
						messages={messages}
						handleSendMessage={handleSendMessage}
					/>
				</div>
			)}
		</div>
	);
}
