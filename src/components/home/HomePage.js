/**
 * Created by sravankumarganji on 9/17/17.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import * as userActions from '../../actions/userActions'
import {bindActionCreators} from 'redux'

class HomePage extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading :true,
            formData: {
                first_name: '',
                last_name: ''
            }
        }
        this.handleInputChange=this.handleInputChange.bind(this)
        this.handleSubmit= this.handleSubmit.bind(this)
    }
    componentDidMount(){
        const {dispatch} = this.props
        dispatch(userActions.loadUsers());
    }
    handleInputChange(e) {
        // var formData ={}
        // const target = event.target;
        // const value = target.type === 'checkbox' ? target.checked : target.value;
        // const name = target.name;
        // formData[name] = value
        // this.setState({
        //     formData
        // });
        var oldState = this.state.formData;
        var newState = { [e.target.name]: e.target.value };

        // I have to assign/join because you've put the text state in a parent object.
        this.setState({ formData: Object.assign(oldState, newState) });
        console.log(this.state.formData.first_name)
        console.log(this.state.formData.last_name)
    }
    handleSubmit(){
          this.props.actions.createUser(this.state.formData)
    }
    render() {
        const { userReducer: { data } } = this.props;
        const listItems = data && data.map((item) =>
            <li key={item.id}>{item.first_name}</li>
        );
        // if(!this.props.usersReducer) return <p>Loading ....</p>

        return (
            <div>
                {console.log("data ===== > ", data && data)}
                {listItems}
                firstName :<input type="text" name="first_name" onChange={this.handleInputChange}/>
                lastName : <input type="text" name="last_name" onChange={this.handleInputChange}/>
                <button onClick={this.handleSubmit}>create a new user</button>
            </div>
        );
    }
}

HomePage.propTypes = {};
HomePage.defaultProps = {};

const mapStateToProps = (state, props) =>
    ({
        userReducer : state.userReducer
    })
function mapDispatchToProps(dispatch) {
    return {
      actions : bindActionCreators(userActions,dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(HomePage);




