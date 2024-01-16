import ThemeToggle from "./theme-toggle";
import ShowHideBreeds from "./show-hide-breeds";

export default function Header() {
  return (
    <div className="relative h-[120px] md:h-[80px] border-0 border-b dark:border-b-muted flex flex-row justify-between items-center px-4">
      <ShowHideBreeds />
      <div className="absolute right-2 top-2 md:relative md:right-0 md:top-0">
        <ThemeToggle />
      </div>
    </div>
  );
}
