import CardItem from "./CardItem";
import classes from "./CardList.module.css";
import something from '../../assets/images/images.jpg';

export default function CardList() {
    return (
        <div className={classes.listContainer}>
            <CardItem name="John Doe" role="Frontend Developer" image={something} email="john@example.com" location="Kathmandu, Nepal"/>
            <CardItem name="Jane Smith" role="Backend Developer" image={something} email="jane@example.com" location="Pokhara, Nepal"/>
            <CardItem name="Alex Johnson" role="UI/UX Designer" image={something} email="alex@example.com" location="Biratnagar, Nepal"/>
            <CardItem name="Sarah Williams" role="Full Stack Developer" image={something} email="sarah@example.com" location="Lalitpur, Nepal"/>
        </div>
    );
}