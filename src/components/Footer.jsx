export default class Footer extends React.Component {
    handleBackClick = event => {
        event.preventDefault();
        this.props.passClick( -1 );
    };
    handleNextClick = event => {
        event.preventDefault();
        this.props.passClick( 1 );
    };
    render() {
        return (
            <footer>
                <nav>
                    <Button direction="backward" onClick={ this.handleBackClick } />
                    <Button direction="forward" onClick={ this.handleNextClick } />
                </nav>
            </footer>
        )
    }
}