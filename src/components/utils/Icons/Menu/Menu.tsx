import styles from "@/components/utils/Icons/Icons.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";

type MenuProps = {
    controls: string,
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
};

/**
 * Renders a hamburger menu icon button for mobile navigation.
 *
 * @component
 * @example
 * <Menu controls={"menu-appbar"} onClick={handleMenuOpen} />
 *
 * @param controls - The id of the menu element that this button controls.
 * @param onClick - Optional click handler for the button.
 */
export default function Menu({controls, onClick}: MenuProps) {
    return (
        <IconButton
            aria-label={"open navbar menu"}
            aria-controls={controls}
            aria-haspopup={"true"}
            onClick={onClick}
        >
            <MenuIcon data-testid={"menu-icon"} className={styles.icon}/>
        </IconButton>
    );
}