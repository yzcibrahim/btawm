import React, { Component } from 'react';

class Words extends Component {
    render() {

        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>word</th>
                            <th>meaning</th>
                            <th>lng Id</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.words.map((w)=>{
                            return <tr key={w.id}>
                                <td>{w.id}</td>
                                <td>{w.word}</td>
                                <td>{w.meaning}</td>
                                <td>{w.lngid}</td>
                            </tr>
                        })
                    }
                </tbody>
                </table>
            </div>
        );
    }
}

export default Words;