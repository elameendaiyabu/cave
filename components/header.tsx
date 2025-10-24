import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { RiOrganizationChart } from "react-icons/ri";

import { containerVariants, itemVariants } from "@/lib/animation-variants";

export default function Header() {
	return (
		<motion.div
			variants={containerVariants}
			initial="hidden"
			animate="visible"
			className="fixed flex right-0 left-0 justify-between top-0 z-[50] m-4"
		>
			<motion.div variants={itemVariants}>
				<Button
					size="sm"
					variant="secondary"
					className="text-yellow-50 transition-all duration-150 ease-linear md:hover:text-yellow-200"
				>
					<RiOrganizationChart className="md:mr-1.5" />
					<span className="hidden md:inline">CAVE ERP + Credibility</span>
				</Button>
			</motion.div>
		</motion.div>
	);
}
