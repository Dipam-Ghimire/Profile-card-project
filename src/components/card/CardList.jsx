import CardItem from "./CardItem";
import classes from "./CardList.module.css";

export default function CardList() {
    return (
        <div className={classes.listContainer}>
            <CardItem name="John Doe" role="Frontend Developer" />
            <CardItem name="Jane Smith" role="Backend Developer" />
            <CardItem name="Alex Johnson" role="UI/UX Designer" />
            <CardItem name="Sarah Williams" role="Full Stack Developer" />
        </div>
    );
}