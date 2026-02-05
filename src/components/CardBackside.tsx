import {useNavigate} from 'react-router-dom';
import '../styles/CardBackside.css'

interface CardBacksideProps {
    headerText: string;
    subtext: string;
    url: string;
}
function CardBackside({headerText, subtext, url} : CardBacksideProps) {
    const navigate = useNavigate();

    return (
        <div style = {{
            width: '100%',
            height: '100%',
            backgroundColor: '#F9F9F9'
        }}>

            <div className = {"backsideContainer"}>
                <h1 className = {"backsideHeader"}>{headerText}</h1>
                <h2 className = {"backsideSubtext"}>
                    {subtext}
                </h2>
            </div>
            <button className = {"backsideButton"}
                onClick={() => navigate(url)}>
                Learn More
            </button>
        </div>
    )
}

export default CardBackside;