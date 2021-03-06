import React, { Component } from 'react';
import { View, StyleSheet, PanResponder, Animated, Dimensions, Image } from 'react-native';

const { height, width } = Dimensions.get("window");

export default class Fruit extends Component {
    constructor(props) {
        super(props);
        const position = new Animated.ValueXY();
        const panResponder = PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: (event, gesture) => {
                position.setValue({ x: gesture.dx, y: gesture.dy });
            },
            onPanResponderRelease: (e, gesture) => {
                // console.log(gesture)
                if (!this.state.firstSwipe || (Math.abs(gesture.dx) > 20 || Math.abs(gesture.dy) > 40)) {
                    Animated.decay(position, {
                        toValue: { x: gesture.dx * 500, y: gesture.dy * 500 },
                        velocity: { x: gesture.vx, y: gesture.vy },
                        deceleration: 0.99999999999
                    }).start();
                    this.state.firstSwipe = false;
                    this.props.positionChange(gesture.dx,gesture.dy,this.state.value)
                } else {
                    Animated.spring(position, {
                        toValue: { x: 0, y: 0 },
                        friction: 5
                    }).start();
                }
            },
            onPanResponderGrant: (e, gesture) => {
                this.state.position.setOffset(this.state.position.__getValue());
                this.state.position.setValue({ x: 0, y: 0 });
            }
        });

        this.state = {
            panResponder,
            position,
            opacity: 100,
            firstSwipe: true,
            sprite: require('../assets/Monster_assets/Skins/1.png'),
            value:true
        };
    }
    
    render() {
        let handles = this.state.panResponder.panHandlers;


        return (
            <View style={styles.container}>
                {/* <Animated.View
                    style={[styles.ball, this.state.position.getLayout(), { opacity: this.state.opacity }]}
                    {...handles}
                /> */}
                <Animated.Image
                    source={require('../assets/Candy_assets/PNG/ico/3.png')}
                    style={[styles.ball, this.state.position.getLayout(), { opacity: this.state.opacity }]}
                    {...handles}
                />
                
                
            </View>
        );
    }
}

export class Bad_Fruit extends Component {
    constructor(props) {
        super(props);
        const position = new Animated.ValueXY();
        const panResponder = PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: (event, gesture) => {
                position.setValue({ x: gesture.dx, y: gesture.dy });
            },
            onPanResponderRelease: (e, gesture) => {
                // console.log(gesture)
                if (!this.state.firstSwipe || (Math.abs(gesture.dx) > 20 || Math.abs(gesture.dy) > 40)) {
                    Animated.decay(position, {
                        toValue: { x: gesture.dx * 500, y: gesture.dy * 500 },
                        velocity: { x: gesture.vx, y: gesture.vy },
                        deceleration: 0.99999999999
                    }).start();
                    this.state.firstSwipe = false;
                    this.props.positionChange(gesture.dx,gesture.dy,this.state.value)
                } else {
                    Animated.spring(position, {
                        toValue: { x: 0, y: 0 },
                        friction: 5
                    }).start();
                }
            },
            onPanResponderGrant: (e, gesture) => {
                this.state.position.setOffset(this.state.position.__getValue());
                this.state.position.setValue({ x: 0, y: 0 });
            }
        });

        this.state = {
            panResponder,
            position,
            opacity: 100,
            firstSwipe: true,
            value:false
        };
    }
    render() {
        let handles = this.state.panResponder.panHandlers;
        return (
            <View style={styles.container}>
                {/* <Animated.View
                    style={[styles.ball, this.state.position.getLayout(), { opacity: this.state.opacity }]}
                    {...handles}
                /> */}
                <Animated.Image
                    source={require('../assets/Candy_assets/PNG/ico/12.png')}
                    style={[styles.ball, this.state.position.getLayout(), { opacity: this.state.opacity }]}
                    {...handles}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    ball: {
        height: 80,
        width: 80,
        borderRadius: 40,
        borderWidth: 40,
    },
    
    container: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: '80%',
        justifyContent: 'center',
        alignItems: 'center'
    }
});


// export default class Fruit extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             source: 'http://pixdaus.com/files/items/pics/7/88/310788_b52a1fa4469034b12ef4bb7c8eff11c7_large.jpg'
//         }
//         this.showPos.bind(this)
//     }


//     showPos() {
//         console.log(this.fruit.offsetX)
//     }

//     render() {
//         console.log('imafruit')
//         return (
//             <Draggable
//                 ref={ref => {
//                     this.fruit = ref;
//                 }}
//                 renderSize={56}
//                 renderColor="black"
//                 offsetX={0}
//                 offsetY={0}
//                 renderText="A"
//                 pressDrag={() => alert('touched!!')}
//                 pressDragRelease={this.showPos}
//             />
//         );
//     }
// }
