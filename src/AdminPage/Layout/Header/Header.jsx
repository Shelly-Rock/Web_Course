import "./Header.css";
export default function HeaderAdmin(){
    const userImgAdmin  = "";
    return(
        <>  
            <div className ="container-headerAdmin">
                <div className ="headerAdmin-left">
                    <h1>HIENLTH</h1>
                </div>
                <div className ="headerAdmin-right">
                    <div className  ="headerAdmin-right__iconRing">
                        <i className="bi bi-bell"></i>
                    </div>
                    <div className  ="headerAdmin-right__email">
                        <i class="bi bi-envelope-fill"></i>
                    </div>
                   <div className="headerAdmin-right__ImageAdmin">
                        {!userImgAdmin ? (
                            <i className="bi bi-person-circle"></i>
                        ) : (
                            <img src={userImgAdmin} alt="Admin Avatar" />
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}