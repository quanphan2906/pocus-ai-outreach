"use client";

import { useState } from "react";
import { Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
	ChevronDownIcon,
	CheckIcon,
	Cross2Icon,
	ChevronRightIcon,
} from "@radix-ui/react-icons";

export function Playbook({
	toggleDrawer,
	count,
	name,
	goal,
}: {
	toggleDrawer: (state: boolean) => void;
	count: number;
	name: string;
	goal: string;
}) {
	const [isOpen, setIsOpen] = useState(false);

	const contacts = [
		{
			email: "rod.alvarenga@algolia.com",
			initials: "G",
			bgColor: "bg-green-500",
		},
		{
			email: "samantha.reynolds@linear.com",
			initials: "B",
			bgColor: "bg-blue-500",
		},
		{
			email: "jessica.reyes@monday.com",
			initials: "M",
			bgColor: "bg-gray-200",
		},
	];

	return (
		<div className="max-w-3xl mx-auto p-4 cursor-pointer">
			<div className="border rounded-lg overflow-hidden">
				<div className="w-full p-2 flex items-center justify-between">
					<div className="flex items-center gap-3">
						<div className="w-8 h-8 ml-1 bg-muted rounded-md flex items-center justify-center text-sm">
							<span className="text-sm font-medium">{count}</span>
						</div>
						<Trophy className="w-3 h-3 text-yellow-500 fill-yellow-500" />
						<span className="font-medium text-sm">{name}</span>
						<span className="text-sm text-muted-foreground">
							{goal}
						</span>
					</div>
					<Button
						variant="ghost"
						size="icon"
						onClick={() => setIsOpen(!isOpen)}
						aria-expanded={isOpen}
					>
						<ChevronDownIcon
							className={`h-4 w-4 transition-transform duration-200 ${
								isOpen ? "rotate-180" : ""
							}`}
						/>
						<span className="sr-only">Toggle contact list</span>
					</Button>
				</div>

				{isOpen && (
					<div className="divide-y">
						{contacts.map((contact) => (
							<div
								key={contact.email}
								className="flex items-center justify-between p-2 gap-4 border-t hover:bg-accent"
								onClick={() => toggleDrawer(true)}
							>
								<div className="flex items-center gap-2 min-w-0 ml-1">
									<Avatar
										className={`h-8 w-8 ${contact.bgColor}`}
									>
										<AvatarImage
											src="https://picsum.photos/200/200"
											alt="@shadcn"
										/>
									</Avatar>
									<span className="text-sm font-medium truncate">
										{contact.email}
									</span>
									<ChevronRightIcon className="h-4 w-4 text-muted-foreground flex-shrink-0" />
								</div>
								<div className="flex items-center gap-2 flex-shrink-0">
									<Button
										variant="outline"
										size="icon"
										className="h-8 w-9 rounded-md border shadow-none"
									>
										<CheckIcon className="h-4 w-16 text-green-500" />
									</Button>
									<Button
										variant="outline"
										size="icon"
										className="h-8 w-8 rounded-md border shadow-none"
									>
										<Cross2Icon className="h-4 w-4 text-red-500" />
									</Button>
									<Button
										variant="outline"
										size="sm"
										className="flex items-center gap-2 shadow-none"
									>
										<span>Enroll in Outreach</span>
										<ChevronDownIcon className="h-4 w-4" />
									</Button>
								</div>
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
}
