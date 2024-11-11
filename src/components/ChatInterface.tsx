import { Send, User, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "./ui/badge";

interface ChatInterfaceProps {
	messages: { role: string; content: string }[];
	handleSendMessage: (e: React.FormEvent<HTMLFormElement>) => void;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({
	messages,
	handleSendMessage,
}) => (
	<div className="border rounded-lg">
		<div className="border-b p-4 gap-8 flex flex-row">
			<div className="space-x-2">
				<span className="border p-1 rounded-md w-1">💬</span>
				<span className="font-semibold text-lg">Chat</span>
			</div>
			<div className="text-muted-foreground flex items-center">
				New pipeline
			</div>
		</div>
		<div className="border-b p-4 gap-2 flex flex-row">
			<div className="inline-flex items-center gap-2 rounded-md bg-gray-50 p-2 pr-3 text-sm">
				<User className="h-4 w-4 text-gray-500" />
				<span className="font-medium">User</span>
				<span className="text-gray-500">is</span>
				<span>Job Switcher</span>
			</div>
			<div className="inline-flex items-center gap-2 rounded-md bg-gray-50 p-2 pr-3 text-sm">
				<User className="h-4 w-4 text-gray-500" />
				<span className="font-medium">User</span>
				<span className="text-gray-500">is</span>
				<span>Manager+</span>
			</div>
		</div>
		<ScrollArea className="flex p-4 h-[280px]">
			<div className="space-y-4">
				{messages.map((message, index) => (
					<ChatMessage key={index} message={message} />
				))}
			</div>
		</ScrollArea>
		<MessageInputForm handleSendMessage={handleSendMessage} />
	</div>
);

interface ChatMessageProps {
	message: { role: string; content: string };
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => (
	<div
		className={`flex ${
			message.role === "assistant" ? "flex-col gap-2" : ""
		}`}
	>
		<div
			className={`
        rounded-lg p-3 max-w-[90%]
        ${
			message.role === "assistant"
				? "bg-muted"
				: "bg-secondary/90 text-secondary-foreground ml-auto"
		}
      `}
		>
			{message.content.split("\n").map((line, index) => (
				<div key={index}>{line}</div>
			))}
		</div>
	</div>
);

interface MessageInputFormProps {
	handleSendMessage: (e: React.FormEvent<HTMLFormElement>) => void;
}

const MessageInputForm: React.FC<MessageInputFormProps> = ({
	handleSendMessage,
}) => (
	<form onSubmit={handleSendMessage} className="flex p-4">
		<div className="flex w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm items-center">
			<Textarea
				name="message"
				placeholder="Type your feedback..."
				className="resize-none"
				rows={0}
			/>
			<Button type="submit" className="shrink-0 h-8 w-8 shadow-none">
				<Send className="h-2 w-2" />
			</Button>
		</div>
	</form>
);

export default ChatInterface;
