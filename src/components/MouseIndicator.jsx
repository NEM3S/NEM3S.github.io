export default function MouseIndicator(){
    return(
        <div className="mouse-indicator [@media(max-height:750px)]:hidden">
            <div className="arrow left"></div>

            <div className="mouse">
                <div className="left-click"></div>
                <div className="wheel"></div>
                <div className="right-click"></div>
            </div>

            <div className="arrow right"></div>
        </div>
    )
}