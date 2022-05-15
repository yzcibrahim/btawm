import React, { Component } from 'react';

class LangBar extends Component {
    render() {
        return (
            <div>
                {
                this.props.langs.map((lng)=>{
                    return <div key={lng.id}>{lng.name}</div>
                })
    }
            </div>
        );
    }
}

export default LangBar;