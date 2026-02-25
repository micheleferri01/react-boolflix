
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function Stars({vote}){
    const intVote = parseInt(vote);
    if (intVote === 0) return (
        <>
            <FontAwesomeIcon icon={faStar} style={{ color: "rgb(150, 150, 150)", }} />
            <FontAwesomeIcon icon={faStar} style={{ color: "rgb(150, 150, 150)", }} />
            <FontAwesomeIcon icon={faStar} style={{ color: "rgb(150, 150, 150)", }} />
            <FontAwesomeIcon icon={faStar} style={{ color: "rgb(150, 150, 150)", }} />
            <FontAwesomeIcon icon={faStar} style={{ color: "rgb(150, 150, 150)", }} />
        </>
    );
    if (intVote > 0 && intVote <= 2) return (<>
        <FontAwesomeIcon icon={faStar} style={{ color: "rgb(255, 212, 59)", }} />
        <FontAwesomeIcon icon={faStar} style={{ color: "rgb(150, 150, 150)", }} />
        <FontAwesomeIcon icon={faStar} style={{ color: "rgb(150, 150, 150)", }} />
        <FontAwesomeIcon icon={faStar} style={{ color: "rgb(150, 150, 150)", }} />
        <FontAwesomeIcon icon={faStar} style={{ color: "rgb(150, 150, 150)", }} />
    </>);
    if (intVote > 2 && intVote <= 4) return (<>
        <FontAwesomeIcon icon={faStar} style={{ color: "rgb(255, 212, 59)", }} />
        <FontAwesomeIcon icon={faStar} style={{ color: "rgb(255, 212, 59)", }} />
        <FontAwesomeIcon icon={faStar} style={{ color: "rgb(150, 150, 150)", }} />
        <FontAwesomeIcon icon={faStar} style={{ color: "rgb(150, 150, 150)", }} />
        <FontAwesomeIcon icon={faStar} style={{ color: "rgb(150, 150, 150)", }} />
    </>);
    if (intVote > 4 && intVote <= 6) return (<>
        <FontAwesomeIcon icon={faStar} style={{ color: "rgb(255, 212, 59)", }} />
        <FontAwesomeIcon icon={faStar} style={{ color: "rgb(255, 212, 59)", }} />
        <FontAwesomeIcon icon={faStar} style={{ color: "rgb(255, 212, 59)", }} />
        <FontAwesomeIcon icon={faStar} style={{ color: "rgb(150, 150, 150)", }} />
        <FontAwesomeIcon icon={faStar} style={{ color: "rgb(150, 150, 150)", }} />
    </>);
    if (intVote > 6 && intVote <= 8) return (<>
        <FontAwesomeIcon icon={faStar} style={{ color: "rgb(255, 212, 59)", }} />
        <FontAwesomeIcon icon={faStar} style={{ color: "rgb(255, 212, 59)", }} />
        <FontAwesomeIcon icon={faStar} style={{ color: "rgb(255, 212, 59)", }} />
        <FontAwesomeIcon icon={faStar} style={{ color: "rgb(255, 212, 59)", }} />
        <FontAwesomeIcon icon={faStar} style={{ color: "rgb(150, 150, 150)", }} />
    </>);
    if (intVote > 8 && intVote <= 10) return (<>
        <FontAwesomeIcon icon={faStar} style={{ color: "rgb(255, 212, 59)", }} />
        <FontAwesomeIcon icon={faStar} style={{ color: "rgb(255, 212, 59)", }} />
        <FontAwesomeIcon icon={faStar} style={{ color: "rgb(255, 212, 59)", }} />
        <FontAwesomeIcon icon={faStar} style={{ color: "rgb(255, 212, 59)", }} />
        <FontAwesomeIcon icon={faStar} style={{ color: "rgb(255, 212, 59)", }} />
    </>);

}