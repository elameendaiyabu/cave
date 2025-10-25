"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";
import { useState } from "react";

export default function LocaleSwitcher() {
	const [open, setOpen] = useState(false);

	return (
		<div className="">
			<motion.div animate={open ? "open" : "closed"} className="relative">
				<button
					onClick={() => setOpen((pv) => !pv)}
					className="flex items-center gap-2 px-3 py-2 rounded-md text-yellow-200 transition-all duration-150 ease-linear md:hover:text-yellow-200 "
				>
					<span className="font-medium text-sm">Languages</span>
					<motion.span variants={iconVariants}>
						<FiChevronDown />
					</motion.span>
				</button>

				<motion.ul
					initial={wrapperVariants.closed}
					variants={wrapperVariants}
					style={{ originY: "top", translateX: "-50%" }}
					className="flex flex-col gap-2 p-2 rounded-lg bg-yellow-50 shadow-xl absolute top-[120%] left-[50%] w-48 overflow-hidden"
				>
					<Option setOpen={setOpen} text="English" locale="en" />
					<Option setOpen={setOpen} text="Hausa" locale="ha" />
					<Option setOpen={setOpen} text="Yoruba" locale="yo" />
					<Option setOpen={setOpen} text="Igbo" locale="ig" />
				</motion.ul>
			</motion.div>
		</div>
	);
}
const Option = ({
	text,
	setOpen,
	locale,
}: {
	text: any;
	setOpen: any;
	locale: any;
}) => {
	const pathname = usePathname();
	return (
		<motion.li
			variants={itemVariants}
			onClick={() => setOpen(false)}
			className="flex items-center gap-2 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-yellow-100 text-slate-700 hover:text-indigo-500 transition-colors cursor-pointer"
		>
			<Link href={`/${locale}${pathname.replace(/^\/[a-z]{2}/, "")}`}>
				{text}
			</Link>
		</motion.li>
	);
};

const wrapperVariants = {
	open: {
		scaleY: 1,
		transition: {
			when: "beforeChildren",
			staggerChildren: 0.1,
		},
	},
	closed: {
		scaleY: 0,
		transition: {
			when: "afterChildren",
			staggerChildren: 0.1,
		},
	},
};

const iconVariants = {
	open: { rotate: 180 },
	closed: { rotate: 0 },
};

const itemVariants = {
	open: {
		opacity: 1,
		y: 0,
		transition: {
			when: "beforeChildren",
		},
	},
	closed: {
		opacity: 0,
		y: -15,
		transition: {
			when: "afterChildren",
		},
	},
};
