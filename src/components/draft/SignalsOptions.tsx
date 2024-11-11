"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
	ChevronDown,
	ChevronRight,
	MessageSquare,
	User,
	X,
} from "lucide-react";

export function SignalsOptions() {
	return (
		<div className="w-full max-w-3xl space-y-4">
			<div className="space-y-2">
				<h2 className="text-xl font-semibold">Conditions</h2>
				<p className="text-muted-foreground">
					When a User meets the following conditions and is eligible
					for the New Pipeline goal, it will enter the workflow.
				</p>
			</div>

			<Card className="p-6">
				<div className="space-y-4">
					<div className="flex items-center justify-between">
						<div className="flex items-center gap-2">
							<span className="font-medium">Users</span>
							<span className="text-muted-foreground">
								where...
							</span>
						</div>
						<Button
							variant="ghost"
							className="bg-purple-50 hover:bg-purple-100 text-purple-700"
						>
							<span>~205 ({"<"}1%) matching users</span>
							<ChevronRight className="ml-2 h-4 w-4" />
						</Button>
					</div>

					<div className="space-y-2">
						<div className="inline-flex items-center gap-2 rounded-md bg-gray-50 p-2 pr-3">
							<MessageSquare className="h-4 w-4 text-gray-500" />
							<span className="font-medium">
								Channels Created
							</span>
							<ChevronRight className="h-4 w-4 text-gray-500" />
							<span>4</span>
							<Button
								variant="ghost"
								size="sm"
								className="h-4 w-4 p-0 hover:bg-transparent"
							>
								<X className="h-4 w-4" />
							</Button>
						</div>

						<div className="flex items-center gap-2">
							<Badge variant="secondary" className="rounded-md">
								AND
							</Badge>
							<div className="inline-flex items-center gap-2 rounded-md bg-gray-50 p-2 pr-3">
								<User className="h-4 w-4 text-gray-500" />
								<span className="font-medium">User</span>
								<span className="text-gray-500">is</span>
								<div className="flex items-center gap-1">
									<span className="inline-block h-3 w-3 rounded-full bg-purple-500" />
									<span>Is Job Switcher</span>
								</div>
								<Button
									variant="ghost"
									size="sm"
									className="h-4 w-4 p-0 hover:bg-transparent"
								>
									<X className="h-4 w-4" />
								</Button>
							</div>
						</div>
					</div>

					<Button variant="outline" size="sm" className="gap-2">
						<span>+ Filter</span>
						<ChevronDown className="h-4 w-4" />
					</Button>
				</div>
			</Card>
		</div>
	);
}
