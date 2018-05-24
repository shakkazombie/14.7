var Contact = React.createClass({
    propTypes: {
        item: React.PropTypes.object.isRequired,
    },

    render: function() {
        return ( <
            div className = {
                'contactItem'
            } >
            <
            img className = {
                'contactImage'
            }
            src = {
                'https://cdn2.iconfinder.com/data/icons/round-varieties/60/Rounded_-_High_Ultra_Colour10_-_Circuit_Board-256.png'
            }
            /> <
            p className = {
                'contactLabel'
            } >
            Imię: {
                this.props.item.firstName
            } <
            /p> <
            p className = {
                'contactLabel'
            } >
            Nazwisko: {
                this.props.item.firstName
            } <
            /p> <
            a className = {
                'contactEmail'
            }
            href = {
                'mailto:' + this.props.item.email
            } > {
                this.props.item.email
            } <
            /a> < /
            div >
        )
    },
});