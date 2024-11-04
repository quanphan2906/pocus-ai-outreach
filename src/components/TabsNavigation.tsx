import { cn } from "@/lib/utils";

type Tab = {
	id: string;
	label: string;
};

interface TabsNavigationProps {
	activeTab: string;
	setActiveTab: (tabId: string) => void;
}

const tabData: Tab[] = [
	{ id: "overview", label: "Overview" },
	{ id: "message", label: "Message" },
];

export function TabsNavigation({
	activeTab,
	setActiveTab,
}: TabsNavigationProps) {
	return (
		<div className="border-b border-gray-200">
			<nav className="-mb-px flex space-x-8" aria-label="Tabs">
				{tabData.map((tab) => (
					<button
						key={tab.id}
						onClick={() => setActiveTab(tab.id)}
						className={cn(
							"whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ml-4",
							activeTab === tab.id
								? "border-secondary text-secondary"
								: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
						)}
						aria-current={activeTab === tab.id ? "page" : undefined}
					>
						{tab.label}
					</button>
				))}
			</nav>
		</div>
	);
}
