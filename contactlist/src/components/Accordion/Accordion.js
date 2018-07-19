import React, {Component} from 'react';

class Accordion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            accordionLabel: this.props.accordionOpen,
            setDisplay: 'd-block',
            toggleIcons: 'keyboard_arrow_up',
        };
        this.ClickAccordion = this.ClickAccordion.bind(this);
    }
    ClickAccordion = (e) => {
        e.preventDefault();
        const accordionToggle = document.getElementById('accordionToggle');
        if (accordionToggle.style.maxHeight) {
            this.setState({
                accordionLabel: this.props.accordionOpen,
                setDisplay: 'd-block',
                toggleIcons: 'keyboard_arrow_up'
            });
            accordionToggle.style.maxHeight = null;
        } else {
            this.setState({
                accordionLabel: this.props.accordionClosed,
                setDisplay: 'd-none',
                toggleIcons: 'keyboard_arrow_down'
            });
            accordionToggle.style.maxHeight = accordionToggle.scrollHeight + 'px';
        }
    };
    render () {
        const props = this.props;
        let component;
            component = (
                <div className="col-12">
                    <div className="row AccordionLabel" onClick={this.ClickAccordion}>
                    <i className="material-icons col-3">{this.state.toggleIcons}</i>
                    <span
                        className={'col-9 text-right' + this.state.toggleClass}  
                         role="presentation">
                        {this.state.accordionLabel}
                    </span>
                    </div>    
                    <div className={'accordionToggle ' + this.state.setDisplay} id="accordionToggle">
                        <div className="text-left">{props.children}</div>
                    </div>
                </div>
            );
        return (
           <div className="row accordion">
                {component}
            </div>    
        );
    }
}
export default Accordion;
