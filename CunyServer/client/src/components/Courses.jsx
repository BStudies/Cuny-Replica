import React, { Component } from 'react';
import Course from './Course'

class Courses extends Component{
    constructor(){
        super();
        this.state = {

        }
    }


    handleCoursesList = () => {
        return(this.props.courses.map((course) => {
            return (<Course course={course}/>)
        }))
    }

    render(){
        return(
            <div>
                <h3>Course:</h3>
                {this.handleCoursesList()}
            </div>
        )
    }
}


export default Courses;