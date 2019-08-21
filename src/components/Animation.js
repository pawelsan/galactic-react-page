import React, { Component } from 'react';

class Animation extends Component {
    state = {
        posX: 0,
        posY: 0
    }

    componentDidMount() {
        document.addEventListener('mousemove', (event) => this.handleNewPosition(event))
    }

    componentWillUnmount() {
        document.addEventListener('mousemove', (event) => this.handleNewPosition(event))
    }

    handleNewPosition = (event) => {
        const { clientX, clientY } = event;
        const { ratioX, ratioY } = this.props
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        const posX = clientX - centerX;
        const posY = clientY - centerY;

        this.setState({
            posX: posX * -ratioX,
            posY: posY * -ratioY
        })
    }

    render() {
        console.log(this.state)
        const { src } = this.props;
        return (
            <div
                className='moon-nest'
                style={{
                    transform: `translate(${this.state.posX}px, ${this.state.posY}px)`
                }}>
                <img className='moon'

                    src={src}

                    alt=''

                />
            </div>
        );
    }
}

export default Animation;