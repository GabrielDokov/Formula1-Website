import ScrollToTop from "react-scroll-up";
import './Scroll.css'

export default function ScrollUp(){
    return(
        <ScrollToTop showUnder={150}>
            <div className="scroll">
                <i className="fa fa-chevron-up"></i>
            </div>
        </ScrollToTop>
    );
}