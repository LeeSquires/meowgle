import ThemeToggle from "./theme-toggle";

export default function Header() {
    return (
        <div className="h-[80px] border border-b-1 dark:border-b-google-grey flex flex-row justify-end items-center px-4">
            <ThemeToggle />
        </div>
    )
}