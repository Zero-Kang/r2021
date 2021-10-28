import Nav from "./Nav";

const PageWrapper = ({children}) => {
    return (
        <div id="page-content-wrapper">
            <Nav></Nav>
            {children}
        </div>
    )
}

export default PageWrapper