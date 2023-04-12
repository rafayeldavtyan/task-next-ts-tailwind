import Image from "next/image";

export default function Header() {
    return (
        <div className="flex flex-col min-h-fh justify-between">
            <div className="pt-30 pl-30">
                <Image
                    src="/images/anonymous-logo.svg"
                    alt="Anonymous Logo"
                    className="dark:invert"
                    width={100}
                    height={24}
                    priority
                />
            </div>
            <div className="">
                <Image
                    src="/images/anonymous-background.png"
                    alt="Anonymous Logo"
                    className="w-full h-auto"
                    width={1440}
                    height={450}
                    priority
                />
            </div>
        </div>
    )
}