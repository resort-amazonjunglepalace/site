import "./style.css";

function PageTitle(props){
    return(
        <>
            <div className="page_section">
                <div className="page_title">{props.title}</div>
                <div className="page_description_1">
                    {props.description}
                </div>
            </div>
        </>
    );
}

export default PageTitle;