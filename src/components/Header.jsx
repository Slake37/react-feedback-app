import PropTypes from 'prop-types'


function Header({text,bgColor,textColor}) {
    const headerSyles={
        backgroundColor: bgColor, 
        color: textColor
    }

    return (
        <header style={headerSyles}>
            <div className="container">
                <h2>{text}</h2>
            </div>
        </header>
    )
}


Header.defaultProps={
    text:'Feedback UI',
    bgColor:'rgba(0,0,0,0.4)',
    textColor:'#ff6a95',
}

Header.protoTypes={
    text:PropTypes.string,
}
export default Header
