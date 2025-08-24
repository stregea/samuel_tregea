import styles from "@/components/utils/Icons/Icons.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";

type HamburgerMenuProps = {
    controls: string,
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
};

export default function HamburgerMenu({controls, onClick}: HamburgerMenuProps) {
    return (
        <IconButton
            aria-label={"open navbar menu"}
            aria-controls={controls}
            aria-haspopup={"true"}
            onClick={onClick}
        >
            <MenuIcon data-testid={"hamburgerMenu-icon"} className={styles.icon}/>
        </IconButton>
    );
}