import ThemeToggle from "./theme-toggle";
import ShowHideBreeds from "./show-hide-breeds";

export default function Header() {

    return (
        <div className="h-[80px] border-0 border-b dark:border-b-muted flex flex-row justify-between items-center px-4">
            <ShowHideBreeds />
            <ThemeToggle />
        </div>
    )
}