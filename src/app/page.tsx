"use client";

import { ContactDrawer } from "@/components/ContactDrawer";
import { Playbook } from "@/components/Playbook";
import { useState } from "react";

export default function Home() {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const toggleDrawer = (state: boolean) => {
		setIsOpen(state);
	};

	return (
		<div>
			<Playbook
				toggleDrawer={toggleDrawer}
				count={41}
				name="Job switchers"
				goal="New pipeline"
			/>
			<Playbook
				toggleDrawer={toggleDrawer}
				count={32}
				name="Upcoming renewal with overages"
				goal="Renewal"
			/>
			<Playbook
				toggleDrawer={toggleDrawer}
				count={55}
				name="Seat expansion"
				goal="Expansion"
			/>

			{isOpen && (
				<div
					className="fixed inset-0 bg-black bg-opacity-50 z-40"
					onClick={() => toggleDrawer(false)}
				></div>
			)}

			<ContactDrawer isOpen={isOpen} />
		</div>
	);
}
