import Link from "next/link";
import { ChangeEvent } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa6";
import { Input } from "@/components/ui/input";
import { FaArrowRightLong } from "react-icons/fa6";
import { EnhancedButton } from "@/components/ui/enhanced-btn";
import { containerVariants, itemVariants } from "@/lib/animation-variants";
import { useTranslations } from "next-intl";

interface FormProps {
	name: string;
	email: string;
	location: string;
	handleNameChange: (e: ChangeEvent<HTMLInputElement>) => void;
	handleEmailChange: (e: ChangeEvent<HTMLInputElement>) => void;
	handleLocationChange: (e: ChangeEvent<HTMLInputElement>) => void;
	handleSubmit: () => void;
	loading: boolean;
}

export default function Form({
	name,
	email,
	location,
	handleNameChange,
	handleLocationChange,
	handleEmailChange,
	handleSubmit,
	loading,
}: FormProps) {
	const t = useTranslations("HomePage");

	return (
		<motion.div
			className="mt-6 flex w-full max-w-[24rem] flex-col gap-2"
			variants={containerVariants}
			initial="hidden"
			animate="visible"
		>
			<motion.div variants={itemVariants}>
				<Input
					type="text"
					placeholder={t("name")}
					value={name}
					onChange={handleNameChange}
				/>
			</motion.div>
			<motion.div variants={itemVariants}>
				<Input
					type="location"
					placeholder={t("location")}
					value={location}
					onChange={handleLocationChange}
				/>
			</motion.div>
			<motion.div variants={itemVariants}>
				<Input
					type="email"
					placeholder={t("email")}
					value={email}
					onChange={handleEmailChange}
				/>
			</motion.div>
			<motion.div variants={itemVariants}>
				<EnhancedButton
					variant="expandIcon"
					Icon={FaArrowRightLong}
					onClick={handleSubmit}
					iconPlacement="right"
					className="mt-2 w-full"
					disabled={loading}
				>
					{loading ? "Loading..." : <div>{t("button")}</div>}
				</EnhancedButton>
			</motion.div>
			<motion.div
				variants={itemVariants}
				className="mt-4 flex w-full items-center justify-center gap-1 text-muted-foreground"
			>
				<p>{t("queries")}</p>
				<Link
					href="https://wa.me/2349017040346"
					rel="noopener noreferrer"
					target="_blank"
				>
					<FaWhatsapp className="ml-0.5 h-5 w-5 transition-all duration-200 ease-linear hover:text-yellow-200" />
				</Link>
			</motion.div>
		</motion.div>
	);
}
