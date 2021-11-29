import React from 'react';

export class MyComponent extends React.Component {

    myRef

    // @ts-ignore
    constructor(props) {
        super(props)
        this.myRef = React.createRef()
    }
    render() {
        // @ts-ignore
        return <div ref={this.myRef}>qwqw</div>
    }

    componentDidMount() {
        console.log(this.myRef.current)
    }

}
